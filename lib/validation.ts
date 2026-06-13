export const emailRegex = /^[\w.%+-]+@([\w-]+\.)+\w{2,}$/;

// Accepts any formatting of a 10-digit US number, with or without country code.
export const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
};
