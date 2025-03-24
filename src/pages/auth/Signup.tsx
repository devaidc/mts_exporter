import CompletedStep from "@/components/Signup/CompletedStep";
import SignupStep from "@/components/Signup/SignupStep";
import UserInfoForm from "@/components/Signup/UserInfoForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { SignupData } from "@/lib/types/signupFormType";
import { useState } from "react";

function Signup() {
	const [currentStep, setCurrentStep] = useState(4);
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

	return (
		<Card className="flex flex-col gap-0 p-0 w-9/12 shadow-[10px_18px_15px_rgba(0,0,0,0.1)] mb-12">
			<CardHeader>
				<SignupStep currentStep={currentStep} />
			</CardHeader>
			<CardContent className="grid place-items-center">
				{(() => {
					switch (currentStep) {
						case 0:
							return (
								<UserInfoForm initialData={formData} onNext={handleNext} />
							);
						case 1:
							return <h1>User Type Form</h1>;
						case 2:
							return <h1>Business Id Form</h1>;
						case 3:
							return <h1>Verification Form</h1>;
						case 4:
							return <CompletedStep />
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
