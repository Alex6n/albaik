import Hero from "@/components/Landing/Hero";
import Info from "@/components/Landing/Info";
import InfoContainer from "@/components/Landing/InfoContainer";
import Values from "@/components/Landing/Values";
import { Button } from "@/components/ui/button";
import { Heart, HeartHandshake, Shield, Trophy } from "lucide-react";
import Link from "next/link";

const VALUES = [
  {
    name: "Quality of life",
    Icon: Heart,
  },
  {
    name: "Ethics",
    Icon: Shield,
  },
  {
    name: "Solidarity",
    Icon: HeartHandshake,
  },
  {
    name: "Excellence",
    Icon: Trophy,
  },
];

export default function Home() {
  const Title = (
    <p>
      Savor the Spice, <span className="block">Embrace the Crisp!</span>
    </p>
  );

  return (
    <main>
      <Hero
        title={Title}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            beatae suscipit voluptatibus consequuntur dolore. Inventore nostrum
            tenetur asperiores consectetur"
        bgImage="/landing/home_hero.jpg"
      >
        <Button size="lg" className="px-10 rounded-xl" asChild>
          <Link href="/menu">Explore the Menu</Link>
        </Button>
      </Hero>

      <Values
        heading="Our Core Values"
        label="Who we are"
        description="ALBAIK values form the basis of the company culture. They ensure that the brand,
        Team Members, and Customers are always protected."
        values={VALUES}
      />

      <InfoContainer id="story" image="/landing/history.jpg" imageAlt="history">
        <Info label="Since 1974">
          <h1 className="text-4xl font-bold my-2 mt-5">Our Story</h1>
          <p className="text-zinc-300 text-xl font-semibold tracking-wide my-2 leading-relaxed">
            ALBAIK&apos;s story began in 1974 in the city of Jeddah in the
            Kingdom of Saudi Arabia when the late Shakour AbuGhazalah saw there
            was a need for high quality affordable food, served fast and
            courteously, in a clean and inviting environment. Putting all his
            hard-earned savings into this venture, Shakour wrote the first
            chapter of ALBAIK, being the first in the market to introduce the
            Broast chicken concept in all of Saudi Arabia.
          </p>
        </Info>
      </InfoContainer>

      <InfoContainer
        id="purpose"
        image="/landing/purpose.jpg"
        imageAlt="history"
        imagePosition="first"
      >
        <Info label="Driven by">
          <h1 className="text-4xl font-bold my-2 mt-5">Our Purpose</h1>
          <p className="text-zinc-300 text-xl font-semibold tracking-wide my-2 leading-relaxed">
            We shall always protect the AMANA that God has blessed us with, and
            shall work together to nourish and spread it in a responsible way so
            its goodness can be enjoyed by everyone, everywhere the world over.
          </p>

          <h1 className="text-4xl font-bold my-2 mt-5">Our Vision</h1>
          <p className="text-zinc-300 text-xl font-semibold tracking-wide my-2 leading-relaxed">
            Putting MMMMM&apos;s and WOOOW&apos;s on our customers&apos; lips
            every time, everywhere in the world.
          </p>

          <h1 className="text-4xl font-bold my-2 mt-5">Our Mission</h1>
          <p className="text-zinc-300 text-xl font-semibold tracking-wide my-2 leading-relaxed">
            100% ALBAIK Customer love at all times.
          </p>
        </Info>
      </InfoContainer>
    </main>
  );
}
