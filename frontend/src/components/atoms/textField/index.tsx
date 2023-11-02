import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)({});
export const TextFieldComp = ({ ...props }: TextFieldProps) => {
  return <StyledTextField {...props}></StyledTextField>;
};
