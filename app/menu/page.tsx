import Catogeries from "@/components/Menu/Catogeries";
import { ImageSlider } from "@/components/Menu/ImageSlider";
import { MenuItemType } from "@/components/Menu/MenuItem";
import MenuList from "@/components/Menu/MenuList";

const images = ["/offers/offer1.jpg", "/offers/offer2.jpg"];

const items = [
  {
    id: "fa08587f-95bd-44c1-916a-537dded82647",
    title: "BAIKEEZ-Chicken Breasts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit voluptas, necessitatibus ex perferendis.",
    images: ["/landing/home_hero.jpg", "/landing/home_hero.jpg"],
    price: {
      sar: 0,
      bah: 0,
    },
    instock: 0,
    categories: [],
    allergens: [
      "Mustard",
      "Sesame",
      "Crustaceans",
      "Fish",
      "Gluten",
      "Milk",
      "Soybeans",
      "Egg",
    ],
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
];

const Page = () => {
  return (
    <section>
      <div className="bg-[#CE3737]/90 py-5 text-background font-bold text-center text-7xl">
        Menu
      </div>
      <div className="my-3 flex justify-center">
        <div className="max-w-[1035px] mb-5">
          <ImageSlider images={images} />
          <Catogeries />
          <MenuList items={items} />
        </div>
      </div>
    </section>
  );
};

export default Page;
