// Setting up the options
var options = {
    startLength: -300, // start positioning the slider items at the beginning of the SVG path
    duration: 10, // animation duration (used by anime.js)
    stagger: 0, // incrementally delays among items, producing an staggering effect
    easing: 'easeOutElastic', // easing function (used by anime.js)
    elasticity: 100, // elasticity factor (used by anime.js)
    rotate: true, // This indicates that items should be rotated properly to match the SVG path curve
    elemWidth: 691,
    elemId: "wrapper-top",
    paddingSeparation: 500
};

// Initialize the slider using our SVG path, items, and options
new PathSlider('#text-path-top', '#path-item-top', options);

options.elemId = "wrapper-bottom";
options.elemWidth = 624;
options.startLength = -140;
// Initialize the slider using our SVG path, items, and options
new PathSlider('#text-path-bottom', '#path-item-bottom', options);