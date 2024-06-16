export type ProductType = {
  _id: string;
  SKU: string;
  productCode: string;
  title: string;
  modelNumber: string;
  brand: string;
  brandCode: string;
  category: string;
  categoryCode: string;
  condition: string;
  conditionCode: string;
  imageUrls: ImageUrls;
  pricing: {
    price: number;
    sellingPrice: number;
  };
  quantity: number;
  aboutProduct: any[];
  highlights: string[];
  searchCases: any[];
  isBestSeller: boolean;
  isFeatured: boolean;
  moreDetails: MoreDetails;
};

export type CartItem = {
  productId: string;
  count: number;
};

export type CartItemWithDetails = ProductType & { count: number };

type MoreDetails = {
  color: string;
  colorCode: string;
  storage: string;
  storageCode: string;
};

type Pricing = {
  price: number;
  sellingPrice: number;
};

type ImageUrls = {
  desktopCoverImage: string;
  coverImage: string;
  images: any[];
};
