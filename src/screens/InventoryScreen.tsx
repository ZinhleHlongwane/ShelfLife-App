import { useState } from "react";
import { FoodCard } from "../components/FoodsCard";
import type { FoodItem } from "../models/FoodItem";
import { Unit } from "../models/Unit";

// InventoryScreen displays the inventory and manages its state
export const InventoryScreen = () => {
  // React state to store items
  const [items, setItems] = useState<FoodItem[]>([
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
  ]);

  // Function to add a new item (temporary test feature)
  const addItem = () => {
    const newItem: FoodItem = {
      id: Date.now().toString(), // unique id
      name: "Apple",
      quantity: 3,
      unit: Unit.COUNT,
      expiryDate: new Date("2026-04-29"),
      category: "fridge",
    };

    // Add new item to existing list
    setItems((prev) => [...prev, newItem]);
  };

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

      {/* Button to test dynamic updates */}
      <button onClick={addItem} style={{ marginBottom: "16px" }}>
        Add Item
      </button>

      {/* Render all items */}
      {items.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </main>
  );
};