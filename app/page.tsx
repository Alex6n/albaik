import Hero from "@/components/Hero";
import Button from "@/components/ui/Button";

// TODO : consider making the bg color of the fist section red
// TODO : copy mobile app functionality
// TODO : fix nav items transitions

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
      {/* TODO: Values */}
    </main>
  );
}
