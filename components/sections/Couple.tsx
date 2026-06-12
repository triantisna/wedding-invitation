import Image from "next/image";

import { weddingData } from "@/data/wedding";
import { motion } from "framer-motion";

export default function Couple() {
  const { groom, bride } = weddingData;

  return (
      <motion.section
        id="couple"
        className="bg-white py-16 md:py-24"
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
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Bride & Groom
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Mempelai
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Groom */}
          <div>
            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full">
              <Image
                src={groom.image}
                alt={groom.fullName}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="font-wedding mt-6 text-4xl">
              {groom.fullName}
            </h3>

            <p className="mt-2 text-gray-500">
              Putra dari
            </p>

            <p>
              Bapak {groom.father}
            </p>

            <p>
              Ibu {groom.mother}
            </p>
          </div>

          {/* Bride */}
          <div>
            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full">
              <Image
                src={bride.image}
                alt={bride.fullName}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="font-wedding mt-6 text-4xl">
              {bride.fullName}
            </h3>

            <p className="mt-2 text-gray-500">
              Putri dari
            </p>

            <p>
              Bapak {bride.father}
            </p>

            <p>
              Ibu {bride.mother}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}