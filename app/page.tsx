import Hero from "@/components/Hero";
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
        description="The ALBAIK values form the basis of the company culture. They ensure that the brand, Team Members, and Customers are always protected."
        values={VALUES}
      />
    </main>
  );
}
