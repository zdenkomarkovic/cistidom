import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="o-nama" className="bg-bg-soft py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/568.jpg"
              alt="Ljubazna članica tima Čisti Dom spremna za čišćenje"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 w-2/5 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
            <div className="relative aspect-square">
              <Image
                src="/2150520594.jpg"
                alt="Dubinsko čišćenje poda usisivačem"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            O nama
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
            Vaš pouzdan partner za čistoću u {BUSINESS.city}u
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            {BUSINESS.name} je agencija za profesionalno čišćenje koja stanovnicima
            i firmama u Novom Sadu pruža pouzdanu, detaljnu i doslednu uslugu
            čišćenja. Naš tim čine obučeni i provereni saradnici koji poslu
            pristupaju odgovorno, uz korišćenje kvalitetnih sredstava i opreme.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Trudimo se da svaki prostor koji dotaknemo ostavimo besprekorno
            čistim – bez obzira da li je u pitanju stan, kuća, kancelarija ili
            poslovni objekat.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-ink/60">Završenih čišćenja</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-ink/60">Zadovoljni klijenti</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">7/7</p>
              <p className="text-sm text-ink/60">Dostupnost</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
