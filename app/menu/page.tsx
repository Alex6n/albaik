"use client";
import Categories from "@/components/Menu/Categories";
import { CategoryProvider } from "@/components/Providers/CategoryProvider";
import ImageSlider from "@/components/Menu/ImageSlider";
import MenuList from "@/components/Menu/MenuList";

const images = ["/offers/offer1.jpg", "/offers/offer2.jpg"];

const Page = () => {
  return (
    <section>
      <div className="bg-[#CE3737]/90 py-5 text-background font-bold text-center text-7xl">
        Menu
      </div>
      <div className="my-3 flex justify-center">
        <div className="max-w-[1035px]">
          <ImageSlider className="lg:max-h-[400px]" images={images} />
        </div>
      </div>
      <CategoryProvider>
        <Categories />
        <MenuList />
      </CategoryProvider>
    </section>
  );
};

export default Page;
