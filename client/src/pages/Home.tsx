import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Globe2, Anchor, Plane, Truck, Zap, 
  MapPin, ArrowRight, PackageSearch, ShieldCheck, 
  ShoppingCart, Send, Coffee, Battery, Dumbbell,
  BarChart3, ChevronRight, CheckCircle2
} from "lucide-react";
import { NetworkBackground } from "@/components/NetworkBackground";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useSubmitContact } from "@/hooks/use-contact";
import { api } from "@shared/routes";

// Schema for contact form
const contactFormSchema = api.contact.create.input;
type ContactFormValues = z.infer<typeof contactFormSchema>;

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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="noise-overlay" />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-x-0 border-t-0 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe2 className="w-8 h-8 text-primary" />
          <span className="font-display font-bold text-xl tracking-wide">ASSAYF<span className="text-primary">.LOGISTICS</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#route" className="hover:text-primary transition-colors">Routes</a>
          <a href="#sourcing" className="hover:text-primary transition-colors">Sourcing</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
        </div>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-sm"
        >
          Initiate Contact
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Global Nodes Active</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Orchestrating <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent text-glow">
              Global Trade
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Seamless supply chain architecture connecting Turkey, Russia, Tajikistan, and China. Precision sourcing, unyielding logistics.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => document.getElementById('route')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Routes
            </button>
            <button 
              onClick={() => document.getElementById('sourcing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-semibold glass-panel hover:bg-white/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              China Sourcing
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
              className="absolute bottom-[-10%] text-6xl font-display font-bold text-white/5"
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
      <section className="py-20 border-y border-border/50 bg-white/[0.02] relative z-10">
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
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years of Excellence</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-4">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter target={20} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Global Partners</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-4">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                <AnimatedCounter target={10} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Countries Served</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Omnichannel <span className="text-primary">Logistics</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive freight solutions engineered for speed, security, and absolute reliability.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Anchor, title: "Ocean Freight", desc: "High-volume cargo via optimized maritime channels with real-time tracking." },
              { icon: Plane, title: "Air Cargo", desc: "Expedited aerial transport for time-critical and high-value assets." },
              { icon: Truck, title: "Ground Fleet", desc: "Extensive overland network navigating complex continental routes." },
              { icon: ShieldCheck, title: "Customs Clearance", desc: "Frictionless border navigation managed by regulatory experts." },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TiltCard className="h-full p-8 flex flex-col items-start text-left border-t border-white/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CARGO ROUTE SECTION */}
      <section id="route" className="py-32 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Strategic <span className="text-accent">Corridors</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center">Visualizing our primary transit artery connecting key Eurasian markets.</p>
          </motion.div>

          <div className="relative py-20 px-4 max-w-4xl mx-auto">
            {/* Desktop Route Line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-border -translate-y-1/2">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Traveling dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Truck className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 text-primary" />
              </motion.div>
            </div>

            {/* Mobile Route Line */}
            <div className="md:hidden absolute left-8 top-[10%] bottom-[10%] w-0.5 bg-border">
              <motion.div 
                className="w-full bg-gradient-to-b from-primary to-accent"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-0">
              {[
                { country: "Turkey", desc: "Origin & Consolidation", delay: 0 },
                { country: "Russia", desc: "Transit Hub", delay: 0.5 },
                { country: "Tajikistan", desc: "Final Destination", delay: 1 },
              ].map((node, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: node.delay, duration: 0.5 }}
                  className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 relative group"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,180,255,0.3)] group-hover:scale-110 transition-transform duration-300 z-10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display">{node.country}</h3>
                    <p className="text-sm text-muted-foreground">{node.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHINA SOURCING SECTION */}
      <section id="sourcing" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">China <span className="text-primary">Sourcing</span> Protocol</h2>
              <p className="text-muted-foreground mb-8 text-lg">We eliminate the risk of international procurement. Our on-ground teams verify, negotiate, and secure your supply chain directly from the factory floor.</p>
              
              <div className="space-y-6">
                {[
                  { icon: PackageSearch, title: "Supplier Discovery", desc: "Identifying top-tier manufacturers meeting exact specifications." },
                  { icon: ShieldCheck, title: "Factory Verification", desc: "On-site auditing to ensure quality standards and capacity." },
                  { icon: ShoppingCart, title: "Procurement & Negotiation", desc: "Securing favorable terms and overseeing production." },
                  { icon: Send, title: "Export Logistics", desc: "Managing customs and freight from port to destination." },
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              {/* Abstract representation of sourcing network */}
              <div className="absolute inset-0 glass-panel rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50 mix-blend-overlay" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-[150%] h-[150%] absolute"
                  style={{
                    background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, hsl(var(--primary)/0.2) 90deg, transparent 180deg)"
                  }}
                />
                <div className="relative z-10 w-48 h-48 rounded-full border border-white/20 flex items-center justify-center bg-background/80 backdrop-blur-xl shadow-2xl">
                  <BarChart3 className="w-16 h-16 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-32 bg-black/30 border-y border-border/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Assayf <span className="text-accent">Products</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our proprietary line of premium FMCG goods, distributed globally.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Dumbbell, name: "Assayf Protein Bar", desc: "High-performance nutrition engineered for athletes.", color: "from-orange-500 to-red-600" },
              { icon: Coffee, name: "Assayf Premium Coffee", desc: "Ethically sourced, precision-roasted beans.", color: "from-amber-700 to-stone-900" },
              { icon: Zap, name: "Assayf Energy Drink", desc: "Sustained focus and vitality matrix.", color: "from-cyan-400 to-blue-600" },
            ].map((product, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TiltCard className="h-full p-1 group">
                  <div className={`absolute inset-0 rounded-2xl opacity-50 bg-gradient-to-br ${product.color} blur-xl group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className="relative h-full bg-card rounded-xl p-8 border border-white/10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-inner">
                      <product.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-3">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">{product.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 md:p-12 border-t border-l border-white/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Establish <br/><span className="text-primary">Connection</span></h2>
                <p className="text-muted-foreground mb-8">Deploy our logistics infrastructure for your enterprise. Send us your requirements.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Secure end-to-end encryption</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>24/7 dedicated support team</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Custom routing proposals</span>
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
        <p>© {new Date().getFullYear()} Assayf Logistics. All systems operational.</p>
      </footer>
    </div>
  );
}

function ContactForm() {
  const submitContact = useSubmitContact();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    submitContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Identification</label>
        <input 
          {...form.register("name")}
          className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder="Enterprise / Name"
        />
        {form.formState.errors.name && (
          <span className="text-destructive text-xs mt-1 block">{form.formState.errors.name.message}</span>
        )}
      </div>
      
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Comms Link</label>
        <input 
          {...form.register("email")}
          type="email"
          className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder="email@domain.com"
        />
        {form.formState.errors.email && (
          <span className="text-destructive text-xs mt-1 block">{form.formState.errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Payload</label>
        <textarea 
          {...form.register("message")}
          rows={4}
          className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          placeholder="Define your logistics requirements..."
        />
        {form.formState.errors.message && (
          <span className="text-destructive text-xs mt-1 block">{form.formState.errors.message.message}</span>
        )}
      </div>

      <button 
        type="submit"
        disabled={submitContact.isPending}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {submitContact.isPending ? "Transmitting..." : "Transmit Protocol"}
        {!submitContact.isPending && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </button>
    </form>
  );
}
