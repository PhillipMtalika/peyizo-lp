/** Shared, non-sensitive site constants used across marketing and support pages. */

/** Absolute base URL used to resolve social preview images and canonical URLs. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://peyizo.com";

/**
 * This must be a real, monitored Peyizo inbox. Cardholder phone support is
 * provided at the number shown in the account and cardholder agreement.
 */
export const SUPPORT_EMAIL = "support@peyizo.com";
export const APP_URL = "https://app.peyizo.com";
