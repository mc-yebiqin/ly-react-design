import { isArray, isObject } from "@utils/index";

function flattenDeep(target: any, maxDepth = Infinity) {
  if ((!isObject(target) && !Array.isArray(target)) || !maxDepth) {
    return target;
  }

  return Object.entries(target).reduce((result, [key, value]) => {
    if (isObject(value) || isArray(value)) {
      Object.entries(flattenDeep(value, maxDepth - 1)).forEach(
        ([childKey, childValue]) => {
          result[`${key}.${childKey}`] = childValue;
        }
      );
    } else {
      result[key] = value;
    }

    return result;
  }, {} as any);
}

export function flattenTokens(theme: any) {
  return flattenDeep(theme);
}
