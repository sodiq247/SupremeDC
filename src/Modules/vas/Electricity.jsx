/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useForm } from "react-hook-form";
import vasServices from "../../Services/vasServices";
// import { Alert } from "react-bootstrap";

const Electricity = (props) => {
	const [message, setMessage] = useState("");
	const { handleSubmit, register } = useForm();
	
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


	 const validateMeter = async (data) => {
    try {
      const response = await vasServices.validateMeter(data);
      console.log(response);
	  setMessage(response.name);
	//   console.log(ModalMessage)
    //   if (response.status === "successful") {
    //     setModalMessage(response.name);
    //     setIsModalOpen(true); // Open the modal
    //   } else {
    //     setModalMessage(response.message);
    //     setIsModalOpen(true); // Open the modal
    //   }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while validating the meter.");
    }
  };
 
	return (
		<div>
			<Header />
			<Sidebar />
			<Container className="BuyData-main">
				<div className="BuyData-submain Form-submain">
					<Row>
						<Col sm={8} xs={{ order: "" }} className="BuyData-form BuyAirtime">


						<Form className="input-form" onSubmit={handleSubmit(validateMeter)}>
								<Form.Label className="label">Dico Name
								
						<Form.Select
									aria-label="Default select example"
									className="mb-3"
									{...register("disconame")}>
									<option></option>
									<option value="Ikeja Electric">Ikeja Electric</option>
									<option value="Eko Electric">Eko Electric</option>
									<option value="Abuja Electric">Abuja Electric</option>
									<option value="Kano Electric">Kano Electric</option>
									<option value="Enugu Electric">Enugu Electric</option>
									<option value="Port Harcourt Electric">Port Harcourt Electric</option>
									<option value="Ibadan Electric">Ibadan Electric</option>
									<option value="Kaduna Electric">Kaduna Electric</option>
									<option value="Jos Electric">Jos Electric</option>
									<option value=">Yola Electric">Yola Electric</option>
									<option value=">Benin Electric">Benin Electric</option>
								</Form.Select>
								</Form.Label>
								<Form.Label className="label phone-label">
										Meter Number
								
								<Form.Control
										type="phone-number"
										placeholder="08105082299"
										className="mb-3"
										{...register("meternumber")}
									/>
									</Form.Label>
								<Form.Label className="label phone-label">
									Meter Type
								
								<Form.Select
								aria-label="Default select example"
								className="mb-3"
								{...register("mtype")}>
								<option></option>
								<option value="Prepaid">Prepaid</option>
								<option value="Postpaid">Postpaid</option>
								</Form.Select>
								<Button className="Buy-now-btn" onClick={handleShow} type="submit">Validate</Button>{" "}
								</Form.Label>
						</Form>
						
						</Col>
						{/* <Col sm={4} xs={{ order: '' }}>sm=4</Col> */}
					</Row>
				</div>
				<div>
				
				<Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>						{message && <div className="alert alert-info">{message}</div>}		
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
				</div>
			</Container>
			
		</div>
	);
}

export default Electricity;
