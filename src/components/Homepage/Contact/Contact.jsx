import React from "react";
import BlockWithIcon from "../../global/BlockWithIcon";
import Section from "../../global/Section";
import {
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
} from "../../utils/Icon";
import Form from "./Form";

const Contact = () => {
  return (
    <Section id="contact" className="pt-0 mt-36">
      <div className="flex-wrapper">
        <div className="contact--form-box lg:w-1/2">
          <Form />
        </div>

        <div className="contact--details justify-start mx-auto lg:w-1/2">
          <div className="mx-auto lg:w-[325px] text-center">
            <BlockWithIcon
              icon={<LocationIcon />}
              text="Monteprandone, Italy"
            />

            <BlockWithIcon
              icon={<MailIcon />}
              text="gianluigitrontini@gmail.com"
            />
            <span className="subtitle text-left mx-auto mb-4">
              Find more on
            </span>
            <div className="social--container gap-6">
              <button className="btn btn-outline">
                <BlockWithIcon
                  icon={<GithubIcon />}
                  url="https://github.com/gianluigitrontini"
                  text="Github"
                />
              </button>
              <button className="btn btn-outline">
                <BlockWithIcon
                  icon={<LinkedinIcon />}
                  url="https://www.linkedin.com/in/gianluigi-trontini-9b5a0b103/"
                  text="Linkedin"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
