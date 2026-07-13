import type { SitePreset } from "./types";

const siteCity = "Legnica i okolice";
const cityLocative = "w Legnicy";
const siteName = "KLIMA BART";

export const klimabartLegnicaPreset: SitePreset = {
  id: "klimabart-legnica",
  label: "KLIMA BART — Legnica",
  siteName,
  companyLegalName: "KLIMA BART Andrzej Bartoń",
  siteCity,
  cityLocative,
  siteDefaultUrl: "https://klimabart.pl",
  email: "andrzej@klimabart.pl",
  phoneDisplay: "501 80 99 75",
  phoneE164: "+48501809975",
  address: "ul. Chocianowska 17c, 59-220 Legnica",
  addressStreet: "ul. Chocianowska 17c",
  addressCity: "Legnica",
  addressPostal: "59-220",
  serviceArea: "Legnica i okolice — dojazd do klienta",
  mapsQuery: "KLIMA BART Andrzej Bartoń Legnica Chocianowska",
  mapsUrl: "https://maps.app.goo.gl/1hYPN95Fu44jZ5GSA",
  googleReviewsUrl: "https://maps.app.goo.gl/1hYPN95Fu44jZ5GSA",
  nip: "691-12-56-345",
  regon: "020550771",
  hours: "Pn - Pt: 8:00 - 16:00",
  logoUrl: "/logo.jpg",
  logoIncludesName: true,
  faviconUrl: "/favicon.png",
  heroImage: "/gallery/hero.webp",
  siteTitle: `Klimatyzacja ${siteCity} | ${siteName}`,
  siteKeywords:
    "klimatyzacja Legnica, montaż klimatyzacji, serwis klimatyzacji, wentylacja, pompy ciepła, centrale wentylacyjne, rekuperacja",
  siteDescription: `Montaż i serwis klimatyzacji, wentylacji oraz pomp ciepła ${cityLocative} i okolicach. Dobór urządzeń, przeglądy i naprawy — autoryzowany dystrybutor. Zadzwoń: 501 80 99 75.`,
  ogImage: "/gallery/hero.webp",
  googleRating: 4.3,
  googleReviewCount: 22,
  partners: ["Fujitsu", "Midea", "Noxa", "Daikin", "Mitsubishi", "Gree"],
  gallery: [
    {
      image: "/gallery/01.webp",
      alt: "Klimatyzacja ścienna w nowoczesnym wnętrzu — montaż KLIMA BART",
      caption: "Klimatyzacja w domu",
    },
    {
      image: "/gallery/02.webp",
      alt: "Montaż klimatyzacji w biurze — instalacja jednostek wewnętrznych",
      caption: "Klimatyzacja biurowa",
    },
    {
      image: "/gallery/03.webp",
      alt: "Jednostki zewnętrzne klimatyzacji przy domu jednorodzinnym",
      caption: "Jednostki zewnętrzne",
    },
    {
      image: "/gallery/04.webp",
      alt: "Klimatyzacja w salonie mieszkania — montaż nad telewizorem",
      caption: "Montaż w mieszkaniu",
    },
    {
      image: "/gallery/05.webp",
      alt: "Klimatyzacja w lokalu użytkowym — instalacja w kawiarni",
      caption: "Lokal użytkowy",
    },
    {
      image: "/gallery/06.webp",
      alt: "Montaż jednostki zewnętrznej klimatyzacji na elewacji budynku",
      caption: "Montaż na elewacji",
    },
  ],
  reviews: [
    {
      name: "Kediss",
      text: "Bardzo sprawna i udana instalacja klimy. Kontakt z pracownikiem też bardzo dobry. Pan odpowiadał na wszystkie pytania i od razu wysłał dane techniczne klimy. Krótki termin oczekiwania na montaż.",
      source: "google",
      rating: 5,
      relativeTime: "2 mies. temu",
    },
    {
      name: "Tomasz J.",
      text: "Bardzo polecam tę firmę! Profesjonalne podejście, szybki i sprawny montaż oraz fachowe doradztwo. Klimatyzacja działa bez zarzutu, a ekipa zostawiła po sobie porządek.",
      source: "google",
      rating: 5,
      relativeTime: "1 rok temu",
    },
    {
      name: "maly duzy",
      text: "Wszystko super. Szybko i sprawnie zamontowane. Jak najbardziej polecam!",
      source: "google",
      rating: 5,
      relativeTime: "1 rok temu",
    },
    {
      name: "avvice",
      text: "Polecam serdecznie, super kontakt, panowie znają się na tym co robią i są terminowi. Można liczyć na pomoc w każdej chwili nawet po założeniu klimatyzacji.",
      source: "google",
      rating: 5,
      relativeTime: "1 rok temu",
    },
    {
      name: "Joanna K.",
      text: "Serdecznie polecam! Profesjonalna firma. Panowie znają się na swojej pracy. Doradzili w wyborze klimatyzatora, zarówno pod względem finansowym jak i użytkowym. Montaż i serwis bez zarzutu.",
      source: "google",
      rating: 5,
      relativeTime: "7 lat temu",
    },
  ],
  heroHeadline: "Montaż i serwis klimatyzacji",
  heroBullets: [
    "Montaż, przeglądy i serwis klimatyzacji, wentylacji oraz pomp ciepła.",
    "Autoryzowany dystrybutor i serwisant renomowanych marek.",
  ],
  footerTagline: "Klimatyzacja, wentylacja i pompy ciepła",
  servicesSectionSubtitle:
    "Montaż, serwis i konserwacja systemów klimatyzacyjnych, wentylacyjnych oraz pomp ciepła.",
  gallerySectionSubtitle: "Wybrane realizacje montażowe w Legnicy i okolicach.",
  services: [
    {
      icon: "snowflake",
      title: "Montaż klimatyzacji",
      desc: "Dobór i montaż klimatyzatorów split, multisplit i kanałowych do domu, biura i lokali.",
    },
    {
      icon: "wrench",
      title: "Serwis klimatyzacji",
      desc: "Przeglądy, konserwacja i naprawy — gwarancyjne i pogwarancyjne.",
    },
    {
      icon: "wind",
      title: "Wentylacja i centrale",
      desc: "Montaż i serwis wentylacji kanałowej, central nawiewno-wywiewnych i rekuperacji.",
    },
    {
      icon: "zap",
      title: "Pompy ciepła",
      desc: "Montaż, uruchomienie i serwis pomp ciepła — dobór mocy pod budynek.",
    },
    {
      icon: "shield-check",
      title: "Pomiary i przeglądy",
      desc: "Pomiar skuteczności wentylacji i poziomu hałasu — dokumentacja z pomiaru.",
    },
    {
      icon: "alert-triangle",
      title: "Naprawa awaryjna",
      desc: "Szybka reakcja przy awarii klimatyzacji lub wentylacji — termin potwierdzamy telefonicznie.",
    },
  ],
  faqs: [
    {
      q: "Czy jesteście autoryzowanym dystrybutorem?",
      a: `Tak. Jesteśmy autoryzowanym dystrybutorem i serwisantem renomowanych marek klimatyzacji i wentylacji na terenie ${siteCity.toLowerCase()}.`,
    },
    {
      q: "Ile kosztuje montaż klimatyzacji?",
      a: "Koszt zależy od mocy urządzenia, rodzaju montażu i lokalizacji. Dokładną wycenę przedstawimy po ustaleniu zakresu prac.",
    },
    {
      q: "Ile kosztuje przegląd lub serwis klimatyzacji?",
      a: "Cena ustalana jest po ustaleniu zakresu — przed wizytą podamy orientacyjną kwotę lub wycenę po diagnozie.",
    },
    {
      q: "Jak szybko możecie zamontować klimatyzację?",
      a: "Termin montażu ustalamy indywidualnie. Zadzwoń — podamy najbliższy wolny termin i potwierdzimy zakres prac.",
    },
    {
      q: "Czy dojeżdżacie do klienta?",
      a: `Tak. Obsługujemy ${siteCity.toLowerCase()} — montaż i serwis realizujemy u klienta lub w naszym punkcie przy ul. Chocianowskiej 17c.`,
    },
  ],
  serviceOptionGroups: [
    {
      label: "Klimatyzacja",
      options: [
        "Montaż klimatyzacji split",
        "Serwis i przegląd klimatyzacji",
        "Naprawa awaryjna klimatyzacji",
      ],
    },
    {
      label: "Wentylacja",
      options: ["Montaż wentylacji", "Przegląd i serwis wentylacji", "Pomiar skuteczności wentylacji"],
    },
    {
      label: "Pompy ciepła",
      options: ["Montaż pompy ciepła", "Serwis pompy ciepła"],
    },
    {
      label: "Inne",
      options: ["Potrzebuję doradztwa"],
    },
  ],
};
