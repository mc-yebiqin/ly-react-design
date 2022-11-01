import { isArray, isObject } from "./calibration";

export function flatten(target: any, maxDepth = Infinity) {
  if ((!isObject(target) && !Array.isArray(target)) || !maxDepth) return target;
  const flattenData = Object.entries(target).reduce((result, [key, value]) => {
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, maxDepth - 1)).forEach(
        ([childKey, childValue]) => {
          result[`${key}.${childKey}`] = childValue;
        }
      );
    } else {
      result[key] = value;
    }

    return result;
  }, {} as any);
  return flattenData;
}

export function getThemeVar(key: string) {
  return key;
}
