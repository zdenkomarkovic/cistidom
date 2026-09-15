import { BUSINESS } from "@/lib/constants";
import { SERVICE_AREAS } from "@/lib/service-areas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceAreas() {
  return (
    <section id="oblasti" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Gde radimo"
          title={`Čišćenje u svim delovima ${BUSINESS.city}a`}
          description={`Ekipa za čišćenje dolazi na adresu u svim delovima grada – od centra Novog Sada, preko Limana, Grbavice i Detelinare, do Petrovaradina i Sremske Kamenice. Bez obzira u kom kvartu se nalazite, naš tim je spreman da izađe na teren.`}
        />

        <ul className="mt-10 flex flex-wrap justify-center gap-3" aria-label={`Delovi ${BUSINESS.city}a koje pokrivamo`}>
          {SERVICE_AREAS.map((area) => (
            <li key={area}>
              <span className="block rounded-full border border-ink/10 bg-bg-soft px-5 py-2.5 text-sm font-medium text-ink/75">
                {area}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-ink/60">
          Ne vidite svoj deo grada na listi? Pozovite nas na{" "}
          <a href={BUSINESS.phoneHref} className="font-medium text-primary">
            {BUSINESS.phone}
          </a>{" "}
          – radimo i u okolnim mestima.
        </p>
      </Container>
    </section>
  );
}
