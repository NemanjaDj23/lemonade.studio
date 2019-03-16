const $sections = document.querySelectorAll('.section');
const $cursor = document.getElementById('cursor');


window.addEventListener('mousemove', function(event) {
  if (event.clientX && event.clientY) {
      $cursor.style.left = event.clientX + 'px';
      $cursor.style.top = event.clientY + 'px';
  }
});

for (let $section of $sections) {
  $section.addEventListener('mouseenter', () => {
    const $cursorImage = $section.querySelector('.section__cursor');

    if ($cursorImage) {
      document.body.style.cursor = 'none';
      $cursor.style.backgroundImage = `url(${$cursorImage.getAttribute('src')})`;
      $cursor.style.opacity = 1;
    } else {
      document.body.style.cursor = 'auto';
      $cursor.style.backgroundImage = '';
    }
  });
}

function handleScroll() {
  requestAnimationFrame(() => {
    $cursor.style.opacity = 0;
    document.body.style.cursor = 'auto';
    $cursor.style.backgroundImage = '';
  })
}
window.addEventListener('scroll', handleScroll);

const topBtn = document.getElementById('top');

topBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  const element = document.body;
  element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

