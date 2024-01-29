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

const items = [
  {
    id: "fa08587f-95bd-44c1-916a-537dded82647",
    title: "BAIKEEZ-Chicken Breasts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit voluptas, necessitatibus ex perferendis.",
    images: ["/landing/home_hero.jpg", "/landing/home_hero.jpg"],
    category: "Breakfast",
    allergens: ["Egg", "Soybeans", "Milk", "Gluten"],
    totalCalories: 10212,
    itemParts: [
      {
        name: "item one",
        calories: 200,
      },
      {
        name: "item two",
        calories: 400,
      },
      {
        name: "item three",
        calories: 290,
      },
    ],
    highlighted: false,
    available: true,
  },
  {
    title: "BAIKEEZ-Chicken Thighs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit voluptas, necessitatibus ex perferendis.",
    images: ["/landing/home_hero.jpg", "/landing/home_hero.jpg"],
    allergens: ["Egg", "Soybeans"],
    totalCalories: 477,
    itemParts: [
      {
        name: "item one",
        calories: 200,
      },
    ],
    highlighted: false,
    available: false,
  },
  {
    title: "pepsi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit voluptas, necessitatibus ex perferendis.",
    images: ["/landing/home_hero.jpg"],
    allergens: ["Egg"],
    totalCalories: 100,
    itemParts: [],
    highlighted: true,
    available: true,
  },
];

const page = () => {
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
