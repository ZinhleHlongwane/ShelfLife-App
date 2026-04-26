import { Unit } from "./Unit";
// In TypeScript: An interface is a shape of an object. It defines structure, not logic.

export interface FoodItem {
  id: string;
  name: string;
  quantity: number;
  unit: Unit;
  expiryDate: Date;
  category: "fridge" | "pantry" | "freezer";
}