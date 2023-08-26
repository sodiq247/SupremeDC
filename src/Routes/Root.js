/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import BuyData from "../Pages/BuyData";
import BuyAirtime from "../Pages/BuyAirtime";
import Electricity from "../Pages/Electricity";
import TvSubscription from "../Pages/TvSubscription";
import Settings from "../Pages/Settings";
import Account from "../Pages/Account";
import Prices from "../Pages/Prices";
import FundWallet from "../Pages/FundWallet";
import Logout from "../Pages/Logout";
const Root = () => {
	return (
		<Routes>
			<Route path="/" exact Component={Logout} />
			<Route path="/Dashboard" Component={Dashboard} />
			<Route path="/BuyData" Component={BuyData} />
			<Route path="/BuyAirtime" Component={BuyAirtime} />
			<Route path="/Electricity" Component={Electricity} />
			<Route path="/TvSubscription" Component={TvSubscription} />
			<Route path="/Settings" Component={Settings} />
			<Route path="/Account" Component={Account} />
			<Route path="/Prices" Component={Prices} />
			<Route path="/FundWallet" Component={FundWallet} />
		</Routes>
	);
};

export default Root;
