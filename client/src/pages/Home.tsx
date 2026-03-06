import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Coffee,
  Dumbbell,
  Factory,
  Globe2,
  Package,
  Route,
  PackageSearch,
  Plane,
  Send,
  Ship,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Zap,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { NetworkBackground } from "@/components/NetworkBackground";
import { TiltCard } from "@/components/TiltCard";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { useToast } from "@/hooks/use-toast";

const ShaderAnimation = lazy(() =>
  import("@/components/ui/shader-animation").then((m) => ({
    default: m.ShaderAnimation,
  }))
);

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? "contact@example.com";

const TESTIMONIAL_AUTHORS = [
  { name: "Ava Green", username: "@ava", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop" },
  { name: "Ana Miller", username: "@ana", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop" },
  { name: "Mateo Rossi", username: "@mat", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop" },
  { name: "Maya Patel", username: "@maya", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop" },
  { name: "Noah Smith", username: "@noah", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop" },
  { name: "Lucas Stone", username: "@luc", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop" },
  { name: "Haruto Sato", username: "@haru", img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&fit=crop" },
  { name: "Emma Lee", username: "@emma", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop" },
  { name: "Carlos Ray", username: "@carl", img: "https://images.unsplash.com/photo-1502685104226-ee32379eefbe?w=96&h=96&fit=crop" },
];

function getContactFormSchema(
  t: { validation: { required: string; invalidEmail: string } }
) {
  return z.object({
    name: z.string().min(1, t.validation.required),
    email: z.string().email(t.validation.invalidEmail),
    message: z.string().min(1, t.validation.required),
  });
}
type ContactFormValues = z.infer<ReturnType<typeof getContactFormSchema>>;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const WORD_ROTATION_INTERVAL_MS = 2000;

export default function Home() {
  const { lang, setLang, t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const rotatingWords = useMemo(() => t.hero.rotatingWords as unknown as string[], [t]);
  const [wordIndex, setWordIndex] = useState(0);

  const navItems = useMemo(() => [
    { name: t.nav.services, url: "#cargo", icon: Route },
    { name: t.nav.routes, url: "#china", icon: ShoppingCart },
    { name: t.nav.sourcing, url: "#currency", icon: CircleDollarSign },
    { name: t.nav.export, url: "#export", icon: Ship },
    { name: t.nav.products, url: "#products", icon: Package },
  ], [t]);

  const testimonialsForSection = useMemo(
    () =>
      TESTIMONIAL_AUTHORS.map((author, i) => ({
        author: {
          name: author.name,
          handle: author.username,
          avatar: author.img,
        },
        text: t.testimonials.items[i].body,
      })),
    [t]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, WORD_ROTATION_INTERVAL_MS);
    return () => clearTimeout(timeout);
  }, [wordIndex, rotatingWords]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="noise-overlay" />

      <div className="fixed top-0 left-0 w-full z-50">
        <nav className="px-6 py-3 flex justify-center">
          <NavBar items={navItems} />
        </nav>
      </div>

      <button
        type="button"
        onClick={() => setLang(lang === "ru" ? "en" : "ru")}
        aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
        className="fixed bottom-6 right-6 z-50 size-12 rounded-full border border-foreground/10 bg-background/80 backdrop-blur-md shadow-lg text-sm font-medium text-foreground hover:bg-background/90 transition-colors flex items-center justify-center"
      >
        {lang === "ru" ? "RUS" : "ENG"}
      </button>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Suspense
          fallback={
            <div className="absolute inset-0 w-full h-full pointer-events-none" />
          }
        >
          <ShaderAnimation className="absolute inset-0 w-full h-full pointer-events-none" />
        </Suspense>
        <NetworkBackground />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                {t.hero.badge}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
              {t.hero.title}
            </h1>
            <div className="relative h-[1.2em] text-5xl md:text-7xl lg:text-8xl font-semibold overflow-hidden mt-2">
              {rotatingWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="absolute inset-x-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent text-glow text-center"
                  initial={{ opacity: 0, y: "100%" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    wordIndex === index
                      ? { y: "0%", opacity: 1 }
                      : { y: wordIndex > index ? "-100%" : "100%", opacity: 0 }
                  }
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() =>
                document.getElementById("cargo")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              {t.hero.exploreServices}
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-xl font-semibold glass-panel hover:bg-foreground/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              {t.hero.getStarted}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Currencies Animation */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { sym: "$", x: "10%", delay: 0 },
            { sym: "€", x: "85%", delay: 2 },
            { sym: "¥", x: "20%", delay: 4 },
            { sym: "₽", x: "75%", delay: 6 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute bottom-[-10%] text-6xl font-display font-bold text-foreground/5"
              style={{ left: item.x }}
              animate={{
                y: ["0vh", "-120vh"],
                rotate: [0, 360],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
            >
              {item.sym}
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 border-y border-border/50 bg-foreground/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/50 text-center"
          >
            <motion.div variants={fadeInUp} className="p-4">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                <AnimatedCounter target={5} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {t.stats.years}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-4">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter target={20} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {t.stats.partners}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-4">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                <AnimatedCounter target={10} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {t.stats.countries}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CARGO SECTION */}
      <section id="cargo" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.cargo.title} <span className="text-primary">{t.cargo.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.cargo.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Truck, title: t.cargo.auto, desc: t.cargo.autoDesc },
              { icon: Plane, title: t.cargo.air, desc: t.cargo.airDesc },
              { icon: Zap, title: t.cargo.express, desc: t.cargo.expressDesc },
              { icon: ShieldCheck, title: t.cargo.customs, desc: t.cargo.customsDesc },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TiltCard className="h-full p-8 flex flex-col items-start text-left border-t border-foreground/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Cases section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-panel rounded-3xl p-8 md:p-12 border-t border-foreground/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {t.cargo.cases.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h4 className="text-xl font-bold mb-2">{t.cargo.cases.case1}</h4>
                <p className="text-muted-foreground">{t.cargo.cases.case1desc}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                <h4 className="text-xl font-bold mb-2">{t.cargo.cases.case2}</h4>
                <p className="text-muted-foreground">{t.cargo.cases.case2desc}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-lg glass-panel hover:bg-foreground/10 transition-all duration-300">
                {t.cargo.cases.viewAll}
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 group"
              >
                {t.cargo.cases.getService}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHINA SOURCING SECTION */}
      <section id="china" className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              {t.china.title} <span className="text-accent">{t.china.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center">
              {t.china.subtitle}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">{t.china.why.title}</h3>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: CheckCircle2, text: t.china.why.experience },
                { icon: ShieldCheck, text: t.china.why.quality },
                { icon: BarChart3, text: t.china.why.prices },
                { icon: Truck, text: t.china.why.logistics },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: PackageSearch, title: t.china.services.sourcing },
                { icon: ShieldCheck, title: t.china.services.verification },
                { icon: ShoppingCart, title: t.china.services.negotiation },
                { icon: Send, title: t.china.services.shipping },
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="p-4 rounded-xl glass-panel flex items-center gap-3"
                >
                  <service.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">{service.title}</span>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 group"
            >
              {t.china.getService}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CURRENCY SECTION */}
      <section id="currency" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.currency.title} <span className="text-primary">{t.currency.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t.currency.subtitle}</p>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-bold">{t.currency.experience}</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {[
              { 
                icon: ArrowRight, 
                title: t.currency.services.exchange, 
                desc: t.currency.services.exchangeDesc 
              },
              { 
                icon: Send, 
                title: t.currency.services.transfer, 
                desc: t.currency.services.transferDesc 
              },
              { 
                icon: ShieldCheck, 
                title: t.currency.services.consulting, 
                desc: t.currency.services.consultingDesc 
              },
              { 
                icon: BarChart3, 
                title: t.currency.services.hedging, 
                desc: t.currency.services.hedgingDesc 
              },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TiltCard className="h-full p-8 flex flex-col items-start text-left border-t border-foreground/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8">{lang === 'ru' ? 'Поддерживаемые валюты' : 'Supported Currencies'}</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {t.currency.currencies.map((currency: string, i: number) => (
                <motion.div
                  key={currency}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-lg"
                >
                  {currency}
                </motion.div>
              ))}
            </div>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 group mx-auto"
            >
              {t.currency.getService}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* EXPORT/IMPORT SECTION */}
      <section id="export" className="py-20 bg-black/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.exportimport.title} / <span className="text-accent">{t.exportimport.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.exportimport.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8">{t.exportimport.partners.title}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter target={20} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">{t.exportimport.partners.factories}</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                  <div className="text-3xl font-bold text-accent mb-2">
                    <AnimatedCounter target={50} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">{t.exportimport.partners.companies}</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                  <div className="text-sm text-muted-foreground">{t.exportimport.partners.turnover}</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl glass-panel mb-8">
                <h4 className="text-lg font-bold mb-4">{lang === 'ru' ? 'Наша услуга:' : 'Our Service:'}</h4>
                <p className="text-muted-foreground">{t.exportimport.service}</p>
              </div>

              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 group"
              >
                {t.exportimport.getService}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">{lang === 'ru' ? 'Наши преимущества' : 'Our Advantages'}</h3>
              <div className="space-y-4">
                {[
                  { icon: Globe2, text: t.exportimport.advantages.network },
                  { icon: CheckCircle2, text: t.exportimport.advantages.experience },
                  { icon: ShieldCheck, text: t.exportimport.advantages.reliability },
                  { icon: Send, text: t.exportimport.advantages.support },
                ].map((advantage, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-panel"
                  >
                    <advantage.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{advantage.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 bg-black/50 border-y border-border/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.products.title} <span className="text-accent">{t.products.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.products.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Dumbbell,
                name: t.products.nutrition,
                desc: t.products.nutritionDesc,
                color: "from-orange-500 to-red-600",
              },
              {
                icon: Coffee,
                name: t.products.coffee,
                desc: t.products.coffeeDesc,
                color: "from-amber-700 to-stone-900",
              },
              {
                icon: Zap,
                name: t.products.drinks,
                desc: t.products.drinksDesc,
                color: "from-primary to-accent",
              },
            ].map((product, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TiltCard className="h-full p-1 group">
                  <div className={`absolute inset-0 rounded-2xl opacity-50 bg-gradient-to-br ${product.color} blur-xl group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className="relative h-full bg-card rounded-xl p-8 border border-foreground/10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-foreground/5 flex items-center justify-center mb-6 shadow-inner">
                      <product.icon className="w-10 h-10 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-3">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 group mx-auto"
            >
              {t.products.getService}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <div className="relative z-10">
        <TestimonialsSection
          title={t.testimonials.title}
          titleAccent={t.testimonials.titleAccent}
          description={t.testimonials.subtitle}
          testimonials={testimonialsForSection}
        />
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 md:p-12 border-t border-l border-foreground/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.contact.title} <br />
                  <span className="text-primary">{t.contact.titleAccent}</span>
                </h2>
                <p className="text-muted-foreground mb-8">{t.contact.subtitle}</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{t.contact.secure}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{t.contact.support}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{t.contact.customRouting}</span>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground relative z-10 bg-background">
        <p>{t.footer.replace("{year}", String(new Date().getFullYear()))}</p>
      </footer>
    </div>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const schema = getContactFormSchema(t);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    const subject = encodeURIComponent(`Contact from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n— ${data.name} (${data.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
    toast({
      title: t.form.toastTitle,
      description: t.form.toastDescription,
      className: "bg-card border-primary/50 text-foreground",
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
          {t.form.identification}
        </label>
        <input
          {...form.register("name")}
          className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder={t.form.placeholderName}
        />
        {form.formState.errors.name && (
          <span className="text-destructive text-xs mt-1 block">
            {form.formState.errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
          {t.form.commsLink}
        </label>
        <input
          {...form.register("email")}
          type="email"
          className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder={t.form.placeholderEmail}
        />
        {form.formState.errors.email && (
          <span className="text-destructive text-xs mt-1 block">
            {form.formState.errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
          {t.form.payload}
        </label>
        <textarea
          {...form.register("message")}
          rows={4}
          className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          placeholder={t.form.placeholderMessage}
        />
        {form.formState.errors.message && (
          <span className="text-destructive text-xs mt-1 block">
            {form.formState.errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
      >
        {t.form.submit}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
