import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ItemCardProps {
  title: string;
  image?: Record<string, any>;
}

function ItemCard(props: ItemCardProps) {
  const image = props?.image?.fields?.file;
  const thumbnail = `https:${image?.url}`;
  const imgWidth = props?.image?.fields.file.details.image.width;
  const imgHeight = props?.image?.fields.file.details.image.height;

  return (
    <Link href={props?.title}>
      <div className="min-w-min w-full shadow-md hover:shadow-lg flex  flex-col relative  rounded-xl ">
        {image && (
          <div className=" h-64 md:h-44 lg:h-44 sm:h-36 relative overflow-hidden rounded-t-xl">
            <Image
              priority
              loading="eager"
              className="object-cover w-auto bottom h-auto rounded-t-xl "
              src={thumbnail}
              fill
              alt="item image"
            />
          </div>
        )}
        <div className="p-3 lg:p-2 lg:px-4 md:p-2 md:px-4  sm:p-2 px-6 sm:px-4 text-textColor text-2xl lg:text-xl sm:text-xl md:text-xl font-quicksand font-semibold bg-whiteBg rounded-b-xl">
          {props?.title}
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
