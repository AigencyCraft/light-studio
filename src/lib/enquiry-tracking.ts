// Form tracking helper for Light Studio Raipur enquiry form.
// Fires a CRM tracking event on submit. Fire-and-forget — never blocks UX.

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const TRACKING_ID = "tk_e181e933555b427b962c30669336b42f";
const LOCATION_ID = "hAUfEqsLYHU6jmWfZ9GU";
const PROJECT_ID = "1794646108292318410";
const PRODUCT_INTEREST_FIELD_ID = "JLmIxXMORmvdJDru3OCj";

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {});
};

const getTrackingSessionId = () => {
  try {
    const sid = document.cookie.match(/(?:^|;\s*)__vibe_sid=([0-9a-f-]{36})(?:;|$)/)?.[1];
    if (sid) return sid;
  } catch {
    // Cookie access can throw (e.g. sandboxed iframes); fall back to a fresh ID below.
  }
  return crypto.randomUUID();
};

export type EnquiryData = {
  name: string;
  phone: string;
  productInterest: string;
  message?: string;
};

export function trackEnquiry(data: EnquiryData) {
  const trackingPayload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId: "light-studio-enquiry",
    formData: {
      first_name: data.name,
      phone: data.phone,
      calendar_notes: data.message ?? "",
    },
    formLabels: {
      first_name: "Name",
      phone: "Phone",
      calendar_notes: "Message",
    },
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: TRACKING_ID,
    locationId: LOCATION_ID,
    projectId: PROJECT_ID,
    sessionId: getTrackingSessionId(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      source: "ai_studio",
      projectId: PROJECT_ID,
      formName: "Light Studio Enquiry",
    },
  };

  postTrackingEvent(trackingPayload, {
    customFields: {
      [PRODUCT_INTEREST_FIELD_ID]: {
        value: data.productInterest,
        label: "Product Interest",
      },
    },
  });
}
