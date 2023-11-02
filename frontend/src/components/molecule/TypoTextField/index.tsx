import React from 'react';
import { TypographyComp } from '../../atoms/typography';
import { TextFieldComp } from '../../atoms/textField';
export interface TypoTextFieldProps{
    text:string;
    placeholder:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    type:string;
    value:string;
}
export const TypoTextField=({text,placeholder,onChange,type,value}:TypoTextFieldProps)=>{
    return(
    <>
    <TypographyComp variant="h6">{text}</TypographyComp>
    <TextFieldComp
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
    </>
    )
}