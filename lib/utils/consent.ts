export const CONSENT_VERSION = 1;

export type Consent = {
  necessary: true;
  analytics: boolean;
  version: number;
  ts: number;
};

export function readConsent(): Consent | null {
  const value = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("consent="))
    ?.slice("consent=".length);
  const match = value?.match(/^v(\d+)\.a([01])$/);
  if (!match || Number(match[1]) !== CONSENT_VERSION) return null;
  return {
    necessary: true,
    analytics: match[2] === "1",
    version: Number(match[1]),
    ts: 0,
  };
}

export function saveConsent(prefs: { analytics: boolean }) {
  const consent: Consent = {
    necessary: true,
    ...prefs,
    version: CONSENT_VERSION,
    ts: Date.now(),
  };
  document.cookie = `consent=v${CONSENT_VERSION}.a${+prefs.analytics}; max-age=31536000; path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  if (!prefs.analytics) {
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) {
        document.cookie = `${name}=; max-age=0; path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
      }
    }
  }
  window.dispatchEvent(new Event("consent-changed"));

  return consent;
}