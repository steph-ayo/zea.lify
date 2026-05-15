import type { Order } from "../types";

const fmt = (n: number) => `₦${n.toLocaleString("en-NG")}`;

interface Props {
  order: Order;
  onContinue: () => void;
}

export default function Confirmation({ order, onContinue }: Props) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 pt-20">
      <div className="max-w-md w-full text-center">
        <div className="text-7xl mb-6 animate-bounce">🎉</div>
        <h1 className="text-3xl font-black text-white mb-2">
          Order Confirmed!
        </h1>
        <p className="text-zinc-400 mb-8">
          Thanks{" "}
          <span className="text-orange-400 font-bold">
            {order.name.split(" ")[0]}
          </span>
          ! Your order is on its way.
        </p>
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 text-left mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400 text-sm">Order Ref</span>
            <span className="text-orange-400 font-black text-sm">
              {order.ref}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400 text-sm">Email</span>
            <span className="text-white text-sm">{order.email}</span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <span className="text-zinc-400 text-sm">Deliver to</span>
            <span className="text-white text-sm text-right max-w-xs">
              {order.address}
            </span>
          </div>
          <div className="border-t border-zinc-800 pt-4 space-y-2">
            {order.items.map((i) => (
              <div key={i.id} className="flex justify-between text-sm">
                <span className="text-zinc-400">
                  {i.name} ×{i.qty}
                </span>
                <span className="text-white font-bold">
                  {fmt(i.price * i.qty)}
                </span>
              </div>
            ))}
            <div className="flex justify-between font-black text-base pt-2 border-t border-zinc-800">
              <span className="text-white">Total Paid</span>
              <span className="text-orange-400">{fmt(order.total)}</span>
            </div>
          </div>
        </div>
        <p className="text-zinc-500 text-sm mb-8">
          A confirmation has been sent to{" "}
          <span className="text-white">{order.email}</span>
        </p>
        <button
          onClick={onContinue}
          className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black py-4 rounded-full text-sm uppercase tracking-wider transition-all"
        >
          Continue Shopping →
        </button>
      </div>
    </div>
  );
}
