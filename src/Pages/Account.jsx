import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../CSS/Buydata.css'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

function Account() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Container className='BuyData-main'>
		<div className='BuyData-submain'>
      <Row>
        <Col sm={8} xs={{ order: '' }} className='BuyData-form BuyAirtime' >
          <div className='Account'>
            <div>
              <ul className='Account-detail'>
                <li>Username</li>
                <li>Phone Number</li>
                <li>Email</li>
                <li>Bank Name</li>
                <li>Account Number</li>
              </ul>
              <Link to="/Settings" className='update-acct'>Update</Link>


            </div>
            <div>
              <ul className='Account-detail-result'>
                <li>Abdulrazaq Sodiq</li>
                <li>08105082299</li>
                <li>Abdulrazaqsodiq2015@gmail.com</li>
                <li>Gtbank</li>
                <li>0160157649</li>
              </ul>
            </div>
          </div>
		</Col>
      </Row>
      </div>
    </Container>
    </div>
  );
}

export default Account;