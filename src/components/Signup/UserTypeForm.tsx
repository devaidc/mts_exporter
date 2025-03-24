import { Building, Truck, User } from "lucide-react";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import type { StepProps } from "@/lib/types/signupFormType";
import CancelSignButton from "./CancelSignButton";

const userTypeSchema = z.object({
	userType: z.enum(["Mine Owner", "Mineral Trader", "Logistic Company"], {
		required_error: "Please select a user type",
	}),
});

type UserTypeFormValues = z.infer<typeof userTypeSchema>;

const userTypeFormDetails = [
	{
		id: "mine-owner",
		label: "Mine Owner",
		icon: Building,
		description:
			"For businesses engaged in mineral mining, hold mining concession and selling directly",
	},
	{
		id: "mineral-trader",
		label: "Mineral Trader",
		icon: User,
		description:
			"For businesses that buy and sell minerals without mining, including mineral brokers and wholesalers",
	},
	{
		id: "logistic-company",
		label: "Logistic Company",
		icon: Truck,
		description:
			"For business providing logistic services for moving mineral from mines to stockyards, customers' destination",
	},
];

function UserTypeForm(props: StepProps) {
	const form = useForm({
		resolver: zodResolver(userTypeSchema),
		defaultValues: {
			userType: props.initialData.userType || "Mine Owner",
		},
	});

	function onSubmit(values: UserTypeFormValues) {
		props.onNext(values);
	}

	return (
		<div className="bg-white p-8 rounded-lg">
			<h2 className="text-2xl font-bold text-primary mb-6">Choose User Type</h2>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="userType"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex flex-col space-y-4"
									>
										{userTypeFormDetails.map((detail) => (
											<FormLabel
												key={detail.id}
												htmlFor={detail.id}
												className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${
													field.value === detail.label
														? "border-primary bg-primary/5"
														: "hover:border-primary/50"
												}`}
											>
												<RadioGroupItem
													value={detail.label}
													id={detail.id}
													className="border-primary ring-1"
												/>
												<div className="bg-accent p-3 rounded-full">
													<detail.icon className="h-10 w-10 text-primary" />
												</div>
												<div>
													<div className="font-medium">{detail.label}</div>
													<p className="text-sm text-gray-500">
														{detail.description}
													</p>
												</div>
											</FormLabel>
										))}
									</RadioGroup>
								</FormControl>
							</FormItem>
						)}
					/>

					<div className="flex justify-between pt-4 space-x-6">
						<CancelSignButton />
						<Button type="submit" className="flex-1 h-12">
							Next
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

export default UserTypeForm;
