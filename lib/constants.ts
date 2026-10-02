// Globalne konstante sajta
// Ove vrednosti se koriste za SEO, metadata, itd.

// `||` (ne `??`) namerno – hvata i prazan string kao neispravnu vrednost,
// sto sprecava pad build-a (npr. `new URL("")`) ako je env varijabla
// definisana ali prazna na hosting platformi.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME || "Čisti Dom";

// ─── Podaci o firmi ───────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Čisti Dom",
  slogan: "Profesionalno čišćenje za vaš dom i posao",
  description:
    "Agencija za profesionalno čišćenje u Novom Sadu. Čistimo stanove, kuće i poslovne prostore brzo, pouzdano i detaljno, uz hemiju bezbednu za decu i kućne ljubimce.",
  phone: "066 5196880",
  phoneHref: "tel:+381665196880",
  email: "cistidom587@gmail.com",
  emailHref: "mailto:cistidom587@gmail.com",
  city: "Novi Sad",
  addressLocality: "Novi Sad",
  addressCountry: "RS",
  workingHours: "Pon – Sub: 08:00 – 20:00",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  priceRange: "$$",
  geo: {
    latitude: 45.2671,
    longitude: 19.8335,
  },
} as const;
