import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

function Login() {
	const form = useForm();
	return (
		<Card className="flex flex-row gap-0 p-0 w-5/6 place-self-center">
			<div className="flex-1 p-6">
        <header className="text-primary font-bold text-xl">Login</header>
				<Form {...form}>
					<form action="" className="mx-3 my-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<>
									<FormItem>
										<FormLabel>Email / Phone number</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your email or phone number"
												{...field}
											/>
										</FormControl>
									</FormItem>
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your password"
												{...field}
											/>
										</FormControl>
									</FormItem>
                  <FormItem>
                    <FormControl>
                      <Checkbox />
                    </FormControl>
                    <FormLabel>
                      Remember me
                    </FormLabel>
                  </FormItem>
								</>
							)}
						/>
            <Button type="submit" className="w-full">Login</Button>
					</form>
				</Form>
              <Button variant={"secondary"}>Create new account</Button>
			</div>
			<div className="flex-1 bg-linear-to-b from-primary to-[#44339e]">
				<CardHeader className="text-accent">
					<h1>Mineral Tracking System</h1>
					<p>
						manage douments, request quotas, track shipments and view summary
						report in one place
					</p>
				</CardHeader>
			</div>
		</Card>
	);
}

export default Login;
