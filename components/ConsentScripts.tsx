"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { readConsent } from "@/lib/utils/consent";

export default function ConsentScripts() {
  const [analytics, setAnalytics] = useState(false);
  const GA = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const sync = () => {
      const allowed = !!readConsent()?.analytics;
      if (GA) {
        Object.assign(window, { [`ga-disable-${GA}`]: !allowed });
      }
      setAnalytics(allowed);
    };
    sync();
    window.addEventListener("consent-changed", sync);
    return () => window.removeEventListener("consent-changed", sync);
  }, [GA]);

  if (!analytics || !GA) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}