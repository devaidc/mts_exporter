import { Check } from "lucide-react";
import { Button } from "../ui/button";
import CancelSignButton from "./CancelSignButton";
import type { StepProps } from "@/lib/types/signupFormType";

function VerifycationForm(props: StepProps) {
	const handleSubmit = () => {
		props.onNext({});
	};

	return (
		<div className="bg-white p-8 w-8/12 rounded-lg mb-12">
			<h2 className="text-2xl font-bold text-primary mb-6">
				Verification Complete
			</h2>

			<div className="space-y-3 text-sm">
				<p>
					The business regitration code you have entered has been found in our
					database.
					<br />
					Our system has completed the following preliminary check:
				</p>
				<p className="text-primary">
					<span className="flex">
						<Check className="h-4 self-center" />
						ID Card/Passport matches business registration database
					</span>
					<span className="flex">
						<Check className="h-4 self-center" />
						Phone number matches business registration database
					</span>
					<span className="flex">
						<Check className="h-4 self-center" />
						Business registration status is Active
					</span>
				</p>

				{/* Action Buttons */}
				<div className="space-y-6 mt-12">
					<p>You may now process to the next step</p>
					<div className="flex justify-between space-x-6">
						<CancelSignButton />
						<Button
							type="button"
							className="flex-3/4 h-12"
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VerifycationForm;
