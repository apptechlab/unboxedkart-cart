import BottomImage from "../components/home/bottom-image";
import OurGoalWidget from "../components/home/our-goal-widget";
import Layout from "../components/layout/layout";

function AboutUsPage() {
  return (
    <>
      {/* <Head>
        <title>About Unboxedkart</title>
        <meta name="description" content="About Unboxedkart" />
      </Head> */}
      <div className="">
        <p className="text-xl font-bold py-2 px-5 ">What is Unboxedkart ?</p>
        <p className="text-md py-2 px-5">
          Unboxedkart is a e-commerce platform, where users can buy pre-owned (or used) electronic products like iPhones, Laptop and more at affordable prices.
        </p>
        <p className="text-md py-2 px-5">
          This eCommerce app boasts industry-leading product recognition and filtering capabilities.
          Products are categorised into classes (Unboxed, Grade A, Grade B, Grade C) based on their intended use and conditions. We will inspect the product before listing it for sale on our website and app. In the Quality segment, the product is examined at various levels
        </p>
        <p className="text-md py-2 px-5">You can reserve a product without making any upfront payment and then come to our store at a time selected while reserving a product to check and purchase it.</p>
      </div>
      {/* <FindAStore /> */}
      {/* <DownloadApps /> */}
      <OurGoalWidget />
      <BottomImage />
    </>
  );
}

export default AboutUsPage;


AboutUsPage.Layout = Layout;
