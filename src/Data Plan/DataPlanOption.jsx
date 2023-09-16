  // OptionInputs.js (This is where you define both Option1Input and Option2Input)
  import React from "react";
  import Form from "react-bootstrap/Form";
  import { useState } from "react";

  function Option1Input({ onSelectOption }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      onSelectOption(value);
    };

    return (
      <div>
        <Form.Select
          aria-label="Option 1 select"
          className="mb-3"
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option></option>
          <option value="option1.1">Option 1.1</option>
          <option value="option1.2">Option 1.2 </option>
          <option value="option1.3">Option 1.3 </option>
        </Form.Select>
      </div>
    );
  }


  function Option2Input({ onSelectOption }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      onSelectOption(value);
    };

    return (
      <div>
        <Form.Select
          aria-label="Option 1 select"
          className="mb-3"
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option></option>
          <option value="option2.0">Option 1 </option>
          <option value="option2.1">Option 2 </option>
          <option value="option2.2">Option 3 </option>
        </Form.Select>
      </div>
    );
  }







  function Option3Input({ onSelectOption }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      onSelectOption(value);
    };

    return (
      <div>
        <Form.Select
          aria-label="Option 1 select"
          className="mb-3"
          onChange={handleSelectChange}
          value={selectedValue}
        >
         <option></option>
          <option value="option3.0">Option3.0 </option>
          <option value="option3.1">Option 3.1 </option>
          <option value="option3.2">Option 3.2 </option>
        </Form.Select>
      </div>
    );
  }




  function Option4Input({ onSelectOption }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      onSelectOption(value);
    };

    return (
      <div>
        <Form.Select
          aria-label="Option 1 select"
          className="mb-3"
          onChange={handleSelectChange}
          value={selectedValue}
        >
         <option></option>
          <option value="option4.0">Option 4.0 </option>
          <option value="option4.1">Option 4.1 </option>
          <option value="option4.2">Option 4.2 </option>
        </Form.Select>
      </div>
    );
  }












  export { Option1Input, Option2Input, Option3Input, Option4Input };
