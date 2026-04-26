// Import what I need
import { FoodItem } from "../../models/FoodItem";
import { isExpired, isExpiringSoon } from "../../utils/dateHelpers";

export type FoodStatus = "expired" | "expiringSoon" | "fresh";

export const getFoodStatus = (item: FoodItem): FoodStatus => {
    // Call the function and pass data
    if (isExpired(item.expiryDate)) {
        return "expired";
    }

    if (isExpiringSoon(item.expiryDate)) {
        return "expiringSoon";
    }

    return "fresh";
}