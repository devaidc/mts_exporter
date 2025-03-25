import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface OTPVerificationProps {
	email: string;
	onVerify: () => void;
	onCancel: () => void;
	onResend: () => void;
}

const otpSchema = z.object({
	otp: z.string().min(6, "Please enter all digits").max(6),
});

type OTPFormValues = z.infer<typeof otpSchema>;

function OTPVerification(props: OTPVerificationProps) {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (_values: OTPFormValues) => {
		setIsLoading(true);

		// Verify the OTP with backend
		setTimeout(() => {
			setIsLoading(false);
			props.onVerify();
		}, 1500);
	};

	const form = useForm<OTPFormValues>({
		resolver: zodResolver(otpSchema),
		defaultValues: {
			otp: "",
		},
	});

	return (
		<div className="bg-white p-8 w-6/12 rounded-lg mb-12">
			<h2 className="text-2xl font-bold text-primary mb-6">
				Verify Your Identity
			</h2>

			<p className="text-center mb-3">
				We've sent a verification code to: {props.email}
			</p>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
					<FormField
						control={form.control}
						name="otp"
						render={({ field }) => (
							<FormItem className="w-full grid place-items-center">
								<FormControl>
									<InputOTP
										maxLength={6}
										value={field.value}
										onChange={field.onChange}
									>
										<InputOTPGroup className="[&>div]:border-primary [&>div]:h-10 [&>div]:w-10 [&>div]:text-lg [&>div]:border-1">
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="text-center mt-6">
						<button
							type="button"
							onClick={props.onResend}
							className="text-primary text-sm hover:underline mb-3"
						>
							Didn't receive a code? Resend
						</button>
					</div>

					<div className="flex justify-between space-x-6">
						<Button
							type="button"
							variant="outline"
							className="text-destructive hover:text-none px-12 h-12 cursor-pointer"
							onClick={props.onCancel}
							disabled={isLoading}
						>
							Go back
						</Button>
						<Button
							type="submit"
							disabled={isLoading}
							className="flex-1 h-12 cursor-pointer"
						>
							{isLoading ? "Verifying..." : "Verify & Continue"}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

export default OTPVerification;
