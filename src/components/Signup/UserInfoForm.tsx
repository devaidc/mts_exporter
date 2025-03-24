import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { StepProps } from "@/lib/types/signupFormType";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon, Upload } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router";
import CancelSignButton from "./CancelSignButton";

const userInfoSchema = z.object({
	idType: z.enum(["ID Card", "Passport"], {
		required_error: "Please select an ID type",
	}),
	idNumber: z.string().min(1, "ID number is required"),
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	phoneNumber: z.string().min(8, "Valid phone number is required"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	agreeToTerms: z.boolean().refine((val) => val === true, {
		message: "You must agree to the terms",
	}),
});

type UserInfoFormValues = z.infer<typeof userInfoSchema>;

function UserInfoForm(props: StepProps) {
	const [showPassword, setShowPassword] = useState(false);

	const form = useForm<UserInfoFormValues>({
		resolver: zodResolver(userInfoSchema),
		defaultValues: {
			idType: props.initialData.idType || "ID Card",
			idNumber: props.initialData.idNumber || "",
			firstName: props.initialData.firstName || "",
			lastName: props.initialData.lastName || "",
			phoneNumber: props.initialData.phoneNumber || "",
			email: props.initialData.email || "",
			password: props.initialData.password || "",
			agreeToTerms: props.initialData.agreeToTerms || false,
		},
	});

	const onSubmit = (values: UserInfoFormValues) => {
		props.onNext(values);
	};

	return (
		<div className="bg-white p-8 w-6/12 rounded-lg shadow mb-12">
			<h2 className="text-2xl font-bold text-primary mb-6">Register</h2>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					{/* ID Type Selection */}
					<FormField
						control={form.control}
						name="idType"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex gap-4"
									>
										<FormLabel
											htmlFor="id-card"
											className="flex items-center cursor-pointer"
										>
											<RadioGroupItem
												value="ID Card"
												id="id-card"
												className="ring-1 ring-gray-700 [&>span>svg]:fill-secondary"
											/>
											ID Card
										</FormLabel>
										<FormLabel htmlFor="passport" className="flex items-center cursor-pointer">
											<RadioGroupItem
												value="Passport"
												id="passport"
												className="ring-1 ring-gray-700 [&>span>svg]:fill-secondary"
											/>
											Passport
										</FormLabel>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* ID Number */}
					<FormField
						control={form.control}
						name="idNumber"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input className="h-12" placeholder="Enter code" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Name Fields */}
					<div className="grid grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input
											className="h-12"
											placeholder="Enter first name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input
											className="h-12"
											placeholder="Enter last name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* Phone Number */}
					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<div className="flex">
										<div className="bg-white border rounded-l px-3 py-2 flex items-center">
											<span className="mr-1">🇱🇦</span>
											<span>+856</span>
										</div>
										<Input
											placeholder="(20)XXXX-XXXX"
											className="rounded-l-none h-12"
											{...field}
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										className="h-12"
										placeholder="Enter email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Password */}
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											type={showPassword ? "text" : "password"}
											placeholder="Enter password"
											className="pr-10 h-12"
											{...field}
										/>
										<button
											type="button"
											className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer grid place-items-center h-9 w-9 rounded-sm"
											onClick={() => setShowPassword(!showPassword)}
										>
											{showPassword ? (
												<EyeIcon className="h-4 w-4 text-gray-500" />
											) : (
												<EyeOffIcon className="h-4 w-4 text-gray-500" />
											)}
										</button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* ID Card Upload */}
					<FormItem>
						<FormLabel>Upload ID Card Photo</FormLabel>
						<Button
							type="button"
							variant="outline"
							className="w-full mt-2 bg-accent text-primary hover:text-none cursor-pointer"
						>
							<Upload className="mr-2 h-4 w-4" />
							Upload file (PDF & JPG)
						</Button>
					</FormItem>

					{/* Terms Agreement */}
					<FormField
						control={form.control}
						name="agreeToTerms"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
										className="border-2 h-5 w-5 cursor-pointer"
									/>
								</FormControl>
								<div className="space-y-1 leading-none self-center">
									<FormLabel>
										I agree to{" "}
										<Link to={"#"} className="text-primary">
											privacy policy & term
										</Link>
									</FormLabel>
									<FormMessage />
								</div>
							</FormItem>
						)}
					/>

					{/* Action Buttons */}
					<div className="flex justify-between pt-4 space-x-6">
						<CancelSignButton />
						<Button type="submit" className="flex-3/4 h-12">
							Next
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

export default UserInfoForm;
