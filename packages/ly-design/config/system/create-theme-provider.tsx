import React, { useMemo } from "react";
import convertToCSSVar from "./create-theme-vars";
import { Global, ThemeProvider } from "@emotion/react";

export const LaoyeProvider = (props: any) => {
  const { theme = {}, children } = props;
  const computedTheme = useMemo(() => convertToCSSVar(theme), [theme]);
  return (
    <ThemeProvider theme={computedTheme}>
      <Global
        styles={(computedTheme: any) => ({
          [":root"]: computedTheme.__cssVars,
        })}
      />
      {children}
    </ThemeProvider>
  );
};
