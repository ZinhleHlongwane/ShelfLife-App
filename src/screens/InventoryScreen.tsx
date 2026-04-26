import { useState } from "react";
import { FoodCard } from "../components/FoodCard";
import type { FoodItem } from "../models/FoodItem";
import { Unit } from "../models/Unit";

export const InventoryScreen = () => {
  // State: stores all food items in the inventory
  const [items, setItems] = useState<FoodItem[]>([]);

  // State: stores user input from the form
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState<Unit>(Unit.COUNT);
  const [expiryDate, setExpiryDate] = useState("");
  const [category, setCategory] = useState<"fridge" | "pantry" | "freezer">("fridge");

  // Function: adds a new item to the inventory
  const addItem = () => {
    // Basic validation (ensure required fields are filled)
    if (!name || !quantity || !expiryDate) {
      alert("Please fill in name, quantity, and expiry date.");
      return;
    }

    // Create a new FoodItem object
    const newItem: FoodItem = {
      id: Date.now().toString(), // simple unique id
      name,
      quantity: Number(quantity), // convert string → number
      unit,
      expiryDate: new Date(expiryDate), // convert string → Date
      category,
    };

    // Update state: add new item to existing list
    setItems((prev) => [...prev, newItem]);

    // Reset form inputs after adding item
    setName("");
    setQuantity("");
    setUnit(Unit.COUNT);
    setExpiryDate("");
    setCategory("fridge");
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

      {/* Form section for adding new food items */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h2>Add Food Item</h2>

        {/* Food name input */}
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Food name"
          style={{ display: "block", marginBottom: "8px", width: "100%" }}
        />

        {/* Quantity input */}
        <input
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          placeholder="Quantity"
          type="number"
          style={{ display: "block", marginBottom: "8px", width: "100%" }}
        />

        {/* Unit selector */}
        <select
          value={unit}
          onChange={(event) => setUnit(event.target.value as Unit)}
          style={{ display: "block", marginBottom: "8px", width: "100%" }}
        >
          <option value={Unit.COUNT}>count</option>
          <option value={Unit.GRAM}>g</option>
          <option value={Unit.KILOGRAM}>kg</option>
          <option value={Unit.MILLILITER}>ml</option>
          <option value={Unit.LITER}>l</option>
        </select>

        {/* Expiry date input */}
        <input
          value={expiryDate}
          onChange={(event) => setExpiryDate(event.target.value)}
          type="date"
          style={{ display: "block", marginBottom: "8px", width: "100%" }}
        />

        {/* Category selector */}
        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as "fridge" | "pantry" | "freezer")
          }
          style={{ display: "block", marginBottom: "8px", width: "100%" }}
        >
          <option value="fridge">fridge</option>
          <option value="pantry">pantry</option>
          <option value="freezer">freezer</option>
        </select>

        {/* Button triggers addItem function */}
        <button onClick={addItem}>Add Item</button>
      </section>

      {/* Render all food items using FoodCard */}
      {items.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </main>
  );
};