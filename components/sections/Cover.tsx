"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface CoverProps {
  guestName: string;
  onOpen: () => void;
}

export default function Cover({
  guestName,
  onOpen,
}: CoverProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/cover.jpg"
        alt="Wedding Cover"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-[0.4em]"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-wedding mt-4 text-5xl md:text-7xl"
        >
          Trian & Salzahara
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm uppercase tracking-wider opacity-80">
            Kepada Yth.
          </p>

          <p className="mt-2 text-xl font-semibold">
            {guestName}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            onClick={onOpen}
            className="mt-10 px-8 py-6 text-base"
          >
            Buka Undangan
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}