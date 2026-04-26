const EXPIRING_SOON_THRESHOLD = 3;

// Takes in an expiry date, returns a number (days left)
export const getDaysUntilExpiry = (expiryDate : Date): number => {

    // This gets current date
    const Today = new Date();

    // Converts both dates to milliseconds and subtracts
    const diffTime = expiryDate.getTime() - Today.getTime();

    // Converts both dates to milliseconds and subtracts
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
};

export const isExpired = (expiryDate: Date): boolean => {
    const days = getDaysUntilExpiry(expiryDate);

    return days < 0;
};

export const isExpiringSoon = (expiryDate: Date): boolean => {
    const days = getDaysUntilExpiry(expiryDate);

    return days <= EXPIRING_SOON_THRESHOLD && days >= 0;
}