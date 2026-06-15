import { Container } from "@/components/ui/Container";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/constants/services";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-off-white py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            label="Áreas de atuação"
            title="Serviços Jurídicos"
            description="Assessoria completa em diversas áreas do Direito, com atendimento personalizado e estratégias sob medida para cada caso."
            className="mx-auto text-center [&>div:last-child]:mx-auto"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="group flex h-full flex-col rounded-sm border border-navy/5 bg-white p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 transition-colors group-hover:bg-gold/20">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-8" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
