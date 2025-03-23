import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

function Login() {
	const form = useForm();
	return (
		<Card className="flex flex-row gap-0 p-0 w-9/12 overflow-hidden shadow-[10px_18px_15px_rgba(0,0,0,0.1)]">
			{/* Login Form */}
			<div className="flex-1 px-6">
				<header className="text-primary font-bold text-2xl my-12">Login</header>
				{/* Email input */}
				<Form {...form}>
					<form action="" className="mx-3 my-6 flex flex-col gap-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<>
									<FormItem>
										<FormLabel>Email / Phone number</FormLabel>
										<FormControl>
											<Input
												className="h-12"
												placeholder="Enter your email or phone number"
												{...field}
											/>
										</FormControl>
									</FormItem>
								</>
							)}
						/>

						{/* Password Input */}
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => {
								const [showPassword, setShowPassword] = useState(false);

								return (
									<>
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<div className="relative">
													<Input
														type={showPassword ? "text" : "password"}
														placeholder="Enter your password"
														className="pr-10 h-12"
														{...field}
													/>

													<button
														type="button"
														className="absolute grid place-items-center h-9 w-9 rounded-sm right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
														onClick={() => setShowPassword(!showPassword)}
													>
														{showPassword ? (
															<EyeIcon className="h-4 w-4" />
														) : (
															<EyeOffIcon className="h-4 w-4" />
														)}
													</button>
												</div>
											</FormControl>
										</FormItem>
									</>
								);
							}}
						/>

						{/* Checkbox and Forget password */}
						<FormField
							control={form.control}
							name="remember"
							render={({ field }) => (
								<>
									<FormItem className="flex flex-row justify-between">
										<div className="flex flex-row">
											<FormControl className="self-center mr-3">
												<Checkbox
													className="border-2 h-5 w-5 cursor-pointer"
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<FormLabel>Remember me</FormLabel>
										</div>

										<Link to={"#"} className="text-primary font-semibold">
											Forget passsword
										</Link>
									</FormItem>
								</>
							)}
						/>

						{/* Submit Button */}
						<Button type="submit" className="w-full my-6 py-6">
							Sign In
						</Button>
					</form>
				</Form>
				<div className="flex justify-center w-full mb-12">
					<Link to={"/auth/signup"}>
						<Button variant={"secondary"} className="py-6 px-8">
							Create new account
						</Button>
					</Link>
				</div>
			</div>

			{/* Description */}
			<div className="flex-1 bg-linear-to-b from-primary to-[#44339e] flex flex-col justify-between p-6">
				<CardHeader className="flex flex-col justify-center items-center text-white text-center mt-10">
					<h1 className="text-3xl font-bold">Mineral Tracking System</h1>
					<p className="text-sm">
						Manage douments, request quotas, track shipments and view summary
						report in one place
					</p>
				</CardHeader>
				<CardFooter>
					<img
						src="/src/assets/images/truck.png"
						alt="Trucks"
						className="w-md m-auto"
					/>
				</CardFooter>
			</div>
		</Card>
	);
}

export default Login;
