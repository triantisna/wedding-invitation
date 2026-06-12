import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative h-screen overflow-hidden"
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <p className="uppercase tracking-[0.4em] text-sm">
          The Wedding Of
        </p>

        <h1 className="font-wedding mt-6 text-6xl md:text-8xl">
          Trian
        </h1>

        <p className="text-3xl my-2">&</p>

        <h1 className="font-wedding text-6xl md:text-8xl">
          Salzahara
        </h1>

        <p className="mt-8 text-lg md:text-xl">
          12 Agustus 2027
        </p>

        <div className="mt-16 animate-bounce">
          ↓
        </div>
      </div>
    </motion.section>
  );
}