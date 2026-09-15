import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-soft">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            📍 Agencija za čišćenje u {BUSINESS.city}u
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Čist dom i poslovni prostor,{" "}
            <span className="text-primary">bez podizanja prsta</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink/70">
            {BUSINESS.name} donosi profesionalno, pouzdano i detaljno čišćenje
            direktno na vašu adresu u Novom Sadu i okolini. Vi se opustite, mi
            se pobrinemo za ostalo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-primary-dark"
            >
              📞 Pozovite: {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.emailHref}
              className="rounded-full border border-ink/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition hover:border-primary/40 hover:text-primary"
            >
              Pošaljite email
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60">
            <span>✔ Provereni i obučeni tim</span>
            <span>✔ Sopstvena oprema i sredstva</span>
            <span>✔ Fer i transparentne cene</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/2150454568.jpg"
              alt="Tim agencije Čisti Dom čisti poslovni prostor"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-lg sm:block">
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm text-ink/60">zadovoljstvo klijenata</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
