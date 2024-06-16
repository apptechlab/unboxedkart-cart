import footerData from "../../.../../../../public/strings/footer.json";
import { CgWebsite } from "react-icons/cg";
import {
  IoCallOutline,
  IoInformationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailOpen,
  IoMailOutline,
  IoMapOutline,
} from "react-icons/io5";

export const footer = {
  widgets: [
    {
      id: 1,
      widgetTitle: footerData["title-about"],
      lists: [
        {
          id: 1,
          title: footerData["text-company-info"],
          path: "/contact-us",
          icon: <IoInformationOutline />,
        },
        {
          id: 2,
          path: "tel:+91-8508484848",
          title: footerData["text-phone-number"],
          icon: <IoCallOutline />,
        },
        {
          id: 3,
          path: "mailto:support@unboxedkart.com",
          title: footerData["text-mail-address"],
          icon: <IoMailOutline />,
        },
        {
          id: 4,
          path: "/stores",
          title: "Our Stores",
          icon: <IoMapOutline />,
        },
      ],
    },
    {
      id: 1,
      widgetTitle: footerData["title-help-and-contact"],
      lists: [
        {
          id: 3,
          title: footerData["text-faq"],
          path: "/",
        },
        {
          id: 4,
          title: "Shipping Policy",
          path: "/shipping-policy",
        },
        {
          id: 3,
          title: "Terms & Conditions",
          path: "/terms&conditions",
        },
        {
          id: 3,
          title: "Refund & Return",
          path: "/refund&returns",
        },
        {
          id: 4,
          title: footerData["text-contact-us"],
          path: "/",
        },
      ],
    },
    {
      id: 1,
      widgetTitle: footerData["title-social"],
      lists: [
        {
          id: 1,
          title: footerData["text-our-blog"],
          path: "/blog",
          icon: <CgWebsite />,
        },
        {
          id: 4,
          title: footerData["text-instagram"],
          path: "https://instagram.com/unboxedkart",
          icon: <IoLogoInstagram />,
        },
        // {
        //   id: 2,
        //   title: footerData["text-facebook"],
        //   path: "https://facebook.com/unboxedkart",
        //   icon: <IoLogoFacebook />,
        // },
        {
          id: 3,
          title: footerData["text-twitter"],
          path: "https://twitter.com/unboxedkart",
          icon: <IoLogoTwitter />,
        },
      ],
    },
    {
      id: 1,
      widgetTitle: "PRODUCT CONDITIONS",
      lists: [
        {
          id: 1,
          title: footerData["text-unboxed"],
          path: "/condition/unboxed",
        },
        {
          id: 2,
          title: footerData["text-grade-a"],
          path: "/condition/grade-a",
        },
        {
          id: 3,
          title: footerData["text-grade-b"],
          path: "/condition/grade-b",
        },
        {
          id: 4,
          title: footerData["text-grade-c"],
          path: "/condition/grade-c",
        },
      ],
    },
    {
      id: 1,
      widgetTitle: footerData["title-shop-by-category"],
      lists: [
        {
          id: 1,
          title: footerData["text-phone"],
          path: "/category/mobile-phone",
        },
        {
          id: 1,
          title: footerData["text-laptop"],
          path: "/category/laptop",
        },
        {
          id: 2,
          title: footerData["text-watch"],
          path: "/category/watch",
        },
        {
          id: 6,
          title: "iPad",
          path: "/category/ipad",
        },
        {
          id: 3,
          title: footerData["text-earphones"],
          path: "/category/earphones",
        },
        {
          id: 4,
          title: footerData["text-accesories"],
          path: "/category/accessories",
        },
      ],
    },
    {
      id: 1,
      widgetTitle: "ABOUT OUR STORE",
      lists: [
        {
          id: 1,
          title: footerData["text-locate-our-store"],
          path: "/locate-our-store",
        },
        {
          id: 1,
          title: footerData["text-pay-at-store"],
          path: "/pay-at-store",
        },
      ],
    },
  ],
  widgets2: [
    {
      id: 1,
      // widgetTitle: footerData["widget-title-social"],
      lists: [
        {
          id: 1,
          // title: footerData["link-instagram"],
          path: "https://www.instagram.com/unboxedkart/",
          icon: <IoLogoInstagram />,
        },
        {
          id: 2,
          title: "link-twitter",
          path: "https://twitter.com/unboxedkart",
          icon: <IoLogoTwitter />,
        },
        {
          id: 3,
          title: "link-facebook",
          path: "https://www.facebook.com/unboxedkart",
          icon: <IoLogoFacebook />,
        },
        {
          id: 4,
          title: "link-youtube",
          path: "https://www.youtube.com/channel/UCqKuYEBbc1CVJR7yuNLkCHw",
          icon: <IoLogoYoutube />,
        },
      ],
    },
    {
      id: 2,
      widgetTitle: "widget-title-contact",
      lists: [
        {
          id: 2,
          title: "Mail : support@unboxedkart.com",
          path: "",
          icon: <IoMailOpen />,
        },
        {
          id: 3,
          title: footerData["text-phone"],
          path: "",
          icon: <IoCallOutline />,
        },
        {
          id: 1,
          title: "View contact page",
          path: "/contact-us",
          icon: <IoLogoTwitter />,
        },
      ],
    },
    {
      id: 3,
      widgetTitle: "widget-title-about",
      lists: [
        {
          id: 1,
          title: "About Unboxedkart",
          path: "/about",
        },
        {
          id: 2,
          title: "company info",
          path: "/info",
        },
        {
          id: 3,
          title: "link-customer-support",
          path: "/",
        },
        {
          id: 4,
          title: "link-copyright",
          path: "/",
        },
      ],
    },
    {
      id: 4,
      widgetTitle: "widget-title-customer-care",
      lists: [
        {
          id: 1,
          title: "link-faq",
          path: "/faq",
        },
        {
          id: 2,
          title: "link-shipping",
          path: "/",
        },
        {
          id: 3,
          title: "link-exchanges",
          path: "/",
        },
      ],
    },
    {
      id: 5,
      widgetTitle: "widget-title-our-information",
      lists: [
        {
          id: 1,
          title: "link-privacy",
          path: "/privacy",
        },
        {
          id: 2,
          title: "link-terms",
          path: "/terms",
        },
        {
          id: 3,
          title: "link-return-policy",
          path: "/privacy",
        },
        {
          id: 4,
          title: "link-site-map",
          path: "/",
        },
      ],
    },
    {
      id: 6,
      widgetTitle: "widget-title-top-categories",
      lists: [
        {
          id: 1,
          title: "Mobile Phone",
          path: "/category/mobile+phone",
        },
        {
          id: 2,
          title: "Laptop",
          path: "search?title=laptop",
        },
        {
          id: 3,
          title: "Watch",
          path: "search?title=watch",
        },
        {
          id: 4,
          title: "Earphones",
          path: "search?title=earphone",
        },
        {
          id: 5,
          title: "Large screen devices",
          path: "search?title=large+screen+devices",
        },
      ],
    },
  ],
  payment: [
    {
      id: 1,
      path: "/",
      image: "/assets/images/payment/mastercard.svg",
      name: "payment-master-card",
      width: 34,
      height: 20,
    },
    {
      id: 2,
      path: "/",
      image: "/assets/images/payment/visa.svg",
      name: "payment-visa",
      width: 50,
      height: 20,
    },
    {
      id: 3,
      path: "/",
      image: "/assets/images/payment/paypal.svg",
      name: "payment-paypal",
      width: 76,
      height: 20,
    },
    {
      id: 4,
      path: "/",
      image: "/assets/images/payment/jcb.svg",
      name: "payment-jcb",
      width: 26,
      height: 20,
    },
    {
      id: 5,
      path: "/",
      image: "/assets/images/payment/skrill.svg",
      name: "payment-skrill",
      width: 39,
      height: 20,
    },
  ],
};
