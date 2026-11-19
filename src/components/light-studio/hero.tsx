import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

/*
 * Scroll-scrubbed hero film with cursor parallax.
 *
 * - The hero is a tall wrapper with a sticky, full-screen stage inside. While the stage is
 *   pinned, scroll position (not playback) drives video.currentTime: scrolling down walks
 *   forward through the clip, scrolling up rewinds it. The frame also pushes in slightly.
 * - On devices with a fine pointer, the cursor shifts the film a few pixels and moves a soft
 *   gold "spotlight" glow, so the scene responds to the mouse as well as to scroll.
 * - The poster still sits underneath; the video only fades in after a test seek proves this
 *   browser can scrub the file. Save-Data users keep the still image.
 * - Reduced motion: the film still follows scroll (it only moves when the visitor scrolls),
 *   but the push-in zoom, cursor drift and spotlight are switched off.
 */

// Bump FILM_VERSION whenever the clip files are replaced so browsers don't serve a cached copy.
const FILM_VERSION = "2";
const VIDEO_DESKTOP = `/video/hero-desktop.mp4?v=${FILM_VERSION}`;
const VIDEO_MOBILE = `/video/hero-mobile.mp4?v=${FILM_VERSION}`; // 9:16 centre crop
const POSTER = `/video/hero-poster.jpg?v=${FILM_VERSION}`;

const FILM = {
  span: 2.2, // extra scroll the clip takes, in viewport heights. Higher = slower film
  zoom: 1.04, // extra push-in by the end of the scrub (the clip already dollies in)
  chase: 0.16, // how quickly the frame catches up with scroll (0–1)
  drift: 18, // max cursor parallax shift in px
  ease: 0.08, // cursor smoothing (0–1)
};

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

