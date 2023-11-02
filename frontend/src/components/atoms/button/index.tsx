import React from "react";
import { ButtonProps, Button } from "@mui/material";

export interface MuiButtonProps extends ButtonProps {
  onClick?: () => void;
}

export const ButtonComp = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};
