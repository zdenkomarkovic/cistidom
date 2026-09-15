import { buildMetadata } from "@/lib/metadata";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = buildMetadata({
  title: "Agencija za čišćenje u Novom Sadu",
  description: BUSINESS.description,
});

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CleaningService",
          name: BUSINESS.name,
          description: BUSINESS.description,
          image: `${SITE_URL}/2150454568.jpg`,
          url: SITE_URL,
          telephone: BUSINESS.phoneHref.replace("tel:", ""),
          email: BUSINESS.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: BUSINESS.addressLocality,
            addressCountry: BUSINESS.addressCountry,
          },
          areaServed: BUSINESS.city,
        }}
      />

      <Hero />
      <Services />
      <Process />
      <About />
      <WhyUs />
      <ServiceAreas />
      <ContactCTA />
    </main>
  );
}
