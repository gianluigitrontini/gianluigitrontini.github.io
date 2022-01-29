import React from 'react';
import { Tooltip } from 'react-tippy';
import ProfilePicture from '../../assets/images/profileImage.jpg';
import Project from '../Projects/Project';

import { projects, technologies } from '../../data';
import Section from '../Layout/Section';
import ContactForm from './Contact/ContactForm';
import BlockWithIcon from './Contact/BlockWithIcon';
import { Link } from 'react-router-dom';

function Main() {
  const Hero = () => {
    return (
      <h1>
        Hi, I'm&nbsp;
        <span className='relative my_name'>
          Gianluigi&nbsp;
          <img
            className='profile-picture'
            src={ProfilePicture}
            alt='The Designer and Developer'
          />
        </span>
        &mdash; a&nbsp;<span>UI Designer&nbsp;</span>
        who loves to&nbsp;
        <span className='code'>
          <small className='font-bold'>&lt;&nbsp;</small>
          code
          <small className='font-bold'>&nbsp;/&gt;</small>
        </span>
      </h1>
    );
  };

  const About = () => (
    <div className='w-full lg:w-1/2 text-xl flex flex-col gap-8'>
      <p className='text-left'>
        I can count ~2 years of professional experience designing &amp;
        developing
        <span className='bold'> websites </span> and
        <span className='bold'> web applications </span> &mdash; and even more
        working on personal projects.
      </p>
      <p className='text-left'>
        I'm used to work over
        <span className='gradient-text react font-bold'> React</span> and
        <span className='gradient-text symfony font-bold'> Symfony </span>
        projects, crafting interfaces for amazing applications in the ed-tech
        field.
      </p>
      <p className='text-left'>
        I've also spent many hours practicing Node.js and MongoDB - getting to a
        point where I'm able to create simple{' '}
        <span className='bold'>full-stack </span>applications.
      </p>
    </div>
  );

  const TechnologiesIcon = ({ icon, i }) => (
    <img key={`technology-icon--${i}`} src={icon.url} alt={icon.name} />
  );

  const ContactDetails = () => (
    <div className='mx-auto lg:w-[325px]'>
      <BlockWithIcon icon='location' text='Monteprandone, Italy' />

      <BlockWithIcon icon='mail' text='gianluigitrontini@gmail.com' />
      <span className='subtitle text-left mx-auto mb-4'>Find more on</span>
      <div className='social--container gap-6'>
        <button className='bg-white border-2 border-black px-6 hover:bg-black hover:text-white'>
          <BlockWithIcon
            icon='github'
            url='https://github.com/gianluigitrontini'
            text='Github'
          />
        </button>
        <button className='bg-white border-2 border-black px-6 hover:bg-black hover:text-white'>
          <BlockWithIcon
            icon='linkedin'
            url='https://www.linkedin.com/in/gianluigi-trontini-9b5a0b103/'
            text='Linkedin'
          />
        </button>
      </div>
    </div>
  );
  return (
    <main>
      <Section id='hero' className='h-[75vh]'>
        <Hero />
      </Section>

      <Section id='about' className='flex items-center'>
        <About />
      </Section>

      <div className='technologies my-16'>
        {technologies.map((icon, i) => (
          <Tooltip title={icon.name} position='bottom'>
            <TechnologiesIcon icon={icon} i={i} />
          </Tooltip>
        ))}
      </div>

      <Section id='projects' title='Projects'>
        <div className='projects--wrapper'>
          {projects.map((prj) => (
            <Link to={`projects/${prj.slug}`}>
              <Project project={prj} key={`project-${prj.name}`} />
            </Link>
          ))}
        </div>
      </Section>

      <div className='container my-32 line-gradient'></div>

      <Section id='contact' className='pt-0'>
        <div className='flex-wrapper gap-8'>
          <div className='contact--form-box lg:w-1/2'>
            <ContactForm />
          </div>

          <div className='contact--details justify-start mx-auto lg:w-1/2'>
            <ContactDetails />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default Main;
