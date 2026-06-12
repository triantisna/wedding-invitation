import { CalendarDays, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { weddingData } from "@/data/wedding";
import { motion } from "framer-motion";

export default function Event() {
  const { event } = weddingData;

  return (
    <motion.section
      id="event"
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Wedding Event
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Save The Date
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Akad */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center">
              <CalendarDays className="h-10 w-10" />

              <h3 className="mt-6 text-3xl font-bold">
                Akad Nikah
              </h3>

              <p className="mt-4 font-medium">
                {event.akad.date}
              </p>

              <p>{event.akad.time}</p>

              <div className="mt-6">
                <MapPin className="mx-auto h-6 w-6" />

                <p className="mt-3 font-semibold">
                  {event.akad.location}
                </p>

                <p className="mt-2 text-gray-500">
                  {event.akad.address}
                </p>
              </div>
            </div>
          </Card>

          {/* Resepsi */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center">
              <CalendarDays className="h-10 w-10" />

              <h3 className="mt-6 text-3xl font-bold">
                Resepsi
              </h3>

              <p className="mt-4 font-medium">
                {event.reception.date}
              </p>

              <p>{event.reception.time}</p>

              <div className="mt-6">
                <MapPin className="mx-auto h-6 w-6" />

                <p className="mt-3 font-semibold">
                  {event.reception.location}
                </p>

                <p className="mt-2 text-gray-500">
                  {event.reception.address}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka Google Maps
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}