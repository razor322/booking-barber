import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Scissors, Zap, Sparkles, Feather, Crown } from "lucide-react";
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
      description: "Expert styling tailored to your face shape and lifestyle.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" />,
      icon: <Scissors className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Hot Towel Shave",
      description: "Classic straight razor shave with hot towel treatment.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" />,
      icon: <Feather className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Beard Grooming",
      description: "Complete beard care including trim, shape, and oil treatment.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" />,
      icon: <Crown className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Express Style",
      description: "Quick styling refresh for those on the go.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" />,
      icon: <Zap className="h-6 w-6 text-blue-600" />,
    },
     {
      title: "Premium Experience",
      description: "The full package: haircut, shave, facial, and massage.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" />,
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    },
  ];

  const testimonials = [
    {
      quote: "The best haircut I've ever had. The attention to detail is unmatched.",
      name: "Alex Johnson",
      title: "Software Engineer",
    },
    {
      quote: "Incredible atmosphere and professional service. Highly recommended.",
      name: "Michael Chen",
      title: "Architect",
    },
    {
      quote: "Finally found a barber who understands exactly what I want.",
      name: "Sarah Williams",
      title: "Designer",
    },
    {
      quote: "Top-notch service from start to finish. I'll definitely be back.",
      name: "David Smith",
      title: "Entrepreneur",
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
            <h1 ref={heroTextRef} className="text-5xl md:text-8xl font-bold text-slate-900 text-center tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-700 to-blue-400">
                Masterful Cuts
              </span>
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

      {/* Services Section */}
      <div className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <BentoGrid>
            {services.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-slate-50 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
            Client <span className="text-blue-600">Stories</span>
          </h2>
          <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>

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
