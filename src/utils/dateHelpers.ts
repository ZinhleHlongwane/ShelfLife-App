// Business rule: items expiring in 3 days or less are considered expiring soon.
const EXPIRING_SOON_THRESHOLD = 3;

// Calculates how many days are left before the item expires.
export const getDaysUntilExpiry = (expiryDate: Date): number => {
  // Get today's date
  const today = new Date();

  // Convert both dates to milliseconds, then subtract today from expiry date
  const diffTime = expiryDate.getTime() - today.getTime();

  // Convert milliseconds into days
  // Math.ceil rounds up partial days, so 0.5 days becomes 1 day
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Checks if an item is already expired.
export const isExpired = (expiryDate: Date): boolean => {
  const days = getDaysUntilExpiry(expiryDate);

  // If days is negative, the expiry date has already passed
  return days < 0;
};

// Checks if an item is close to expiring but not already expired.
export const isExpiringSoon = (expiryDate: Date): boolean => {
  const days = getDaysUntilExpiry(expiryDate);

  // Expiring soon means between today and 3 days from now
  return days <= EXPIRING_SOON_THRESHOLD && days >= 0;
};