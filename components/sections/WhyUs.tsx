import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const REASONS = [
  {
    icon: "🕒",
    title: "Brzo zakazivanje",
    description: "Javljamo se u najkraćem roku i dolazimo u terminu koji vama odgovara.",
  },
  {
    icon: "🐾",
    title: "Pet friendly hemija",
    description: "Koristimo profesionalnu opremu i sredstva bezbedna za decu i kućne ljubimce.",
  },
  {
    icon: "🤝",
    title: "Provereni saradnici",
    description: "Naš tim je pouzdan, uredan i sa poštovanjem se odnosi prema vašem prostoru.",
  },
  {
    icon: "💰",
    title: "Fer cene",
    description: "Jasna i transparentna ponuda, bez skrivenih troškova.",
  },
];

const STRIP_IMAGES = [
  { src: "/2150454545.jpg", alt: "Čišćenje hodnika poslovne zgrade" },
  { src: "/2150520638.jpg", alt: "Pranje staklenih površina" },
  { src: "/2150454484.jpg", alt: "Nošenje opreme za čišćenje" },
  { src: "/2150520632.jpg", alt: "Čišćenje radnog stola u kancelariji" },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Zašto mi"
          title="Zašto izabrati Čisti Dom"
          description="Godine iskustva i zadovoljni klijenti u Novom Sadu govore u naše ime."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-3xl">
                <span aria-hidden>{reason.icon}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STRIP_IMAGES.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
