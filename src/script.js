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
  document.body.style.cursor = 'default';
  $cursor.style.backgroundImage = '';
});


// Modal Closed 

const $modalClosed = document.getElementById('modal-closed');
const $sectionClosed = document.getElementById('section-second');

$sectionClosed.addEventListener('click', function(e) {
  $modalClosed.style.display = 'block';
  document.body.style.overflow = 'hidden';
  if (e.target.classList.contains('close')) {
    $modalClosed.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});


//Slider

const $prev = document.getElementById('prev');
const $next = document.getElementById('next');
const $slides = document.getElementsByClassName('show-slide');

$prev.addEventListener('click', prevSlide);
$next.addEventListener('click', nextSlide);

let slideIndex = 1;
displaySlides(slideIndex);

function prevSlide() {  
  displaySlides(slideIndex += -1);   
}

function nextSlide() {  
  displaySlides(slideIndex += 1);    
}  
  
function displaySlides(n) {  
  if (n > $slides.length) { slideIndex = 1 }  
  if (n < 1) { slideIndex = $slides.length }  
  for (let i = 0; i < $slides.length; i++) {  
    $slides[i].style.display = 'none';  
  }  
  $slides[slideIndex - 1].style.display = 'block';  
}