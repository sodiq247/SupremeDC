/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import { useState } from "react";
import { useForm } from "react-hook-form";
import vasServices from "../../Services/vasServices";
import { Option1Input, Option2Input, Option3Input, Option4Input } from "../Plans/DataPlan"

const  BuyData = (props) => {
  let [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [plan, setplan] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDataPlan = (optionValue) => {
    setplan(optionValue);
  };
  // Create a mapping of option values to component functions
  const OptionComponents = {
    1: <Option1Input onSelectOption={handleDataPlan}/>,
    2: <Option2Input onSelectOption={handleDataPlan}/>,
    3: <Option3Input onSelectOption={handleDataPlan}/>,
    4: <Option4Input onSelectOption={handleDataPlan}/>,
  };
  const { handleSubmit, register } = useForm();
  const dataBundle = async (data) => {
    let response = await vasServices.dataBundle(data);
    console.log(response);
    //  if (response.status === successful) {
	// 		setMessage("Successful");
	// 		// navigate("/");
	// 	  } else {
	// 		setMessage(response.message);
	// 	  }
    };

	return (
		<div>
			<Header />
			<Sidebar />
			<Container className="BuyData-main">
				<div className="BuyData-submain Form-submain">
					<Row>
						<Col sm={8} xs={{ order: "" }} className="BuyData-form">
						{message && <div className="alert alert-info">{message}</div>}

							<Form onSubmit={handleSubmit(dataBundle)}>
								<Form.Label className="label">Network</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3" {...register("network")}>
									<option></option>
									<option value="1">MTN</option>
									<option value="2">GLO</option>
									<option value="3">Airtel</option>
									<option value="4">9mobile</option>
								</Form.Select>
								<Form.Label className="label">Data type</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
									onChange={handleSelectChange}
									>
									<option></option>
									<option value="1" id="1">SME</option>
									<option value="2" id="2">GIFTING</option>
									<option value="3" id="3">CORPORATE GIFTING</option>
									<option value="3" id="4">DIRECT</option>
								</Form.Select>
								<p className="mb-3 plan-note">
									Select Plan Type SME or GIFTING or CORPORATE GIFTING
								
								</p>
								<Form.Group>
									<Form.Label className="label phone-label">
										Phone Number
									</Form.Label>
									<Form.Control
										type="mobile_number"
										name="mobile_number"
										placeholder="Enter phone number"
										className="mb-3"
										{...register("mobile_number")}
									/>
								</Form.Group>
								{OptionComponents[selectedOption] || null}
								{/* console.log(plan,'pwoqq') */}
								
								<Form.Group>
									<Form.Label className="label">Amount</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
									/>
								</Form.Group>
								<Button className="Buy-now-btn"  type="submit" value="">Buy Now</Button>{" "}
							</Form>
						</Col>
						<Col sm={4} xs={{ order: "" }}>
							sm=4
						</Col>
					</Row>
				</div>
			</Container>
		</div>
		
	);
	
							};

export default BuyData;
