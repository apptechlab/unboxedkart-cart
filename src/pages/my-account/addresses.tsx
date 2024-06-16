// import Layout from "@components/layout/layout";
// import AccountLayout from "@components/my-account/account-layout";
// import Addresses from "@components/my-account/my-addresses/my-addresses";
// import { GetStaticProps } from "next";

// import React from "react";

// export default function AddressesPage() {
//   return (
//     <AccountLayout>
//       <Addresses/>
//     </AccountLayout>
//   );
// }

// AddressesPage.Layout = Layout;



import React from "react";
import AccountLayout from "../../sub-pages/my-account/account-layout";
import Addresses from "../../sub-pages/my-account/my-addresses";

export default function AddressesPage() {
	return (
		<AccountLayout>
			<Addresses />
		</AccountLayout>
	);
}
