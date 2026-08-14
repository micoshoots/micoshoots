document.getElementById('year').textContent = new Date().getFullYear();

const projectData = {
  'micoshoots': {
    number: '01', year: '2025', location: 'YOUR LOCATION',
    title: 'Mico<br><em>shoots.</em>',
    description: 'Use each project page for one small body of work. Keep the writing brief: one or two lines about a place, a season, or what drew you there.'
  },
  'salt-and-stone': {
    number: '02', year: '2024', location: 'YOUR LOCATION',
    title: 'Salt &amp;<br><em>stone.</em>',
    description: 'A coast at the edge of winter. Replace this with a short note that grounds the work without explaining every image.'
  },
  'between-rains': {
    number: '03', year: '2024', location: 'YOUR LOCATION',
    title: 'Between<br><em>rains.</em>',
    description: 'A few unhurried days inland, moving between rain and clear skies. Let the photographs do most of the talking.'
  },
  'night-swimmers': {
    number: '04', year: '2023', location: 'YOUR LOCATION',
    title: 'Night<br><em>swimmers.</em>',
    description: 'Blue hour, somewhere warm. A small study of water, light, and the feeling of a day continuing after dark.'
  }
};

function renderProject() {
  if (!document.body.classList.contains('project-page')) return;

  const project = projectData[window.location.hash.slice(1)] || projectData.micoshoots;
  document.title = `${project.title.replace(/<[^>]*>/g, '').replace('&amp;', '&')} — micoshoots`;
  document.getElementById('project-meta').textContent = `${project.number} · ${project.year} · ${project.location}`;
  document.getElementById('project-title').innerHTML = project.title;
  document.getElementById('project-intro').textContent = project.description;
}

renderProject();
window.addEventListener('hashchange', renderProject);
