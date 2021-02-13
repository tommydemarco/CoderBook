import React from "react";

interface Code {
  code: string;
}

const CodeOutput: React.FC<Code> = ({ code }) => {
  return <pre>{code}</pre>;
};

export default CodeOutput;
