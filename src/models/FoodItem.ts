export interface FoodItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  expiryDate: Date;
  category: "fridge" | "pantry" | "freezer";
}