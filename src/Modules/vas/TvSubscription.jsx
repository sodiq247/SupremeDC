/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

function TvSubscription() {
	return (
		<div>
			<Header />
			<Sidebar />
			<Container className="BuyData-main">
				<div className="BuyData-submain Form-submain">
					<Row>
						<Col sm={8} xs={{ order: "" }} className="BuyData-form">
							<Form>
								<Form.Label className="label">Cable-TV Name</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3">
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
									/>
								</Form.Group>
								<Form.Label className="label">Cable-Tv Plan</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3">
									<option></option>
									<option value="1">GOTV</option>
									<option value="2">DSTV</option>
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
								<Button className="Buy-now-btn">Buy Now</Button>{" "}
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
