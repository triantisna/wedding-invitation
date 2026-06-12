"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import Cover from "@/components/sections/Cover";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import { weddingData } from "@/data/wedding";
import Quote from "@/components/sections/Quote";
import Couple from "@/components/sections/Couple";
import LoveStory from "@/components/sections/LoveStory";
import Event from "@/components/sections/Event";
import Gallery from "@/components/sections/Gallery";
import Gift from "@/components/sections/Gift";
import RSVP from "@/components/sections/RSVP";
import Wishes from "@/components/sections/Wishes";
import Footer from "@/components/sections/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  const [opened, setOpened] = useState(false);

  const searchParams = useSearchParams();

  const guestName =
    searchParams.get("to") || "Tamu Undangan";

  return (
    <>
      <MusicPlayer playing={opened} />

      {!opened && (
        <Cover
          guestName={guestName}
          onOpen={() => setOpened(true)}
        />
      )}

      {opened && <FloatingNav />}

      <main>
        <Hero />

        <Quote />

        <Countdown
          targetDate={weddingData.weddingDate}
        />

        <Couple />

        <LoveStory />

        <Event />

        <Gallery />

        <Gift />

        <RSVP />

        <Wishes />

        <Footer />
      </main>
    </>
  );
}