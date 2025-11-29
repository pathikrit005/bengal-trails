// src/hooks/useSmartAutoLogout.ts
import { useEffect, useRef } from "react";

export default function useSmartAutoLogout(
  { logoutUrl = "/api/auth/logout", delayMs = 10000 } = {}
) {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const LOGOUT_DELAY_MS = delayMs;

    const clearTimer = () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const doLogout = (reason = "auto") => {
      try { localStorage.removeItem("is_logged_in"); } catch {}
      try { sessionStorage.removeItem("bengalTrailsUser"); } catch {}

      const payload = JSON.stringify({ reason });

      // sendBeacon First
      try {
        if (navigator && typeof navigator.sendBeacon === "function") {
          const blob = new Blob([payload], { type: "application/json" });
          const ok = navigator.sendBeacon(logoutUrl, blob);
          if (ok) return;
        }
      } catch {}

      // fallback fetch keepalive
      try {
        fetch(logoutUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
          credentials: "include",
        }).catch(() => {});
      } catch {}
    };

    const onBeforeUnload = () => {
      clearTimer();
      doLogout("beforeunload");
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        clearTimer();
        timerRef.current = window.setTimeout(() => {
          timerRef.current = null;
          doLogout("hidden_timeout");
        }, LOGOUT_DELAY_MS);
      } else {
        clearTimer();
      }
    };

    window.addEventListener("beforeunload", onBeforeUnload);
    window.addEventListener("unload", onBeforeUnload);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearTimer();
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("unload", onBeforeUnload);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [logoutUrl, delayMs]);
}
