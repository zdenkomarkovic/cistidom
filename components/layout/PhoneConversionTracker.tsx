"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function PhoneConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link || typeof window.gtag !== "function") return;

      // Navigation to tel: doesn't leave the page, so no callback/redirect needed.
      window.gtag("event", "conversion", {
        send_to: "AW-18454661894/IXsRCObAyo0dEIaW799E",
        value: 1.0,
        currency: "RSD",
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
