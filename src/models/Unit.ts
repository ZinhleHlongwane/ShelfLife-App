// Unit defines the only measurement units allowed in the app.
// We use this instead of plain strings so users/developers cannot use invalid units like "kgs" or "banana".
export const Unit = {
  GRAM: "g",
  KILOGRAM: "kg",
  MILLILITER: "ml",
  LITER: "l",
  COUNT: "count",
} as const;

// This creates a Unit type from the values above.
// So Unit can only be: "g" | "kg" | "ml" | "l" | "count"
export type Unit = (typeof Unit)[keyof typeof Unit];