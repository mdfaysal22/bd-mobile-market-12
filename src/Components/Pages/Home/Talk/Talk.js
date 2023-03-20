import React from "react";
import talk from "./../../../../Assets/talk.png";
const Talk = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-5">
      <div>
        <h1 className="text-3xl md:text-6xl pb-5 text-black font-semibold">
          A better way to talk <br /> with your customers
        </h1>
        <p className="text-xl md:text-3xl text-black">
          Manage all your customer conversions in one powerful platform that
          feels just like your inbox.
        </p>
        <div className="gap-2 mt-3 flex">
          <button className="btn hover:bg-white hover:border-2 hover:border-red-400 text-black hover:text-black bg-red-300 border-2 border-red-300 shadow-md shadow-red-200 btn-outline rounded-none">
            Try for Free
          </button>
          <button className="btn bg-white border-2 border-red-400 text-black hover:text-black hover:bg-red-300 hover:border-2 hover:border-red-300 shadow-md shadow-red-200 btn-outline rounded-none">
            Get Demo
          </button>
        </div>
        <div className="alert bg-red-100 text-black mt-5 shadow-lg shadow-red-300 rounded-none">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current text-red-700 flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>New software update available.</span>
          </div>
        </div>
      </div>
      <div>
        <img src={talk} alt="" />
      </div>
    </div>
  );
};

export default Talk;
