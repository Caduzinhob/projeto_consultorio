import Image from "next/image";
import { CLINIC, IMAGES } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl shadow-mauve/10">
            <Image
              src={IMAGES.about}
              alt={`${CLINIC.professional}, profissional de estética`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-gold uppercase">
              Sobre
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-mauve sm:text-4xl">
              {CLINIC.professional}
            </h2>
            <div className="mt-2 h-px w-16 bg-rose" />

            <div className="mt-8 space-y-4 text-base leading-relaxed text-mauve/85">
              <p>
                Com dedicação e atenção aos detalhes,{" "}
                <strong className="font-medium text-mauve">
                  {CLINIC.professional}
                </strong>{" "}
                transforma cada atendimento em uma experiência de cuidado e
                confiança. No{" "}
                <strong className="font-medium text-mauve">
                  {CLINIC.name}
                </strong>
                , a prioridade é realçar a beleza natural de cada cliente com
                segurança, ética e resultados harmoniosos.
              </p>
              <p>
                O consultório foi pensado para oferecer um ambiente acolhedor e
                sofisticado, onde você se sente à vontade desde o primeiro
                contato. Cada protocolo é personalizado de acordo com as
                necessidades da sua pele e do seu bem-estar.
              </p>
              <p>
                Nossa missão é proporcionar tratamentos de qualidade que
                unem tecnologia, conhecimento técnico e um olhar humano —
                porque estética, para nós, é também autocuidado e autoestima.
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Atendimento personalizado",
                "Ambiente higienizado",
                "Produtos de qualidade",
                "Resultados naturais",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-mauve"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush text-rose">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
