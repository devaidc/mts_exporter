import { CheckCircle2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

function CompletedStep() {
	return (
		<div className="flex flex-col w-3/4 justify-center items-center">
			<img
				src="/src/assets/images/complete_signup.png"
				alt="Signup Completed"
				className="h-50"
			/>
			<div className="flex flex-row">
				<CheckCircle2Icon className="text-secondary w-25 h-25 mr-3" />
				<div className="text-base font-semibold self-center">
					<span className="text-secondary text-lg">
						Your registration has been submitted
					</span>{" "}
					<br />
					Thank you for registering with us! Your infomation has been received
					and is now being processed. We'll send you a confirmation email
					shortly with furter details.
				</div>
			</div>
			<div className="w-1/2 my-12">
				<Link to={"/auth/login"}>
					<Button className="w-full h-12">Sign In</Button>
				</Link>
			</div>
		</div>
	);
}

export default CompletedStep;
