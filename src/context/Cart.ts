import { createContext } from "react";
import type { CartState, CartAction } from "../types";

export interface CartCtxType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

export const CartCtx = createContext<CartCtxType | null>(null);
