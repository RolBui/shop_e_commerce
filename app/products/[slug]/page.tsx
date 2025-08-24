import ProductDetail from "@/componments/productDetail/ProductDetail";
import RatingProgressBar from "@/componments/productDetail/RatingProgressBar";
import ReviewForm from "@/componments/productDetail/ReviewForm";
import Modal from "@/componments/uiCompoments/Modal";
import React from "react";
import { FaRegStar } from "react-icons/fa";

const Productpage = () => {
  return (
    <>
      <ProductDetail />
      <div className="main-max-width padding-x mx-auto">
        <h3 className="font-semibold text-xl text-center my-6 text-gray-800">
          Customer Reviews
        </h3>
        <div className="w-full flex py-6 gap-6 flex-wrap items-center justify-between max-md:justify-center">
          {/* Rating display box */}
          <div className="w-[250px] h-[250px] bg-gray-100 rounded-lg px-4 py-6 flex flex-col gap-3 items-center justify-center shadow-lg">
            <h1 className="text-5xl font-bold text-gray-800">5.0</h1>
            <small className="text-gray-600 text-sm">of 10 review(s)</small>

            <div className="flex gap-2">
              <FaRegStar className="fill-black w-5 h-5 cursor-pointer" />
              <FaRegStar className="fill-black w-5 h-5 cursor-pointer" />
              <FaRegStar className="fill-black w-5 h-5 cursor-pointer" />
              <FaRegStar className="fill-black w-5 h-5 cursor-pointer" />
              <FaRegStar className="fill-gray-200 w-5 h-5 cursor-pointer" />
            </div>
          </div>
          {/* Rating Display Box ends */}

          {/* Rating progress bar */}
          <div className="flex flex-col gap-6 w-[700px] max-md:w-full">
            <RatingProgressBar rating="Excellent" numRating={10} />
            <RatingProgressBar rating="very Good" numRating={8} />
            <RatingProgressBar rating="Good" numRating={6} />
            <RatingProgressBar rating="Fair" numRating={4} />
            <RatingProgressBar rating="Poor" numRating={2} />
          </div>
          {/* Rating progress bar ends */}
        </div>
        {/* Review modal form */}
        <div className="flex justify-center items-center w-full mb-5">
          <Modal>
            <ReviewForm />
          </Modal>
        </div>
        {/* Review modal end form */}
      </div>
    </>
  );
};

export default Productpage;
