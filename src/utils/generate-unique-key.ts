export const generateUniqueKey = (id: number, obj: object) => {
  const string = Object.values(obj).toString();
  return `${id}-${string}`;
};