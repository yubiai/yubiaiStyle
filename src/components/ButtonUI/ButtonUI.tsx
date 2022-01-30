import React from "react";
import Button, {ButtonProps} from '@mui/material/Button';
import "./ButtonUI.css";

interface MyButtonProps extends ButtonProps {
  label: string;
}

const ButtonUI = (props: MyButtonProps) => {
  return <Button variant={props.variant} size={props.size} color={props.color}>{props.label}</Button>;
};

ButtonUI.defaultProps = {
  color: 'success',
  size: 'medium',
  variant: 'contained'
};

export default ButtonUI;
