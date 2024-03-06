import { type FC, type ReactNode } from "react";
import { Root } from "./styled";

export type ButtonColor = "green" | "red";

export const Button: FC<{
  color: ButtonColor;
  children: ReactNode;
  onClick(): void;
}> = ({ color, children, onClick }) => (
  <Root $color={color} onClick={onClick}>
    {children}
  </Root>
);
