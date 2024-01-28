import Catogeries from "@/components/Menu/Catogeries";
import { ImageSlider } from "@/components/Menu/ImageSlider";
import MenuList from "@/components/Menu/MenuList";
import * as menu from "../../public/menu.json";

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
  const items = [
    {
      image: "/landing/home_hero.jpg",
      title: "delecious chicken baby",
      highlighted: false,
      available: true,
    },
    {
      image: "/landing/home_hero.jpg",
      title: "OK chicken meal",
      highlighted: false,
      available: false,
    },
    {
      image: "/landing/home_hero.jpg",
      title: "special chicken baby",
      highlighted: true,
      available: true,
    },
    {
      image: "/landing/home_hero.jpg",
      title: "just anothor line",
      highlighted: false,
      available: true,
    },
  ];
  return (
    <section>
      <div className="bg-[#CE3737]/90 py-5 text-background font-bold text-center text-7xl">
        Menu
      </div>
      <div className="my-3 flex justify-center">
        <div className="max-w-[1035px] mb-5">
          <ImageSlider images={images} />
          <Catogeries catogeries={categories} />
          <MenuList items={items} />
        </div>
      </div>
    </section>
  );
};

export default page;
