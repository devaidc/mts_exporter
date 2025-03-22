import { Outlet } from "react-router";

function AuthLayout() {
	return (
		<main className="min-h-screen flex flex-col">
			<header className="flex flex-row py-3 px-6 ">
				<img
					className="h-20 rounded-full object-contain"
					src="/src/assets/images/MOF_logo.png"
					alt="MOD Logo"
				/>
				<h1 className="self-center font-semibold text-xl">
					Minstry of finance
				</h1>
			</header>
			<div className="flex-1 flex justify-center items-start pt-6">
				<Outlet />
			</div>
		</main>
	);
}

export default AuthLayout;
