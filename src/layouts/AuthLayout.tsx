import { Outlet } from "react-router";

function AuthLayout() {
	return (
		<main className="py-3 px-6 h-screen">
			<header className="flex flex-row">
				<div className="h-10 w-10 bg-primary rounded-full mr-3" />
				<h1 className="self-center font-semibold text-xl">Minstry of finance</h1>
			</header>
			<Outlet />
		</main>
	);
}

export default AuthLayout;
