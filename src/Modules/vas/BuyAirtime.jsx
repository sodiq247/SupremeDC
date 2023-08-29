/** @format */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";



import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import vasServices from "../../Services/vasServices";

const BuyAirtime = (props) => {
	let [plans, setPlans] = useState();
	const [loading, setLoading] = useState(false);
	let [initialized, setInitialized] = useState(0);
	let [message, setMessage] = useState("");
	let [payload, setPayload] = useState({
		network: "",
		amount: "",
		// transaction_pin: "",
		mobile_number: "",
		Ported_number: "",
		airtime_type: "",
	});
	const { handleSubmit, register } = useForm();

  const transfer = async (data) => {
    setLoading(true);
    // payload.transaction_pin = data.transaction_pin;
    let response = await vasServices.airTime(payload);
    if (response.status === true) {
      setMessage(response.message);
      setInitialized(2);
      setLoading(false);
    } else {
      setMessage(response.message);
      setLoading(false);
    }
  };
  const initiate = async (data) => {
    setLoading(true);
    payload.network = data.network;
    payload.amount = data.amount;
    payload.mobile_number = data.mobile_number;
    payload.Ported_number = data.Ported_number;
    payload.airtime_type = data.airtime_type;
   	setInitialized(1);
    setLoading(false);
  };
  const unset = async () => {
    setInitialized(0);
    setMessage(null);
    document.getElementById("form-initiate").reset();
    document.getElementById("form-complete").reset();
    document.querySelectorAll("input, select").forEach((e) => {
      e.value = null;
    });
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
						{initialized === 0 && !loading && (
							<Form id="form-initiate" onSubmit={handleSubmit(initiate)}>
								<Form.Label className="label">Network</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3">
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
									className="mb-3">
									<option></option>
									<option value="1">VTU</option>
									<option value="2">SHARE and SELL</option>
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
						)}
						{initialized === 1 && !loading && (
						<Form id="form-complete" onSubmit={handleSubmit(transfer)}>
								<Form.Group>
									<Form.Label className="label">Please Enter Your Pin to complete transaction</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter your pin"
										className="mb-3"
										{...register("transaction_pin")}
									/>
									<Button className="btn btn-primary" type="submit">
										Proceed
										</Button>
								</Form.Group>
								</Form>
								)}
								{initialized === 2 && !loading && (
								<button onClick={unset} className="btn btn-primary">
									Back
								</button>
								)}
								{loading && (
                  <div>
                    {" "}
                    <div className="spinner-border spinner-border-sm"></div>
                    <div className="spinner-grow spinner-grow-sm"></div>{" "}
                  </div>
                )}
						</Col>
						{/* <Col sm={4} xs={{ order: '' }}>sm=4</Col> */}
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default BuyAirtime;
