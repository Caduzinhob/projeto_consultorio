import { CLINIC } from "@/lib/constants";

export default function Location() {
  const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-gold uppercase">
              Localização
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-mauve sm:text-4xl">
              Venha nos visitar
            </h2>
            <div className="mt-2 h-px w-16 bg-rose" />

            <address className="mt-8 space-y-2 text-base not-italic leading-relaxed text-mauve/85">
              <p className="font-medium text-mauve">{CLINIC.address.street}</p>
              <p>{CLINIC.address.neighborhood}</p>
              <p>{CLINIC.address.city}</p>
            </address>

            <p className="mt-6 text-sm text-mauve/70">
              <span className="font-medium text-mauve">Horário:</span>{" "}
              {CLINIC.hours}
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-mauve"
            >
              Abrir no Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-blush/50 shadow-lg shadow-mauve/5">
            <iframe
              title="Localização do Consultório de Estética - Daniele Sousa"
              src={mapsSrc}
              className="h-[320px] w-full sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
