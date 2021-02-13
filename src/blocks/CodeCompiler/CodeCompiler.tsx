import React from "react";

import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import CodeOutput from "../../components/CodeOutput/CodeOutput";

import css from "./CodeCmopiler.module.scss";

const CodeCompiler: React.FC = () => {
  return (
    <div>
      <TextArea />
      <Button text="Click to compile" />
      <CodeOutput code={"Some code here"} />
    </div>
  );
};

export default CodeCompiler;
