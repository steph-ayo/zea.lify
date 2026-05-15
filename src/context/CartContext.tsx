import { useReducer } from "react";
import type { ReactNode } from "react";

import { CartCtx } from "./Cart";
import { cartReducer } from "./cartReducer";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartCtx.Provider value={{ state, dispatch }}>{children}</CartCtx.Provider>
  );
}
