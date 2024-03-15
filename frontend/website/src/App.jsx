// importing react stuff

import { Route, Routes } from "react-router-dom";

// importing ui and extras stuff

import { Toaster } from "react-hot-toast";
import { app } from "./firebase.js"; // to run app file.

// importing components
import SideNav from "./components/SideNav.jsx";
import AppointmentDetailsNav from "./components/AppointmentDetailsNav.jsx";

// importing pages
import Login from "./pages/Login";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx";

import ProtectedRoutes from "./ProtectedRoutes";

function App() {
	return (
		<>
			<Toaster
				position="top-right"
				reverseOrder={false}
				toastOptions={{
					style: {
						background: "#333",
						color: "#fff",
					},
				}}
			/>
			<SideNav />
			<AppointmentDetailsNav />
			<div className="z-1">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/home" element={<ProtectedRoutes path="/home" />} />
					<Route
						path="/upcoming_appointments"
						element={<ProtectedRoutes path="/upcoming_appointments" />}
					/>
					<Route
						path="/user_schedule"
						element={<ProtectedRoutes path="/user_schedule" />}
					/>
					<Route
						path="/appointment-past"
						element={<ProtectedRoutes path="/appointment-past" />}
					/>
					<Route
						path="/new_appointment"
						element={<ProtectedRoutes path="/new_appointment" />}
					/>
					<Route path="/profile" element={<ProtectedRoutes path="/profile" />} />
					<Route path="/day-details" element={<ProtectedRoutes path="/day-details" />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
