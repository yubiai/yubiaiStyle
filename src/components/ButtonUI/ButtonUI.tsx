import React from "react";

export interface ButtonProps {
  label: string;
}

const ButtonUI = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default ButtonUI;
