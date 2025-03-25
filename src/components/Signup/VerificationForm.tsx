import { Check, Circle } from "lucide-react";
import { Button } from "../ui/button";
import CancelSignButton from "./CancelSignButton";
import type { StepProps } from "@/lib/types/signupFormType";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

function VerificationForm(props: StepProps) {
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
					database. Our system has completed the following preliminary check:
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
					<p>You may now proceed to the next step</p>
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

			{/* Business license */}
			<Card className="rounded-xs mt-24 border-3 pb-24">
				<CardHeader className="text-lg font-semibold">
					Business License Details:
				</CardHeader>
				<CardContent className="px-24">
					{/* Labels */}
					<div className="grid grid-cols-2 gap-6">
						<div>Enterprice Number</div>
						<div>01-00030581</div>

						<div>Lao Enterprise and Name</div>
						<div>ບໍລິສັດ ພູເບ້ຍ ມາຍນິ້ງ ຈຳກັດ</div>

						<div>Name of Enterprise (English)</div>
						<div>Phubia Mining Co,. Ltd</div>

						<div>Registered By</div>
						<div>Mr Daling Zheng</div>

						<div>Capital Registration</div>
						<div>10,000,000,000 ກີບ</div>

						<div>Investment Type</div>
						<div>Domestic + Foreigner</div>

						<div>Registration Date</div>
						<div>23-08-2023</div>

						<div>Province</div>
						<div>Vientiane Captital</div>

						<div>District</div>
						<div>Xaysetha</div>

						<div>Village</div>
						<div>Nongbon</div>

						<div>Tax Information Number</div>
						<div>328287858-0-00</div>

						<div>Tax Registration Date</div>
						<div>26/04/2011</div>

						<div>Status</div>
						<div className="flex gap-3">
							<Circle className="fill-secondary text-secondary h-5 w-5 self-center" />
							Active
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex w-full justify-end px-24">
					<span className="h-30 w-30 bg-primary text-white">QR code</span>
				</CardFooter>
			</Card>
		</div>
	);
}

export default VerificationForm;
