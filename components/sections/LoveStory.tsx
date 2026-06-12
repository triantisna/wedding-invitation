import { weddingData } from "@/data/wedding";

export default function LoveStory() {
  return (
    <section id="love-story" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Our Journey
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Love Story
          </h2>
        </div>

        <div className="mt-16 space-y-10">
          {weddingData.loveStory.map(
            (story, index) => (
              <div
                key={index}
                className="relative border-l-2 border-stone-300 pl-8"
              >
                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-stone-700" />

                <span className="text-sm font-semibold text-stone-500">
                  {story.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {story.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}