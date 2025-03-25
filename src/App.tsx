import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AuthLayout from "./layouts/AuthLayout";
import Notfound from "./pages/Notfound";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to={"#"} />} />
				<Route path="/auth" element={<AuthLayout />}>
					<Route index element={<Navigate to={"/auth/login"} />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	);
}

export default App;
