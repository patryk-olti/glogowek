import { stagePaths } from "@/config/routes";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (src: string) => `${basePath}${src}`;

export const destinations = {
  ratusz: {
    slug: stagePaths.ratusz,
    subtitle: "CEL OSIĄGNIĘTY",
    title: "Dotarliście do Ratusza",
    image: asset("/ratusz-1543.png"),
    imageAlt:
      "Historyczna ilustracja ratusza w Głogówku — rynek z wieżą zegarową i sceną z życia miasta",
    paragraphs: [
      "Pierwsza wzmianka o ratuszu w Głogówku pochodzi z 1359 roku — z okresu, gdy miasto, usytuowane na skrzyżowaniu szlaków handlowych, rozwijało się wokół placu targowego u zbiegu dróg z Nysy przez Prudnik do Krakowa i z Ołomuńca przez Toruń do Gdańska.",
      "Na rynku stoi dziś późnorenesansowy ratusz wzniesiony w 1608 roku i przebudowany w 1880 roku, z charakterystyczną wieżą. Obok otaczających go kamienic wpisano go do wojewódzkiego rejestru zabytków.",
      "Podczas renowacji podziemi ratusza w latach 20. XX wieku natrafiono na kamienny topór — przypomnienie, że historia tego miejsca sięga znacznie dalej niż średniowiecze.",
      "18 marca 1945 roku ratusz uległ zniszczeniu w wyniku sowieckiego nalotu, który zburzył także kamienice na rynku. Odbudowany budynek znów pełni rolę centrum życia miejskiego — na rynku mieści się dziś Urząd Miejski Głogówka.",
    ],
    nextSlug: stagePaths.etap2,
    continueLabel: "Przejdź dalej",
  },
  zamek: {
    slug: stagePaths.zamek,
    subtitle: "CEL OSIĄGNIĘTY",
    title: "Dotarliście do Zamku",
    image: asset("/zamek-glogowek.png"),
    imageClassName: "object-cover object-bottom",
    imageAlt:
      "Historyczna ilustracja zamku w Głogówku — gotycko-renesansowy zamek rodu Oppersdorffów z wieżami i bramą wjazdową",
    paragraphs: [
      "Zamek w Głogówku należy do najstarszych warowni Górnego Śląska — jego początki sięgają XIII wieku, a przez wieki pełnił rolę siedziby rodu Oppersdorffów, jednego z najważniejszych arystokratycznych rodów regionu.",
      "W czasach renesansu i baroku zamek przekształcono w reprezentacyjną rezydencję — z charakterystyczną bramą wjazdową, wieżami i wewnętrznym dziedzińcem, które do dziś przypomina o dawnej świetności grodu.",
      "W latach 1626–1627, w burzliwym okresie wojny trzydziestoletniej, zamek gościł Albrechta von Wallensteina — wodza, który szukał tu chwili wytchnienia z dala od hucznych sal i politycznych intryg, zanim los znów poprowadził go dalej.",
      "Dziś w murach zamku mieści się szkoła i muzeum — a ciche wspomnienie tamtej historii wciąż czeka na tych, którzy potrafią połączyć przeszłość z drobnymi znakami, które pozostawili po sobie dawni goście.",
    ],
    nextSlug: stagePaths.etap3,
    continueLabel: "Przejdź dalej",
  },
  brama: {
    slug: stagePaths.brama,
    subtitle: "CEL OSIĄGNIĘTY",
    title: "Dotarliście do Bramy Zamkowej",
    image: asset("/brama-zamkowa.png"),
    imageAlt:
      "Historyczna ilustracja Bramy Zamkowej w Głogówku — barokowa brama miejska z łukiem wjazdowym przy ulicy Zamkowej",
    paragraphs: [
      "Nie znana jest dokładna data powstania Bramy Zamkowej — urbaria z roku 1587 wspominają jednak już o jej istnieniu. Dziś zachowała barokową formę i jest częściowo zagospodarowana.",
      "Na górnej kondygnacji mieści się izba poświęcona Rafałowi Urbanowi, miejscowemu pisarzowi, a także pamiątki po wybitnym malarzu Janie Cybisie, urodzonym we Wróblinie.",
      "Głogówek posiadał jeszcze dwie bramy: Kozielską i Wodną — dziś już niestety nieistniejące. Zostały zburzone około roku 1870, zapewne z uwagi na utrudnienia komunikacyjne wewnątrz miasta.",
      "Brama Zamkowa przy ulicy Zamkowej to jedyna z trzech bram miejskich, która przetrwała do naszych czasów — cichy strażnik wejścia na zamek i dawnej drogi przez miasto.",
    ],
    nextSlug: stagePaths.etap4,
    continueLabel: "Przejdź dalej",
  },
  park: {
    slug: stagePaths.park,
    subtitle: "CEL OSIĄGNIĘTY",
    title: "Dotarliście do Parku Miejskiego",
    image: asset("/park-staw.png"),
    imageClassName: "object-cover object-bottom",
    imageAlt:
      "Historyczna ilustracja Parku Miejskiego w Głogówku — spokojny staw otoczony drzewami, z łódką u brzegu i literą G w rogu",
    paragraphs: [
      "Park Miejski w Głogówku to zabytkowy teren zielony o powierzchni 17 ha, położony tuż obok zamku — granicę wyznaczają ul. Pasternik, rzeka Młynówka, ul. Piastowska i zabudowa Starego Miasta. Założony w XVI wieku na miejscu dawnych fortyfikacji ziemnych z inicjatywy rodu Oppersdorffów, przez wieki służył zarówno jako miejsce wypoczynku, jak i cicha przystań nad brzegiem Młynówki.",
      "Szczyt rozwoju park przeszedł w XIX wieku — książę von Pückler-Muskau doradzał przy jego kompozycji i doborze roślin, a pod kierownictwem architekta Glücka przekształcono go na styl angielski, zasadzając egzotyczne drzewa i krzewy. W części zwanej Weingarten stała pustelnia św. Prokopa, ufundowana przez hrabiów — choć budynek nie przetrwał do dziś, pamięć o nim wciąż splata się z historią tego miejsca.",
      "Dziś park należy do najlepiej utrzymanych obiektów tego typu w regionie — rosną tu rzadkie gatunki, m.in. daglezja, modrzew kanadyjski, platan i cypryśnik, a w zachodniej części, wzdłuż Młynówki, stoi pomnik przyrody — grupa dziewięciu dębów szypułkowych. Górna część terenu, u stóp zamku, opada stromą skarpą z fragmentami murów miejskich; dolna to rozległe łąki, stawy i alejki spacerowe.",
      "Wśród ważniejszych obiektów warto wspomnieć figurę św. Jana Nepomucena z 1744 roku, staw z dwiema wysepkami, dawną oranżerię parkową z 1914 roku oraz studnię Karola — naprzeciwko której niegdyś stała pustelnia. Przez park prowadzi ścieżka edukacyjna, a w jego murach wciąż słychać echo dawnych opowieści o grodzie i jego właścicielach.",
    ],
    nextSlug: stagePaths.etap5,
    continueLabel: "Przejdź dalej",
  },
  kosciol: {
    slug: stagePaths.kosciol,
    subtitle: "CEL OSIĄGNIĘTY",
    title: "Dotarliście do Kościoła św. Mikołaja",
    image: asset("/kosciol-sw-mikolaja.png"),
    imageClassName: "object-cover object-center",
    imageAlt:
      "Historyczna ilustracja Kościoła św. Mikołaja w Głogówku — barokowa świątynia z wieżą i krzyżem, przy mur pruskim budynku dawnego szpitala",
    paragraphs: [
      "Kościół św. Mikołaja należy do zespołu dawnego szpitala i stoi na drodze prowadzącej do Prudnika. Już w 1335 roku w Głogówku istniał szpital św. Ducha, zarządzany przez zakon duchaków — kolejny drewniany budynek powstał w 1599 roku, lecz w XVIII wieku chylił się ku upadkowi.",
      "W 1773 roku hrabia Henryk Ferdynand Oppersdorff ufundował nowy szpital wraz z kościołem, który poświęcono św. Mikołajowi. Świątynia nie ma zwyczajowej orientacji — prezbiterium zwrócone jest ku południu. Wnętrze jest skromne, lecz w ołtarzu głównym zachował się obraz patrona, św. Mikołaja, namalowany przez Sebastiniego.",
      "Na uwagę zasługuje także dwunastoramienny mosiężny pająk z dwugłowym orłem habsburskim w zwieńczeniu — wykonano go jeszcze przed zajęciem Śląska przez Prusy w 1741 roku. Ambona sprzed połowy XVIII wieku i stacje Drogi Krzyżowej z przełomu XVIII i XIX wieku dopełniają wyposażenie tego miejsca.",
      "W latach 2005–2009 odnowiono dach i barokową elewację. Od strony zachodniej do kościoła przylega budynek dawnego szpitala — dziś odbywają się tu msze młodzieżowe, a co roku obchodzony jest odpust ku czci św. Mikołaja.",
    ],
    nextSlug: stagePaths.etap6,
    continueLabel: "Przejdź dalej",
  },
  wieza: {
    slug: stagePaths.wieza,
    subtitle: "CEL OSIĄGNIĘTY",
    title: "Dotarliście do Wieży Ciśnień",
    image: asset("/wieza-cisnien.png"),
    imageClassName: "object-cover object-center",
    imageAlt:
      "Historyczna ilustracja wieży ciśnień w Głogówku — ceglana wieża z dachami nad zabudową miasta",
    paragraphs: [
      "W Głogówku znajdują się dwie wieże ciśnień. Starsza, przy ulicy Młyńskiej, to najstarsza wieża ciśnień na Śląsku — wzniesiona w drugiej połowie XVI wieku z cegły i kamienia, czworoboczna, o wysokości 20 metrów. Pełniła funkcję strażnicy obserwacyjnej i dostarczała wodę do miasta.",
      "Druga wieża stoi przy ulicy Kąpielowej. Zbudowano ją w 1907 roku — to wieża wyrównawcza z cegły, wysoka na 16 metrów, ze zbiornikiem o pojemności 200 m³. Nadal służy do dostarczania wody mieszkańcom Głogówka.",
      "Wieża ciśnień to konstrukcja inżynieryjna, która magazynuje wodę i utrzymuje ją pod ciśnieniem, dzięki czemu płynie z siłą w dół przez rurociągi do domów i zakładów. W okresach mniejszego zapotrzebowania woda gromadzi się na górze, a gdy rośnie popyt — stopniowo trafia do sieci.",
      "Te wieże to nie tylko infrastruktura — to także element krajobrazu miasta, przypomnienie o tym, jak Głogówek przez wieki zaspokajał potrzeby swoich mieszkańców, łącząc dawne obserwatorium z nowoczesnym wodociągiem.",
    ],
    nextSlug: stagePaths.dziekujemy,
    continueLabel: "Przejdź dalej",
  },
} as const;

export type DestinationKey = keyof typeof destinations;
export type Destination = (typeof destinations)[DestinationKey];
