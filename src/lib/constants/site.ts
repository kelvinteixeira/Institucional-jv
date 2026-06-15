export const siteConfig = {
  name: "JV Sousa Advocacia",
  brand: {
    name: "JV SOUSA",
    tagline: "ADVOCACIA",
  },
  lawyer: {
    fullName: "João Vitor Sousa",
    title: "Advogado",
    oab: "OAB/XX 000.000",
    description:
      "Advogado dedicado à defesa dos direitos de seus clientes, com atuação ética, transparente e focada em resultados. Com experiência em diversas áreas do Direito, ofereço assessoria jurídica personalizada para pessoas físicas e jurídicas.",
    bio: [
      "Formado em Direito com pós-graduação em Direito Civil e Processual Civil, atuo há mais de 8 anos oferecendo soluções jurídicas eficientes e humanizadas.",
      "Minha abordagem combina conhecimento técnico aprofundado com comunicação clara, garantindo que cada cliente compreenda seus direitos e as melhores estratégias para seu caso.",
      "Acredito que a advocacia vai além do processo — é sobre construir confiança, orientar decisões e buscar a justiça de forma responsável.",
    ],
    credentials: [
      "Graduação em Direito",
      "Pós-graduação em Direito Civil",
      "Pós-graduação em Processo Civil",
      "Membro da Comissão de Direito Civil da OAB",
    ],
  },
  contact: {
    phone: "+55 11 99999-9999",
    phoneDisplay: "(11) 99999-9999",
    email: "contato@jvsousaadvocacia.com.br",
    address: "São Paulo, SP — Atendimento presencial e online",
    whatsappMessage:
      "Olá, Dr. João Vitor Sousa! Gostaria de agendar uma consulta jurídica.",
  },
  social: {
    instagram: "https://instagram.com/jvsousaadvocacia",
    linkedin: "https://linkedin.com/in/jvsousaadvocacia",
  },
  url: "https://jvsousaadvocacia.com.br",
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
] as const;

export function getWhatsAppUrl(message?: string): string {
  const phone = siteConfig.contact.phone.replace(/\D/g, "");
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappMessage
  );
  return `https://wa.me/${phone}?text=${text}`;
}
