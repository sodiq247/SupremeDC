/** @format */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CSS/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faPhoneVolume, faSignal, faLightbulb, faTv, faWallet, faTag, faUser, faGear, faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'; 
import gtco from '../Assets/images/gtco'


const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard">
	  <Container className="dashboard-child">
		<div className='greeting'>Good evening, SupremeDC</div>
		<div className='status'>Package : Smart Earner <br/>Account status:</div>
	  <Row>
            <Col lg={3} xs={6} sm={4}>large</Col>
            <Col lg={3} xs={6} sm={4}>large</Col>
            <Col lg={3} xs={6} sm={4}>large</Col>
            <Col lg={3} xs={6} sm={4}>large</Col>
          </Row>
          <Row>
            <Col lg={12} xs={12} sm={12}>
				<div className='bank-acct' id='gtbank'>
					<img src={gtco} alt="gtco logo"  className='gtco-pic'/>
					<h3>Account Number: 0807547109<br/>Account Name: HUSMODATA - SupremeDC<br/>Bank Name: GTBank<br/>AUTOMATED BANK TRANSFER</h3>
					<p>Make transfer to this account to fund your wallet</p>
					</div>
			</Col>
          </Row>
		  <Row className='transaction'>
            <a href="/user/airtime" className="transaction-items"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faWallet} className="icon" />
							
						</Col>transactions</a>
            <a href="/user/airtime" className="transaction-items"><Col lg={3} xs={6} sm={4}>
						
						<FontAwesomeIcon icon={faSignal}  className="icon" />
							
						</Col>Data transactions</a>
            <a href="/user/airtime" className="transaction-items"><Col lg={3} xs={6} sm={4}>
			<FontAwesomeIcon icon={faPhoneVolume} className="icon" />
							
							</Col>Airtime transactions</a>
            <a href="/user/airtime" className="transaction-items"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faWallet} className="icon" />
							
						</Col>Wallet summry</a>
          </Row>
        </Container>
      </div>
	  <div className="notification-div">
        
		<Container className="">
		<Row>
            <Col lg={4} xs={6} sm={4} className='wallet-items'>
						<p>Wallet Balance</p>
						<h4>₦ 2,270.55</h4>
						</Col>
            <Col lg={4} xs={6} sm={4} className='wallet-items'>
						<p>Referral Bonus</p>
						<h4>₦ 0.0</h4>
						</Col>
            <Col lg={4} xs={6} sm={4} className='wallet-items'>
						<p>My Total Referral</p>
						<h4>0</h4>
						</Col>
          </Row>
        </Container>
      </div>
	  <div className="notification-div">
        
		<Container className="">
          <Row>
            <Col lg={4} xs={6} sm={4} className='notification-items'>
						<h3>Notifications</h3>
						<p>Payment successful you account has been credited with sum of #2350 .</p>
						<Button variant="info">all message</Button>{' '}
							
						</Col>
            <Col lg={4} xs={6} sm={4} className='notification-items'>
						<h3>FAQs:</h3>
						<p>
Please go through them to have a better knowledge of this platform
</p>
						<Button variant="secondary">FAQ?</Button>{' '}	
						</Col>
            <Col lg={4} xs={6} sm={4} className='notification-items'>
						<h3>Support Team:
</h3>
						<p>Have anything to say to us? Please contact our Support Team on Whatsapp
</p>
						<Button variant="success">Whatsapp</Button>{' '}	
						</Col>
          </Row>
        </Container>
      </div>
	  <div className="services">
        
		<Container className="">
          <Row>
		  <a href="/user/airtime" className="service">
            <Col lg={3} xs={6} sm={4} >
						<FontAwesomeIcon icon={faPhoneVolume} className="icon" />
							
						</Col>Buy Airtime</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faSignal}  className="icon" />
							
						</Col>Buy Data</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faLightbulb} className="icon" />
							
						</Col>Electricity</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faTv}  className="icon" />
							
						</Col>TV Subscription</a>
          </Row>
          <Row>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faWallet} className="icon" />
							
						</Col>Fund Wallet</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faTag} className="icon" />
							
						</Col>Prices</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faUser}  className="icon" />
							
						</Col>Account</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faGear} className="icon" />
							
						</Col>Settings</a>
          </Row>
          <Row>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faRightFromBracket} className="icon" />
							
						</Col>Log Out</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faRightFromBracket} className="icon" />
							
						</Col>Log Out</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faRightFromBracket} className="icon" />
							
						</Col>Log Out</a>
            <a href="/user/airtime" className="service"><Col lg={3} xs={6} sm={4}>
						<FontAwesomeIcon icon={faRightFromBracket} className="icon" />
							
						</Col>Log Out</a>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
