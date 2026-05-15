import { useCart } from "../context/useCart";
import { CATEGORIES } from "../data/products";
import MusicToggle from "./MusicToggle";

interface Props {
  onCartOpen: () => void;
}

export default function Nav({ onCartOpen }: Props) {
  const { state } = useCart();
  const total = state.items.reduce((s, i) => s + i.qty, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white flex items-center justify-between px-6 py-4 border-b border-zinc-800">
      <span className="text-xl font-black tracking-tight">
        Zea<span className="text-orange-400">.lify</span>
      </span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
        {CATEGORIES.map((c) => (
          <a
            key={c}
            href="#catalogue"
            className="hover:text-orange-400 transition-colors"
          >
            {c}
          </a>
        ))}
      </div>

      <a
        href="#custom-branding"
        className="hover:text-orange-400 transition-colors"
      >
        Custom Branding
      </a>

      <div className="flex items-center gap-4">
        <MusicToggle />

        <button
          onClick={onCartOpen}
          className="relative flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-black font-bold text-sm px-4 py-2 rounded-full transition-colors"
        >
          <span>🛍</span> Cart
          {total > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {total}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
