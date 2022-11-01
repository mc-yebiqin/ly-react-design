import { ILyComponentProps } from "@config/system/interface";

export type TButtonPropsSize = "Large" | "Medium" | "Small";
export type TButtonPropsVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "link"
  | "text";

export interface IButtonProps extends ILyComponentProps {
  size?: TButtonPropsSize;
  variant?: TButtonPropsVariant;
  disabled?: boolean;
  colorTheme?: string;
  loading?: boolean;
  loadingText?: string;
}
