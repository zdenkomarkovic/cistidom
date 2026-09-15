import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white/80">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5 font-heading text-lg font-bold text-white">
            <Image
              src="/logo.jpg"
              alt={`${BUSINESS.name} logo`}
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
            />
            {BUSINESS.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {BUSINESS.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={BUSINESS.phoneHref} className="hover:text-primary-light">
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a href={BUSINESS.emailHref} className="hover:text-primary-light">
                {BUSINESS.email}
              </a>
            </li>
            <li>{BUSINESS.city}, Srbija</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Radno vreme
          </p>
          <p className="mt-3 text-sm">{BUSINESS.workingHours}</p>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center gap-2 text-center text-xs text-white/50 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. Sva prava zadržana.
          </p>
          <p>
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light"
            >
              Manikam Web Solutions
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
