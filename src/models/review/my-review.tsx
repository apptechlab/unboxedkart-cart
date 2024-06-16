import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { EditMyReview } from "../../Components/reviews/edit-my-review";

type Props = {
  reviewData: any;
};

const MyReview = (props: Props) => {
  // const reviewData = props.reviewData;
  const {
    reviewId,
    overallScore,
    title,
    description,
    timestamp,
    productTitle,
    productId,
    productImageUrl,
  } = props.reviewData;
  let star = "⭐️";
	// <AiFillStar />

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row my-4 justify-between border-4 p-4 ">
      {isOpen && (
        <EditMyReview
          handleClose={togglePopup}
          reviewId={reviewId}
          reviewTitle={title}
          reviewDescription={description}
          productTitle={productTitle}
          productId={productId}
          reviewScore={overallScore}
        />
      )}
      <div className="flex flex-row">
        <div className="mx-4">
          <img
            src={productImageUrl}
            alt={productTitle}
            width="80"
            height="80"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm p-0 m-0">{productTitle}</p>
          <p className="p-0 m-0 font-bold">{title}</p>
          <p className="p-0 m-0 font-bold">{star.repeat(overallScore)}</p>
          <p className="my-2 text-sm text-black">{description}</p>
          <p className="my-2 text-xs">Reviewd on {timestamp}</p>
        </div>
      </div>
      <div className="w-2/8 flex flex-col">
        <button onClick={togglePopup}>
          <div className="flex flex-row">
            <AiOutlineEdit className="w-5 h-5 m-1" />
            Edit
          </div>
        </button>
        <div className="flex flex-row m-1">
          <AiOutlineDelete className="w-5 h-5" />
          Delete
        </div>
      </div>
    </div>
  );

  return (
    <div className="shadow-lg rounded-sm bg-white-500 mx-0 my-4">
      <div className="flex items-start">
        <div className="bg-green-500 text-white justify-self-center flex p-1 rounded-md w-10 text-xs">
          {overallScore}★
        </div>
        <p className="px-2 font-bold">{title}</p>
      </div>
      <p className="my-2 text-sm text-black">{description}</p>
      <p className="my-2 text-xs">Reviewd on {timestamp}</p>
    </div>
  );
};

export default MyReview;
