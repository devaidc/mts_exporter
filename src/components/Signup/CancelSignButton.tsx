import { Link } from "react-router";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

function CancelSignButton() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					type="button"
					variant="outline"
					className="text-destructive hover:text-none flex-2/5"
				>
					Cancel
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Signup Cancelation</AlertDialogTitle>
					<AlertDialogDescription>
						Would you like to cancel the signup process and go back to login
						page?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="w-30 cursor-pointer">
						No
					</AlertDialogCancel>
					<Link to={"/auth/login"}>
						<AlertDialogAction className="w-30 cursor-pointer">
							Yes
						</AlertDialogAction>
					</Link>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export default CancelSignButton;
