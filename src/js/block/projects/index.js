import { PROJECTS_IMG } from '../../utils/const';

let currentIndex = 0;
const projectsPerPage = 3;
const loadMoreBtn = document.getElementById('load-more');

loadMoreBtn.addEventListener('click', loadProjects);

function loadProjects() {
  const list = document.getElementById('projects-list');

  let htmlString = '';

  for (
    let i = 0;
    i < projectsPerPage && currentIndex < PROJECTS_IMG.length;
    i++
  ) {
    const project = PROJECTS_IMG[currentIndex++];
    htmlString += `
      <li class="projects-cards">
        <picture>
          <source 
            srcset="${project.image1x} 1x, ${project.image2x} 2x" 
            media="(min-width: 1280px)"
            sizes="1008px"
          >
          <source 
            srcset="${project.image1x} 1x, ${project.image2x} 2x" 
            media="(min-width: 768px) and (max-width: 1279px)"
            sizes="704px"
          >
          <source 
            srcset="${project.image1x} 1x, ${project.image2x} 2x" 
            sizes="(max-width: 359px) 100vw, 
                   (min-width: 360px) and (max-width: 767px) 50vw, 
                   (min-width: 768px) and (max-width: 1279px) 704px, 
                   (min-width: 1280px) 1008px"
          >
          <img 
            src="${project.image1x}" 
            srcset="${project.image1x} 1x, ${project.image2x} 2x" 
            alt="${project.alt}"
            class="card-image"
          >
        </picture>
        <p class="text">${project.text}</p>
        <div class="button-card-container">
          <h3 class="projects-name-title">${project.description}</h3>
          <a href="https://github.com/bomatsara/portfolio-2.0" target="_blank" class="button button-light_grey">visit</a>
        </div>
      </li>
    `;
  }
  list.insertAdjacentHTML('beforeend', htmlString);

  if (currentIndex >= PROJECTS_IMG.length) {
    loadMoreBtn.style.display = 'none';
  }
}
loadProjects();
