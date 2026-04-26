import { FoodStatus } from "./inventoryLogic";

export const getStatusLabel = (status: FoodStatus): string => {
    if (status === "expired") {
        return "Expired";
    }

    if (status === "expiringSoon") {
        return "Expiring Soon";
    }

    return "Fresh";
}

export const getStatusColor = (status: FoodStatus): string => {
    if (status === "expired") {
        return "🔴";
    }

    else if (status === "expiringSoon") {
        return "🟠";
    }

    return "🟢";
    
};