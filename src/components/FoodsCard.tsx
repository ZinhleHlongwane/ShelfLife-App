import { FoodItem } from "../models/FoodItem";
import { getFoodStatus } from "../features/inventory/inventoryLogic";
import { getStatusLabel, getStatusColor } from "../features/inventory/inventoryDisplay";

type Props = {
    item: FoodItem;
};

export const FoodCard = ({ item }: Props) => {

    const status = getFoodStatus(item);
    const label = getStatusLabel(status);
    const color = getStatusColor(status);

    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.quantity} {item.unit}</p>

            <p>
                {color} {label}
            </p>
        </div>
    );
};