import { ReactNode, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { CloseIcon, OpenLinkIcon } from "../components/utils/Icon";
import { projects } from "../data";
import useWindowSize from "../hooks/useWindowSize";

export interface ProjectDescription {
  description: string;
  error: string | null;
}

function Project() {
  let { id } = useParams();
  const size = useWindowSize();

  const filteredProject = projects.find((project) => project.slug === id);
  const [project, setProject] = useState(filteredProject);

  const [projectDescription, setProjectDescription] = useState<{
    description: string | null;
    error: string | null;
  }>({
    description: "",
    error: "",
  });

  const currentProjectIndex = projects.findIndex((prj) => prj.slug === id);
  const nextProject = projects[currentProjectIndex + 1] ?? projects[0];
  const previousProject =
    projects[currentProjectIndex - 1] ?? projects[projects.length - 1];

  useEffect(() => {
    const getGithubReadme = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/gianluigitrontini/progetti-portfolio/main/${project?.repoName}/README.md`
      );
      if (res.status === 200) {
        const resText = await res.text();
        setProjectDescription({
          description: resText,
          error: null,
        });
      } else {
        setProjectDescription({
          description: null,
          error:
            "There may be a problem related to Github that does not allow to retrieve the description. Please, try again later or visit Github.",
        });
      }
    };

    if (project) {
      getGithubReadme();
    }
  }, [project]);

  const MobileHeader = () => (
    <div className="flex flex-col gap-8 bg-gray-50 mb-4 px-4 py-8">
      {project && (
        <>
          {project.logo && (
            <img
              src={project.logo}
              className="mx-auto max-w-[12rem] h-20 object-contain"
              alt=""
            />
          )}

          <div className="text-left font-bold w-full">
            {project.linkToProject ? (
              <a
                href={project.linkToProject}
                className="inline-flex items-center text-xl"
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
                <OpenLinkIcon />
              </a>
            ) : (
              <h3 className="text-xl">{project.name}</h3>
            )}
            <p className=" font-body text-gray-500">{project.description}</p>
          </div>
        </>
      )}
    </div>
  );

  const CloseButton = () => {
    if (size.width! >= 1024) {
      return (
        <HashLink
          to={"/#projects"}
          className="hidden lg:block lg:fixed top-8 left-4"
        >
          <span className="close-animation-wrapper hover:text-[#38a7ca]">
            <span className="close-animation "></span>
            <CloseIcon />
          </span>
        </HashLink>
      );
    } else {
      return (
        <HashLink to={"/#projects"} className="block lg:hidden">
          <span className="my-4 block uppercase underline">
            Back to Homepage
          </span>
        </HashLink>
      );
    }
  };

  const Error = ({ children }: { children: ReactNode }) => (
    <div className="bg-red-100 border border-red-200 rounded-sm p-4 ">
      {children}
    </div>
  );

  const Navigation = () => (
    <div className="w-full flex flex-col items-center gap-4 pt-12 ">
      <Link to={`/projects/${previousProject.slug}`} className="w-full">
        <button
          className="btn btn-outline w-full"
          onClick={() => setProject(previousProject)}
        >
          &#8592; {previousProject.name}
        </button>
      </Link>

      <Link to={`/projects/${nextProject.slug}`} className="w-full">
        <button className="btn w-full" onClick={() => setProject(nextProject)}>
          {nextProject.name} &#8594;
        </button>
      </Link>
      {size.width! < 1024 && <CloseButton />}
    </div>
  );

  if (project) {
    return (
      <section className="flex flex-col lg:flex-row p-0 overflow-hidden">
        {size.width! < 1024 && <MobileHeader />}

        {/* Content Block */}
        <div className="lg:w-2/3 h-full overflow-auto lg:mr-[33%]">
          <div className="container sm">
            {size.width! >= 1024 && <CloseButton />}

            {/* Project Content */}
            <main className="lg:min-h-[100vh] pb-64 pt-4 lg:pb-4 lg:flex">
              <section
                id="projects-description"
                className="text-left py-4 w-full"
              >
                {projectDescription.error && (
                  <div className="flex justify-center items-center h-full">
                    <Error>{projectDescription.error}</Error>
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

        <div className="lg:w-1/3 flex flex-col fixed left-0 lg:left-auto right-0 bottom-0 lg:top-0">
          <div className="previous-next-gradient flex-1 flex flex-col justify-between bg-gray-50 p-4 lg:pt-8 ">
            {size.width! >= 1024 && (
              <div className="flex flex-col flex-1 gap-4">
                {project.logo && (
                  <img
                    src={project.logo}
                    className="mr-auto max-w-[12rem] h-20 object-contain"
                    alt=""
                  />
                )}

                <div className="text-left font-bold w-full">
                  {project.linkToProject ? (
                    <a
                      href={project.linkToProject}
                      className="inline-flex items-center text-xl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                      <OpenLinkIcon />
                    </a>
                  ) : (
                    <h3 className="text-xl">{project.name}</h3>
                  )}
                  <p className="font-body text-gray-500">
                    {project.description}
                  </p>
                </div>
              </div>
            )}

            <Navigation />
          </div>
        </div>
      </section>
    );
  } else
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl text-center">
          404 <br /> The page cannot be found
        </p>
        <Link to={"/"}>
          <button className="btn my-4">Go to Homepage</button>
        </Link>
      </div>
    );
}

export default Project;
