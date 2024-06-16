
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";
import OrderTile from "../../../models/order/my-order-tile";
import AccountLayout from "../../../sub-pages/my-account/account-layout";

export default function OrderPage() {
  const router = useRouter();
  const orderId = router.query.id;

  return (
    <AccountLayout>
      <OrderTile orderId={orderId} />
    </AccountLayout>
  );
}

OrderPage.Layout = Layout;