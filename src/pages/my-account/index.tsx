import Layout from "../../components/layout/layout";
import Link from "../../components/widgets/link";
import AccountLayout from "../../sub-pages/my-account/account-layout";
import { ROUTES } from "../../utils/routes";





export default function AccountPage() {
	return (
		<AccountLayout>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
				{("text-dashboard")}
			</h2>
			<p className=" text-sm leading-7 md:text-base md:leading-loose lowercase">
				{("text-account-dashboard")}{" "}
				<Link
					href={ROUTES.ORDERS}
					className="text-heading underline font-semibold"
				>
					{("text-recent-orders")}
				</Link>
				, {("text-manage-your")}{" "}
				<Link
					href={ROUTES.ACCOUNT_DETAILS}
					className="text-heading underline font-semibold"
				>
					{("text-account-details")}
				</Link>{" "}
				{("text-and")}{" "}
				<Link
					href={ROUTES.CHANGE_PASSWORD}
					className="text-heading underline font-semibold"
				>
					{("text-change-your-password")}
				</Link>
				.
			</p>
		</AccountLayout>
	);
}

AccountPage.Layout = Layout;
