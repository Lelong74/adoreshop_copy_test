import { Environment } from './environment.js';
// import { CreateParticles } from './createParticles';

let environment = null;

function init() {
  // Initialize the environment and render it
  environment = new Environment();
  environment.render();
}

function onMouseMove(event) {
  // Move the particle system in response to mouse movement
  if (environment && environment.createParticles) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    environment.createParticles.particleSystem.position.x = x * 5;
    environment.createParticles.particleSystem.position.y = y * 5;
  }
}

// Add an event listener to respond to mouse movement
document.addEventListener('mousemove', onMouseMove);

// Update the container variable to use the 'magic' ID from HTML
const container = document.getElementById('magic');

if (container) {
  // Call the init() function to start the animation
  init();

  // Append the particle system to the container element
  container.appendChild(environment.createParticles.renderer.domElement);

  // Add console.log to confirm that the particle system was appended to the container element
  console.log('Particle system appended to container element:', container);
} else {
  // Add console.log to indicate that the container element was not found
  console.log('Container element not found!');
}





// import { Environment } from './modules/environment.js';
// import { CreateParticles } from './modules/createParticles.js';

// let environment = null;

// function init() {
//   // Initialize the environment and render it
//   environment = new Environment();
//   environment.render();
// }

// function onMouseMove(event) {
//   // Move the particle system in response to mouse movement
//   if (environment && environment.createParticles) {
//     const x = (event.clientX / window.innerWidth) * 2 - 1;
//     const y = -(event.clientY / window.innerHeight) * 2 + 1;
//     environment.createParticles.particleSystem.position.x = x * 5;
//     environment.createParticles.particleSystem.position.y = y * 5;
//   }
// }
// // Add an event listener to respond to mouse movement
// document.addEventListener('mousemove', onMouseMove);

// // Update the container variable to use the 'magic' ID (html)
// const container = document.getElementById('magic');

// // Append the particle system to the container element
// if (container) {
//   container.appendChild(environment.createParticles.renderer.domElement);
// }

// // Call the init() function to start the animation
// init();

