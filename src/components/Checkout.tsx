import { useState } from "react";
import { useCart } from "../context/useCart";
import type { Order } from "../types";

interface Props {
  onBack: () => void;
  onSuccess: (order: Order) => void;
}

type FormKey = "name" | "email" | "address" | "city";

type FormState = Record<FormKey, string>;

const fmt = (n: number) => `₦${n.toLocaleString("en-NG")}`;

// ── Field Component ─────────────────────────────
function Field({
  label,
  placeholder,
  type = "text",
  value,
  error,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-zinc-400 text-xs font-bold uppercase tracking-wider block mb-2">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-black/40 border ${
          error ? "border-red-500" : "border-zinc-700"
        } text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-all`}
      />

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

// ── MAIN COMPONENT ─────────────────────────────
export default function Checkout({ onBack, onSuccess }: Props) {
  const { state, dispatch } = useCart();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);

  const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);

  const shipping = 2500;
  const total = subtotal + shipping;

  const set = (k: FormKey) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({
      ...f,
      [k]: e.target.value,
    }));

  // ── VALIDATION ───────────────────────────────
  const validate = () => {
    const e: Partial<FormState> = {};

    if (!form.name.trim()) e.name = "Required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── PAYSTACK ────────────────────────────────
  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    // const PaystackPop = window.PaystackPop;
    const PaystackPop = window.PaystackPop;

    console.log("CLICKED ON CHECKOUTTTTTT");

    if (!PaystackPop) {
      alert("Paystack failed to load. Refresh page.");
      setLoading(false);
      return;
    }

    const handler = PaystackPop.setup({
      key: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxx", // 🔑 replace
      email: form.email,
      amount: total * 100,
      currency: "NGN",

      metadata: {
        name: form.name,
        address: `${form.address}, ${form.city}`,
      },

      callback: (response) => {
        const order: Order = {
          name: form.name,
          email: form.email,
          address: `${form.address}, ${form.city}`,
          ref: response.reference,
          items: state.items,
          total,
        };

        dispatch({ type: "CLEAR" });
        setLoading(false);
        onSuccess(order);
      },

      onClose: () => {
        setLoading(false);
      },
    });

    handler.openIframe();
  };

  // ── UI ───────────────────────────────
  return (
    <div className="min-h-screen bg-black pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="text-zinc-400 hover:text-white text-sm font-bold mb-8"
        >
          ← Back to Cart
        </button>

        <h1 className="text-3xl font-black text-white mb-10">Checkout</h1>

        <div className="grid md:grid-cols-5 gap-10">
          {/* LEFT */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h2 className="text-white font-black mb-5 text-sm uppercase">
                Delivery Info
              </h2>

              <div className="space-y-4">
                <Field
                  label="Full Name"
                  placeholder=""
                  value={form.name}
                  error={errors.name}
                  onChange={set("name")}
                />

                <Field
                  label="Email"
                  placeholder=""
                  value={form.email}
                  error={errors.email}
                  onChange={set("email")}
                />

                <Field
                  label="Address"
                  placeholder=""
                  value={form.address}
                  error={errors.address}
                  onChange={set("address")}
                />

                <Field
                  label="City"
                  placeholder=""
                  value={form.city}
                  error={errors.city}
                  onChange={set("city")}
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-2">
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 sticky top-24">
              <h2 className="text-white font-black mb-5 text-sm uppercase">
                Order Summary
              </h2>

              <div className="space-y-3 mb-5">
                {state.items.map((i) => (
                  <div key={i.id} className="flex justify-between text-sm">
                    <span className="text-zinc-400">
                      {i.name} ×{i.qty}
                    </span>
                    <span className="text-white font-bold">
                      {fmt(i.price * i.qty)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-800 pt-4 space-y-2">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>{fmt(subtotal)}</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span>Delivery</span>
                  <span>{fmt(shipping)}</span>
                </div>

                <div className="flex justify-between text-white font-black pt-2 border-t border-zinc-800">
                  <span>Total</span>
                  <span className="text-orange-400">{fmt(total)}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-6 bg-orange-400 hover:bg-orange-500 text-black font-black py-4 rounded-full"
              >
                {loading ? "Opening Payment..." : "Pay Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
