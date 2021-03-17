const $sections = document.querySelectorAll('.section') ;
const $cursor = document.getElementById('cursor');
const $contactBtn = document.getElementById('contact-btn');
const $footer = document.getElementById('footer');

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
      document.body.style.cursor = 'default';
      $cursor.style.backgroundImage = '';
    }
  });
}

function handleScroll() {
  requestAnimationFrame(() => {
    $cursor.style.opacity = 0;
    document.body.style.cursor = 'default';
    $cursor.style.backgroundImage = '';
  })
}

$contactBtn.addEventListener('mouseover', function() {
  $cursor.style.opacity = 0;
  $cursor.style.backgroundImage = '';
});

$footer.addEventListener('mouseover', function() {
  $cursor.style.opacity = 0;
  $cursor.style.backgroundImage = '';
});

//Slider

const $prevClosed = document.getElementById('prev-closed');
const $nextClosed = document.getElementById('next-closed');
const $prevMercedes = document.getElementById('prev-mercedes');
const $nextMercedes = document.getElementById('next-mercedes');
const $slideId = ['show-slide-closed', 'show-slide-mercedes'];

$prevClosed.addEventListener('click', function() {
  plusSlides(-1, 0);
});
$nextClosed.addEventListener('click', function() {
  plusSlides(1, 0);
});
$prevMercedes.addEventListener('click', function() {
  plusSlides(-1, 1);
});
$nextMercedes.addEventListener('click', function() {
  plusSlides(1, 1);
});

let slideIndex = [1, 1];
displaySlides(1, 0);
displaySlides(1, 1);

function plusSlides(n, no) {  
  displaySlides(slideIndex[no] += n, no);   
}
  
function displaySlides(n, no) {
  let $slides = document.getElementsByClassName($slideId[no])  
  if (n > $slides.length) { slideIndex[no] = 1 }  
  if (n < 1) { slideIndex[no] = $slides.length }  
  for (let i = 0; i < $slides.length; i++) {  
    $slides[i].style.display = 'none';  
  }  
  $slides[slideIndex[no] - 1].style.display = 'block';  
}

//iframe
window.addEventListener('click', (e) => {
  const audiVimeo = `<iframe class="video" src="https://player.vimeo.com/video/320454100" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  const porscheVimeo = `<iframe class="video" src="https://player.vimeo.com/video/316614964" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  const bridgestoneVimeo = `<iframe class="video" src="https://player.vimeo.com/video/316615802" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  const pilsnerVimeo = `<iframe class="video" src="https://player.vimeo.com/video/320455784" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;

  if(e.target.id.includes('audi')) {
    document.getElementById('modal-audi-iframe').innerHTML = audiVimeo;
  } else {
    document.getElementById('modal-audi-iframe').innerHTML = '';
  }

  if(e.target.id.includes('porsche')) {
    document.getElementById('modal-porsche-iframe').innerHTML = porscheVimeo;
  } else {
    document.getElementById('modal-porsche-iframe').innerHTML = '';
  }

  if(e.target.id.includes('bridgestone')) {
    document.getElementById('modal-bridgestone-iframe').innerHTML = bridgestoneVimeo;
  } else {
    document.getElementById('modal-bridgestone-iframe').innerHTML = '';
  }

  if(e.target.id.includes('pilsner')) {
    document.getElementById('modal-pilsner-iframe').innerHTML = pilsnerVimeo;
  } else {
    document.getElementById('modal-pilsner-iframe').innerHTML = '';
  }
})