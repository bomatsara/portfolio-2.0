import { PROJECTS_IMG } from "../../utils/const";

let currentIndex = 0;
const projectsPerPage = 3;

document.getElementById('load-more').addEventListener('click', loadProjects);

function loadProjects() {
  const list = document.getElementById('projects-list');
  for (
    let i = 0;
    i < projectsPerPage && currentIndex < PROJECTS_IMG.length;
    i++
  ) {
    const project = PROJECTS_IMG[currentIndex++];
    const li = document.createElement('li');
    li.innerHTML = `
  <img 
    src="${project.image1x}" 
    srcset="${project.image1x} 1x, ${project.image2x} 2x" 
    alt="${project.alt}">
  <p>${project.text}</p>
  <h3>${project.description}</h3>
`;
    list.appendChild(li);
  }
  if (currentIndex >= PROJECTS_IMG.length) {
    document.getElementById('load-more').style.display = 'none';
  }
}

loadProjects();