window.onload = function(){
  const cursorDiv = document.getElementById('cursor');
  let mouseX, mouseY, mouseFromTop, windowHeight, scrollFromTop;

  window.addEventListener('mousemove', function(event) {
    mouseX = event.clientX - 200;
    mouseY = event.clientY - 50;                   
    if ( typeof mouseX !== 'undefined' ) {
      cursorDiv.style.left = mouseX  + 'px';
      cursorDiv.style.top = mouseY + 'px';
    }

    mouseFromTop = event.pageY;
    windowHeight = window.innerHeight;

    switch (Math.floor(mouseFromTop / windowHeight)) {
      case 0:
        cursorDiv.setAttribute('class', 'cursor-first');
        cursorDiv.style.cursor = 'none';
      break;
      case 1:
        cursorDiv.setAttribute('class', 'cursor-second');
        cursorDiv.style.cursor = 'none';
      break;
      case 2:
        cursorDiv.removeAttribute('class');
        cursorDiv.style.cursor = 'auto';
      break;
      case 3:
        cursorDiv.setAttribute('class', 'cursor-fourth');
        cursorDiv.style.cursor = 'none';
      break;
      case 4:
        cursorDiv.setAttribute('class', 'cursor-fifth');
        cursorDiv.style.cursor = 'none';
      break;
      case 5:
        cursorDiv.setAttribute('class', 'cursor-sixth');
        cursorDiv.style.cursor = 'none';        
      break;
      case 6:
        cursorDiv.removeAttribute('class');
        cursorDiv.style.cursor = 'auto';
      break;
      case 7:
        cursorDiv.setAttribute('class', 'cursor-eighth');
        cursorDiv.style.cursor = 'none';
      break;
      case 8:
        cursorDiv.setAttribute('class', 'cursor-ninth');
        cursorDiv.style.cursor = 'none';
      break;
      case 9:
      cursorDiv.setAttribute('class', 'cursor-tenth');
      cursorDiv.style.cursor = 'none';
      break;
      default:
        cursorDiv.style.cursor = 'auto';
    }
  }, false);
  
  window.addEventListener('scroll', function() {
    scrollFromTop = window.scrollY;
    windowHeight = window.innerHeight;

    switch (Math.floor((scrollFromTop + mouseY) / windowHeight)) {
      case 0:
        cursorDiv.setAttribute('class', 'cursor-first');
        cursorDiv.style.cursor = 'none';
      break;
      case 1:
        cursorDiv.setAttribute('class', 'cursor-second');
        cursorDiv.style.cursor = 'none';
      break;
      case 2:
        cursorDiv.removeAttribute('class');
        cursorDiv.style.cursor = 'auto';
      break;
      case 3:
        cursorDiv.setAttribute('class', 'cursor-fourth');
        cursorDiv.style.cursor = 'none';
      break;
      case 4:
        cursorDiv.setAttribute('class', 'cursor-fifth');
        cursorDiv.style.cursor = 'none';
      break;
      case 5:
        cursorDiv.setAttribute('class', 'cursor-sixth');
        cursorDiv.style.cursor = 'none';
      break;
      case 6:
        cursorDiv.removeAttribute('class');
        cursorDiv.style.cursor = 'auto';
      break;
      case 7:
        cursorDiv.setAttribute('class', 'cursor-eighth');
        cursorDiv.style.cursor = 'none';
      break;
      case 8:
        cursorDiv.setAttribute('class', 'cursor-ninth');
        cursorDiv.style.cursor = 'none';
      break;
      case 9:
        cursorDiv.setAttribute('class', 'cursor-tenth');
        cursorDiv.style.cursor = 'none';
        break;
      default:
        cursorDiv.style.cursor = 'auto';
    }
  }, false);
}



const topBtn = document.getElementById('top');

topBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  const element = document.body;
  element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

