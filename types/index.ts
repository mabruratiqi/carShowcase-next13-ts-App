import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  type: "button" | "submit";
  title: string;
  customBtnStyles?: string;
  disabled: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}