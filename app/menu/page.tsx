import Catogeries from "@/components/Menu/Catogeries";
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
        <div className="max-w-[1035px] mb-5">
          {/* <ImageSlider
            className="lg:max-h-[650px] lg:max-w-[1035px]"
            images={images}
          /> */}
          <Catogeries />
          <MenuList />
        </div>
      </div>
    </section>
  );
};

export default Page;
