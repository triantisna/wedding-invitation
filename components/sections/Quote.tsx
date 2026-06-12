import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.section
      className="bg-stone-50 py-16 md:py-24"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-lg italic leading-relaxed text-gray-700">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah
          Dia menciptakan untukmu pasangan hidup dari
          jenismu sendiri, supaya kamu merasa tenteram
          kepadanya, dan dijadikan-Nya di antaramu rasa
          kasih dan sayang."
        </p>

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-gray-500">
          QS. Ar-Rum : 21
        </p>
      </div>
    </motion.section>
  );
}