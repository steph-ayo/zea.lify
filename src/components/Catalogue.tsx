import { useState } from "react";
import type { Category } from "../types";
import { PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "./ProductCard";

export default function Catalogue() {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="catalogue" className="bg-black px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">
            The Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Shop the Catalogue
          </h2>
          <p className="text-zinc-400 mt-3">
            Every piece made to move with purpose.
          </p>
        </div>
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                active === c
                  ? "bg-orange-400 text-black"
                  : "border border-zinc-700 text-zinc-400 hover:border-orange-400 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
