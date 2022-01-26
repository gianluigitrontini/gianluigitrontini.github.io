import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { projects } from '../data';
function Project() {
  let { id } = useParams();
  const filteredProject = projects.filter((project) => project.slug === id);
  const [project, setProject] = useState(...filteredProject);
  const currentProjectIndex = projects.findIndex((prj) => prj.slug === id);
  const nextProject = projects[currentProjectIndex + 1] ?? projects[0];
  const previousProject =
    projects[currentProjectIndex - 1] ?? projects[projects.length - 1];

  const OpenLinkIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 w-5 ml-2'
      fill='none'
      viewBox='0 0 24 24'
      stroke='#38a7ca'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      />
    </svg>
  );
  const CloseIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );

  return project ? (
    <section className='container sm'>
      <HashLink to={'/#projects'} className='hidden lg:block'>
        <span className='close-animation-wrapper absolute top-16 right-16 hover:text-[#38a7ca]'>
          <span className='close-animation '></span>
          <CloseIcon />
        </span>
      </HashLink>
      <main>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {project.logo && (
            <img
              src={project.logo}
              className='mx-auto lg:ml-0 w-full max-w-[16rem] h-28 object-contain'
              alt=''
            />
          )}
          <div className='text-left w-full'>
            {project.linkToProject ? (
              <a
                href={project.linkToProject}
                className='inline-flex items-center text-xl'
                target='_blank'
                rel='noreferrer'>
                {project.name}
                <OpenLinkIcon />
              </a>
            ) : (
              <h3 className='text-xl'>{project.name}</h3>
            )}
            <p className=' font-body text-gray-500'>{project.description}</p>
          </div>
        </div>
      </main>
      <div className='max-w-[800px] flex flex-col lg:flex-row h-[240px] lg:h-[140px] items-center justify-end lg:justify-between fixed bottom-0 left-[1rem] right-[1rem] mx-auto pt-12 previous-next-gradient'>
        <Link
          to={`/projects/${previousProject.slug}`}
          className='w-full lg:w-auto'>
          <button
            className='button btn-outline my-2 lg:my-4 w-full lg:w-auto'
            onClick={() => setProject(previousProject)}>
            &#8592; {previousProject.name}
          </button>
        </Link>
        <Link to={`/projects/${nextProject.slug}`} className='w-full lg:w-auto'>
          <button
            className='button my-2 lg:my-4 w-full lg:w-auto'
            onClick={() => setProject(nextProject)}>
            {nextProject.name} &#8594;
          </button>
        </Link>
        <HashLink to={'/#projects'} className='block lg:hidden'>
          <span className='my-4 block uppercase underline'>
            Back to Homepage
          </span>
        </HashLink>
      </div>
    </section>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-xl'>
        404 <br /> The page cannot be found
      </p>
      <Link to={'/'}>
        <button className='button my-4'>Go to Homepage</button>
      </Link>
    </div>
  );
}

export default Project;
