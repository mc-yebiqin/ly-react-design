type TCSSPseudo = {
  _hover?: React.CSSProperties;
  _focus?: React.CSSProperties;
  _active?: React.CSSProperties;
  _firstChild?: React.CSSProperties;
};

export type TLyStylesProps = React.CSSProperties | TCSSPseudo;

export type TComponentShapeProps = {
  [props: string]: TLyStylesProps;
};

export interface ILyComponentProps extends React.HTMLAttributes<any> {
  styles?: TLyStylesProps;
}
