import { Container } from "@/components/ui/Container";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/FadeIn";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants/site";
import { Award, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="right">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -top-4 -left-4 h-24 w-24 border-t-2 border-l-2 border-gold" />
              <div className="absolute -right-4 -bottom-4 h-24 w-24 border-r-2 border-b-2 border-gold" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-off-white">
                <ProfileImage
                  src="/images/about.png"
                  alt={`${siteConfig.lawyer.fullName} — Quem sou eu`}
                  imageClassName="object-cover object-center"
                />
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <SectionHeading
                label="Quem sou eu"
                title={`Olá, sou ${siteConfig.lawyer.fullName}`}
                description="Comprometido com a excelência jurídica e a defesa dos seus direitos."
              />
            </FadeIn>

            <StaggerContainer className="mt-8 space-y-4">
              {siteConfig.lawyer.bio.map((paragraph, index) => (
                <StaggerItem key={index}>
                  <p className="text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="mt-10">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-navy uppercase">
                  <Award className="h-4 w-4 text-gold" />
                  Formação & Credenciais
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {siteConfig.lawyer.credentials.map((credential) => (
                    <li
                      key={credential}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
