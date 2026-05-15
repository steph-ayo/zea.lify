import { useState } from "react";
import type { Product } from "../types";
import { useCart } from "../context/useCart";

const fmt = (n: number) => `₦${n.toLocaleString("en-NG")}`;

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch({ type: "ADD", product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-1">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-zinc-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-orange-400 text-black text-xs font-black px-2 py-1 rounded-full uppercase">
            {product.tag}
          </span>
        )}
      </div>

      {/* Product details */}
      <div className="p-2">
        <p className="text-xs text-orange-400 font-bold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="text-white font-bold text-sm mb-2 leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-white font-black text-base">
            {fmt(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className={`text-xs font-black px-3 py-2 rounded-full transition-all duration-300 ${
              added
                ? "bg-green-400 text-black scale-95"
                : "bg-orange-400 hover:bg-orange-500 text-black"
            }`}
          >
            {added ? "✓ Added" : "+ Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
