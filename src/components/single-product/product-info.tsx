import { ProductType } from "../../types/product.type";
import Button from "../widgets/button";
import ProductHighlight from "./product-highlight";

const ProductInfo = (props: any) => {
  const product: ProductType = props.product;
  const discountInPrice = product.pricing.price - product.pricing.sellingPrice;

  function handleDownload() {
    const platform = window.navigator.platform;
    if (platform == "iPhone") {
      window.location.href =
        "https://apps.apple.com/in/app/unboxedkart/id1550972969";
    } else {
      window.location.href =
        "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.unboxedkart";
    }
  }

  // function addToCart() {
    
  // }

  const addToCart = () => {
    let localStoredData = localStorage.getItem('cart');
    let cart = [];
    if (localStoredData) {
      cart = JSON.parse(localStoredData);
    }

    const productInCart = cart.find((item: { productId: string; }) => item.productId === product._id);
    
    if (productInCart) {
      productInCart.count += 1;
    } else {
      cart.push({ productId: product._id, count: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
  };

  const ProductTitle = () => {
    return (
      <div className="bg-white rounded-2xl p-4 ">
        <p className="font-bold text-xl text-black m-0 p-0">{product.title}</p>
        {/* <div className="h-5"></div> */}
        {/* <div className="bg-green-500 text-white justify-self-center flex p-1 w-10 text-xs m-0">
          {4.5}★
        </div> */}
      </div>
    );
  };

  const ProductPricing = () => {
    return (
      <div className="bg-white rounded-2xl p-4 ">
        <p className="font-bold text-sm text-green-500 mt-2 mb-0">
          Extra ₹{discountInPrice} off
        </p>
        <p className="font-bold text-2xl text-black mt-1">
          ₹{product.pricing.sellingPrice.toString()}
          <span className="px-2 py-0 text-gray-700 font-normal text-base line-through ">
            ₹{product.pricing.price.toString()}
          </span>
        </p>
      </div>
    );
  };

  //   const AddtoCartButton = () => {
  //     return (
  //       <Button
  //         // onClick={handleAddToCart}
  //         variant="slim"
  //         className="bg-blue-600 w-full md:1/2 lg:1/2 my-2 mx-0 hover:shadow-lg hover:bg-blue-700"
  //         // loading={isAddingToCart}
  //       >
  //         <span className="py-2 3xl:px-8">
  //           {/* {isAddedToCart ? "Remove from cart" : "Add to cart"} */}
  //         </span>
  //       </Button>
  //     );
  //   };

  const AddToCart = () => {
    return (
      <div>
        <Button
          onClick={addToCart}
          variant="slim"
          className="w-full md:1/2 lg:1/2 my-2 mx-0 bg-white"
          color="blue-500"
        >
          <span className="py-2 3xl:px-8 font-trebuchet">ADD TO CART</span>
        </Button>
      </div>
    );
  };

  const ProductHighlights = () => {
    return (
      <div className="bg-white rounded-2xl p-6 my-2">
        <div className=" mb-2 font-bold text-black text-md">Highlights</div>
        {product.highlights.map((highlight: string, index) => {
          return <ProductHighlight key={index} highlight={highlight} />;
        })}
      </div>
    );
  };

  const AboutProduct = () => {
    return (
      <div className="bg-white rounded-2xl p-6 my-2">
        <div className="mb-2 font-bold text-black text-md">About Product</div>
        {product.aboutProduct.map((highlight: string, index) => {
          return <ProductHighlight key={index} highlight={highlight} />;
        })}
      </div>
      // <ElevatedContainer props/>
    );
  };

  return (
    <div className="flex flex-col space-y-4 my-4">
      <ProductTitle />
      <ProductPricing />
      <AboutProduct />
      <ProductHighlights />
      <AddToCart />
    </div>
  );
};

export { ProductInfo };
