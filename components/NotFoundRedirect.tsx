"use client";

import { useEffect, useMemo } from "react";

const REPO_SUBPATH = "/glogowek";

type LegacyRule = {
  test: (pathname: string) => boolean;
  to: string;
};

const legacyRules: LegacyRule[] = [
  {
    test: (pathname) => pathname === "/haslo:1723" || pathname === "/haslo:1723/",
    to: "/brama-zamkowa/",
  },
  {
    test: (pathname) => pathname === "/haslo:" || pathname === "/haslo:/",
    to: "/haslo/",
  },
];

function getOptionalRepoPrefix(pathname: string) {
  return pathname === REPO_SUBPATH || pathname.startsWith(`${REPO_SUBPATH}/`)
    ? REPO_SUBPATH
    : "";
}

export function NotFoundRedirect() {
  const pathname = useMemo(
    () => (typeof window === "undefined" ? "" : window.location.pathname),
    [],
  );

  useEffect(() => {
    if (!pathname) return;

    const prefix = getOptionalRepoPrefix(pathname);
    const withoutPrefix = prefix ? pathname.slice(prefix.length) || "/" : pathname;

    const match = legacyRules.find((rule) => rule.test(withoutPrefix));
    if (!match) return;

    window.location.replace(`${prefix}${match.to}`);
  }, [pathname]);

  const prefix = pathname ? getOptionalRepoPrefix(pathname) : "";

  return (
    <div className="game-viewport mx-auto flex h-dvh w-full max-w-[430px] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-2xl font-bold text-[#5D2E17]">
        Strona nie istnieje
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-[#5D2E17]/75">
        Jeśli trafiłeś tu przez kod etapu, spróbuj jeszcze raz zeskanować lub
        wpisz adres ponownie.
      </p>
      <a
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#5D2E17] px-5 py-2.5 font-display text-sm font-semibold text-[#F9F4EE]"
        href={`${prefix}/`}
      >
        Wróć na start
      </a>
    </div>
  );
}

