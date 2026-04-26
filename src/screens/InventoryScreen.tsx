import { FoodCard } from "../components/FoodsCard";
import { FoodItem } from "../models/FoodItem";
import { Unit } from "../models/Unit";

const sampleItems: FoodItem[] = [
  {
    id: "1",
    name: "Milk",
    quantity: 1,
    unit: Unit.LITER,
    expiryDate: new Date("2026-04-27"),
    category: "fridge",
  },
  {
    id: "2",
    name: "Rice",
    quantity: 2,
    unit: Unit.KILOGRAM,
    expiryDate: new Date("2026-08-20"),
    category: "pantry",
  },
];

export const InventoryScreen = () => {
  return (
    <div>
      <h1>Inventory</h1>

      {sampleItems.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
};