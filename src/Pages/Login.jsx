/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import accountService from "../Services/authServices";
const Login = (props) => {
  const { handleSubmit, register } = useForm();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = async (data) => {
    setLoading(true);
    let response = await accountService.login(data);
    if (response.statusCode === 200) {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
      window.location.href = "/dashboard";
    } else {
      setMessage(response.message);
    }
    setLoading(false);
  };
	return (
		<div>
			<Container className="BuyData-main logout-main">
				<div className="BuyData-submain Form-submain">
					<Row className="logout-row">
						<Col sm={8} xs={{ order: "" }} className="BuyData-form BuyAirtime">
						{!loading && (
							
							<Form className="input-form">
								<div>
									<h1 className="">Supremedata</h1>
									{message ? <div className="alert alert-info">{message}</div> : null}
								</div>
								<Form.Group>
									<Form.Label className="label phone-label">
										Username
									</Form.Label>
									<Form.Control
										type="text"
										name="username"
										className="mb-3"
										placeholder="Enter Username"
										{...register("username")}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label">Password</Form.Label>
									<Form.Control
										className="mb-3"
										type="password"
										name="password"
										placeholder="Enter Password"
										{...register("password")}
									/>
								</Form.Group>
								{/* <link to='/Logout'>Forgot Password ?</link> */}
								<Link to="">
									<Button type="submit" className="Buy-now-btn">Login</Button>{" "}
								</Link>
								<div>Don't have an account yet ? <Link to='/Signup'>Sign Up</Link></div>
							</Form>
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
}

export default Login;
