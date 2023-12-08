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
import { useWallet } from "../../Components/Wallet";
//import { propTypes } from "react-bootstrap/esm/Image";

const BuyData = (props) => {
  // console.log(props)
  //   let [message, setMessage] = useState("");
  const { handleSubmit, register, watch } = useForm();
  const { state, reduceWallet } = useWallet();
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedDataType, setSelectedDataType] = useState("");
  const [amountToPay, setAmountToPay] = useState(0);
  const [message, setMessage] = useState("");

  const balance = state.balance;

  const dataBundle = async (data) => {
    const { amount } = data;
    if (balance < amount) {
      console.log("Insufficient balance");
      setMessage("Insufficient balance");
    } else {
      let response = await vasServices.dataBundle(data);
      // console.log(response);
      reduceWallet(amountToPay);

      console.log("Transaction successful");
      setMessage("Transaction successful");
      // if (response.status === true) {
      //   setMessage(response.message);
      //   setInitialized(2);
      //   setLoading(false);
      // } else {
      //   setMessage(response.message);
      //   setLoading(false);
      // }
    }
  };

  // const [selectedNetwork, setSelectedNetwork] = useState(""); // State to track selected network
  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
    setSelectedDataType(""); // Reset selected data type when the network changes
  };

  const handleDataTypeChange = (event) => {
    setSelectedDataType(event.target.value);
  };

  const updateAmountToPay = () => {
    const selectedPlanId = watch("plan"); // Get the selected plan ID from the form

    if (selectedPlanId) {
      // Find the selected plan in the JSON data
      const selectedPlan = dataTypes[selectedNetwork].find(
        (plan) => plan.id === selectedPlanId
      );

      if (selectedPlan) {
        // Extract the amount from the selected plan and update the state
        const amount = parseFloat(selectedPlan.amount);
        const roundedAmountToPay = Math.round((amount + 50) * 100) / 100;
        setAmountToPay(roundedAmountToPay);
      }
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <Container className='BuyData-main'>
        <div className='BuyData-submain Form-submain'>
          <Row>
            <Col sm={8} xs={{ order: "" }} className='BuyData-form'>
              {message && <div className='alert alert-info'>{message}</div>}
              {/* <Form onSubmit={(e) => handleSubmit((data) => dataBundle(data, e))}> */}
              <Form onSubmit={handleSubmit(dataBundle)}>
                <Form.Label className='label'>Network</Form.Label>
                <Form.Select
                  aria-label='Default select example'
                  className='mb-3'
                  {...register("network")}
                  onChange={handleNetworkChange}>
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
                  value={selectedDataType}
                  onChange={handleDataTypeChange}>
                  <option value=''>Select a data type</option>
                  <option value='sme'>SME</option>
                  <option value='cg'>Corporate Gifting</option>
                  <option value='gifting'>Gifting</option>
                </Form.Select>
                <p className='mb-3 plan-note'>
                  Select Plan Type SME or GIFTING or CORPORATE GIFTING
                </p>
                <Form.Label className='label'>Plan</Form.Label>
                <Form.Select
                  aria-label='Default select example'
                  className='mb-3'
                  {...register("plan", { onChange: updateAmountToPay })}
                  value={watch("plan")}>
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
                {/* <Form.Group>
									<Form.Label className="label">Amount</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
                    value={data.amount}
										{...register("amount", { onChange: updateAmountToPay })}
									/>
                </Form.Group> */}
                <Form.Group>
                  <Form.Label className='label'>Amount</Form.Label>
                  <Form.Control
                    type='phone-number'
                    value={amountToPay}
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
