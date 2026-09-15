import type { Service } from "@/lib/services-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
        <span aria-hidden>{service.icon}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">
        {service.description}
      </p>
    </div>
  );
}
