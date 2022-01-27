import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { CloseIcon, OpenLinkIcon } from '../components/utils/Icon';
import { projects } from '../data';

function Project() {
  let { id } = useParams();
  const filteredProject = projects.filter((project) => project.slug === id);

  const [project, setProject] = useState(...filteredProject);
  const [projectDescription, setProjectDescription] = useState('');
  const [readingBarWidth, setReadingBarWidth] = useState(0);

  const currentProjectIndex = projects.findIndex((prj) => prj.slug === id);
  const nextProject = projects[currentProjectIndex + 1] ?? projects[0];
  const previousProject =
    projects[currentProjectIndex - 1] ?? projects[projects.length - 1];

  const getMarkDownDescription = () => {
    fetch(
      `https://raw.githubusercontent.com/gianluigitrontini/${filteredProject[0].repoName}/master/README.md`
    )
      .then((response) =>
        response.status === 200
          ? response.text()
          : 'There may be a problem related to Github that does not allow us to retrieve the description. Please, try again later or visit Github.'
      )
      .then((data) => setProjectDescription(data))
      .catch(
        'There may be a problem related to Github that does not allow us to retrieve the description.'
      );
  };

  useEffect(() => {
    if (project) {
      getMarkDownDescription();
    }
  }, [filteredProject, project]);

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
      <section className='container sm py-4'>
        <div
          className='fixed top-0 left-0 right-0 h-1 bg-blue-200'
          style={{ width: `${readingBarWidth}%` }}></div>
        <HashLink
          to={'/#projects'}
          className='hidden lg:block lg:fixed top-4 right-8'>
          <span className='close-animation-wrapper absolute top-4 right-8 hover:text-[#38a7ca]'>
            <span className='close-animation '></span>
            <CloseIcon />
          </span>
        </HashLink>

        <main className='pb-36 lg:pb-8'>
          <div className='flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-4 rounded-lg'>
            {project.logo && (
              <img
                src={project.logo}
                className='mx-auto lg:ml-0 w-full max-w-[16rem] h-28 object-contain'
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

          <section id='projects-description' className='text-left'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {projectDescription}
            </ReactMarkdown>
          </section>
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
          <Link
            to={`/projects/${nextProject.slug}`}
            className='w-full lg:w-auto'>
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

export default Project;
