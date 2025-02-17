import Button from "./BookBtn";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { caseStudies } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { Element } from "react-scroll";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <Element name="Case Study">
      <div className="container md:pb-10">
        <Heading
          tag="Ready to get started"
          title="Inspiring Success Stories
  From Some Of Our Clients"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] mb-10">
          {caseStudies.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
          <div className="absolute right-[-40%] bottom-[35%]">
             <Gradient />
          </div>
        </div>

        <h5 className="tagline mb-6 text-center font-bold scale-110">
          Are you looking for the same success?<br />
          Book a non-binding call to see if we're a match
        </h5>

        <Button/>
      </div>
    </Element>
  </Section>
);

export default Roadmap;
