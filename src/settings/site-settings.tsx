import { ROUTES } from "../utils/routes";


export const siteSettings = {
  name: "Unboxedkart",
  description: "Buy premium products at affordable prices",
  author: {
    name: "Unboxedkart",
    websiteUrl: "https://unboxedkart.com",
    address: "",
  },
  logo: {
    url: "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/featured/logo.png",
    alt: "Unboxedkart",
    href: "/",
    width: 175,
    height: 40,
  },
  site_header: {
    menu: [
      {
        id: 1,
        path: "",
        label: "Brands",
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.BRAND}/apple`,
            label: "Apple",
          },
          {
            id: 2,
            path: `${ROUTES.BRAND}/samsung`,
            label: "Samsung",
          },
          {
            id: 3,
            path: `${ROUTES.BRAND}/huawei`,
            label: "Huawei",
          },
          {
            id: 4,
            path: `${ROUTES.BRAND}/oneplus`,
            label: "Oneplus",
          },
        ],
      },
      {
        id: 2,
        path: "",
        label: "Category",
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.CATEGORY}/mobile-phone`,
            label: "Mobile Phone",
            subMenu: [
              {
                id: 1,
                path: `${ROUTES.SEARCH}?category=mobile-phone&brand=apple`,
                label: "Apple",
              },
              {
                id: 2,
                path: `${ROUTES.SEARCH}?category=mobile-phone&brand=samsung`,
                label: "Samsung",
              },
              {
                id: 3,
                path: `${ROUTES.SEARCH}?category=mobile-phone&brand=huawei`,
                label: "Huawei",
              },
              {
                id: 4,
                path: `${ROUTES.SEARCH}?category=mobile-phone&brand=oneplus`,
                label: "Oneplus",
              },
            ],
          },
          {
            id: 2,
            path: `${ROUTES.CATEGORY}/laptop`,
            label: "Laptop",
            subMenu: [
              {
                id: 1,
                path: `${ROUTES.SEARCH}?category=laptop&brand=apple`,
                label: "Apple",
              },
            ],
          },
          {
            id: 3,
            path: `${ROUTES.CATEGORY}/watch`,
            label: "Watch",
            subMenu: [
              {
                id: 1,
                path: `${ROUTES.SEARCH}?category=watch&brand=apple`,
                label: "Apple",
              },
              {
                id: 2,
                path: `${ROUTES.SEARCH}?category=watch&brand=samsung`,
                label: "Samsung",
              },
              {
                id: 3,
                path: `${ROUTES.SEARCH}?category=watch&brand=huawei`,
                label: "Huawei",
              },
              {
                id: 4,
                path: `${ROUTES.SEARCH}?category=watch&brand=oneplus`,
                label: "Oneplus",
              },
            ],
          },
          {
            id: 4,
            path:`${ROUTES.CATEGORY}/earphones`,
            label: "Earphones",
            subMenu: [
              {
                id: 1,
                path: `${ROUTES.SEARCH}?category=earphones&brand=apple`,
                label: "Apple",
              },
              {
                id: 2,
                path: `${ROUTES.SEARCH}?category=earphones&brand=samsung`,
                label: "Samsung",
              },
              {
                id: 3,
                path: `${ROUTES.SEARCH}?category=earphones&brand=huawei`,
                label: "Huawei",
              },
              {
                id: 4,
                path: `${ROUTES.SEARCH}?category=earphones&brand=oneplus`,
                label: "Oneplus",
              },
            ],
          },
          {
            id: 5,
            path: `${ROUTES.CATEGORY}/accessory`,
            label: "Accesory",
            subMenu: [
              {
                id: 1,
                path: `${ROUTES.SEARCH}?category=accessory&brand=apple`,
                label: "Apple",
              },
              {
                id: 2,
                path: `${ROUTES.SEARCH}?category=accessory&brand=samsung`,
                label: "Samsung",
              },
              {
                id: 3,
                path: `${ROUTES.SEARCH}?category=accessory&brand=huawei`,
                label: "Huawei",
              },
              {
                id: 4,
                path: `${ROUTES.SEARCH}?category=accessory&brand=oneplus`,
                label: "Oneplus",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        path: "",
        label: "Condition",
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.CONDITION}/unboxed`,
            label: "UnBoxed",
          },
          {
            id: 2,
            path: `${ROUTES.CONDITION}/grade-a`,
            label: "Grade A",
          },
          {
            id: 3,
            path: `${ROUTES.CONDITION}/grade-b`,
            label: "Grade B",
          },
          {
            id: 4,
            path: `${ROUTES.CONDITION}/grade-c`,
            label: "Grade C",
          },
        ],
      },
      {
        id: 4,
        path: "/contact-us",
        label: "Contact us",
      },
      {
        id: 5,
        path: "/blog",
        label: "Blog",
      },
      {
        id: 6,
        path: "",
        label: "More",
        subMenu: [
          {
            id: 1,
            path: "/about-us",
            label: "About Unboxedkart",
          },
          // {
          //   id: 2,
          //   path: "/faq",
          //   label: "FAQ's",
          // }, 
          {
            id: 2,
            path: "/privacy",
            label: "Privacy Policy",
          },
          {
            id: 3,
            path: "/terms",
            label: "Terms & conditions",
          },
        ],
      },
    ],
  },
};
