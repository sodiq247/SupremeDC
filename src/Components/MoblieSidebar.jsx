/** @format */
import React from "react";
import "../CSS/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouseChimney,
	faPhoneVolume,
	faSignal,
	faLightbulb,
	faTv,
	faWallet,
	faTag,
	faUser,
	faGear,
	faRightFromBracket,
	faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
	return (
		<side className="sidebar ">
			<div className=" ">
				<div className="profile">
					<div className="profile-pic">
						<FontAwesomeIcon icon={faCircleUser} className="profile-icon" />
					</div>
					<div className="user-detail">
						<div className="profile-name">Abdulrazaq Sodiq</div>
						<div className="wallet-balance">Balance: ₦ 2,270.55</div>
					</div>
					<hr />
				</div>
				<ul className="sidebar-list mobile-list">
					<li>
						<Link to='/'>
							<FontAwesomeIcon icon={faHouseChimney} className="icon" />
							Dashboard
						</Link>
					</li>
					<li>
						<Link to='/BuyAirtime'>
							<FontAwesomeIcon icon={faPhoneVolume} className="icon" />
							Buy Airtime
						</Link>
					</li>
					<li>
						<Link to='/BuyData'>
							<FontAwesomeIcon icon={faSignal} className="icon" />
							Buy Data
						</Link>
					</li>
					<li>
						<Link to='/Electricity'>
							<FontAwesomeIcon icon={faLightbulb} className="icon" />
							Electricity
						</Link>
					</li>
					<li>
						<Link to='/TvSubscription'>
							<FontAwesomeIcon icon={faTv} className="icon" />
							TV Subscription
						</Link>
					</li>
					<li>
						<Link to='/FundWallet'>
							<FontAwesomeIcon icon={faWallet} className="icon" />
							Fund Wallet
						</Link>
					</li>
					<li>
						<Link to='/Prices'>
							<FontAwesomeIcon icon={faTag} className="icon" />
							Prices
						</Link>
					</li>
					<li>
						<Link to='/Account'>
							<FontAwesomeIcon icon={faUser} className="icon" />
							Account
						</Link>
					</li>
					<li>
						<Link to='/Settings'>
							<FontAwesomeIcon icon={faGear} className="icon" />
							Settings
						</Link>
					</li>
					<li>
						<Link to='/Logout'>
							<FontAwesomeIcon icon={faRightFromBracket} className="icon" />
							Log Out
						</Link>
					</li>
				</ul>
			</div>
		</side>
	);
};

export default MobileSidebar;
