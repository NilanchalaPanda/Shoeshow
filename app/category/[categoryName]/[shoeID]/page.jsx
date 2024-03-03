"use client";

import ProductsDetailsCarousel from "@/app/components/ProductsDetailsCarousel";
import RelatedProducts from "@/app/components/RelatedProducts";
import Wrapper from "@/app/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const page = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] md:w-full">
          {/* LEFT START */}
          <div>
            <ProductsDetailsCarousel />
          </div>
          {/* LEFT END */}

          {/* RIGHT START */}
          <div className="w-full md:w-[600px] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-10">
              Jordan Retro 5 G
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/* PRODUCT PRICE */}
            <div className="text-lg font-semibold">MRP : &#8377; 2000.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6.5
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7.5
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8.5
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9.5
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 10
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 10.5
                </div>
                <div className="border-2 rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 11
                </div>
              </div>
              {/* SIZE END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON */}
            <button className="w-full bg-black text-white rounded-full py-4 px-8 hover:opacity-75 text-lg transition-transform active:scale-95 mb-3">
              Add to Cart
            </button>

            {/* WISHLIST BUTTON */}
            <button className="w-full py-4 rounded-full border-2 border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-3 hover:opacity-75 mb-10">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>

            {/* PRODUCT DESC */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                soluta suscipit! Necessitatibus numquam dolor perspiciatis
                consectetur velit optio, fuga iste voluptatum unde id hic. Atque
                autem porro quia dolores modi iure! Explicabo ratione molestiae
                eveniet quae modi iusto excepturi, voluptatem fuga libero.
                Exercitationem facere quos minus perspiciatis dolor? Fugit, id.
              </div>
              <div className="text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                soluta suscipit! Necessitatibus numquam dolor perspiciatis
                consectetur velit optio, fuga iste voluptatum unde id hic. Atque
                autem porro quia dolores modi iure! Explicabo ratione molestiae
                eveniet quae modi iusto excepturi, voluptatem fuga libero.
                Exercitationem facere quos minus perspiciatis dolor? Fugit, id.
              </div>
            </div>
          </div>
          {/* RIGHT END */}

          <RelatedProducts />
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
