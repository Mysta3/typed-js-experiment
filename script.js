var typed = new Typed('.typed_text', {
  // Waits 1000ms after typing "First"
  strings: [
    ' Hi ^1000 and Welcome...',
    '...^1000 to the Matrix...',
    '🔥',
    'Let me tell you a story..',
    'One day a young kid was obsessed with computers...',
    "his father didn't see his gift...",
    'BUT',
    "It was nutured through the boy's own curiosity!",
    'years later he graduates',
    'years later he moves to Cali',
    'years later he joins a bootcamp',
    'and goes from Desktop Tech to Web Developer....',
    'THE....',
    'THE END',
  ],
  //backspaces the part of the sentence that isn't the same as the previous.
  smartBackspace: true, // Default value
  //measured in milliseconds
  typeSpeed: 100,
  //delay animation
  startDelay: 2,
  //backspacing speed
  backSpeed: 2,
});
