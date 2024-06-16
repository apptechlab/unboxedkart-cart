import React from "react";
import MyReview from "../../models/review/my-review";

const myReviews = {
  r1: {
    reviewId: "r1",
    productId: "1",
    productTitle: "iPhone 12 pro Max",
    productImageUrl:
      "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Sunil",
    title: "its Good",
    description: "Worth for money",
    designation: "Certified Buyer",
    timestamp: "april 2020",
    overallScore: 4,
  },
  r2: {
    reviewId: "r2",
    productId: "2",
    productTitle: "iPhone 11 pro Max",
    productImageUrl:
      "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Vinay",
    title: "Awesome",
    description: "product is awesome and delivered in just 2 days",
    designation: "Certified Buyer",
    timestamp: "march 2020",
    overallScore: 5,
  },
  r3: {
    reviewId: "r1",
    productId: "3",
		productTitle : "iPhone 13 pro Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Funny",
    title: "Satisfactory",
    description: "its good",
    designation: "Certified Buyer",
    timestamp: "may 2020",
    overallScore: 3,
  },
  r4: {
    reviewId: "r4",
    productId: "4",
		productTitle : "iPhone 14 pro Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Ravi",
    title: "As Expected",
    description: "product reached my expectations",
    designation: "Certified Buyer",
    timestamp: "august 2020",
    overallScore: 4,
  },
  r5: {
    reviewId: "r5",
    productId: "5",
		productTitle : "iPhone XS Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Shashi",
    title: "Perfect buy",
    description: "its working alright for me",
    designation: "Certified Buyer",
    timestamp: "sep 2020",
    overallScore: 5,
  },
  r10: {
    reviewId: "r1",
    productId: "1",
		productTitle : "iPhone X pro Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Sunil",
    title: "its Good",
    description: "Worth for money",
    designation: "Certified Buyer",
    timestamp: "april 2020",
    overallScore: 4,
  },
  r20: {
    reviewId: "r2",
    productId: "2",
		productTitle : "iPhone 12 pro Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Vinay",
    title: "Awesome",
    description: "product is awesome and delivered in just 2 days",
    designation: "Certified Buyer",
    timestamp: "march 2020",
    overallScore: 5,
  },
  r30: {
    reviewId: "r1",
    productId: "3",
		productTitle : "iPhone 12 pro Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Funny",
    title: "Satisfactory",
    description: "its good",
    designation: "Certified Buyer",
    timestamp: "may 2020",
    overallScore: 3,
  },
  r40: {
    reviewId: "r4",
    productId: "4",
		productTitle : "iPhone 12 pro Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Ravi",
    title: "As Expected",
    description: "product reached my expectations",
    designation: "Certified Buyer",
    timestamp: "august 2020",
    overallScore: 4,
  },
  r50: {
    reviewId: "r5",
    productId: "5",
		productTitle : "iPhone 12 pro Max",
		productImageUrl : "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/mobiles/apple/12+pro+max/pacific+blue/iphone+12+pro+max+-+1-+unboxedkart.jpeg",
    author: "Shashi",
    title: "Perfect buy",
    description: "its working alright for me",
    designation: "Certified Buyer",
    timestamp: "sep 2020",
    overallScore: 5,
  },
};

const myReviewsData = Object.entries(myReviews);

const ReviewsAndRatings = () => {
  return (
    <div>
      {myReviewsData.map(([key, value]) => {
        return <MyReview reviewData={value} />;
      })}
    </div>
  );
};

export default ReviewsAndRatings;
