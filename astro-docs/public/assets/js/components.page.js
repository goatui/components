document.getElementById('component-search').addEventListener('goat:input', function (e) {
  console.log(e.target.value);
  document.querySelectorAll('.cards .card-wrapper').forEach(elm => {
    elm.classList.remove('hidden');
    if (elm.innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1) {
      elm.classList.add('hidden');
    }
  });
});
if (window.location.href.indexOf('?filter=') !== -1) {
  const filter = new URLSearchParams(window.location.search).get('filter');
  if (filter) document.querySelector('.filters').classList.remove('hidden');
  document.querySelectorAll('.card-wrapper').forEach(elm => {
    elm.classList.add('hidden-force');
    if (elm.querySelector(`goat-tag[tag="${filter}"]`)) {
      elm.classList.remove('hidden-force');
    }
  });
}

const cardHeaders = document.querySelectorAll('.card-header');

cardHeaders.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    if (event.ctrlKey || event.metaKey) {
      window.open(`/components/${event.target.getAttribute('data-tag').replace('goat-', '')}#`, '_blank');
      return;
    }
    window.location.href = `/components/${event.target.getAttribute('data-tag').replace('goat-', '')}#`;
  });
});
