import React from "react";
import Image from "next/image";
import myImg from "../assets/hero-picture.jpg";
interface ItemCardProps {
  title?: string;
  image?: string;
}

function ItemCard(props: ItemCardProps) {
  return (
    <div className="min-w-min w-full shadow-md hover:shadow-lg flex flex-col  rounded-t-xl ">
      <div className="h-max">
        <Image
          className=" h-64 md:h-56 sm:h-44  rounded-t-xl object-cover "
          src={myImg}
          alt="item image"
        />
      </div>
      <div className="p-4 bg-whiteBg">Pizza</div>
    </div>
  );
}

export default ItemCard;
