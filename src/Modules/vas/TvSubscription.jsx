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

const  TvSubscription = (props) => {
  let [message, setMessage] = useState("");
  const { handleSubmit, register } = useForm();
  const cabletv = async (data) => {
    let response = await vasServices.cabletv(data);
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

								<Form onSubmit={handleSubmit(cabletv)}>

								<Form.Label className="label">Cable-TV Name</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
									{...register("cablename")}
									>
									<option></option>
									<option value="1">GOTV</option>
									<option value="2">DSTV</option>
									<option value="3">STARTIME</option>
								</Form.Select>
								<Form.Group>
									<Form.Label className="label">
										Smart Card Number / IUC Number
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
									{...register("smart_card_number")}

									/>
								</Form.Group>
								<Form.Label className="label">Cable-Tv Plan</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
									{...register("cableplan")}
									>
									<option></option>
									<option value="1">GOTV</option>
									<option value="2">planTV</option>
									<option value="3">STARTIME</option>
								</Form.Select>
								{/* <p className='mb-3 plan-note'>Select Plan Type SME or GIFTING or CORPORATE GIFTING</p> */}
								<Form.Group>
									<Form.Label className="label phone-label">Dicount</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="1.5 Percent Dicount"
										className="mb-3"
									/>
								</Form.Group>
								<Button className="Buy-now-btn" type="submit">Buy Now</Button>{" "}
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
}

export default TvSubscription;
