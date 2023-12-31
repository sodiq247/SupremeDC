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

const  Electricity = (props) => {
  let [message, setMessage] = useState("");
  const { handleSubmit, register } = useForm();
  const electric = async (data) => {
    let response = await vasServices.electric(data);
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
						<Col sm={8} xs={{ order: "" }} className="BuyData-form BuyAirtime">
						{message && <div className="alert alert-info">{message}</div>}

						<Form className="input-form" onSubmit={handleSubmit(electric)}>
								<Form.Label className="label">Dico Name</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
									{...register("disco_name")}>
									<option></option>
									<option value="1">Ikeja Electric</option>
									<option value="2">Eko Electric</option>
									<option value="3">Abuja Electric</option>
									<option value="4">Kano Electric</option>
									<option value="5">Enugu Electric</option>
									<option value="6">Port Harcourt Electric</option>
									<option value="7">Ibadan Electric</option>
									<option value="8">Kaduna Electric</option>
									<option value="9">Jos Electric</option>
									<option value="11">Yola Electric</option>
									<option value="13">Benin Electric</option>
								</Form.Select>
								<Form.Group>
									<Form.Label className="label phone-label">
										Meter Number
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="08105082299"
										className="mb-3"
										{...register("meter_number")}
									/>
								</Form.Group>
								<Form.Label className="label phone-label">
									Meter Type
								</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
									{...register("MeterType")}>
									<option></option>
									<option value="Prepaid">Prepaid</option>
									<option value="Postpaid">Postpaid</option>
								</Form.Select>
								<p className="mb-3 plan-note">VTU or share and Sell</p>
								<Form.Group>
									<Form.Label className="label">Amount</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
										{...register("amount")}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="align-left">
										Customer Phone Number
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
										// {...register("network")}
									/>
								</Form.Group>
								{/* <p className='mb-3 plan-note'>Customer phone number</p> */}
								<Form.Group>
									{/* <Form.Label className='label'>Amount</Form.Label> */}
									<Form.Control
										type="phone-number"
										placeholder="0.5 Percent Discount"
										className="mb-3"
										// {...register("network")}
									/>
								</Form.Group>
								<Button className="Buy-now-btn" type="submit">Validate</Button>{" "}
							</Form>
						</Col>
						{/* <Col sm={4} xs={{ order: '' }}>sm=4</Col> */}
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default Electricity;
