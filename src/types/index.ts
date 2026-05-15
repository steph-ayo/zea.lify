export type Category = "All" | "Tees" | "Hoodies" | "Caps" | "Sets";

export interface Model {
  id: number;
  name: string;
  price: number;
  category: Exclude<Category, "All">;
  image: string;
  tag?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Exclude<Category, "All">;
  image: string;
  tag?: string;
}

export interface CartItem extends Product {
  qty: number;
}

export interface Brand {
  id: number;
  name: string;
  price: number;
  category: Exclude<Category, "All">;
  image: string;
  tag?: string;
}

export interface Order {
  name: string;
  email: string;
  address: string;
  ref: string;
  items: CartItem[];
  total: number;
}

export type CartAction =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: number }
  | { type: "INC"; id: number }
  | { type: "DEC"; id: number }
  | { type: "CLEAR" };

export interface CartState {
  items: CartItem[];
}

export type Page = "home" | "checkout" | "confirmation";
