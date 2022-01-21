import React from 'react';
import { Tooltip } from 'react-tippy';
import ProfilePicture from '../../assets/images/profileImage.jpg';
import Project from '../Projects/Project';

import projects from '../../projects';
import Section from '../Layout/Section';
import ContactForm from './Contact/ContactForm';
import BlockWithIcon from './Contact/BlockWithIcon';

const technologiesIcons = [
  {
    name: 'Figma',
    url: '/images/icons/figma.png',
  },
  {
    name: 'HTML',
    url: '/images/icons/html5.png',
  },
  {
    name: 'CSS',
    url: '/images/icons/css3.png',
  },
  {
    name: 'SCSS',
    url: '/images/icons/sass.png',
  },
  {
    name: 'Tailwind',
    url: '/images/icons/tailwindcss.png',
  },
  {
    name: 'Javascript',
    url: '/images/icons/javascript.png',
  },
  {
    name: 'React',
    url: '/images/icons/react.png',
  },
  {
    name: 'NextJS',
    url: '/images/icons/nextjs.png',
  },
];

function Main() {
  return (
    <main>
      <Section id='hero' className='h-[75vh]'>
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
            <small>&lt;&nbsp;</small>
            code
            <small>&nbsp;/&gt;</small>
          </span>
        </h1>
      </Section>

      <Section id='about' className='flex items-center'>
        <div className='w-full lg:w-1/2 text-xl flex flex-col gap-8'>
          <p className='text-left'>
            I can count ~2 years of professional experience designing &amp;
            developing &nbsp;
            <span className='bold'>websites</span> and&nbsp;
            <span className='bold'>web applications</span> &mdash; and even more
            working on personal projects.
          </p>
          <p className='text-left'>
            I'm used to work over&nbsp;
            <span className='gradient-text react'>React</span>&nbsp; and&nbsp;
            <span className='gradient-text symfony'>Symfony</span>&nbsp;
            projects, crafting interfaces for amazing applications in the
            ed-tech field.
          </p>
          <p className='text-left'>
            I've also spent many hours practicing Node.js and MongoDB - getting
            to a point where I'm able to create simple{' '}
            <span className='bold'>full-stack </span>applications.
          </p>
        </div>
      </Section>
      <div className='technologies my-16'>
        {technologiesIcons.map((icon, index) => (
          <Tooltip title={icon.name} position='bottom'>
            <img
              key={`technology-icon--${index}`}
              src={icon.url}
              alt={icon.name}
            />
          </Tooltip>
        ))}
      </div>

      <Section id='projects' title='Projects'>
        <div className='projects--wrapper'>
          {projects.map((prj) => (
            <Project
              project={prj}
              key={`project-${prj.name}`}
              image={prj.image}
              title={prj.name}
              description={prj.description}
              status={prj.status}
            />
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
            <div className='mx-auto lg:w-[325px]'>
              <BlockWithIcon icon='location' text='Monteprandone, Italy' />

              <BlockWithIcon icon='mail' text='gianluigitrontini@gmail.com' />
              <span className='subtitle text-left mx-auto'>Find more on</span>
              <div className='social--container gap-6'>
                <BlockWithIcon
                  icon='github'
                  url='https://github.com/gianluigitrontini'
                  text='Github'
                />
                <BlockWithIcon
                  icon='linkedin'
                  url='https://www.linkedin.com/in/gianluigi-trontini-9b5a0b103/'
                  text='Linkedin'
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default Main;
