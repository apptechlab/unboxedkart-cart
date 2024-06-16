import React from "react";
import LoginWithMobileNumberForm from "../components/auth/login-with-mobile-number-form";
import Layout from "../components/layout/layout";
import Container from "../components/widgets/container";




export default function SignInPage() {
	return (
		<>
			<Container>
				<div className="py-16 lg:py-20">
					<LoginWithMobileNumberForm />
				</div>
			</Container>
		</>
	);
}

SignInPage.Layout = Layout;


