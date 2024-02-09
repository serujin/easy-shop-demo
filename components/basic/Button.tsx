import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export default function Button(props: ButtonProps) {
  const { onClick, text } = props;
  return <button onClick={onClick}>{text}</button>;
}