export function Hero() {
  const wrapRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const media = mediaRef.current;
    const video = videoRef.current;
    if (!wrap || !media || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const lowData = !!conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? "");
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let duration = 0;
    let live = false;
    let shown = 0;
    let visible = true;
    let raf = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, gx: 50, gy: 40, tgx: 50, tgy: 40 };

    /* ---------- Film loading: prove the file can seek before showing it ---------- */
    let settled = false;
    let triedBlob = false;
    let blobUrl: string | null = null;

    const goLive = () => {
      if (settled) return;
      settled = true;
      live = true;
      duration = video.duration;
      video.currentTime = 0;
      video.style.opacity = "1";
    };

    const fail = () => {
      if (settled) return;
      settled = true;
      video.removeAttribute("src");
      video.load();
    };

    // Hosts that ignore HTTP Range requests make streamed files unseekable; a blob always seeks.
    const retryAsBlob = () => {
      if (settled) return;
      if (triedBlob) return fail();
      triedBlob = true;
      fetch(video.currentSrc || video.src)
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.blob();
        })
        .then((blob) => {
          if (settled) return;
          blobUrl = URL.createObjectURL(blob);
          video.src = blobUrl;
          video.load();
        })
        .catch(fail);
    };

    const probe = () => {
      if (settled || video.readyState < 2 || !isFinite(video.duration) || !video.duration) return;
      const at = Math.min(0.3, video.duration * 0.1);
      const onSeeked = () => {
        video.removeEventListener("seeked", onSeeked);
        if (Math.abs(video.currentTime - at) < 0.2) goLive();
        else retryAsBlob();
      };
      video.addEventListener("seeked", onSeeked);
      try {
        video.currentTime = at;
      } catch {
        retryAsBlob();
      }
    };

    if (!lowData) {
      const narrow = window.matchMedia("(max-width: 768px)").matches;
      video.addEventListener("loadeddata", probe);
      video.addEventListener("error", fail);
      video.src = narrow ? VIDEO_MOBILE : VIDEO_DESKTOP;
      video.load();
    }

    /* ---------- Cursor parallax + spotlight ---------- */
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouse.tx = (e.clientX / w) * 2 - 1;
      mouse.ty = (e.clientY / h) * 2 - 1;
      mouse.tgx = (e.clientX / w) * 100;
      mouse.tgy = (e.clientY / h) * 100;
    };
    const onLeave = () => {
      mouse.tx = 0;
      mouse.ty = 0;
    };
    if (finePointer && !reduced) {
      wrap.addEventListener("pointermove", onPointer);
      wrap.addEventListener("pointerleave", onLeave);
    }

    /* ---------- Frame loop: scroll → film time, cursor → drift ---------- */
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;

      const rect = wrap.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? clamp(-rect.top / travel) : 0;

      if (live && duration) {
        if (!video.paused) video.pause();
        const target = p * Math.max(0, duration - 0.05);
        shown += (target - shown) * FILM.chase;
        if (!video.seeking && Math.abs(shown - video.currentTime) > 0.01) {
          try {
            video.currentTime = shown;
          } catch {
            /* seek refused mid-load: next frame retries */
          }
        }
      }

      mouse.x += (mouse.tx - mouse.x) * FILM.ease;
      mouse.y += (mouse.ty - mouse.y) * FILM.ease;
      mouse.gx += (mouse.tgx - mouse.gx) * FILM.ease;
      mouse.gy += (mouse.tgy - mouse.gy) * FILM.ease;

      const scale = reduced ? 1 : 1 + (FILM.zoom - 1) * p;
      const dx = -mouse.x * FILM.drift;
      const dy = -mouse.y * FILM.drift;
      media.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;

      if (glowRef.current) {
        glowRef.current.style.setProperty("--gx", `${mouse.gx.toFixed(2)}%`);
        glowRef.current.style.setProperty("--gy", `${mouse.gy.toFixed(2)}%`);
      }
      if (contentRef.current) {
        const fade = clamp(1 - p * 1.8);
        contentRef.current.style.opacity = fade.toFixed(3);
        contentRef.current.style.transform = `translate3d(${(mouse.x * -6).toFixed(2)}px, ${(-p * 90).toFixed(2)}px, 0)`;
        contentRef.current.style.pointerEvents = fade < 0.1 ? "none" : "";
      }
      if (veilRef.current) veilRef.current.style.opacity = clamp(1 - p * 1.4, 0.25).toFixed(3);
      if (barRef.current) barRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      if (hintRef.current) hintRef.current.style.opacity = clamp(1 - p * 6).toFixed(3);
    };
    raf = requestAnimationFrame(tick);

    // Only animate while the hero is on screen
    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
    });
    io.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      wrap.removeEventListener("pointermove", onPointer);
      wrap.removeEventListener("pointerleave", onLeave);
      video.removeEventListener("loadeddata", probe);
      video.removeEventListener("error", fail);
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, []);

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative h-[320svh]"
      aria-label="Light Studio Raipur — premium lighting showroom"
    >
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        {/* Film + still, oversized so cursor drift never reveals an edge */}
        <div ref={mediaRef} className="absolute -inset-[4%] will-change-transform">
          <img
            src={POSTER}
            alt="Crystal chandelier glowing with warm light"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700"
            poster={POSTER}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            disablePictureInPicture
          />
        </div>

        {/* Readability gradients: strong behind the headline, easing off as it scrolls away */}
        <div ref={veilRef} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        </div>
        {/* Soft fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        {/* Cursor-following gold spotlight */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-soft-light motion-reduce:hidden"
          style={{
            background:
              "radial-gradient(520px circle at var(--gx, 50%) var(--gy, 40%), color-mix(in oklab, var(--gold) 55%, transparent), transparent 70%)",
          }}
        />

        <div
          ref={contentRef}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center will-change-transform"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-ink/40 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Lighting Showroom · Raipur
          </div>

          <h1 className="font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Illuminate Your World
            <span className="block gold-text">with Timeless Elegance</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            Discover a curated collection of chandeliers, pendant lights and decorative lighting —
            crafted to transform your home into a luminous expression of luxury.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-ink/30 px-8 py-4 text-sm font-semibold text-ivory backdrop-blur-sm transition-all hover:border-primary hover:bg-ink/50"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/30 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Scroll</span>
        </div>

        {/* Film progress */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-ivory/10">
          <div ref={barRef} className="h-full origin-left scale-x-0 bg-primary" />
        </div>
      </div>
    </section>
  );
}
