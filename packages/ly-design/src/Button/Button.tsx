import { laoye } from "@config/system/create-comp-factory";
import { forwardRef } from "react";
import { IButtonProps } from "./interface";

export const Button = forwardRef<any, IButtonProps>((props, ref) => {
  const { children } = props;
  return <laoye.button ref={ref}>{children}</laoye.button>;
});
