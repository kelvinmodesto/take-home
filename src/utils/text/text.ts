export const textToSlug = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, "-");
};
