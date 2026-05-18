import { BRANDS } from "../data/branding";

export default function CustomBranding() {
  return (
    <section id="custom-branding" className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <span className="inline-block text-orange-400 text-sm font-bold tracking-widest uppercase border border-orange-400/30 px-4 py-1 rounded-full mb-4">
            Our Core Service
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Custom Branding
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We don't just design apparel, we craft wearable identities. Every
            thread, tone, and texture tells your brand's story.
          </p>
          {/* <p className="mt-2 text-zinc-500 italic text-sm max-w-xl mx-auto">
            "Turn your vision into a lifestyle — not just a logo."
          </p> */}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-14">
          {BRANDS.map((brand, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl border border-zinc-800 hover:border-orange-400/50 transition-all duration-300 aspect-square"
            >
              <img
                src={brand.image}
                alt={`Custom branding ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                <span className="text-xs text-orange-400 font-black uppercase tracking-widest">
                  Zea.lify Exclusive
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-6">
            Ready to wear your brand? Let's build something iconic together.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://wa.me/2348137766130"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-400 hover:bg-orange-500 text-black font-black px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105"
            >
              WhatsApp Us 💬
            </a>
            <a
              href="mailto:zezemata2020@gmail.com"
              className="border border-zinc-700 hover:border-orange-400 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all"
            >
              Send an Email →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
