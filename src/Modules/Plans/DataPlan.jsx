// OptionInputs.js (This is where you define both Option1Input and Option2Input)
import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";


function Option1Input() {
  const { register } = useForm();

  return (
    <div>
        <p>Select Plan</p>
      <Form.Select
        aria-label="Option 1 select"
        className="mb-3"
        {...register("plan")}
      >

        <option></option>
        <option value="44">5.0 gb  1085 </option>
        <option value="option1value2">Option 1 </option>
        <option value="option1value3">Option 1 </option>
      </Form.Select>
    </div>
  );
}

function Option2Input() {
  return (
    <div>
      <Form.Select
        aria-label="Option 2 select"
        className="mb-3"
      >
        <option></option>
        <option value="option2value1">Option 2 </option>
        <option value="option2value2">Option 2 </option>
        <option value="option2value3">Option 2 </option>
      </Form.Select>
    </div>
  );
}






function Option3Input() {
  return (
    <div>
      <Form.Select
        aria-label="Option 2 select"
        className="mb-3"
      >
        <option></option>
        <option value="option2value1">3 </option>
        <option value="option2value2">3</option>
        <option value="option2value3">3</option>
      </Form.Select>
    </div>
  );
}






function Option4Input() {
  return (
    <div>
      <Form.Select
        aria-label="Option 2 select"
        className="mb-3"
      >
        <option></option>
        <option value="option2value1">4 </option>
        <option value="option2value2">4</option>
        <option value="option2value3">4</option>
      </Form.Select>
    </div>
  );
}











export { Option1Input, Option2Input, Option3Input, Option4Input };