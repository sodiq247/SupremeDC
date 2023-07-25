/** @format */
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<side className="sidebar">
			<div className="sidebar-sticky">
				<ul>
					<li>
						<a className="active" href="/user/dashboard">
							<i className="ri  ri-dashboard-line ri-lg"></i>
							Dashboard
						</a>
					</li>
					<li>
						<a href="/user/airtime">
							<i className="ri ri-smartphone-line ri-lg"></i>
							<br />
							Recharge
						</a>
					</li>
					<li>
						<a href="/user/electricity">
							<i className="ri ri-flashlight-line ri-lg"></i>
							<br />
							Electricity
						</a>
					</li>
					<li>
						<a href="/user/api-keys">
							<i className="ri ri-checkbox-blank-circle-fill ri-lg"></i>
							<br />
							More Services
						</a>
					</li>
					<li>
						<a href="#">
							<i className="ri ri-question-line ri-lg"></i>
							<br />
							Help
						</a>
					</li>
					<li className="nav-item lg-btn web-btn">
						<a className="nav-link btn logout-btn" href="/logout">
							Logout
							<i className="ri ri-logout-circle-r-line"></i>
						</a>
					</li>
				</ul>
			</div>
		</side>
	);
};

export default Sidebar;
