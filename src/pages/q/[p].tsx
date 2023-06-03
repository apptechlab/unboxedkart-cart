import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/layout/layout";
export default function Query() {
    const router = useRouter();
    const productName = router.query.p;
    useEffect(() => {
        console.log("p-");
        console.log(productName);
        if (productName == "iphone-xs-max") {
            router.push("/search?q=iphone%20xs%20max");
        } else if (productName == "iphone-11") {
            router.push("/search?q=iphone%2011");
        } else if (productName == "iphone-11-pro") {
            router.push("/search?q=iphone%2011%20pro");
        } else if (productName == "iphone-11-pro-max") {
            router.push("/search?q=iphone%20pro%20max");
        } else if (productName == "iphone-12") {
            router.push("/search?q=iphone%2012");
        } else if (productName == "iphone-12-mini") {
            router.push("/search?q=iphone%2012%20mini");
        } else if (productName == "iphone-12-pro") {
            router.push("/search?q=iphone%2012%20pro");
        } else if (productName == "iphone-12-pro-max") {
            router.push("/search?q=iphone%2012%20pro%20max");
        } else if (productName == "iphone-13") {
            router.push("/search?q=iphone%2013");
        } else if (productName == "iphone-13-mini") {
            router.push("/search?q=iphone%2013%20mini");
        } else if (productName == "iphone-13-pro") {
            router.push("/search?q=iphone%2013%20pro");
        } else if (productName == "iphone-13-pro-max") {
            router.push("/search?q=iphone%2013%20pro%20max");
        } else if (productName == "iphone-14") {
            router.push("/search?q=iphone%2014");
        } else if (productName == "iphone-14-pro") {
            router.push("/search?q=iphone%2014%20pro");
        } else if (productName == "iphone-14-pro-max") {
            router.push("/search?q=iphone%2014%20pro%20max");
        }
    }, [productName]);

    return <div></div>;
}
Query.Layout = Layout;
