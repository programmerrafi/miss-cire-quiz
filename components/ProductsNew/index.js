"use client";

import { updateUser } from "@/redux/slices/authSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../shared/Button";
import SingleProduct from "./SingleProduct";

const samples = [
  {
    id: 1,
    image: "/newProducts/Mademoiselle.png",
    title: "MADEMOISELLE",
    subTitle: ["Film Hard Wax", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 2,
    image: "/newProducts/blue.png",
    title: "BLUE MY MIND",
    subTitle: ["Film Hard Wax", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 3,
    image: "/newProducts/HelloGorgeous.png",
    title: "HELLO GORGEOUS",
    subTitle: ["Film Hard Wax", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 4,
    image: "/newProducts/HairyDaysSoOver.png",
    title: "HAIRY DAYS",
    subTitle: ["Film Hard Wax", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 5,
    image: "/newProducts/BesameMucho.png",
    title: "BESAME MUCHO",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 6,
    image: "/newProducts/Luxe.png",
    title: "LUXE",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 7,
    image: "/newProducts/BoyToy.png",
    title: "BOY TOY",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    subTitle2: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
];

function ProductsNew() {
  const [allSamples, setAllSamples] = useState(samples);
  const [addNewItems, setAddNewItems] = useState([]);
  const dispatch = useDispatch();

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
      <h1 className="text-[18px] sm:text-[48px] mb-6 sm:mb-6 font-bold text-center">
        MEET YOUR NEW FAVES
      </h1>

      {/* <div className="block sm:hidden mb-2">
        <div className="!py-[2.5px] text-white !px-[10px] !bg-primary !text-[8px] !w-fit mx-auto cursor-default !font-bold">
          FREE OF COST
        </div>
      </div> */}
      <div className="hidden sm:block">
        <div className="flex gap-12 lg:gap-14 justify-center flex-wrap lg:flex-nowrap mt-2 mb-14">
          {allSamples.slice(0, 3).map((sample, i) => (
            <SingleProduct
              sample={sample}
              key={i}
              addItem={addItem}
              addNewItems={addNewItems}
            />
          ))}
        </div>

        <div className="flex gap-12 lg:gap-14 justify-center mt-2 mb-14 flex-wrap lg:flex-nowrap">
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
      <div className="mb-6">
        <Button
          onClick={() => dispatch(updateUser(null))}
          title="JUST PAY FOR SHIPPING"
          className="!py-[6px] !px-[10px] !bg-primary !text-[16px] sm:!text-[18px] !w-fit mx-auto cursor-default !font-bold"
        />
      </div>
    </div>
  );
}

export default ProductsNew;
