import React from "react";

import TextArea from "./components/TextArea/TextArea";
import Button from "./components/Button/Button";
import CodeOutput from "./components/CodeOutput/CodeOutput";

import "semantic-ui-css/semantic.min.css";

const App: React.FC = () => {
  return (
    <div>
      <TextArea />
      <Button text={"Click to compile"} />
      <CodeOutput code={"Some code here"} />
    </div>
  );
};

export default App;
