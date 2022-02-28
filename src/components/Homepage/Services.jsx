import React from "react";
import Section from "../global/Section";

import uiSideImage from "../../assets/images/uiSideImage.png";
import frontendSideImage from "../../assets/images/frontendSideImage.png";
import fullstackSideImage from "../../assets/images/fullstackSideImage.png";

const Services = () => {
  return (
    <Section id="services" className="flex">
      <div className="min-h-[40vh] my-8 flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:mr-auto max-w-[42rem]">
          <h3 className="text-3xl font-bold mb-4">UI Design</h3>
          <p className="mb-4">
            It's a wonderful experience designing web apps interfaces with Figma
            - my powerful UI design tool of choice.
          </p>
          <p>
            It's proven to be very useful for creating prototypes, editing
            assets (icons, graphics etc.). Plus, I can share my designs with
            teams or product owners in a blink of an eye.
          </p>
        </div>
        <img
          src={uiSideImage}
          className="w-1/2 max-w-[36rem] -order-1 lg:order-2"
          alt=""
        />
      </div>
      <div className="min-h-[40vh] my-8 flex flex-col lg:flex-row gap-8 items-center">
        <img src={frontendSideImage} className="w-1/2 max-w-[36rem]" alt="" />

        <div className="lg:ml-auto max-w-[42rem]">
          <h3 className="text-3xl font-bold mb-4">Frontend Development</h3>
          <p className="mb-4">
            After refining the design, it's time to translate it into code. I
            usually go with React or Next.js for their modern approach to split
            code into reusable components - it also makes other developers'
            lives easier.
          </p>
          <p>
            I always prefer custom coded solutions, but sometimes people want to
            keep using Wordpress for their simple website. In that case, there's
            no issue in creating the layout using Elementor (or another custom
            theme builder).
          </p>
        </div>
      </div>
      <div className="min-h-[40vh] my-8 flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:mr-auto max-w-[42rem]">
          <h3 className="text-3xl font-bold mb-4">Fullstack Integration</h3>
          <p className="mb-4">
            A need to have a blog or someplace to store your data and making it
            available to your users might arise. My preferred choice is to keep
            working with Javascript and develop simple Node.js + MongoDB APIs.
          </p>
          <p>
            However, it might happen that hosting providers do not support Node,
            in that case I've had the chance to use Wordpress for managing all
            the blog posts - making it easier to be edited by the end user - and
            integrating them into a custom coded Frontend.
          </p>
        </div>
        <img
          src={fullstackSideImage}
          alt=""
          className="w-1/2 max-w-[36rem] -order-1 lg:order-2"
        />
      </div>
    </Section>
  );
};

export default Services;
