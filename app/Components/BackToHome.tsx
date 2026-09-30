"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function BackToHome() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;

    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      router.push("/");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, router]);

  return null;
}
