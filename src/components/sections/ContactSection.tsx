"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getWhatsAppUrl, siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: siteConfig.contact.address,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg — Sex, 9h às 18h",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = [
      `Olá, Dr. ${siteConfig.lawyer.fullName}!`,
      ``,
      `Meu nome é ${formData.name}.`,
      `E-mail: ${formData.email}`,
      `Telefone: ${formData.phone}`,
      ``,
      `Mensagem:`,
      formData.message,
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank");
    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="bg-navy py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <FadeIn>
              <SectionHeading
                label="Contato"
                title="Vamos conversar?"
                description="Entre em contato para agendar uma consulta ou tirar dúvidas sobre seu caso. Atendimento presencial e online."
                light
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold tracking-widest text-gold uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 text-sm text-white/70">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10">
                <WhatsAppButton label="Falar no WhatsApp" />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-white">
                Envie sua mensagem
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Preencha o formulário e será direcionado ao WhatsApp.
              </p>

              <div className="mt-8 space-y-5">
                <FormField label="Nome completo" required>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className={inputStyles}
                  />
                </FormField>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="E-mail" required>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className={inputStyles}
                    />
                  </FormField>

                  <FormField label="Telefone" required>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(00) 00000-0000"
                      className={inputStyles}
                    />
                  </FormField>
                </div>

                <FormField label="Mensagem" required>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Descreva brevemente sua necessidade..."
                    className={cn(inputStyles, "resize-none")}
                  />
                </FormField>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
                <p className="text-xs text-white/30">
                  Ao enviar, você será redirecionado ao WhatsApp.
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

const inputStyles =
  "w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30";

function FormField({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs font-semibold tracking-widest text-white/60 uppercase">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
    </div>
  );
}
