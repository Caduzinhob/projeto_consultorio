import Image from "next/image";
import { CLINIC, IMAGES, getWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Ambiente elegante de clínica de estética"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/30" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gold uppercase">
            Beleza · Bem-estar · Cuidado
          </p>
          <h1 className="font-serif text-4xl leading-tight font-light text-mauve sm:text-5xl lg:text-6xl">
            {CLINIC.name}
            <span className="mt-2 block text-3xl font-medium text-rose sm:text-4xl lg:text-5xl">
              {CLINIC.professional}
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mauve/80 sm:text-lg">
            Cuidado personalizado em um ambiente acolhedor. Realce sua beleza
            natural com procedimentos seguros e resultados que valorizam você.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mauve px-8 py-4 text-sm font-medium tracking-wide text-cream uppercase transition-all hover:bg-mauve/90 hover:shadow-lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center rounded-full border border-mauve/30 px-8 py-4 text-sm font-medium tracking-wide text-mauve uppercase transition-colors hover:border-mauve hover:bg-sand"
            >
              Conhecer procedimentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
