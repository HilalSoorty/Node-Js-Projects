const chalkAnimation = require('chalk-animation');

// Create a glitch animation for the ATM heading with custom font size and color
const glitchHeadingAnimation = chalkAnimation.glitch('ATM MACHINE', {
  font: 'block',          // Use a block font style
  textColor: 'neon-green', // Change the text color to neon green
  // You can customize other glitch effect options here if needed.
});

// Start the glitch animation for the heading
glitchHeadingAnimation.start();

// You can specify a duration for the glitch effect (e.g., 3000 milliseconds)
const glitchDuration = 3000;

// After the specified duration, stop the glitch animation
setTimeout(() => {
  glitchHeadingAnimation.stop();
}, glitchDuration);

// You can add additional customization and animations as needed.

export{chalkAnimation}