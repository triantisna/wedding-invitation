import { Button } from "@/components/ui/button";
import { weddingData } from "@/data/wedding";

export default function Wishes() {
  const message = encodeURIComponent(
    `Halo Trian & Pasangan,

Selamat atas pernikahannya.

Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.`
  );

  const whatsappUrl =
    `https://wa.me/${weddingData.contact.whatsapp}?text=${message}`;

  return (
    <section id="wishes" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Wedding Wishes
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Kirim Ucapan
        </h2>

        <p className="mt-6 text-gray-600">
          Berikan doa dan ucapan terbaik untuk kami.
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
            Kirim Ucapan
          </a>
        </Button>
      </div>
    </section>
  );
}