import React from "react";
import { Button } from "semantic-ui-react";

interface ButtonProps {
  text: string;
}

const ButtonExampleButton: React.FC<ButtonProps> = ({ text }) => (
  <Button>Enter</Button>
);

export default ButtonExampleButton;
