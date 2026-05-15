import type { CartState, CartAction } from "../types";

export const cartReducer = (s: CartState, a: CartAction): CartState => {
  switch (a.type) {
    case "ADD": {
      const ex = s.items.find((i) => i.id === a.product.id);

      if (ex) {
        return {
          items: s.items.map((i) =>
            i.id === ex.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }

      return {
        items: [...s.items, { ...a.product, qty: 1 }],
      };
    }

    case "REMOVE":
      return {
        items: s.items.filter((i) => i.id !== a.id),
      };

    case "INC":
      return {
        items: s.items.map((i) =>
          i.id === a.id ? { ...i, qty: i.qty + 1 } : i,
        ),
      };

    case "DEC":
      return {
        items: s.items.map((i) =>
          i.id === a.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i,
        ),
      };

    case "CLEAR":
      return {
        items: [],
      };

    default:
      return s;
  }
};
