import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"

export default function App() {
  	return (
		<div>
			<Header />
			<Routes>
                <Route path="/" element={<Home />} />
			</Routes>
			<Footer />
	 	</div>
  	)
}