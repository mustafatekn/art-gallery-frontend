import React from "react";
import Link from "next/link";

export default function Product({ product }) {
  const { url, thumbnail, title } = product;
  return (
    <div className="mx-auto px-5 xl:px-0 box-border w-full h-full">
      <div className="relative filter ease-in-out duration-700 w-full h-full">
        <Link href={`/shop/${url}`}>
          <a>
            <img
              src={thumbnail.url}
              alt={thumbnail.explanation}
              className="object-cover object-center w-full h-full rounded-sm"
              loading="lazy"
            />
            <div className="font-medium text-5xl duration-700 hover:backdrop-brightness-50 hover:backdrop-grayscale-0 text-white absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100">
              {title}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
