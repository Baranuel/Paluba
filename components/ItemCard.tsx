import React from "react";
import Image from "next/image";
interface ItemCardProps {
  title?: string;
  image?: any;
}

function ItemCard(props: ItemCardProps) {
  const image = props?.image?.fields?.file;
  const thumbnail = `https:${image?.url}`;
  return (
    <div className="min-w-min w-full shadow-md hover:shadow-lg flex  flex-col relative  rounded-xl ">
      {image && (
        <div className=" h-64 md:h-44 lg:h-44 sm:h-36 relative rounded-t-xl">
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
      <div className="p-3 lg:p-2 lg:px-4 md:p-2 md:px-4  sm:p-2 px-6 sm:px-4 text-textColor text-2xl lg:text-xl sm:text-xl md:text-xl font-quicksand font-semibold bg-whiteBg rounded-b-xl">
        {props?.title}
      </div>
    </div>
  );
}

export default ItemCard;
