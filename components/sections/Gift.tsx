"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { weddingData } from "@/data/wedding";

export default function Gift() {
  const copyToClipboard = async (
    text: string
  ) => {
    await navigator.clipboard.writeText(text);

    console.log("Copied");
  };

  return (
    <section
      id="gift"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Wedding Gift
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Tanda Kasih
          </h2>

          <p className="mt-4 text-gray-600">
            Kehadiran dan doa restu Anda sudah
            menjadi hadiah terindah bagi kami.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {weddingData.gift.banks.map(
            (bank, index) => (
              <Card
                key={index}
                className="p-8 text-center"
              >
                <h3 className="text-3xl font-bold">
                  {bank.bank}
                </h3>

                <p className="mt-4 text-lg">
                  {bank.accountNumber}
                </p>

                <p className="mt-2 text-gray-500">
                  a.n {bank.accountName}
                </p>

                <Button
                  className="mt-6"
                  onClick={() =>
                    copyToClipboard(
                      bank.accountNumber
                    )
                  }
                >
                  Salin Rekening
                </Button>
              </Card>
            )
          )}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">
            QRIS
          </h3>

          <div className="mt-6 flex justify-center">
            <Image
              src={weddingData.gift.qris}
              alt="QRIS"
              width={300}
              height={300}
              className="rounded-2xl border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}