import React from "react";
import Form from 'react-bootstrap/Form';

const CategoriaDestacada = () => {
  return (
    <div>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check
          disabled
          type="switch"
          label="disabled switch"
          id="disabled-custom-switch"
        />
      </Form>
    </div>
  );
};

export default CategoriaDestacada;
