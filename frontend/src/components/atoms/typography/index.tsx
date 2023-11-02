import { Typography, TypographyProps } from "@mui/material";
import React from "react";
interface MuiTypographyProps {
  children: React.ReactNode;
  variant: TypographyProps["variant"];
  color?: string;
}

export const TypographyComp = (props: MuiTypographyProps) => {
  return <Typography {...props}>{props.children}</Typography>;
};
