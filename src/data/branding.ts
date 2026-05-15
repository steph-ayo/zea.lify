import type { Brand } from "../types/index";
import custom1 from "../assets/images/custom1.png";
import custom2 from "../assets/images/custom2.png";
import custom3 from "../assets/images/custom3.png";
import custom4 from "../assets/images/custom4.png";
import custom5 from "../assets/images/custom5.png";
import custom6 from "../assets/images/custom6.png";
import custom7 from "../assets/images/custom7.png";
import custom8 from "../assets/images/custom8.png";

export const BRANDS: Brand[] = [
  {
    id: 1,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: custom1,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Purpose Drop Tee",
    price: 13500,
    category: "Tees",
    image: custom2,
  },
  {
    id: 3,
    name: "Motion Graphic Tee",
    price: 14000,
    category: "Tees",
    image: custom3,
    tag: "New",
  },
  {
    id: 4,
    name: "Core Oversized Tee",
    price: 15000,
    category: "Tees",
    image: custom4,
  },
  {
    id: 5,
    name: "Zeal Signature Hoodie",
    price: 28000,
    category: "Hoodies",
    image: custom5,
    tag: "Bestseller",
  },
  {
    id: 6,
    name: "Creator Pullover",
    price: 26500,
    category: "Hoodies",
    image: custom6,
  },
  {
    id: 7,
    name: "Street Heavy Hoodie",
    price: 30000,
    category: "Hoodies",
    image: custom7,
    tag: "New",
  },
  {
    id: 8,
    name: "Bold Logo Hoodie",
    price: 27000,
    category: "Hoodies",
    image: custom8,
  },
];

export const CATEGORIES: import("../types").Category[] = [
  "All",
  "Tees",
  "Hoodies",
  "Caps",
  "Sets",
];
