import type { Product } from "../types/index";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Purpose Drop Tee",
    price: 13500,
    category: "Tees",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
  },
  {
    id: 3,
    name: "Motion Graphic Tee",
    price: 14000,
    category: "Tees",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    tag: "New",
  },
  {
    id: 4,
    name: "Core Oversized Tee",
    price: 15000,
    category: "Tees",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80",
  },
  {
    id: 5,
    name: "Zeal Signature Hoodie",
    price: 28000,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80",
    tag: "Bestseller",
  },
  {
    id: 6,
    name: "Creator Pullover",
    price: 26500,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80",
  },
  {
    id: 7,
    name: "Street Heavy Hoodie",
    price: 30000,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400&q=80",
    tag: "New",
  },
  {
    id: 8,
    name: "Bold Logo Hoodie",
    price: 27000,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 9,
    name: "Zeal Snapback Cap",
    price: 9500,
    category: "Caps",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
    tag: "New",
  },
  {
    id: 10,
    name: "Classic Dad Cap",
    price: 8500,
    category: "Caps",
    image:
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&q=80",
  },
  {
    id: 11,
    name: "Zeal Full Set",
    price: 38000,
    category: "Sets",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    tag: "Bundle",
  },
  {
    id: 12,
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
  "Caps",
  "Sets",
];
