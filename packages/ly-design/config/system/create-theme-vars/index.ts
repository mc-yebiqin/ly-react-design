import { cssVar } from "./css-to-var";
import { flattenTokens } from "./flatten-tokens";

function tokenToCssVar(token: string | number, prefix?: string) {
  return cssVar(String(token).replace(/\./g, "-"), undefined, prefix);
}

function createThemeVars(tokens: any) {
  let cssVars: any = {};
  const cssMap: any = {};
  const cssVarPrefix = tokens.config?.prefix || "ly";

  for (const tokenKey in tokens) {
    const tokenValue = tokens[tokenKey];
    const { variable, reference } = tokenToCssVar(tokenKey, cssVarPrefix);
    cssMap[tokenKey] = { value: tokenValue, var: variable, varRef: reference };
    cssVars[variable] = tokenValue;
  }

  return { cssMap, cssVars };
}

function convertToCSSVar(theme: any) {
  const flatTokens = flattenTokens(theme);
  const { cssMap, cssVars } = createThemeVars(flatTokens);
  return Object.assign(theme, { __cssMap: cssMap, __cssVars: cssVars });
}

export default convertToCSSVar;
