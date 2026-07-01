import { stagePaths } from "@/config/routes";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (src: string) => `${basePath}${src}`;

export const welcome = {
  title: "0/7 Fragmentów Odnalezionych",
  headline: "Zagadka Głogówka",
  greeting: "Witaj, podróżniku!",
  intro:
    "Serdecznie zapraszamy Cię na grę miejską, w której wspólnie odkryjemy sekrety tego pięknego grodu. Przejdziemy przez rynek, zaułki i miejsca, o których niewiele osób wie — wystarczy wygodne obuwie, odrobina ciekawości i oko do detali.",
  quote:
    "Każda ulica kryje fragment opowieści, a każdy krok może odkryć kolejną kartę Zaginionej Kroniki. Przeszłość splata się tu z teraźniejszością — wystarczy uważnie patrzeć.",
  version: "Wersja alfa",
  status:
    "Gra jest jeszcze w fazie rozwoju — dziękujemy, że testujesz ją jako jeden z pierwszych odkrywców!",
  startPath: stagePaths.etap1,
  buttonLabel: "Rozpocznij przygodę",
} as const;

export const stages = {
  start: {
    slug: stagePaths.etap1,
    title: "Zaginiona Kronika",
    heroIcon: "signpost",
    subtitle: "GŁOS Z PRZESZŁOŚCI",
    quote: "Usłyszysz, co szepcze ratusz?",
    paragraphs: [
      "Ruszając do Głogówka, wkraczasz w miasto, w którym współczesność przenika się ze średniowieczem i dawną tradycją rodu Oppersdorffów, a każda ulica prowadzi w głąb opowieści, która wciąż tu trwa.",
      "Tutaj gra prowadzi cię przez rynek, zaułki i ukryte ślady dawnych mieszkańców, zmieniając zwykły spacer w interaktywną przygodę pełną odkryć i sekretów grodu.",
      "Szukając wskazówek, podążasz tropem legend i znaków pozostawionych na murach Głogówka, aż wszystkie ścieżki splatają się w jedną opowieść, która prowadzi cię do jej ukrytego zakończenia i odkrycia prawdy o tym mieście, zapisanej w jego dawnych kronikach i ukrytej przed wzrokiem przechodniów — w trakcie zabawy wykonuj zadania od a do z.",
    ],
    dropCap: "R",
    password: "ratusz",
    passwordHint:
      "Początek i koniec tworzą całość — posłuchaj uważnie, co szepcze.",
    nextSlug: stagePaths.ratusz,
    messages: {
      success: "Hasło poprawne — kolejny etap wkrótce dostępny.",
      error: "Nieprawidłowe hasło. Spróbuj ponownie.",
      placeholder: "Aby przejść dalej, podaj słowo tajemne…",
      submit: "Dalej",
    },
  },
  etap2: {
    slug: stagePaths.etap2,
    title: "Zaginiona Kronika",
    heroIcon: "castle",
    subtitle: "ETAP II",
    quote: "Kronika trwa…",
    paragraphs: [
      "Wśród śląskich ulic i starych murów, gdzie czas zostawia swoje ślady, pewien przybysz zatrzymał się na moment, jakby świat dał mu chwilę wytchnienia.",
      "Nie szukał tu sławy ani hucznego powitania — raczej miejsca, gdzie myśl może pobiec dalej niż miecz. Mówi się, że właśnie tutaj przeczekał czas niepewności, zanim los znów poprowadził go dalej.",
      "Dziś w Głogówku pozostało po tamtej historii ciche wspomnienie — jakby ktoś zostawił po sobie znak, który nie krzyczy, lecz trwa.",
      "Jeśli połączysz historię z tym, co kruche, zdobione i często pojawia się przy dostojnych stołach, otrzymasz klucz do imienia i przydomka człowieka, który tu przebywał.",
    ],
    password: "waza",
    nextSlug: stagePaths.zamek,
    messages: {
      success: "Hasło poprawne — kolejny etap wkrótce dostępny.",
      error: "Nieprawidłowe hasło. Spróbuj ponownie.",
      placeholder: "Aby przejść dalej, podaj słowo tajemne…",
      submit: "Dalej",
    },
  },
  etap3: {
    slug: stagePaths.etap3,
    title: "Zaginiona Kronika",
    heroIcon: "mug",
    subtitle: "ETAP III",
    quote: "Liczby skrywają drogę…",
    paragraphs: [
      "Znajdź miejsce, gdzie liczby skrywają drogę.",
      "Pięćdziesiąt kroków prowadzi na północ.",
      "Następnie od liczby dni w roku odejmij liczbę miesięcy, a wynik uzupełnij wartością 3³.",
      "Teraz skieruj wzrok na wschód.",
      "Od wieku pełnoletności odejmij jeden.",
      "30 stopni Celsjusza przelicz na skalę imperialną.",
      "Do otrzymanego wyniku dopisz zero na końcu.",
      "Następnie na szóstej pozycji wpisz cyfrę z trzeciej pozycji, a na końcu dodaj ostatnią cyfrę całego zapisu.",
      "Gdy odnajdziesz miejsce to przejdź dalej.",
    ],
    nextSlug: stagePaths.haslo,
    messages: {
      continue: "Dalej",
    },
  },
  haslo: {
    slug: stagePaths.haslo,
    title: "Zaginiona Kronika",
    heroIcon: "mug",
    subtitle: "ETAP III",
    quote: "Uważne patrzenie, nie pośpiech…",
    backSlug: stagePaths.etap3,
    paragraphs: [
      "Jesteście już na miejscu.",
      "Teraz liczy się uważne patrzenie, nie pośpiech.",
      "W tej przestrzeni ukryta jest niewielka scena — postać, która trzyma w dłoniach kufel i jakby zatrzymała się w czasie.",
      "Nie szukaj jej w oczywistych miejscach. Najczęściej znajduje się tam, gdzie wzrok prześlizguje się bez refleksji.",
      "Gdy ją odnajdziesz, przyjrzyj się uważnie detalom wokół. To nie sama postać jest kluczem, lecz znak, który jej towarzyszy.",
    ],
  },
  etap4: {
    slug: stagePaths.etap4,
    title: "Zaginiona Kronika",
    heroIcon: "trees",
    subtitle: "ETAP IV",
    quote: "Kolejna strona kroniki…",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    password: "dalej",
    nextSlug: stagePaths.park,
    messages: {
      success: "Hasło poprawne — finał już tuż za rogiem.",
      error: "Nieprawidłowe hasło. Spróbuj ponownie.",
      placeholder: "Aby przejść dalej, podaj słowo tajemne…",
      submit: "Przejdź dalej",
    },
  },
  etap5: {
    slug: stagePaths.etap5,
    title: "Zaginiona Kronika",
    heroIcon: "church",
    subtitle: "ETAP V",
    quote: "Ostatnia strona kroniki…",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    password: "dalej",
    nextSlug: stagePaths.kosciol,
    messages: {
      success: "Hasło poprawne — finał już tuż za rogiem.",
      error: "Nieprawidłowe hasło. Spróbuj ponownie.",
      placeholder: "Aby przejść dalej, podaj słowo tajemne…",
      submit: "Dalej",
    },
  },
  etap6: {
    slug: stagePaths.etap6,
    title: "Zaginiona Kronika",
    heroIcon: "tower",
    subtitle: "ETAP VI",
    quote: "Ostatnia strona kroniki…",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    password: "dalej",
    nextSlug: stagePaths.wieza,
    messages: {
      success: "Hasło poprawne — finał już tuż za rogiem.",
      error: "Nieprawidłowe hasło. Spróbuj ponownie.",
      placeholder: "Aby przejść dalej, podaj słowo tajemne…",
      submit: "Przejdź dalej",
    },
  },
  dziekujemy: {
    slug: stagePaths.dziekujemy,
    title: "Zaginiona Kronika",
    heroIcon: "scepter",
    subtitle: "FINAŁ",
    quote: "Kronika zamknięta…",
    paragraphs: [
      "Dziękujemy za grę!",
      "Odnaleźliście tropy Zaginionej Kroniki i dotarliście aż do jej końca.",
      "Głogówek ma jeszcze wiele sekretów — wróćcie, gdy zechcecie odkrywać dalej.",
    ],
  },
} as const;

export const thankYou = {
  subtitle: "FINAŁ",
  headline: "Kronika zamknięta",
  greeting: "Dziękujemy za grę!",
  paragraphs: [
    "Odnaleźliście wszystkie tropy Zaginionej Kroniki i dotarliście aż do jej końca.",
    "Ale Głogówek ma jeszcze wiele sekretów. Wróćcie, gdy zechcecie odkrywać dalej — ulica zawsze ma kolejną opowieść do opowiedzenia.",
  ],
  image: asset("/glogowek-finale.png"),
  imageAlt: "Ilustracja rynku i ratusza w Głogówku — finał przygody",
  creatorLabel: "Twórca opowieści",
  creatorEmail: "iamoltix@gmail.com",
} as const;

export type StageKey = keyof typeof stages;
export type Stage = (typeof stages)[StageKey];
