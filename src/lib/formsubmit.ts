/**
 * FormSubmit API Integration Service for Icon Drugs Private Limited
 * Safely delivers lead forms to contact@icondrugs.com via FormSubmit AJAX endpoint.
 */

export const FORMSUBMIT_EMAIL =
  process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || "contact@icondrugs.com";

export interface FormSubmitPayload {
  subject: string;
  data: Record<string, string | number | boolean | null | undefined>;
  replyTo?: string;
  honeypot?: string;
}

export interface FormSubmitResult {
  success: boolean;
  message?: string;
}

/**
 * Sends form payload to FormSubmit AJAX endpoint with anti-spam, timeout circuit breaker,
 * and structured table formatting.
 */
export async function sendFormSubmitRequest({
  subject,
  data,
  replyTo,
  honeypot,
}: FormSubmitPayload): Promise<FormSubmitResult> {
  // Honeypot anti-spam check: if filled by an automated bot, fake success silently.
  if (honeypot && honeypot.trim().length > 0) {
    return { success: true };
  }

  // Construct FormSubmit payload
  const payload: Record<string, any> = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    ...data,
  };

  if (replyTo && replyTo.trim().length > 0 && replyTo.includes("@")) {
    payload._replyto = replyTo.trim();
  }

  // Abort controller with 12s timeout to prevent hanging UI
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const json = await response.json();
    const isSuccess =
      json.success === "true" ||
      json.success === true ||
      json.message?.toLowerCase().includes("sent");

    return {
      success: isSuccess,
      message: json.message || "Form submission received successfully",
    };
  } catch (err: any) {
    clearTimeout(timeoutId);

    if (err.name === "AbortError") {
      return {
        success: false,
        message:
          "Request timed out. Please check your internet connection or reach out directly via WhatsApp.",
      };
    }

    return {
      success: false,
      message:
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while transmitting your enquiry.",
    };
  }
}
