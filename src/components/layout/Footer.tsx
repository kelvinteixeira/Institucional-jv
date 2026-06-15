import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl, navLinks, siteConfig } from "@/lib/constants/site";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="#inicio" className="inline-block">
              <BrandLogo variant="stacked" iconClassName="h-14 w-14" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.lawyer.description.slice(0, 120)}...
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gold uppercase">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gold uppercase">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gold uppercase">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-xs text-white/40">
              {siteConfig.lawyer.oab}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Este site não substitui consulta jurídica presencial.
          </p>
        </div>
      </Container>
    </footer>
  );
}
