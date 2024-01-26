import { ImageSlider } from "@/components/ImageSlider";

const images = ["/offer1.jpg", "/offer2.jpg"];

const page = () => {
  return (
    <section className="min-h-[53.9vh]">
      <div className="bg-[#CE3737]/90 py-5 text-background font-bold text-center text-7xl">
        Menu
      </div>
      <div className="my-4 flex justify-center">
        <div className="max-h-[650px] max-w-[1035px]">
          <ImageSlider images={images} />
        </div>
      </div>
    </section>
  );
};

export default page;
