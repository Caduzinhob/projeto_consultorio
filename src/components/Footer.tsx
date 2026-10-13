import { CLINIC } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blush/40 bg-mauve text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-serif text-xl">{CLINIC.fullName}</p>
            <p className="mt-2 text-sm text-cream/70">{CLINIC.address.full}</p>
            <p className="mt-1 text-sm text-cream/70">{CLINIC.phone}</p>
            <p className="mt-1 text-sm text-cream/70">{CLINIC.hours}</p>
          </div>

          <div className="text-sm text-cream/60">
            <p>
              © {year} {CLINIC.fullName}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
