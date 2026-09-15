import Image from "next/image";
import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    number: "01",
    title: "Pozovite ili pišite",
    description: "Javite nam se telefonom ili mejlom i recite nam šta vam treba.",
  },
  {
    number: "02",
    title: "Dogovaramo termin",
    description: "Zajedno biramo datum, vreme i obim posla koji vama odgovara.",
  },
  {
    number: "03",
    title: "Naš tim dolazi i čisti",
    description: "Dolazimo tačno na vreme, sa sopstvenom opremom i sredstvima.",
  },
  {
    number: "04",
    title: "Uživate u čistom prostoru",
    description: "Proveravamo svaki detalj pre nego što kažemo da je posao gotov.",
  },
];

export function Process() {
  return (
    <section id="kako-radimo" className="bg-bg-soft py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Kako radimo
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
            Zakazivanje u četiri jednostavna koraka
          </h2>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/2150359015.jpg"
              alt="Član tima Čisti Dom stiže sa opremom za čišćenje"
              fill
              sizes="(min-width: 1024px) 35vw, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-6 -top-6 w-2/5 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
            <div className="relative aspect-square">
              <Image
                src="/2150520628.jpg"
                alt="Tim Čisti Dom čisti radni sto"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
