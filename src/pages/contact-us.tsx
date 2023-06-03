// import { Head } from "next/document";
import { useState } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import {
  IoCallOutline,
  IoMailOpenOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import BottomImage from "../components/home/bottom-image";
import OurGoalWidget from "../components/home/our-goal-widget";
import Layout from "../components/layout/layout";
import Link from "../components/widgets/link";

export default function ContactUsPage() {
  const ContactBlock = ({
    heading,
    content,
    contactInfo,
    link,
    icon,
  }: any) => {
    return (
      <div className="group hover:shadow-product hover:border-unboxedkartBlue hover:border-5 flex rounded-2xl cursorpointer flex-col py-4 px-4 mx-2 bg-white m-2">
        <div>
          <Link href={link}>
            {icon}
            <p className="font-semibold text-black text-md l group-hover:text-unboxedkartBlue my-2">
              {heading}
            </p>
            <p className="font-base text-black text-sm text-md group-hover:text-unboxedkartBlue my-2">
              {content}
            </p>
            <p className="font-base text-black text-sm text-md font-semibold group-hover:text-unboxedkartBlue my-2">
              {contactInfo}
            </p>
          </Link>
        </div>
      </div>
    );
  };

  const faqs = [
    {
      question: "How to download unboxedkart on iOS ?",
      answer:
        "To download unboxedkart on iOS, open appstore and search for unboxedkart and download the app by tapping on install now",
    },
    {
      question: "I purchased a product, how can i download its bill",
      answer:
        "An invoice of purchase will be sent to your registered mail address, you can also download the copy of invoice from my orders section in unboxedkart app.",
    },
    {
      question: "What are the timings of the store ?",
      answer: "Our store will be open from 10:30 AM to 6:30 PM (SUN - SAT)",
    },
    {
      question: "How can i track the status of my order ?",
      answer:
        "You can track your order status in my orders section in unboxedkart mobile application.",
    },
    {
      question: "Is one day delivery available ?",
      answer:
        "Yes, currently we are offering one day deliveries in only few cities (Bengaluru, Hyderabad)",
    },
    {
      question: "Can i pickup the product on same day ?",
      answer:
        "Yes, you can choose the pickup time (as same day) while ordering a product and can pickup the product on same day",
    },
  ];

  const FaqComponent = ({ question, answer }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button className="py-2" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex flex-row">
            {!isOpen ? (
              <BiRightArrow className="text-black h-3 w-3 my-1 mx-2" />
            ) : (
              <BiDownArrow className="text-black h-3 w-3 my-1 mx-2" />
            )}
            <p className="hover:text-blue-500 text-black">{question}</p>
          </div>
        </button>
        {isOpen && (
          <div className="m-2 bg-white py-2 w-full">
            <p className="text-black text-sm ml-7"> {answer}</p>
          </div>
        )}
      </div>
    );
  };

  const FaqsOverview = () => {
    return (
      <div className="bg-white mx-2 p-4 rounded-lg mb-10">
        <p className="font-semibold font-lg text-unboxedkartBlue">
          Get the info you are looking for right now
        </p>
        <div className="h-5"></div>
        <div className="flex flex-col lg:flex-row">
          {/* <div className="w-2/5 invisible lg:visible">
            {<MdOutlineQuestionAnswer className="h-1/2 w-1/2 m-14" />}
          </div> */}
          <div className="w-full lg:w-3/5 flex flex-col items-start">
            {faqs.map((faq, index) => {
              return (
                <FaqComponent key={index} question={faq.question} answer={faq.answer} />
              );
            })}
            {/* <div className="bg-blue-500 p-1 m-2 rounded"> */}
            {/* <button>
                <p className="font-semibold text-white px-2 py-1">See all help topics</p>
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <Head>
        <title>Contact Us-Unboxedkart</title>
        <meta name="description" content="Contact Us-Unboxedkart" />
      </Head> */}
      <div>
        <div className="bg-white mx-2 py-12 px-2 rounded-2xl">
          <p className="text-5xl font-bold text-black">We&lsquo;re here</p>
          <p className="text-lg font-semibold text-black pl-1">
            {" "}
            We always look forward to help you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-y-0">
          <ContactBlock
            content={"Our agents are ready to help you."}
            heading={"Talk to sales"}
            contactInfo={"+91 850-8484848"}
            link={"tel:+91-8508484848"}
            icon={<IoCallOutline className="h-10 w-10 text-unboxedkartBlue" />}
          />
          <ContactBlock
            content={"Click here to send us a email with your queries."}
            heading={"Send us a mail"}
            contactInfo={"support@unboxedkart.com"}
            link={"mailto:support@unboxedkart.com"}
            icon={<IoMailOpenOutline className="h-10 w-10 text-unboxedkartBlue" />}
          />
          <ContactBlock
            content={"Get directions to reach our stores"}
            heading={"Locate our stores"}
            contactInfo={"Click here to get directions"}
            link={"/stores"}
            icon={<IoStorefrontOutline className="h-10 w-10 text-unboxedkartBlue" />}
          />

        </div>
        <div>
          <FaqsOverview />
        </div>
        <OurGoalWidget />
        {/* <BottomImage /> */}
      </div>

    </>
  );
}


ContactUsPage.Layout = Layout;
