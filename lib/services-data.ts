// Podaci o uslugama koje agencija nudi.
// Koristi se u Services sekciji na pocetnoj strani.

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "generalno-ciscenje",
    title: "Generalno čišćenje stana i kuće",
    description:
      "Detaljno, dubinsko čišćenje svake prostorije – od plafona do poda. Idealno za veliko spremanje ili pripremu za posebne prilike.",
    icon: "🏠",
  },
  {
    slug: "redovno-odrzavanje",
    title: "Redovno održavanje čistoće",
    description:
      "Nedeljno ili mesečno čišćenje domaćinstva po dogovorenom rasporedu, kako bi vaš dom uvek bio uredan.",
    icon: "🧹",
  },
  {
    slug: "poslovni-prostor",
    title: "Čišćenje poslovnog prostora",
    description:
      "Održavanje kancelarija, prodavnica i poslovnih objekata – pre, tokom ili nakon radnog vremena.",
    icon: "🏢",
  },
  {
    slug: "posle-renoviranja",
    title: "Čišćenje posle renoviranja i gradnje",
    description:
      "Uklanjanje prašine, ostataka materijala i nečistoće nakon građevinskih i radova na renoviranju.",
    icon: "🧱",
  },
  {
    slug: "pranje-prozora",
    title: "Pranje prozora i staklenih površina",
    description:
      "Bez mrlja i tragova – prozori, izlozi i staklene pregrade koji blistaju.",
    icon: "🧽",
  },
  {
    slug: "kuhinja-kupatilo",
    title: "Dubinsko čišćenje kuhinje i kupatila",
    description:
      "Uklanjanje masnoće, kamenca i bakterija sa svih površina, pločica i sanitarija.",
    icon: "🚿",
  },
  {
    slug: "tepisi-namestaj",
    title: "Čišćenje tepiha i tapaciranog nameštaja",
    description:
      "Dubinsko pranje tepiha, fotelja, kauča i madraca uz uklanjanje mrlja i neprijatnih mirisa.",
    icon: "🛋️",
  },
  {
    slug: "zgrade-stepeništa",
    title: "Čišćenje zgrada i stepeništa",
    description:
      "Redovno održavanje zajedničkih prostorija, ulaza i stepeništa stambenih zgrada.",
    icon: "🏬",
  },
  {
    slug: "uselenje-iselenje",
    title: "Čišćenje pri useljenju i iseljenju",
    description:
      "Temeljno čišćenje praznog stana pre useljenja ili nakon iseljenja, spremno za predaju ili useljenje.",
    icon: "📦",
  },
  {
    slug: "dezinfekcija",
    title: "Dezinfekcija i sanitizacija prostora",
    description:
      "Profesionalna dezinfekcija prostorija radi uklanjanja bakterija i virusa sa površina.",
    icon: "🦠",
  },
];
