import AccountLayout from "src/sub-pages/my-account/account-layout";
import Chats from "src/sub-pages/my-account/chats";
import React from "react";

export default function ChatsPage() {
	return (
		<AccountLayout>
			<Chats />
		</AccountLayout>
	);
}