import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { CloseIcon, OpenLinkIcon } from '../components/utils/Icon';
import { projects } from '../data';

function Project2() {
  let { id } = useParams();
  const filteredProject = projects.filter((project) => project.slug === id);

  const [project, setProject] = useState(...filteredProject);
  const [projectDescription, setProjectDescription] = useState({
    description: null,
    error: null,
  });
  const [readingBarWidth, setReadingBarWidth] = useState(0);

  const currentProjectIndex = projects.findIndex((prj) => prj.slug === id);
  const nextProject = projects[currentProjectIndex + 1] ?? projects[0];
  const previousProject =
    projects[currentProjectIndex - 1] ?? projects[projects.length - 1];

  const getMarkDownDescription = () => {
    fetch(
      `https://raw.githubusercontent.com/gianluigitrontini/${project.repoName}/master/README.md`
    ).then((response) =>
      response.status === 200
        ? response.text().then((data) =>
            setProjectDescription({
              description: data,
              error: null,
            })
          )
        : setProjectDescription({
            description: null,
            error:
              'There may be a problem related to Github that does not allow us to retrieve the description. Please, try again later or visit Github.',
          })
    );
  };

  useEffect(() => {
    if (project) {
      getMarkDownDescription();
    }
  }, [project]);

  // Feeds the Scrolling indicator
  useEffect(() => {
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      setReadingBarWidth(scrollPercentRounded);
    });
  });

  if (project) {
    return (
      <section className='flex flex-col lg:flex-row p-0 overflow-hidden'>
        <div className='lg:hidden flex flex-col gap-8 bg-gray-50 mb-4 px-4 py-8'>
          {project.logo && (
            <img
              src={project.logo}
              className='mx-auto lg:ml-0 max-w-[12rem] h-20 object-contain'
              alt=''
            />
          )}
          <div className='text-left font-bold w-full'>
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
        <div className='lg:w-2/3 h-full overflow-auto lg:mr-[33%]'>
          <div className='container sm'>
            <div
              className='fixed top-0 left-0 right-0 z-10 h-1 bg-blue-200'
              style={{ width: `${readingBarWidth}%` }}></div>
            <HashLink
              to={'/#projects'}
              className='hidden lg:block lg:fixed top-4 left-4'>
              <span className='close-animation-wrapper hover:text-[#38a7ca]'>
                <span className='close-animation '></span>
                <CloseIcon />
              </span>
            </HashLink>
            <main className=''>
              <section
                id='projects-description'
                className='text-left py-4 lg:py-16'>
                {projectDescription.error && (
                  <div className='bg-red-100 p-4'>
                    {projectDescription.error}
                  </div>
                )}
                {projectDescription.description && (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {projectDescription.description}
                  </ReactMarkdown>
                )}
              </section>
            </main>
          </div>
        </div>

        <div className='lg:w-1/3 lg:fixed right-0 top-0 bottom-0 flex flex-col'>
          <div className='flex-1 bg-gray-50 flex flex-col justify-between p-4'>
            <div className='hidden lg:flex flex-1 flex-col gap-8'>
              {project.logo && (
                <img
                  src={project.logo}
                  className='mr-auto max-w-[12rem] h-20 object-contain'
                  alt=''
                />
              )}
              <div className='text-left font-bold w-full'>
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
                <p className=' font-body text-gray-500'>
                  {project.description}
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col items-center gap-4 pt-12 previous-next-gradient'>
              <Link to={`/projects/${previousProject.slug}`} className='w-full'>
                <button
                  className='button btn-outline w-full'
                  onClick={() => setProject(previousProject)}>
                  &#8592; {previousProject.name}
                </button>
              </Link>
              <Link to={`/projects/${nextProject.slug}`} className='w-full'>
                <button
                  className='button w-full'
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
          </div>
        </div>
      </section>
    );
  } else
    return (
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

export default Project2;
