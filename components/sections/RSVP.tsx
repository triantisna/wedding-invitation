import { Button } from "@/components/ui/button";
import { weddingData } from "@/data/wedding";
import { motion } from "framer-motion";

export default function RSVP() {
  const message = encodeURIComponent(
    `Halo Trian & Pasangan,

Saya ingin mengonfirmasi kehadiran pada acara pernikahan Anda.

Terima kasih.`
  );

  const whatsappUrl =
    `https://wa.me/${weddingData.contact.whatsapp}?text=${message}`;

  return (
    <motion.section
      id="rsvp"
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
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          RSVP
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Konfirmasi Kehadiran
        </h2>

        <p className="mt-6 text-gray-600">
          Mohon konfirmasi kehadiran Anda melalui
          WhatsApp agar kami dapat mempersiapkan
          acara dengan lebih baik.
        </p>

        <Button
          asChild
          className="mt-10"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konfirmasi via WhatsApp
          </a>
        </Button>
      </div>
    </motion.section>
  );
}