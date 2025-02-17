import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Button from "./BookBtn";
import { Element } from "react-scroll";
import { Gradient } from "./design/Services";

const Pricing = () => {
  return (
    <Section id="pricing">
      <Element name="Services">
        <div className="container relative z-2">
          <div className="absolute opacity-30 top-[25%] left-[20%]">
            <Gradient />
          </div>
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div>

          <Heading
            tag="Get more clients, while saving more time"
            title="Our Services That Help You Scale"
          />

          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>

          <div className="flex justify-center mt-10">
            <Button />
          </div>
        </div>
      </Element>
    </Section>
  );
};

export default Pricing;
