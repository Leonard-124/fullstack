
import { motion } from "framer-motion";
//import { useAuthStore } from "../store/authStore";
//import { formatDate } from "../utils/date";
import { Link } from "react-router-dom";

import React from 'react'

const DashboardPage = () => {
  return (
<header >
	<nav className="flex justify-around m-2">
		<Link to='hey'>Home</Link>
		<Link to='/login'>About</Link>
		<Link to='welcome'>Sign in</Link>
		<Link to= '/why'>Profile</Link>
		<Link to = '/poss'>Withdraw</Link>
	</nav>
</header>
  )
}

export default DashboardPage
