# image-slider

Module to create a slider with forward/backward buttons, a horizontal bar of dots tied to each slide, customizable interval and smooth transitions.

## Installation

npm i @kgarvey92/image-slider

For default behaviour add '.reel' to slide container and '.slide'to child slide elements in html.

## Usage

1. Make sure to link provided CSS file image-slider.css in HTML head.
* Customize sizing and positioning placement properties as needed. 
* By default displays slides 750px/500px.

2. import:
```
import setupSlider from 'image-slider';
```

3. Function arguments:

```
function setupSlider(containerSelector='.reel', slidesSelector='.slide', interval=5000)
```
* Change selectors as needed (useful for multiple sliders).
* Interval expects numerical values in ms or 0 if no automatic sliding desired.


