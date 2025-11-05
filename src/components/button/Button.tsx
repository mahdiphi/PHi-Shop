import React, { type ComponentProps } from "react";

type TVariant = "primary" | "secondry" | "danger" | "warning" | "success";
type TButton = ComponentProps<"button"> & {
  variant?: TVariant
};

function Button({ children,variant, style, ...rest }: TButton) {
  return <button {...rest} style={{borderRadius: "6px" ,padding: "5px" ,...style, ...checkVariant(variant)}}>{children}</button>;
}

export default Button;

function checkVariant(variant?: TVariant){
  if(variant === "primary"){
    return {backgroundColor: "#30a2f2", color: "white"}
  } else if(variant === "secondry"){
    return {backgroundColor: "gray", color: "white"}
  }else if(variant === "danger"){
    return {backgroundColor: "red", color: "white"}
  }else if(variant === "warning"){
    return {backgroundColor: "yellow", color: "white"}
  }else if(variant === "success"){
    return {backgroundColor: "green", color: "white"}
  }
}
