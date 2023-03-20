import React from "react";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { SiSamsung, SiNokia } from "react-icons/si";

const Categories = () => {
  const categories = [
    {
      id: "01",
      Name: "Apple",
      categoryId: "Apple",
      logo: <AiFillApple></AiFillApple>,
    },
    {
      id: "02",
      Name: "Samsung",
      categoryId: "Samsung",
      logo: <SiSamsung></SiSamsung>,
    },
    {
      id: "03",
      Name: "Nokia",
      categoryId: "Nokia",
      logo: <SiNokia></SiNokia>,
    },
  ];
  return (
    <div className="text-center">
      <div className="bg-red-100 py-2 rounded-md shadow-lg shadow-red-300">
        <h1 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-black uppercase">
          Product Categories
        </h1>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
        {categories.map((category) => (
          <Link
            className="bg-red-100 shadow-lg shadow-red-300 rounded-lg"
            key={category.id}
            to={`/${category.categoryId}`}
          >
            <div className="flex flex-col justify-center text-black p-5 items-center cursor-pointer">
              <div>
                <span className="text-9xl">{category.logo}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
