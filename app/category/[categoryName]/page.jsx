import ProductCard from "@/app/components/ProductCard";
import Wrapper from "@/app/components/Wrapper";
import React from "react";

const CategoryName = ({ params }) => {
  const { categoryName } = params;
  const finalName = categoryName.split("-");
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Welcome to Shop {finalName}
          </div>

          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
};

export default CategoryName;
