import Input from "src/Components/ui/input";
import PasswordInput from "src/Components/ui/password-input";
import Button from "src/Components/ui/button";
import { useForm } from "react-hook-form";
import Logo from "src/Components/ui/logo";
import { useUI } from "src/Contexts/ui.context";

import { ImGoogle2, ImFacebook2 } from "react-icons/im";
import Link from "src/Components/ui/link";
import { ROUTES } from "src/utils/routes";



// const SignUpForm: React.FC = () => {
	
// 	const { mutate: signUp, isLoading } = useSignUpMutation();
// 	const { setModalView, openModal, closeModal } = useUI();
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm<SignUpInputType>();

// 	function handleSignIn() {
// 		setModalView("LOGIN_VIEW");
// 		return openModal();
// 	}

// 	function onSubmit({ name, email, password }: SignUpInputType) {
// 		signUp({
// 			name,
// 			email,
// 			password,
// 		});
// 		console.log(name, email, password, "sign form values");
// 	}
// 	return (
// 		<div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
// 			<div className="text-center mb-6 pt-2.5">
// 				<div onClick={closeModal}>
// 					<Logo />
// 				</div>
// 				<p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
// 					{("common:registration-helper")}{" "}
// 					<Link
// 						href={ROUTES.TERMS}
// 						className="text-heading underline hover:no-underline focus:outline-none"
// 					>
// 						{("common:text-terms")}
// 					</Link>{" "}
// 					&amp;{" "}
// 					<Link
// 						href={ROUTES.POLICY}
// 						className="text-heading underline hover:no-underline focus:outline-none"
// 					>
// 						{("common:text-policy")}
// 					</Link>
// 				</p>
// 			</div>
// 			<form
// 				onSubmit={handleSubmit(onSubmit)}
// 				className="flex flex-col justify-center"
// 				noValidate
// 			>
// 				<div className="flex flex-col space-y-4">
// 					<Input
// 						labelKey="forms:label-name"
// 						type="text"
// 						variant="solid"
// 						{...register("name", {
// 							required: "forms:name-required",
// 						})}
// 						errorKey={errors.name?.message}
// 					/>
// 					<Input
// 						labelKey="forms:label-email"
// 						type="email"
// 						variant="solid"
// 						{...register("email", {
// 							required: `${("forms:email-required")}`,
// 							pattern: {
// 								value:
// 									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
// 								message: ("forms:email-error"),
// 							},
// 						})}
// 						errorKey={errors.email?.message}
// 					/>
// 					<PasswordInput
// 						labelKey="forms:label-password"
// 						errorKey={errors.password?.message}
// 						{...register("password", {
// 							required: `${("forms:password-required")}`,
// 						})}
// 					/>
// 					<div className="relative">
// 						<Button
// 							type="submit"
// 							loading={isLoading}
// 							disabled={isLoading}
// 							className="h-11 md:h-12 w-full mt-2"
// 						>
// 							{("common:text-login")}
// 						</Button>
// 					</div>
// 				</div>
// 			</form>
// 			<div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
// 				<hr className="w-full border-gray-300" />
// 				<span className="absolute -top-2.5 px-2 bg-white">
// 					{("common:text-or")}
// 				</span>
// 			</div>

// 			<Button
// 				type="submit"
// 				loading={isLoading}
// 				disabled={isLoading}
// 				className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
// 			>
// 				<ImFacebook2 className="text-sm sm:text-base me-1.5" />
// 				{("common:text-login-with-facebook")}
// 			</Button>
// 			<Button
// 				type="submit"
// 				loading={isLoading}
// 				disabled={isLoading}
// 				className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
// 			>
// 				<ImGoogle2 className="text-sm sm:text-base me-1.5" />
// 				{("common:text-login-with-google")}
// 			</Button>
// 			<div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
// 				{("common:text-have-account")}{" "}
// 				<button
// 					type="button"
// 					className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
// 					onClick={handleSignIn}
// 				>
// 					{("common:text-login")}
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default SignUpForm;
