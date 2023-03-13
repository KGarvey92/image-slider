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

  nextBtn.addEventListener('click', () => {
    moveSliderForward(container, slides);
  } );

  prevBtn.addEventListener('click', () => {
    moveSliderBackward(container, slides);
  } );
}


function moveSliderForward(container, slides) {
  // initialise currentIndex = index of data-active

  // check if currentIndex is equal to last index in nodelist
    // if so move data-active back to index 0x.

    // else move data-active to current index +1 and update currentIndex.
}

function moveSliderBackward(button='.prev-btn') {
  // initialise currentIndex = index of data-active

  // check if currentIndex = 0
    // if so move data-active to index[slides.length -1].

    // else move data-active to currentIndex -1.
}

export {setupSlider};