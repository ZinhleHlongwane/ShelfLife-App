import type { Unit } from "./Unit";

// FoodItem describes the shape of one food item in the inventory.
// This is only data structure, not logic.
export interface FoodItem {
  // Unique ID used for updating, deleting, and syncing items
  id: string;

  // Food name shown to the user
  name: string;

  // Amount of the item the user has
  quantity: number;

  // Measurement unit, for example g, kg, l, ml, or count
  unit: Unit;

  // Expiry date used for freshness, notifications, and recipe ranking
  expiryDate: Date;

  // Where the item is stored
  category: "fridge" | "pantry" | "freezer";
}