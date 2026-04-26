import type { FoodStatus } from "./inventoryLogic";

// Converts internal status values into text the user can understand.
export const getStatusLabel = (status: FoodStatus): string => {
  if (status === "expired") {
    return "Expired";
  }

  if (status === "expiringSoon") {
    return "Expiring Soon";
  }

  return "Fresh";
};

// Converts status into a visual indicator.
// Later, this can be changed to CSS colors instead of emojis.
export const getStatusColor = (status: FoodStatus): string => {
  if (status === "expired") {
    return "🔴";
  }

  if (status === "expiringSoon") {
    return "🟠";
  }

  return "🟢";
};