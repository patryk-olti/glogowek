export const stagePaths = {
  etap1: "/qW5nR8tKmX",
  ratusz: "/pL2xK9mRnQ",
  etap2: "/ZXSssaDAs",
  zamek: "/vN8kR3xWpL",
  etap3: "/mK9pQr2xLn",
  haslo: "/haslo",
  brama: "/brama-zamkowa",
  etap4: "/tR4nK9wLpX",
  park: "/wP3kR7mLnQ",
  etap5: "/kM4pR8nWqL",
  kosciol: "/nK7sM2wRqP",
  etap6: "/jR7nM5wKqT",
  wieza: "/yQ9mW5nRxK",
  dziekujemy: "/dziekujemy",
} as const;

export const legacyStagePaths = {
  haslo: "/haslo:",
  brama: "/haslo:1723",
} as const;

export const allowedPublicPaths = new Set<string>([
  "/",
  stagePaths.etap1,
  stagePaths.ratusz,
  stagePaths.etap2,
  stagePaths.zamek,
  stagePaths.etap3,
  stagePaths.haslo,
  stagePaths.brama,
  legacyStagePaths.haslo,
  legacyStagePaths.brama,
  stagePaths.etap4,
  stagePaths.park,
  stagePaths.etap5,
  stagePaths.kosciol,
  stagePaths.etap6,
  stagePaths.wieza,
  stagePaths.dziekujemy,
]);
