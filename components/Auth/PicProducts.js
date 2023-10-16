import Image from "next/image";
import React, { useState } from "react";
import Button from "../shared/Button";
import { AiOutlineCheck } from "react-icons/ai";
import ProductCard from "./ProductCard";

const samples = [
  {
    id: 1,
    image: "/products/1.jpg",
    title: "MADEMOISELLE",
    subTitle: ["Film Hard Wax", "Vegan"],
    price: 25.0,
  },
  {
    id: 2,
    image: "/products/2.jpg",
    title: "BLUE MY MIND",
    subTitle: ["Film Hard Wax", "Vegan"],
    price: 25.0,
  },
  {
    id: 3,
    image: "/products/3.jpg",
    title: "HELLO GORGEOUS",
    subTitle: ["Film Hard Wax", "Vegan"],
    price: 25.0,
  },
  {
    id: 4,
    image: "/products/4.jpg",
    title: "HAIRY DAYS",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 5,
    image: "/products/5.jpg",
    title: "BESAME MUCHO",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 6,
    image: "/products/6.jpg",
    title: "LUXE",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
  {
    id: 7,
    image: "/products/7.jpg",
    title: "BOY TOY",
    subTitle: ["Film Hard Wax", "Hypoallergenic", "Vegan"],
    price: 25.0,
  },
];

function PicProducts({ setGoingNext, setProgress }) {
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

  return (
    <div className="flex flex-col justify-center max-w-[670px] w-full mx-auto">
      <h1 className="text-[22px] font-bold text-center">
        PICK TWO FREE SAMPLES
      </h1>
      <Button
        title="JUST PAY SHIPPING"
        className="!py-[0px] !px-[10px] !bg-primary !text-[11.5px] !w-fit mx-auto cursor-default"
      />

      <div className="flex gap-8 justify-center mt-2 mb-5">
        {allSamples.slice(0, 3).map((sample, i) => (
          <ProductCard
            sample={sample}
            key={i}
            addItem={addItem}
            addNewItems={addNewItems}
          />
        ))}
      </div>

      <div className="flex gap-8 justify-center mt-2 mb-5">
        {allSamples.slice(3, 7).map((sample, i) => (
          <ProductCard
            sample={sample}
            key={i}
            addItem={addItem}
            addNewItems={addNewItems}
          />
        ))}
      </div>
      <Button
        onClick={() => {
          if (addNewItems.length <= 1) return alert("Please select 2 samples");
          setGoingNext(2);
          setProgress(25);
        }}
        title="SELECT & NEXT"
        type="submit"
        className="rounded-[3px] !py-[10px] !bg-primary !w-[55%] mx-auto"
      />
    </div>
  );
}

export default PicProducts;
