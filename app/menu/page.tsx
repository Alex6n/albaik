import Catogeries from "@/components/Menu/Catogeries";
import { ImageSlider } from "@/components/Menu/ImageSlider";

const images = ["/offers/offer1.jpg", "/offers/offer2.jpg"];

const categories = [
  "All",
  "Breakfast",
  "Chicken",
  "Seafood",
  "Vegetarian",
  "Sides",
  "Desserts",
  "Beverages",
];

const page = () => {
  return (
    <section className="min-h-[53.9vh]">
      <div className="bg-[#CE3737]/90 py-5 text-background font-bold text-center text-7xl">
        Menu
      </div>
      <div className="my-4 flex justify-center">
        <div className="max-w-[1035px]">
          <ImageSlider images={images} />
          <Catogeries catogeries={categories} />
        </div>
      </div>
    </section>
  );
};

export default page;
