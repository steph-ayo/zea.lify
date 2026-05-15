import { useCart } from "../context/useCart";

const fmt = (n: number) => `₦${n.toLocaleString("en-NG")}`;

interface Props {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({ open, onClose, onCheckout }: Props) {
  const { state, dispatch } = useCart();
  const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-zinc-950 z-50 flex flex-col border-l border-zinc-800 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <h2 className="text-white font-black text-lg">Your Cart 🛍</h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {state.items.length === 0 ? (
            <div className="text-center mt-20">
              <p className="text-5xl mb-4">🧺</p>
              <p className="text-zinc-500 font-medium">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-4 text-orange-400 text-sm font-bold hover:underline"
              >
                Keep Shopping →
              </button>
            </div>
          ) : (
            state.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-zinc-900 rounded-xl p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-bold truncate">
                    {item.name}
                  </p>
                  <p className="text-orange-400 text-sm font-black">
                    {fmt(item.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch({ type: "DEC", id: item.id })}
                      className="w-6 h-6 bg-zinc-700 hover:bg-zinc-600 rounded-full text-white text-xs flex items-center justify-center font-bold"
                    >
                      −
                    </button>
                    <span className="text-white text-sm font-bold w-4 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => dispatch({ type: "INC", id: item.id })}
                      className="w-6 h-6 bg-zinc-700 hover:bg-zinc-600 rounded-full text-white text-xs flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                      className="ml-auto text-zinc-500 hover:text-red-400 text-xs font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {state.items.length > 0 && (
          <div className="p-5 border-t border-zinc-800">
            <div className="flex justify-between text-white font-black text-lg mb-4">
              <span>Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black py-4 rounded-full text-sm uppercase tracking-wider transition-all"
            >
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
