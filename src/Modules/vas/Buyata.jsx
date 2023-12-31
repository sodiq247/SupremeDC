/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
// import dataType from "./dataType";

import { useState } from "react";
import { useForm } from "react-hook-form";
import vasServices from "../../Services/vasServices";
import dataTypes from "./dataTypes.json"
const  BuyData = (props) => {
  let [message, setMessage] = useState("");
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
									{...register("plan")}
									>
									<option></option>
									{
									dataTypes.map((dataTypes, index) => (
										<option key={index}>{dataTypes}</option>
									))}
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
