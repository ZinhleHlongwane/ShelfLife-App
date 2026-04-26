import { FoodCard } from "../components/FoodCard";
import type { FoodItem } from "../models/FoodItem";
import { Unit } from "../models/Unit";

// Temporary sample data used to test the UI.
// Later this will come from local database storage.
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
  {
    id: "3",
    name: "Chicken Breast",
    quantity: 500,
    unit: Unit.GRAM,
    expiryDate: new Date("2026-04-25"),
    category: "fridge",
  },
];

// InventoryScreen displays the full inventory page.
export const InventoryScreen = () => {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      <h1>ShelfLife Inventory</h1>
      <p>Track food freshness and reduce waste.</p>

      {/* Loop through all sample items and render one FoodCard for each item */}
      {sampleItems.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </main>
  );
};