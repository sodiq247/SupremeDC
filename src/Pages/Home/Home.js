/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

function Home() {
	return (
		<Container>
			<Row className="justify-content-md-center cor">
				<Col xs lg="8">
					1 of 3
				</Col>
				<Col md="auto">Variable width content</Col>
				<Col xs lg="2">
					3 of 3
				</Col>
			</Row>
			<Row>
				<Col>1 of 3</Col>
				<Col md="auto">Variable width content</Col>
				<Col xs lg="2">
					3 of 3
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
