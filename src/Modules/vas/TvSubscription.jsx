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
import tvPlans from "../Plans/tvPlans.json"
import Modal from 'react-bootstrap/Modal';


const  TvSubscription = (props) => {
	const [message, setMessage] = useState("");
	const { handleSubmit, register } = useForm();
	
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	
	 const validateIUC = async (data) => {
    try {
      const response = await vasServices.validateIUC(data);
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
      setMessage("An error occurred while validating the IUC.");
    }
  };

  const cableTVForm = ()  => {
	const cableTVForm = document.getElementById("cableTV-form")
	const validateIUCForm = document.getElementById("validate-IUCform")
	
		if (cableTVForm.classList.contains("d-none")) {
			cableTVForm.classList.remove("d-none")
			validateIUCForm.classList.add("d-none")
			setShow(false)
			 //console.log(1)
		}
	}


  const cabletv = async (data) => {
    let response = await vasServices.cabletv(data);
	// console.log(data);
    console.log(response);
    //  if (response.status === successful) {
	// 		setMessage("Successful");
	// 		// navigate("/");
	// 	  } else {
	// 		setMessage(response.message);
	// 	  }
    };

	const [selectedTvPlan, setSelectedTvPlan] = useState(""); // State to track selected TvPlan
	  const handleTvPlanChange = (event) => {
		setSelectedTvPlan(event.target.value);
	  };

	return (
		<div>
			<Header />
			<Sidebar />
			<Container className="BuyData-main">
				<div className="BuyData-submain Form-submain">
					<Row>
						<Col sm={8} xs={{ order: "" }} className="BuyData-form">
						{/* {message && <div className="alert alert-info">{message}</div>} */}

						<Form className=" input-form" id="validate-IUCform" onSubmit={handleSubmit(validateIUC)}>
								<Form.Label className="label">CableTV Name
								</Form.Label>
						<Form.Select
									aria-label="Default select example"
									className="mb-3"
									{...register("cable_name")}>
									<option>Select a CableTV</option>
									<option value="GOTV">GOTV</option>
									<option value="DSTV">DSTV</option>
									<option value="STARTIME">STARTIME</option>
								</Form.Select>
								
								<Form.Label className="label">
										Smart Card Number / IUC Number
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
									{...register("smart_card_number")}

									/>
								<Button className="Buy-now-btn" onClick={handleShow} type="submit">Validate</Button>{" "}
								</Form>

								<Form  className="d-none input-form" id="cableTV-form" onSubmit={handleSubmit(cabletv)}>

								<Form.Label className="label">Cable-TV Name</Form.Label>
									{/* <Form.Select
									aria-label="Default select example"
									className="mb-3"
									{...register("cablename")}
									>
									
								</Form.Select> */}
								<Form.Select
									aria-label="Default select example"
									className="mb-3"
									value={selectedTvPlan}
									{...register("cablename")}
									onChange={handleTvPlanChange}
									
									>
									<option>Select a CableTV</option>
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
									<option value="">Select a plan</option>
									{selectedTvPlan &&
											tvPlans[selectedTvPlan].map((data, index) => (
												<option key={index} value={data.id}>
												{data.title}
												</option>
									))}
																	
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
				<div>
				<Modal  show={show} onHide={handleClose} size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
						<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>						
							{message && <div className="alert alert-info">{message}</div>}		
						</Modal.Body>
						<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={cableTVForm}>
							Proceed
						</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</Container>
		</div>
	);
}

export default TvSubscription;
