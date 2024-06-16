
import React from "react";
import AccountLayout from "../../sub-pages/my-account/account-layout";
import FavoriteItems from "../../sub-pages/my-account/my-favorites";

export default function WishlistPage() {
	return (
		<AccountLayout>
			<FavoriteItems />
		</AccountLayout>
	);
}