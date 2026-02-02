import * as React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export const RotatingText = ({
  words,
  className,
  interval = 3000,
}: RotatingTextProps) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className={cn("inline-block relative overflow-hidden h-[1.2em] w-[4em] align-bottom", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-blue-600"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
