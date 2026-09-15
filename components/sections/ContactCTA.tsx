import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function ContactCTA() {
  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-16">
          <Image
            src="/10763.jpg"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary/70" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Zakažite čišćenje već danas
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
              Javite nam se telefonom ili mejlom i dogovorićemo termin koji vama
              odgovara. Radimo u {BUSINESS.city}u i okolini.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="w-full rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-md transition hover:bg-white/90 sm:w-auto"
              >
                📞 {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="w-full rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                ✉️ {BUSINESS.email}
              </a>
            </div>

            <p className="mt-8 text-sm text-white/70">{BUSINESS.workingHours}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
