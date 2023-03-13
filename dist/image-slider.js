function setupSlider(containerSelector='.reel', slidesSelector='.slide')  {
 const container = document.querySelector(containerSelector);
 const slides = container.querySelectorAll(slidesSelector);

  //Create and append previous image button
  const prevBtn = document.createElement('img');
  prevBtn.setAttribute('src', 'images/arrow-left.svg');
  prevBtn.setAttribute('alt', 'back arrow');
  prevBtn.classList.add('prev-btn');
  container.appendChild(prevBtn);

  //Create and append next image button
  const nextBtn = document.createElement('img');
  nextBtn.setAttribute('src', 'images/arrow-right.svg');
  nextBtn.setAttribute('alt', 'foorward arrow');
  nextBtn.classList.add('next-btn');
  container.appendChild(nextBtn);

  // apply data indexes to each slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].setAttribute('data-index', i);
    
    // apply data-active to first index
    if (i === 0) {
      slides[i].setAttribute('data-active', "");
    }
  }

  // create horizontal dot row
  // const dotContainer = document.createElement()

  nextBtn.addEventListener('click', () => {
    moveSliderForward(container, slides);
  } );

  prevBtn.addEventListener('click', () => {
    moveSliderBackward(container, slides);
  } );
}


function moveSliderForward(container, slides) {
  // initialise currentIndex = index of data-active
  const currentSlide = container.querySelector('.slide[data-active]');
  const currentIndex = currentSlide.dataset.index;
  
  // remove data-active from current slide
  currentSlide.removeAttribute('data-active');

  // check if currentIndex is equal to last index in nodelist
  switch (currentIndex) {
    // if so move data-active back to index 0.
    case String(slides.length -1):
      slides[0].setAttribute('data-active', '');
      break;
    // else move data-active to current index +1.
    default:
      const nextIndex = Number(currentIndex) + 1;
      slides[nextIndex].setAttribute('data-active', '');
      break;
  }
}

function moveSliderBackward(container, slides) {
  // initialise currentIndex = index of data-active
  const currentSlide = container.querySelector('.slide[data-active]');
  const currentIndex = currentSlide.dataset.index;
  
  // remove data-active from current slide
  currentSlide.removeAttribute('data-active');

  // check if currentIndex is equal to first index in nodelist
  switch (currentIndex) {
    // if so move data-active to last index.
    case '0':
      slides[slides.length - 1].setAttribute('data-active', '');
      break;
    // else move data-active to current index - 1.
    default:
      const prevIndex = Number(currentIndex) - 1;
      slides[prevIndex].setAttribute('data-active', '');
      break;
  }
}


export {setupSlider};