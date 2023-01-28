import React from "react";
import Image from "next/image";
import myImg from "../assets/hero-picture.jpg";
interface ItemCardProps {
  title?: string;
  image?: any;
}

function ItemCard(props: ItemCardProps) {
  const image = props?.image?.fields?.file;
  const thumbnail = `https:${image?.url}`;
  return (
    <div className="min-w-min w-full shadow-md hover:shadow-lg flex  flex-col  rounded-xl ">
      {image && (
        <div className=" h-64 md:h-56 sm:h-44 relative rounded-t-xl">
          <Image
            className="object-cover rounded-t-xl "
            src={thumbnail}
            fill
            alt="item image"
            sizes="(max-width: 900px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
      )}
      <div className="p-3 sm:p-2 px-6 sm:px-4 text-textColor text-2xl sm:text-xl font-quicksand font-semibold bg-whiteBg rounded-b-xl">
        {props?.title}
      </div>
    </div>
  );
}

export default ItemCard;
