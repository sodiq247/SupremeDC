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
        // {...register("plan")}
      >
        <option></option>
        <option value="13"> 500.0MB SME ₦125.0 30 days </option>
        <option value="13"> 1.0GB SME ₦250.0 30 days </option>
        <option value="13"> 2.0GB SME ₦500.0 30 days </option>
        <option value="13"> 3.0GB SME ₦750.0 30 days </option>
        <option value="13"> 5.0GB SME ₦1250.0 30 days </option>
        <option value="13"> 10.0GB SME ₦2500.0 30 days </option>
        <option value="13"> 20.0GB SME ₦5000.0 30 days </option>
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
        <option value="1"> 500.0MB CORPORATE GIFTING ₦125.0 30 days </option>
        <option value="3"> 1.0GB CORPORATE GIFTING ₦250.0 30 days </option>
        <option value="113"> 2.0GB CORPORATE GIFTING ₦500.0 30 days </option>
        <option value="13"> 3.0GB CORPORATE GIFTING ₦750.0 30 days </option>
        <option value="13"> 5.0GB CORPORATE GIFTING ₦1250.0 30 days </option>
        <option value="13"> 10.0GB CORPORATE GIFTING ₦2500.0 30 days </option>
        <option value="13"> 20.0GB CORPORATE GIFTING ₦5000.0 30 days </option>
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

export { Option1Input, Option2Input, Option3Input, Option4Input };





