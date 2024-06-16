import React, { useState } from "react";
import OrderItem from "../../models/order/my-order";


const myOrders = {
  o1: {
    orderNumber: "123456",
    orderId: "123",
    orderedTimeStamp: "Nov 1 2021",
    deliveredTimeStamp: "Nov 9 2022",
    selectedAddress: {},
    status: "ordered",
    productId: "1",
    productCount: "1",
    orderedPrice: "79,000",
    productInfo: {
      productTitle: "iPhone 12",
      productColor: "White",
      productImageUrl:
        "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1611594318399-8H2ERNGJGL7DXB1F2GW7/Hello3x2.png?format=1500w&content-type=image%2Fpng",
      productSeller: "Unboxedkart",
    },
  },
  o2: {
    orderNumber: "123456",
    orderId: "123",
    orderedTimeStamp: "Nov 1 2021",
    deliveredTimeStamp: "Nov 9 2022",
    selectedAddress: {},
    status: "ordered",
    productId: "1",
    productCount: "1",
    orderedPrice: "79,000",
    productInfo: {
      productTitle: "iPhone 12",
      productColor: "White",
      productImageUrl:
        "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1611594318399-8H2ERNGJGL7DXB1F2GW7/Hello3x2.png?format=1500w&content-type=image%2Fpng",
      productSeller: "Unboxedkart",
    },
  },
  o3: {
    orderNumber: "123456",
    orderId: "123",
    orderedTimeStamp: "Nov 1 2021",
    deliveredTimeStamp: "Nov 9 2022",
    selectedAddress: {},
    status: "ordered",
    productId: "1",
    productCount: "1",
    orderedPrice: "79,000",
    productInfo: {
      productTitle: "iPhone 12",
      productColor: "White",
      productImageUrl:
        "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1611594318399-8H2ERNGJGL7DXB1F2GW7/Hello3x2.png?format=1500w&content-type=image%2Fpng",
      productSeller: "Unboxedkart",
    },
  },
  o4: {
    orderNumber: "123456",
    orderId: "123",
    orderedTimeStamp: "Nov 1 2021",
    deliveredTimeStamp: "Nov 9 2022",
    selectedAddress: {},
    status: "ordered",
    productId: "1",
    productCount: "1",
    orderedPrice: "79,000",
    productInfo: {
      productTitle: "iPhone 12",
      productColor: "White",
      productImageUrl:
        "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1611594318399-8H2ERNGJGL7DXB1F2GW7/Hello3x2.png?format=1500w&content-type=image%2Fpng",
      productSeller: "Unboxedkart",
    },
  },
  o5: {
    orderNumber: "123456",
    orderId: "123",
    orderedTimeStamp: "Nov 1 2021",
    deliveredTimeStamp: "Nov 9 2022",
    selectedAddress: {},
    status: "ordered",
    productId: "1",
    productCount: "1",
    orderedPrice: "79,000",
    productInfo: {
      productTitle: "iPhone 12",
      productColor: "White",
      productImageUrl:
        "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1611594318399-8H2ERNGJGL7DXB1F2GW7/Hello3x2.png?format=1500w&content-type=image%2Fpng",
      productSeller: "Unboxedkart",
    },
  },
  o6: {
    orderNumber: "123456",
    orderId: "123",
    orderedTimeStamp: "Nov 1 2021",
    deliveredTimeStamp: "Nov 9 2022",
    selectedAddress: {},
    status: "ordered",
    productId: "1",
    productCount: "1",
    orderedPrice: "79,000",
    productInfo: {
      productTitle: "iPhone 12",
      productColor: "White",
      productImageUrl:
        "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1611594318399-8H2ERNGJGL7DXB1F2GW7/Hello3x2.png?format=1500w&content-type=image%2Fpng",
      productSeller: "Unboxedkart",
    },
  },
  o7: {
    orderNumber: "123456",
    orderId: "123",
    orderedTimeStamp: "Nov 1 2021",
    deliveredTimeStamp: "Nov 9 2022",
    selectedAddress: {},
    status: "ordered",
    productId: "1",
    productCount: "1",
    orderedPrice: "79,000",
    productInfo: {
      productTitle: "iPhone 12",
      productColor: "White",
      productImageUrl:
        "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1611594318399-8H2ERNGJGL7DXB1F2GW7/Hello3x2.png?format=1500w&content-type=image%2Fpng",
      productSeller: "Unboxedkart",
    },
  },
};

const [isLoading, setIsLoading] = useState(true);
const [productData, setProductData] = useState(null);

// async function getUserOrders(pId: String) {
//   if (pId != null) {
//     const data = await fetchProduct(pId);
//     setProductData(data);
//     setIsLoading(false);
//   }
// }

// useEffect(() => {
//   fetchOrdersD(productId as string);
// }, [productId]);


const myReviewsData = Object.entries(myOrders);

const OrderItems = () => {
  return (
    <div>
      {myReviewsData.map(([key, value]) => {
        return <OrderItem key={value.orderId} data={value} />;
      })}
    </div>
  );
};

export default OrderItems;
