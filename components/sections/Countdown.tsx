"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({
  targetDate,
}: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference =
      new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [mounted, setMounted] =
  useState(false);

const [timeLeft, setTimeLeft] =
  useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

useEffect(() => {
  setMounted(true);

  setTimeLeft(calculateTimeLeft());

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

if (!mounted) {
  return null;
}

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
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Menuju Hari Bahagia
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Countdown Wedding
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <TimeCard
            value={timeLeft.days}
            label="Hari"
          />

          <TimeCard
            value={timeLeft.hours}
            label="Jam"
          />

          <TimeCard
            value={timeLeft.minutes}
            label="Menit"
          />

          <TimeCard
            value={timeLeft.seconds}
            label="Detik"
          />
        </div>
      </div>
    </motion.section>
  );
}

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="text-4xl font-bold">
        {value}
      </div>

      <div className="mt-2 text-sm text-gray-500">
        {label}
      </div>
    </div>
  );
}