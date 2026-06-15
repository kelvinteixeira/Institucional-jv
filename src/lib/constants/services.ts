import {
  Briefcase,
  Building2,
  FileText,
  Gavel,
  Handshake,
  Scale,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "civil",
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, indenizações, direito do consumidor e questões patrimoniais com assessoria completa.",
    icon: Scale,
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    description:
      "Defesa de direitos trabalhistas, rescisões, acordos, reclamações e consultoria preventiva para empregados e empregadores.",
    icon: Briefcase,
  },
  {
    id: "empresarial",
    title: "Direito Empresarial",
    description:
      "Consultoria jurídica para empresas, contratos comerciais, compliance, recuperação judicial e estruturação societária.",
    icon: Building2,
  },
  {
    id: "familia",
    title: "Direito de Família",
    description:
      "Divórcios, guarda, pensão alimentícia, inventários e mediação familiar com sensibilidade e discrição.",
    icon: Users,
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    description:
      "Defesa contra práticas abusivas, negativação indevida, produtos defeituosos e serviços não prestados.",
    icon: Shield,
  },
  {
    id: "contratos",
    title: "Contratos e Negociações",
    description:
      "Elaboração, revisão e negociação de contratos civis e comerciais com foco na proteção dos seus interesses.",
    icon: FileText,
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    description:
      "Compra e venda, locação, usucapião, regularização fundiária e questões condominiais.",
    icon: Handshake,
  },
  {
    id: "contencioso",
    title: "Contencioso Judicial",
    description:
      "Representação em processos judiciais e extrajudiciais com estratégia personalizada para cada caso.",
    icon: Gavel,
  },
];
