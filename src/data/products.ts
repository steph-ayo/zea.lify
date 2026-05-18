import type { Product } from "../types/index";

import tees1 from "../assets/images/catalogue/tees1.png";
import tees2 from "../assets/images/catalogue/tees2.png";
import tees3 from "../assets/images/catalogue/tees3.png";
import tees4 from "../assets/images/catalogue/tees4.png";
// import tees5 from "../assets/images/catalogue/tees5.png";
import tees6 from "../assets/images/catalogue/tees6.png";
import tees7 from "../assets/images/catalogue/tees7.png";
import tees8 from "../assets/images/catalogue/tees8.png";
import tees9 from "../assets/images/catalogue/tees9.png";
import tees10 from "../assets/images/catalogue/tees10.png";
import hoodie1 from "../assets/images/catalogue/hoodie1.png";
import hoodie2 from "../assets/images/catalogue/hoodie2.png";
import cargo1 from "../assets/images/catalogue/cargo1.png";
import fullset1 from "../assets/images/catalogue/fullset1.png";

export const PRODUCTS: Product[] = [
  {
    id: 4,
    name: "Core Oversized Tee",
    price: 15000,
    category: "Tees",
    image: tees4,
    tag: "Bestseller",
  },
  {
    id: 10,
    name: "Street Heavy Hoodie",
    price: 30000,
    category: "Hoodies",
    image: hoodie2,
    tag: "Bestseller",
  },
  {
    id: 8,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: tees8,
  },
  {
    id: 1,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: tees1,
  },
  {
    id: 2,
    name: "Purpose Drop Tee",
    price: 13500,
    category: "Tees",
    image: tees2,
    tag: "New",
  },

  {
    id: 12,
    name: "Cargo",
    price: 38000,
    category: "Cargos",
    image: cargo1,
    tag: "New",
  },
  {
    id: 3,
    name: "Motion Graphic Tee",
    price: 14000,
    category: "Tees",
    image: tees3,
    tag: "New",
  },
  {
    id: 9,
    name: "Creator Pullover",
    price: 26500,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80",
  },
  {
    id: 5,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: tees9,
    tag: "New",
  },
  {
    id: 5,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: tees10,
    tag: "New",
  },
  {
    id: 6,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: tees6,
  },
  {
    id: 7,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: tees7,
  },
  {
    id: 8,
    name: "Zeal Signature Hoodie",
    price: 28000,
    category: "Hoodies",
    image: hoodie1,
    tag: "Bestseller",
  },
  {
    id: 13,
    name: "Full Set",
    price: 38000,
    category: "Sets",
    image: fullset1,
  },
  {
    id: 14,
    name: "Full Set",
    price: 38000,
    category: "Sets",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    tag: "Bundle",
  },

  {
    id: 15,
    name: "Creator Bundle",
    price: 42000,
    category: "Sets",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80",
    tag: "Bundle",
  },
];

export const CATEGORIES: import("../types").Category[] = [
  "All",
  "Tees",
  "Hoodies",
  "Cargos",
  "Sets",
];
