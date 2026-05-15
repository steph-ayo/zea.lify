import { MODELS } from "../data/models";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 pt-25 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-black to-black" />
      <div className="relative z-10 max-w-3xl">
        <span className="inline-block text-orange-400 text-sm font-bold tracking-widest uppercase mb-4 border border-orange-400/30 px-4 py-1 rounded-full">
          New Collection Drop
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
          Wear Your
          <br />
          <span className="text-orange-400">Zeal.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Premium tees, hoodies & caps — crafted with comfort, built for style,
          made to inspire.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#catalogue"
            className="bg-orange-400 hover:bg-orange-500 text-black font-black px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105"
          >
            Shop Now
          </a>
          <a
            href="#catalogue"
            className="border border-zinc-700 hover:border-orange-400 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all"
          >
            Browse Catalogue
          </a>
        </div>
      </div>

      {/* SCROLLING SECTION */}
      <div className="relative z-10 mt-20 w-full max-w-5xl overflow-hidden">
        <div className="flex gap-6 w-max animate-slider">
          {[...MODELS, ...MODELS].map((m, i) => (
            <div
              key={i}
              className="w-[220px] md:w-[260px] h-[260px] md:h-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
