const topBtn = document.getElementById('top');

topBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  const element = document.body;
  element.scrollIntoView({behavior: "smooth", block: "start"});
}

