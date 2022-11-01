const resolveTokenValue = (theme: any, value: string) => {
  if (value == null) return value;

  const getVar = (val: string) => theme.__cssMap?.[val]?.varRef;
  const getValue = (val: string) => getVar(val) ?? val;

  const valueSplit = value.split(",").map((v) => v.trim());
  const [tokenValue, fallbackValue] = valueSplit;
  value = getVar(tokenValue) ?? getValue(fallbackValue) ?? getValue(value);

  return value;
};

function resolveInCss(theme: any) {
  return (props: any) => {
    let computedStyles: any = {};

    for (let key in props) {
      const value = props[key];
      computedStyles[key] = resolveTokenValue(theme, value);
    }

    return computedStyles;
  };
}

export default resolveInCss;
