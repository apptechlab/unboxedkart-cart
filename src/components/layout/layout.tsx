
import { NextSeo } from "next-seo";
import React from "react";
import Footer from "./footer/footer";
import Header from "./header/desktop/desktop-header";
import MobileNavigation from "./header/mobile/mobile-navigation/mobile-navigation";


const Layout = ({ children }: any) => {

	return (
		<div className="flex flex-col min-h-screen">
			<NextSeo
				additionalMetaTags={[
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
				]}
				title="unboxedkart.com"
				description="unboxedkart.com"
				canonical="unboxedkart.com/"
				openGraph={{
					url: "unboxedkart.com",
					title: "unboxedkart.com",
					description:
						"unboxedkart.com",
					images: [
						{
							url: "/assets/images/og-image-01.png",
							width: 800,
							height: 600,
							alt: "Og Image Alt",
						},
						{
							url: "/assets/images/og-image-02.png",
							width: 900,
							height: 800,
							alt: "Og Image Alt Second",
						},
					],
				}}
			/>
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
			{/* <Search /> */}
			{/* <CookieBar
				title={("text-cookies-title")}
				hide={acceptedCookies}
				action={
					<Button onClick={() => onAcceptCookies()} variant="slim">
						{("text-accept-cookies")}
					</Button>
				}
			/> */}
		</div>
	);
};

export default Layout;
