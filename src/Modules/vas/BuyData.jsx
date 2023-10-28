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
import dataTypes from "../Plans/dataTypes.json";
import { propTypes } from "react-bootstrap/esm/Image";

const BuyData = (props) => {
  // console.log(props)
  //   let [message, setMessage] = useState("");
  const { handleSubmit, register } = useForm();

  const dataBundle = async (data) => {
    // event.preventDefault();
    // alert(data)
    let response = await vasServices.dataBundle(data);
    console.log(response);
    //  if (response.status === 'successful') {
    // 		setMessage("Successful");
    // 		 navigate("/");
    // 	  } else {
    // 		setMessage(response.message);
    // 	  }
  };
  const [selectedNetwork, setSelectedNetwork] = useState(""); // State to track selected network
  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <Container className='BuyData-main'>
        <div className='BuyData-submain Form-submain'>
          <Row>
            <Col sm={8} xs={{ order: "" }} className='BuyData-form'>
              {/* {message && <div className="alert alert-info">{message}</div>} */}
              {/* <Form onSubmit={(e) => handleSubmit((data) => dataBundle(data, e))}> */}
              <Form onSubmit={handleSubmit(dataBundle)}>
                <Form.Label className='label'>Network</Form.Label>
                <Form.Select
                  aria-label='Default select example'
                  className='mb-3'
                  {...register("network")}>
                  <option value=''>Select a network</option>
                  <option value='1'>MTN</option>
                  <option value='2'>GLO</option>
                  <option value='3'>Airtel</option>
                  <option value='4'>9mobile</option>
                </Form.Select>
                <Form.Label className='label phone-label'>Data Type</Form.Label>
                <Form.Select
                  aria-label='Select a network'
                  className='mb-3'
                  value={selectedNetwork}
                  onChange={handleNetworkChange}>
                  <option value=''>Select a data type</option>
                  <option value='1'>SME</option>
                  <option value='2'>Corporate Gifting</option>
                  <option value='3'>Gifting</option>
                  <option value='4'>Direct</option>
                </Form.Select>
                <p className='mb-3 plan-note'>
                  Select Plan Type SME or GIFTING or CORPORATE GIFTING
                </p>
                <Form.Label className='label'>Plan</Form.Label>
                <Form.Select
                  aria-label='Default select example'
                  className='mb-3'
                  {...register("plan")}>
                  <option value=''>Select a plan</option>
                  {selectedNetwork &&
                    dataTypes[selectedNetwork].map((data, index) => (
                      <option key={index} value={data.id}>
                        {data.title}
                      </option>
                    ))}
                </Form.Select>
                <Form.Group>
                  <Form.Label className='label phone-label'>
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type='mobile_number'
                    name='mobile_number'
                    placeholder='Enter phone number'
                    className='mb-3'
                    {...register("mobile_number")}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className='label'>Amount</Form.Label>
                  <Form.Control
                    type='phone-number'
                    placeholder='200'
                    className='mb-3'
                  />
                </Form.Group>
                <Button className='Buy-now-btn' type='submit' value=''>
                  Buy Now
                </Button>{" "}
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
};

export default BuyData;
