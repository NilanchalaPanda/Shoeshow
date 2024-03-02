"use client";

import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-[1.03] cursor-pointer"
    >
      <img src="/product.jpg" alt="SHOE IMAGE" className="rounded-xl"/>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-3 text-lg font-semibold">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base text-green-400">20% off</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
