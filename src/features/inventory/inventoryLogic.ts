import type { FoodItem } from "../../models/FoodItem";
import { isExpired, isExpiringSoon } from "../../utils/dateHelpers";

// FoodStatus is the status label our logic can return.
// This prevents random strings from being used.
export type FoodStatus = "expired" | "expiringSoon" | "fresh";

// Decides the status of a food item based on its expiry date.
export const getFoodStatus = (item: FoodItem): FoodStatus => {
  // Check expired first because expired items are more urgent
  if (isExpired(item.expiryDate)) {
    return "expired";
  }

  // If not expired, check if it is close to expiring
  if (isExpiringSoon(item.expiryDate)) {
    return "expiringSoon";
  }

  // If it is not expired or expiring soon, it is fresh
  return "fresh";
};