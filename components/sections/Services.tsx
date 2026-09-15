import Image from "next/image";
import { services } from "@/lib/services-data";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="usluge" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Naše usluge
            </p>
            <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
              Čišćenje za svaku priliku
            </h2>
            <p className="mt-4 text-base text-ink/70 sm:text-lg">
              Bilo da vam treba redovno održavanje ili jednokratno generalno
              čišćenje, imamo rešenje prilagođeno vašim potrebama – u stanu,
              kući ili poslovnom prostoru.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/2149374462.jpg"
                alt="Pranje prozora u stanu"
                fill
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 w-2/5 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
              <div className="relative aspect-square">
                <Image
                  src="/2150520600.jpg"
                  alt="Pranje staklenih površina"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
