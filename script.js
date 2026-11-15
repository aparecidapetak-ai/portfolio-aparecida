// Filtra os projetos sem recarregar a página. Todos continuam acessíveis sem JavaScript.
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project-item');
const status = document.querySelector('#resultado-filtro');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let visible = 0;
    projects.forEach(project => {
      project.hidden = category !== 'todos' && project.dataset.category !== category;
      if (!project.hidden) visible += 1;
    });
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    status.textContent = `${visible} ${visible === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
  });
});
