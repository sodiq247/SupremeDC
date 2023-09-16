/** @format */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import { useState} from "react";
import { useForm } from "react-hook-form";
import vasServices from "../../Services/vasServices";

const BuyAirtime = (props) => {
	let [message, setMessage] = useState("");
	const { handleSubmit, register } = useForm();

  const airTime = async (data) => {
     let response = await vasServices.airTime(data);
    // if (response.status === true) {
    //   setMessage(response.message);
    //   setInitialized(2);
    //   setLoading(false);
    // } else {
    //   setMessage(response.message);
    //   setLoading(false);
    // }
  };

	return (
		<div>
			<Header />
			<Sidebar />
			<Container className="BuyData-main">
        		{message && <div className="alert alert-info">{message}</div>}
				<div className="BuyData-submain Form-submain">
					<Row>
						<Col sm={8} xs={{ order: "" }} className="BuyData-form">
							<Form onSubmit={handleSubmit(airTime)}>
								<Form.Label className="label">Network</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
										{...register("network")}>
									<option></option>
									<option value="1">MTN</option>
									<option value="2">GLO</option>
									<option value="3">Airtel</option>
									<option value="3">9mobile</option>
								</Form.Select>
								<Form.Label className="label phone-label">
									Airtime type
								</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
										{...register("airtime_type")}>
									<option></option>
									<option value="VTU">VTU</option>
									<option value="Share and Sell">SHARE and SELL</option>
								</Form.Select>
								<p className="mb-3 plan-note">VTU or share and Sell</p>
								<Form.Group>
									<Form.Label className="label phone-label">
										Phone Number
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="08105082299"
										className="mb-3"
										{...register("mobile_number")}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label">Amount</Form.Label>
									<Form.Control
										type="number"
										placeholder="Enter your amount"
										className="mb-3"
										{...register("amount")}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label phone-label">
										Amount to pay
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
										
									/>
								</Form.Group>
								<Button className="Buy-now-btn" type="submit">Buy Now</Button>{" "}
							</Form>
						
						</Col>
						{/* <Col sm={4} xs={{ order: '' }}>sm=4</Col> */}
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default BuyAirtime;
