"use client";

import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import SingleProduct from "./SingleProduct";

const samples = [
  {
    id: 1,
    image: "/products/1.jpg",
    title: "MADEMOISELLE",
    subTitle: ["Film Hard Wax", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 2,
    image: "/products/2.jpg",
    title: "BLUE MY MIND",
    subTitle: ["Film Hard Wax", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 3,
    image: "/products/3.jpg",
    title: "HELLO GORGEOUS",
    subTitle: ["Film Hard Wax", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 4,
    image: "/products/4.jpg",
    title: "HAIRY DAYS",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 5,
    image: "/products/5.jpg",
    title: "BESAME MUCHO",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 6,
    image: "/products/6.jpg",
    title: "LUXE",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 7,
    image: "/products/7.jpg",
    title: "BOY TOY",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
];

function Products() {
  const [allSamples, setAllSamples] = useState(samples);
  const [addNewItems, setAddNewItems] = useState([]);

  const addItem = (item) => {
    // find the index of the item
    const index = addNewItems.findIndex((i) => i.id === item.id);

    // if the item is not in the array, add it
    if (index === -1) {
      setAddNewItems([...addNewItems, item]);
    }
    // if the item is in the array, remove it
    else {
      const newItems = [...addNewItems];
      newItems.splice(index, 1);
      setAddNewItems(newItems);
    }
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(addNewItems));
  }, [addNewItems]);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-[18px] sm:text-[48px] mb-2 sm:mb-0 font-bold text-center">
        PICK 2 FREE SAMPLES
      </h1>
      <div className="hidden sm:block mb-4">
        <Button
          title="JUST PAY FOR SHIPPING"
          className="!py-[6px] !px-[10px] !bg-primary !text-[18px] !w-fit mx-auto cursor-default !font-bold"
        />
      </div>
      <div className="block sm:hidden mb-2">
        <div className="!py-[2.5px] text-white !px-[10px] !bg-primary !text-[8px] !w-fit mx-auto cursor-default !font-bold">
          FREE OF COST
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex gap-14 justify-center flex-wrap lg:flex-nowrap mt-2 mb-14">
          {allSamples.slice(0, 3).map((sample, i) => (
            <SingleProduct
              sample={sample}
              key={i}
              addItem={addItem}
              addNewItems={addNewItems}
            />
          ))}
        </div>

        <div className="flex gap-14 justify-center mt-2 mb-14 flex-wrap lg:flex-nowrap">
          {allSamples.slice(3, 7).map((sample, i) => (
            <SingleProduct
              sample={sample}
              key={i}
              addItem={addItem}
              addNewItems={addNewItems}
            />
          ))}
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="flex flex-wrap gap-4 mt-2 mb-8 justify-center">
          {allSamples.map((sample, i) => (
            <SingleProduct
              sample={sample}
              key={i}
              addItem={addItem}
              addNewItems={addNewItems}
            />
          ))}
        </div>
      </div>
      {/* <Button
        onClick={() => {
          if (addNewItems.length <= 1) return;
          setGoingNext(2);
          setProgress(25);
        }}
        title={`${addNewItems?.length === 0 ? "PICK 2 SAMPLES" : ""} ${
          addNewItems?.length === 1 ? "PICK ONE MORE" : ""
        } ${addNewItems?.length > 1 ? "SELECT & NEXT" : ""}`}
        type="submit"
        className="rounded-[3px] !py-[10px] !bg-primary !w-[55%] mx-auto mb-4 sm:mb-1"
      /> */}
    </div>
  );
}

export default Products;
