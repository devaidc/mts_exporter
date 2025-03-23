import {
	CircleCheckIcon,
	CircleUserIcon,
	IdCardIcon,
	UserCheckIcon,
	UsersIcon,
} from "lucide-react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";
import React from "react";

type Prop = {
	currentStep: number;
};

const steps = [
	{ id: "user-info", label: "User Information", icon: CircleUserIcon },
	{ id: "user-type", label: "User Type", icon: UsersIcon },
	{ id: "business-id", label: "Business ID", icon: IdCardIcon },
	{ id: "verification", label: "Verification", icon: UserCheckIcon },
	{ id: "completed", label: "Completed", icon: CircleCheckIcon },
];

function SignupStep(props: Prop) {
	return (
		<Breadcrumb className="w-full flex justify-center my-8">
			<BreadcrumbList className="flex-wrap w-full justify-between">
				{steps.map((step, index) => (
					<React.Fragment key={step.id}>
						<BreadcrumbItem
							className={`flex items-center ${
								index < props.currentStep
									? "text-primary"
									: index === props.currentStep
										? "text-primary"
										: "text-gray-400"
							}`}
						>
							<BreadcrumbLink className="flex flex-col items-center cursor-default hover:text-none">
								<step.icon className="w-12 h-12" />
								<span className="text-xs mt-3">{step.label}</span>
							</BreadcrumbLink>
						</BreadcrumbItem>

						{index < steps.length - 1 && (
							<BreadcrumbSeparator
								className={
									index < props.currentStep ? "text-primary" : "text-gray-400"
								}
							/>
						)}
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export default SignupStep;
