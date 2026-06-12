"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { weddingData } from "@/data/wedding";
import { motion } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <motion.section
      id="gallery"
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Our Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Prewedding Gallery
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {weddingData.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="
                group
                relative
                aspect-[3/4]
                overflow-hidden
                rounded-2xl
              "
            >
              <Image
                src={image}
                alt={`Gallery ${index}`}
                width={500}
                height={700}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />
            </button>
          ))}
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() =>
            setSelectedImage(null)
          }
        >
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
}