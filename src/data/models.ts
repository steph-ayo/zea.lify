import type { Model } from "../types/index";
import model1 from "../assets/images/models/model1.png";
import model2 from "../assets/images/models/model2.png";
import model3 from "../assets/images/models/model3.png";
import model4 from "../assets/images/models/model4.png";
import model5 from "../assets/images/models/model5.png";
import model6 from "../assets/images/models/model6.png";
import model7 from "../assets/images/models/model7.png";
import model8 from "../assets/images/models/model8.png";
import model9 from "../assets/images/models/model9.png";

export const MODELS: Model[] = [
  {
    id: 1,
    name: "Zeal Classic Tee",
    price: 12500,
    category: "Tees",
    image: model1,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Purpose Drop Tee",
    price: 13500,
    category: "Tees",
    image: model2,
  },
  {
    id: 3,
    name: "Motion Graphic Tee",
    price: 14000,
    category: "Tees",
    image: model3,
    tag: "New",
  },
  {
    id: 4,
    name: "Core Oversized Tee",
    price: 15000,
    category: "Tees",
    image: model4,
  },
  {
    id: 5,
    name: "Zeal Signature Hoodie",
    price: 28000,
    category: "Hoodies",
    image: model5,
    tag: "Bestseller",
  },
  {
    id: 6,
    name: "Creator Pullover",
    price: 26500,
    category: "Hoodies",
    image: model9,
  },
  {
    id: 7,
    name: "Street Heavy Hoodie",
    price: 30000,
    category: "Hoodies",
    image: model7,
    tag: "New",
  },
  {
    id: 8,
    name: "Bold Logo Hoodie",
    price: 27000,
    category: "Hoodies",
    image: model8,
  },
  {
    id: 7,
    name: "Creator Pullover",
    price: 26500,
    category: "Hoodies",
    image: model6,
  },
];

export const CATEGORIES: import("../types").Category[] = [
  "All",
  "Tees",
  "Hoodies",
  "Cargos",
  "Sets",
];
