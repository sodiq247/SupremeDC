/** @format */

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Navbar } from "react-bootstrap";
import MobileSidebar from "./MoblieSidebar";
//import Vector from '../Assets/images/Vector.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../CSS/Header.css";

function Header() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar className="main ">
			<Container>
				<Button onClick={handleShow} className="mobile faBars-btn">
					<FontAwesomeIcon icon={faBars} className="faBars" />
				</Button>
				{/* <img src={Vector} alt=""  className='profile-pic web'/> */}
				<Navbar.Brand href="#home" className="title">
					Dashboard
				</Navbar.Brand>
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton />
					<Offcanvas.Body>
						<MobileSidebar />
					</Offcanvas.Body>
				</Offcanvas>
			</Container>
		</Navbar>
	);
}

export default Header;
