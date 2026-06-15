"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { siteConfig } from "@/lib/constants/site";
import { ArrowDown, Check, Scale } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,160,89,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,160,89,0.05)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <Container className="relative z-10 pt-28 pb-20 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-4 py-2">
                <Scale className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                  {siteConfig.lawyer.oab}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="inline-block bg-gold px-3 py-1 text-navy">
                  DEFENDEMOS
                </span>
                <span className="mt-3 block font-light text-white/90">
                  os seus direitos!
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-6 flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={2.5} />
                <p className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                  Fale com um advogado especialista e receba orientação
                  jurídica personalizada para o seu caso.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#contato" size="lg">
                  Agendar Consulta
                </Button>
                <Button href="#servicos" variant="outline" size="lg">
                  Conheça os Serviços
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <span className="block font-display text-3xl font-bold text-gold">
                    8+
                  </span>
                  <span className="text-sm text-white/50">Anos de experiência</span>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <span className="block font-display text-3xl font-bold text-gold">
                    500+
                  </span>
                  <span className="text-sm text-white/50">Casos atendidos</span>
                </div>
                <div className="hidden h-10 w-px bg-white/10 sm:block" />
                <div className="hidden sm:block">
                  <span className="block font-display text-3xl font-bold text-gold">
                    98%
                  </span>
                  <span className="text-sm text-white/50">Clientes satisfeitos</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.3}
            direction="left"
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className="relative flex overflow-hidden rounded-sm shadow-2xl shadow-black/30">
                <div className="w-3 shrink-0 bg-gold sm:w-4" />
                <div className="relative aspect-[4/5] flex-1 bg-navy-light">
                  <ProfileImage
                    src="/images/hero.png"
                    alt={`${siteConfig.lawyer.fullName} — Advogado`}
                    priority
                    imageClassName="object-cover object-center"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 rounded-sm bg-gold px-6 py-4 shadow-xl shadow-gold/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="block text-xs font-semibold tracking-widest text-navy/60 uppercase">
                  Especialista em
                </span>
                <span className="font-display text-lg font-bold text-navy">
                  Direito Civil
                </span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 transition-colors hover:text-gold"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
