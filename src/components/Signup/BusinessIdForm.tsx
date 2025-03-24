import type { StepProps } from "@/lib/types/signupFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CancelSignButton from "./CancelSignButton";
import { Search } from "lucide-react";

const businessIdSchema = z.object({
	businessID: z.string().min(1, "Business ID is required"),
});

type businessIdFormValues = z.infer<typeof businessIdSchema>;

function BusinessIdForm(props: StepProps) {
	const form = useForm<businessIdFormValues>({
		resolver: zodResolver(businessIdSchema),
		defaultValues: {
			businessID: props.initialData.businessID || "",
		},
	});

	const onSubmit = (values: businessIdFormValues) => {
		props.onNext(values);
	};

	return (
		<div className="bg-white p-8 w-6/12 rounded-lg mb-12">
			<h2 className="text-2xl font-bold text-primary mb-6">
				Enter your business ID
			</h2>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="businessID"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Business ID / Tin</FormLabel>
								<FormControl>
									<div className="relative">
										<Search className="absolute left-2 text-primary top-1/2 -translate-y-1/2" />
										<Input
											className="h-12 pl-10"
											placeholder="Search code"
											{...field}
										/>
									</div>
								</FormControl>
							</FormItem>
						)}
					/>

					{/* Action Buttons */}
					<div className="flex justify-between pt-4 space-x-6 mt-12">
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

export default BusinessIdForm;
