//@island

import { GithubLogo } from "./icons/github";

const getGitHubLink = (project) => `https://github.com/${project.github}`;
const getMainLink = (project) => project.url || getGitHubLink(project);

export default function ProjectCard({ animationDelay, project }) {
  const mainLink = getMainLink(project);
  const gitHubLink = getGitHubLink(project);
  const showGitHub = gitHubLink !== mainLink;

  return (
    <div
      onClick={() => {
        window.open(mainLink, "", "_blank");
      }}
      class={`project ${project.deprecated ? "deprecated" : ""}`}
      style={{ animationDelay }}
    >
      <div class="title-container">
        <h2>
          {project.name}
          {showGitHub ? (
            <a href={gitHubLink} class="icon link" target="_blank">
              <GithubLogo />
            </a>
          ) : null}
        </h2>
        {project.note ? (
          <span class="contributor-badge">{project.note}</span>
        ) : null}
      </div>
      <p>{project.description}</p>
    </div>
  );
}
