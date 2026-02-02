import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RotatingText } from "@/components/ui/rotating-text";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scissors, Sparkles, Feather, Crown, Instagram, Twitter, Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Precision Cut",
      description: "Expert styling tailored to your face shape and lifestyle. We use the latest techniques to ensure you look your best.",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
      icon: <Scissors className="h-6 w-6 text-blue-600" />,
      className: "md:col-span-2",
    },
    {
      title: "Hot Towel Shave",
      description: "Classic straight razor shave with hot towel treatment.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
      icon: <Feather className="h-6 w-6 text-blue-600" />,
      className: "md:col-span-1",
    },
    {
      title: "Beard Grooming",
      description: "Complete beard care including trim, shape, and oil treatment.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop", // Reusing vibe image for now or finding another
      icon: <Crown className="h-6 w-6 text-blue-600" />,
      className: "md:col-span-1",
    },
    {
      title: "Premium Experience",
      description: "The full package: haircut, shave, facial, and massage. Immerse yourself in total relaxation and luxury.",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
      className: "md:col-span-2",
    },
  ];

  const testimonials = [
    {
      quote: "The best haircut I've ever had. The attention to detail is unmatched. I've been coming here for years and they never disappoint.",
      name: "Alex Johnson",
      title: "@alexj_dev",
    },
    {
      quote: "Incredible atmosphere and professional service. Highly recommended. It's not just a haircut, it's an experience.",
      name: "Michael Chen",
      title: "@mike_arch",
    },
    {
      quote: "Finally found a barber who understands exactly what I want. The hot towel shave is absolutely worth it.",
      name: "Sarah Williams",
      title: "@sarah_designs",
    },
    {
      quote: "Top-notch service from start to finish. I'll definitely be back. The team is friendly and skilled.",
      name: "David Smith",
      title: "@dave_ent",
    },
     {
      quote: "A truly premium experience. The attention to detail and the quality of the products used are excellent.",
      name: "Emily Davis",
      title: "@emily_d",
    },
    {
      quote: "Best barbershop in the city hands down. Great vibes and even better cuts.",
      name: "Chris Wilson",
      title: "@chris_w",
    },
  ];

  const faqs = [
    {
      question: "Do I need an appointment?",
      answer: "We highly recommend booking an appointment to ensure you get your preferred time and barber, but we do accept walk-ins based on availability.",
    },
    {
      question: "What products do you use?",
      answer: "We use only premium, high-quality grooming products from top brands to ensure the best care for your hair and skin.",
    },
    {
      question: "How long does a service take?",
      answer: "Service times vary. A standard haircut is about 30 minutes, while a full package can take up to an hour. Check our booking page for details.",
    },
    {
      question: "Can I cancel my appointment?",
      answer: "Yes, you can cancel or reschedule up to 24 hours in advance without any fee.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
      <style>{`
        @keyframes shimmer {
          from { background-position: 0 0; }
          to { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen w-full">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <h1 ref={heroTextRef} className="text-4xl md:text-7xl font-bold text-slate-900 text-center tracking-tight leading-tight">
              Experience{" "}
              <span className="inline-block align-bottom h-[1.2em] w-[4.5em] text-left">
                  <RotatingText words={["Premium", "Modern", "Timeless"]} />
              </span>
              <br />
              Grooming.
            </h1>
            <p className="font-light text-xl md:text-2xl text-slate-600 py-4 max-w-lg text-center">
              Elevate your style with precision grooming and luxury service.
            </p>
            <button
                onClick={() => navigate('/book')}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
            >
              Book Your Appointment
            </button>
          </motion.div>
        </AuroraBackground>
      </div>

      {/* Services Section - Bento Grid */}
      <div className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {services.map((service, i) => (
              <BentoGridItem
                key={i}
                title={service.title}
                description={service.description}
                header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-110"
                        />
                    </div>
                }
                icon={service.icon}
                className={service.className}
              />
            ))}
          </BentoGrid>
        </div>
      </div>

      {/* Testimonials Section - Masonry Grid */}
      <div className="py-20 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
            Client <span className="text-blue-600">Stories</span>
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="break-inside-avoid bg-white p-6 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-slate-600 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                   <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {testimonial.name.charAt(0)}
                   </div>
                   <div>
                        <h4 className="font-bold text-slate-800 text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-blue-500 font-medium">{testimonial.title}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white relative z-10">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
                Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left text-lg font-medium text-slate-800">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    MASTERFUL CUTS
                </h3>
                <p className="text-slate-400 mb-6">
                    Redefining the art of grooming with precision, style, and luxury.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-6 h-6"/></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-6 h-6"/></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-6 h-6"/></a>
                </div>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-6">Navigation</h4>
                <ul className="space-y-4 text-slate-400">
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Book Now</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-6">Quick Contact</h4>
                <div className="flex flex-col gap-4">
                    <input type="email" placeholder="Your Email" className="bg-slate-800 border-none rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none" />
                    <textarea placeholder="Message" rows={3} className="bg-slate-800 border-none rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Masterful Cuts. All rights reserved.
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-2xl rounded-2xl p-4 flex items-center justify-between">
            <div className="flex flex-col ml-2">
                <span className="font-bold text-slate-800">Ready for a fresh look?</span>
                <span className="text-xs text-slate-500">Book your slot today.</span>
            </div>
            <button
                onClick={() => navigate('/book')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 animate-shimmer bg-[linear-gradient(110deg,#2563eb,45%,#60a5fa,55%,#2563eb)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
                Book Now
            </button>
        </div>
      </div>
    </div>
  );
}
