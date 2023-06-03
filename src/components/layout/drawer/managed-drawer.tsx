import { useRouter } from "next/router";
import Drawer from "rc-drawer";
import { useUI } from "../../../contexts/ui.context";
import { getDirection } from "../../../utils/get-direction";

const ManagedDrawer = () => {
	const { displayCart, closeCart } = useUI();
	const { locale } = useRouter();
	const dir = getDirection(locale);
	const contentWrapperCSS = dir === "ltr" ? { right: 0 } : { left: 0 };
	return (
		<Drawer
			open={displayCart}
			placement={dir === "rtl" ? "left" : "right"}
			onClose={closeCart}
			handler={false}
			showMask={true}
			level={null}
			contentWrapperStyle={contentWrapperCSS}
		>
			{/* <Cart /> */}
		</Drawer>
	);
};

export default ManagedDrawer;
