import BusinessIdForm from "@/components/Signup/BusinessIdForm";
import CompletedStep from "@/components/Signup/CompletedStep";
import OTPVerification from "@/components/Signup/OTPVerification";
import SignupStep from "@/components/Signup/SignupStep";
import UserInfoForm from "@/components/Signup/UserInfoForm";
import UserTypeForm from "@/components/Signup/UserTypeForm";
import VerificationForm from "@/components/Signup/VerificationForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { SignupData } from "@/lib/types/signupFormType";
import { useState } from "react";

enum RegistrationStep {
	UserInfo = 0,
	OTPVerification = 1,
	UserType = 2,
	BusinessID = 3,
	Verification = 4,
	Completed = 5,
}

function Signup() {
	const [currentStep, setCurrentStep] = useState<RegistrationStep>(
		RegistrationStep.UserInfo,
	);
	const [formData, setFormData] = useState<Partial<SignupData>>({
		idType: "ID Card",
		idNumber: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		password: "",
		userType: "Mine Owner",
		businessID: "",
	});

	const handleNext = (newData: Partial<SignupData>) => {
		setFormData({ ...formData, ...newData });
		setCurrentStep(currentStep + 1);
	};

	const handleResendOTP = () => {
		// Call API to resend the OTP
		console.log("Resending OTP...");
	};

	const handleOTPVerified = () => {
		// After OTP is verified, proceed to UserType
		setCurrentStep(RegistrationStep.UserType);
	};

	const handleBack = () => {
		// If at the OTP step, go back to UserInfo
		if (currentStep === RegistrationStep.OTPVerification) {
			setCurrentStep(RegistrationStep.UserInfo);
		}
	};

	// For the stepper UI, we want to show 5 steps (without OTP as a separate step)
	const displayStep =
		currentStep === RegistrationStep.OTPVerification
			? RegistrationStep.UserInfo
			: currentStep > RegistrationStep.OTPVerification
				? currentStep - 1
				: currentStep;

	return (
		<Card className="flex flex-col gap-0 p-0 w-9/12 shadow-[10px_18px_15px_rgba(0,0,0,0.1)] mb-12">
			<CardHeader>
				<SignupStep currentStep={displayStep} />
			</CardHeader>
			<CardContent className="grid place-items-center">
				{(() => {
					switch (currentStep) {
						case RegistrationStep.UserInfo:
							return (
								<UserInfoForm initialData={formData} onNext={handleNext} />
							);
						case RegistrationStep.OTPVerification:
							return (
								<OTPVerification
									email={formData.email || ""}
									onCancel={handleBack}
									onResend={handleResendOTP}
									onVerify={handleOTPVerified}
								/>
							);
						case RegistrationStep.UserType:
							return (
								<UserTypeForm initialData={formData} onNext={handleNext} />
							);
						case RegistrationStep.BusinessID:
							return (
								<BusinessIdForm initialData={formData} onNext={handleNext} />
							);
						case RegistrationStep.Verification:
							return (
								<VerificationForm initialData={formData} onNext={handleNext} />
							);
						case RegistrationStep.Completed:
							return <CompletedStep />;
						default:
							return (
								<UserInfoForm initialData={formData} onNext={handleNext} />
							);
					}
				})()}
			</CardContent>
		</Card>
	);
}

export default Signup;
