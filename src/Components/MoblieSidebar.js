/** @format */
import React from "react";
import "../CSS/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faPhoneVolume, faSignal, faLightbulb, faTv, faWallet, faTag, faUser, faGear, faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const MobileSidebar = () => {
	return (
		<side className="sidebar ">
			<div className=" ">
			<div className="profile">
					<div className="profile-pic"><FontAwesomeIcon icon={faCircleUser} className="profile-icon" /></div>
					<div className="user-detail">
					<div className="profile-name">Abdulrazaq Sodiq</div>
					<div className="wallet-balance">Balance: ₦ 2,270.55</div>
					</div>
					<hr />
				</div>
				<ul className="sidebar-list mobile-list">
					<li>
						<a className="active" href="/user/dashboard">
						<FontAwesomeIcon icon={faHouseChimney}   className="icon" />
							Dashboard
						</a>
					</li>
					<li>
						<a href="/user/airtime">
						<FontAwesomeIcon icon={faPhoneVolume} className="icon" />
							Buy Airtime
						</a>
					</li>
					<li>
						<a href="/user/airtime">
						<FontAwesomeIcon icon={faSignal}  className="icon" />
							Buy Data
						</a>
					</li>
					<li>
						<a href="/user/electricity">
						<FontAwesomeIcon icon={faLightbulb} className="icon" />
							Electricity
						</a>
					</li>
					<li>
						<a href="/user/airtime">
						<FontAwesomeIcon icon={faTv}  className="icon" />
							TV Subscription
						</a>
					</li>
					<li>
						<a href="/user/api-keys">
						<FontAwesomeIcon icon={faWallet} className="icon" />
							Fund Wallet
						</a>
					</li>
					<li>
						<a href="#">
						<FontAwesomeIcon icon={faTag} className="icon" />
							Prices
						</a>
					</li>
					<li>
						<a href="/user/airtime">
						<FontAwesomeIcon icon={faUser}  className="icon" />
							Account
						</a>
					</li>
					<li>
						<a href="/user/airtime">
						<FontAwesomeIcon icon={faGear} className="icon" />
							Settings
						</a>
					</li>
					<li>
						<a href="/user/airtime">
						<FontAwesomeIcon icon={faRightFromBracket} className="icon" />
							Log Out
						</a>
					</li>
				</ul>
			</div>
		</side>
	);
};

export default MobileSidebar;
