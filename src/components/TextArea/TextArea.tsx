import React from "react";
import { Form, TextArea } from "semantic-ui-react";

import css from "./TextArea.module.scss";

const TextAreaExampleTextArea: React.FC = () => (
  <Form>
    <TextArea placeholder="Tell us more" />
  </Form>
);

export default TextAreaExampleTextArea;
