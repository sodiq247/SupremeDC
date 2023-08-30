/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import accountService from "../Services/authServices"

const Signup = (props) => {
	const { handleSubmit, register } = useForm();
  const [message, setMessage] = useState(null);

 
  const createAccount = async (data) => {
	
    let response = await accountService.signup(data);
	console.log(response)
	return
    if (response.status === 200) {
      setMessage("Registration was successful");
    } else {
      setMessage(response.data.message);
    }
  };
	return (
		<div>
			<Container className="BuyData-main logout-main">
				<div className="BuyData-submain Form-submain">
				{message ? (
                <div className="alert alert-info">{message}</div>
              ) : null}
					<Row className="logout-row">
						<Col sm={8} xs={{ order: "" }} className="BuyData-form BuyAirtime">
							<Form className="input-form" onSubmit={handleSubmit(createAccount)}>
								<div>
									<h1 className="">Supremedata</h1>
								</div>
								<Form.Group>
									<Form.Label className="label phone-label">
										Fullname
									</Form.Label>
									<Form.Control
										type="name"
										placeholder="fullmame"
										className="mb-3"
										{...register("first_name")}
                            			required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label phone-label">
										Username
									</Form.Label>
									<Form.Control
										type="name"
										placeholder="Enter your username"
										className="mb-3"
										{...register("username")}
                            			required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label phone-label">
										Email
									</Form.Label>
									<Form.Control
										type="name"
										placeholder="Enter your email"
										className="mb-3"
										{...register("email")}
                            			required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label phone-label">
										Phone
									</Form.Label>
									<Form.Control
										type="name"
										placeholder="08000000000"
										className="mb-3"
										{...register("phone")}
                            			required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label phone-label">
									Referral username [optional]
									</Form.Label>
									<Form.Control
										type="name"
										placeholder="supremedata"
										className="mb-3"
									/>
									<p>Leave blank if no referral</p>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label">Transaction Pin</Form.Label>
									<Form.Control
										type="password"
										className="mb-3"
										placeholder="(4 Digit) Transaction Pin"
										{...register("pin")}
										required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label">Password</Form.Label>
									<Form.Control
										type="password"
										className="mb-3"
										placeholder="Password"
										{...register("password")}
										required
									/>
									<p>min_lenght-8 mix characters [i.e musa1234]</p>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label">Confirm Password</Form.Label>
									<Form.Control
										type="password"
										className="mb-3"
										{...register("password")}
										required
									/>
									<p>Enter same password as before</p>
								</Form.Group>
								{/* <Checkbox></Checkbox> */}
							
									<Button type="submit" value="Register" className="Buy-now-btn">Sign Up</Button>{" "}
								
                    			{/* <Input type="submit" class="btnRegister" value="Register" /> */}
								<div>Already a member? <Link to='/'>Sign In</Link></div>
							</Form>
						</Col>
						{/* <Col sm={4} xs={{ order: '' }}>sm=4</Col> */}
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default Signup;
