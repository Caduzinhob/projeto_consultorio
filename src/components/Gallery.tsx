import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-gold uppercase">
            Galeria
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-mauve sm:text-4xl">
            Nosso espaço
          </h2>
          <p className="mt-4 text-mauve/75">
            Um ambiente pensado para seu conforto e tranquilidade durante cada
            atendimento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:min-h-[400px]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 50vw, 33vw"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
