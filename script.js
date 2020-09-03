var typed = new Typed('.typed_text', {
  // Waits 1000ms after typing "First"
  strings: [
    ' Hi ^1000 and Welcome...',
    '...^1000 to the Matrix...',
    '🔥',
    'One day a young king decided to do better for himself',
  ],
  //backspaces the part of the sentence that isn't the same as the previous.
  smartBackspace: true, // Default value
  //measured in milliseconds
  typeSpeed: 100,
});
