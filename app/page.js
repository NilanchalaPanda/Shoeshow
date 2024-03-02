import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for your Miles
          </div>
          <div className="text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est
            odio eligendi quasi quo magnam velit, illo quas perferendis
            distinctio, cupiditate asperiores dignissimos minima provident! Modi
            enim, maiores laudantium nisi illum exercitationem eaque asperiores
            magni?
          </div>
        </div>

        {/* Product listed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </main>
  );
}
