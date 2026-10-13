import Image from "next/image";
import { PROCEDURES, getWhatsAppUrl } from "@/lib/constants";

export default function Procedures() {
  return (
    <section id="procedimentos" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-gold uppercase">
            Procedimentos
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-mauve sm:text-4xl">
            Tratamentos para realçar sua beleza
          </h2>
          <p className="mt-4 text-mauve/75">
            Protocolos profissionais com foco em segurança, conforto e
            resultados que respeitam sua individualidade.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCEDURES.map((procedure) => (
            <article
              key={procedure.title}
              className="group overflow-hidden rounded-2xl border border-blush/50 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-mauve/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={procedure.image}
                  alt={procedure.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-mauve">
                  {procedure.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mauve/75">
                  {procedure.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre os procedimentos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-mauve"
          >
            Tire suas dúvidas pelo WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
