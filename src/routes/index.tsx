import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/light-studio/navbar";
import { Hero } from "@/components/light-studio/hero";
import { About } from "@/components/light-studio/about";
import { WhyChooseUs } from "@/components/light-studio/why-choose-us";
import { Catalogue } from "@/components/light-studio/catalogue";
import { Gallery } from "@/components/light-studio/gallery";
import { Promo } from "@/components/light-studio/promo";
import { Testimonials } from "@/components/light-studio/testimonials";
import { EnquirySection } from "@/components/light-studio/enquiry-section";
import { ShowroomVisit } from "@/components/light-studio/showroom-visit";
import { Faq } from "@/components/light-studio/faq";
import { FinalCta } from "@/components/light-studio/final-cta";
import { Footer } from "@/components/light-studio/footer";
import { WhatsAppButton } from "@/components/light-studio/whatsapp-button";
import { HERO_IMAGE } from "@/lib/light-studio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Light Studio Raipur — Premium Lighting Showroom" },
      {
        name: "description",
        content:
          "Light Studio Raipur — a premium lighting showroom offering chandeliers, pendant lights, ceiling lights, wall lights and decorative lighting. Explore our collections and visit our showroom.",
      },
      {
        property: "og:title",
        content: "Light Studio Raipur — Premium Lighting Showroom",
      },
      {
        property: "og:description",
        content:
          "Discover luxury chandeliers, pendant lights and decorative lighting at Light Studio Raipur. Explore our collections and visit our showroom.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Catalogue />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Promo />
        <Testimonials />
        <EnquirySection />
        <ShowroomVisit />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
