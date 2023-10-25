import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import SignIn from "./pages/SignIn/SignIn"
import User from "./pages/User/User"

export default function App() {
  	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/user" element={<User />} />
			</Routes>
			<Footer />
	 	</div>
  	)
}