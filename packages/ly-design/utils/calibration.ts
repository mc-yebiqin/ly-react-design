export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isObject(value: any): boolean {
  const type = typeof value;
  return value !== null && type === 'object' && !isArray(value);
}

export function isEqual(value1: any, value2: any): boolean {
  return value1 === value2;
}
