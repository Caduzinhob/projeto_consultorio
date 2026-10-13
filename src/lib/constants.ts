export const CLINIC = {
  name: "Consultório de Estética",
  professional: "Daniele Sousa",
  fullName: "Consultório de Estética - Daniele Sousa",
  address: {
    street: "Avenida Othon Barcelos, nº 770",
    neighborhood: "Bairro São Pedro",
    city: "Arcos - MG",
    full: "Avenida Othon Barcelos, nº 770, Bairro São Pedro, Arcos - MG",
  },
  phone: "(37) 98402-1579",
  phoneHref: "tel:+5537984021579",
  whatsappNumber: "5537984021579",
  whatsappMessage:
    "Olá! Gostaria de agendar um horário no Consultório de Estética - Daniele Sousa.",
  hours: "Segunda a Sexta: 08:00 às 20:00",
  mapsQuery: "Avenida Othon Barcelos, 770, São Pedro, Arcos, MG",
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? CLINIC.whatsappMessage);
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
] as const;

/**
 * Fotos locais: copie seus arquivos para public/images/ com estes nomes.
 * Formatos aceitos: .jpg, .jpeg, .png ou .webp (ajuste a extensão abaixo se precisar).
 */
export const IMAGES = {
  hero: "/images/hero.jpg",
  about: "/images/sobre.jpg",
  procedures: {
    limpezaPele: "/images/procedimentos/limpeza-pele.jpg",
    peeling: "/images/procedimentos/peeling.jpg",
    microagulhamento: "/images/procedimentos/microagulhamento.jpg",
    drenagem: "/images/procedimentos/drenagem.jpg",
    sobrancelhas: "/images/procedimentos/sobrancelhas.jpg",
    facial: "/images/procedimentos/facial.jpg",
  },
  gallery: [
    "/images/galeria/01.jpg",
    "/images/galeria/02.jpg",
    "/images/galeria/03.jpg",
    "/images/galeria/04.jpg",
    "/images/galeria/05.jpg",
    "/images/galeria/06.jpg",
  ],
} as const;

export const PROCEDURES = [
  {
    title: "Limpeza de Pele",
    description:
      "Protocolo profundo de higienização e revitalização, removendo impurezas e devolvendo luminosidade à pele.",
    image: IMAGES.procedures.limpezaPele,
  },
  {
    title: "Peeling Químico",
    description:
      "Renovação celular controlada para uniformizar o tom, suavizar manchas e melhorar a textura da pele.",
    image: IMAGES.procedures.peeling,
  },
  {
    title: "Microagulhamento",
    description:
      "Estimulação de colágeno para firmeza, redução de cicatrizes e aprimoramento da qualidade cutânea.",
    image: IMAGES.procedures.microagulhamento,
  },
  {
    title: "Drenagem Linfática",
    description:
      "Técnica manual que auxilia na redução de inchaço, melhora a circulação e promove bem-estar corporal.",
    image: IMAGES.procedures.drenagem,
  },
  {
    title: "Design de Sobrancelhas",
    description:
      "Modelagem personalizada que valoriza o olhar com harmonia e naturalidade para cada formato de rosto.",
    image: IMAGES.procedures.sobrancelhas,
  },
  {
    title: "Tratamentos Faciais",
    description:
      "Protocolos exclusivos para hidratação, rejuvenescimento e cuidado integral da pele do rosto.",
    image: IMAGES.procedures.facial,
  },
] as const;

export const GALLERY_IMAGES = [
  { src: IMAGES.gallery[0], alt: "Ambiente acolhedor da clínica" },
  { src: IMAGES.gallery[1], alt: "Sala de atendimento estético" },
  { src: IMAGES.gallery[2], alt: "Detalhes de cuidados com a pele" },
  { src: IMAGES.gallery[3], alt: "Produtos e equipamentos profissionais" },
  { src: IMAGES.gallery[4], alt: "Procedimento facial em ambiente clínico" },
  { src: IMAGES.gallery[5], alt: "Momento de relaxamento e bem-estar" },
] as const;
