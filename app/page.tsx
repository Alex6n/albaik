import Hero from "@/components/Hero";
import Info from "@/components/Info";
import InfoContainer from "@/components/InfoContainer";
import Values from "@/components/Values";
import Button from "@/components/ui/Button";
import {
  BookOpen,
  CheckSquare,
  Heart,
  HeartHandshake,
  Shield,
  Timer,
  Trophy,
} from "lucide-react";

// TODO : consider making the bg color of the fist section red
// TODO : copy mobile app functionality
// TODO : fix nav items transitions

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
  return (
    <main>
      <Hero
        title="Savor the Spice, Embrace the Crisp!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            beatae suscipit voluptatibus consequuntur dolore. Inventore nostrum
            tenetur asperiores consectetur nemo."
        bgImage="/home_hero.jpg"
      >
        {/* <Button size="lg">Explore the Menu</Button>
        <Button size="lg" primary={false}>
          Our Core Values
        </Button> */}
      </Hero>

      <Values
        heading="ALBAIK Core Values"
        label="Who we are"
        description="ALBAIK values form the basis of the company culture. They ensure that the brand, Team Members, and Customers are always protected."
        values={VALUES}
      />

      <InfoContainer image="/history.jpg" imageAlt="history" imageFirst={false}>
        <Info
          label="Since 1974"
          heading="Our Story"
          description="ALBAIK's story began in 1974 in the city of Jeddah in the Kingdom of Saudi Arabia when the late Shakour AbuGhazalah saw there was a need for high quality affordable food, served fast and courteously, in a clean and inviting environment. Putting all his hard-earned savings into this venture, Shakour wrote the first chapter of ALBAIK, being the first in the market to introduce the Broast chicken concept in all of Saudi Arabia."
        />
      </InfoContainer>
    </main>
  );
}
