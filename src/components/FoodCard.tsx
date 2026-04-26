import type { FoodItem } from "../models/FoodItem";
import { getFoodStatus } from "../features/inventory/inventoryLogic";
import { getStatusColor, getStatusLabel } from "../features/inventory/inventoryDisplay";
import { getDaysUntilExpiry } from "../utils/dateHelpers";

// Props defines what data this component needs.
// FoodCard needs one FoodItem to display.
type Props = {
  item: FoodItem;
};

// FoodCard displays one food item in the inventory list.
export const FoodCard = ({ item }: Props) => {
  // Get the logical status: expired, expiringSoon, or fresh
  const status = getFoodStatus(item);

  // Convert status into user-friendly text
  const label = getStatusLabel(status);

  // Convert status into a visual indicator
  const color = getStatusColor(status);

  // Calculate how many days are left before expiry
  const daysLeft = getDaysUntilExpiry(item.expiryDate);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "12px",
        backgroundColor: "#ffffff",
      }}
    >
      <h3>{item.name}</h3>

      <p>
        Quantity: {item.quantity} {item.unit}
      </p>

      <p>Category: {item.category}</p>

      <p>
        Status: {color} {label}
      </p>

      <p>Days left: {daysLeft}</p>
    </div>
  );
};