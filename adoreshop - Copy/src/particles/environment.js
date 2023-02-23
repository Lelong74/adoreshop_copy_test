import {CreateParticles} from './createParticles.js';

export class Environment {
  constructor(font, particle) {
    console.log('Environment constructor called.');
    this.font = font;
    this.particle = particle;
    this.container = document.querySelector('#magic');
    this.scene = new THREE.Scene();
    this.createCamera();
    this.createRenderer();
    this.setup();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  setup() {
    console.log('Environment setup called.');
    this.createParticles = new CreateParticles(
      this.scene,
      this.font,
      this.particle,
      this.camera,
      this.renderer
    );
  }

  render() {
    console.log('Environment render called.');
    this.createParticles.render();
    this.renderer.render(this.scene, this.camera);
  }

  createCamera() {
    console.log('Environment createCamera called.');
    this.camera = new THREE.PerspectiveCamera(
      65,
      this.container.clientWidth / this.container.clientHeight,
      1,
      10000
    );
    this.camera.position.set(0, 0, 100);
  }

  createRenderer() {
    console.log('Environment createRenderer called.');
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);

    this.renderer.setAnimationLoop(() => {
      this.render();
    });
  }

  onWindowResize() {
    console.log('Environment onWindowResize called.');
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }
}





// import {CreateParticles} from '../modules/createParticles.js';

// export class Environment {
//   constructor(font, particle) {
//     this.font = font;
//     this.particle = particle;
//     this.container = document.querySelector('#magic');
//     this.scene = new THREE.Scene();
//     this.createCamera();
//     this.createRenderer();
//     this.setup();
//     this.bindEvents();
//   }

//   bindEvents() {
//     window.addEventListener('resize', this.onWindowResize.bind(this));
//   }

//   setup() {
//     this.createParticles = new CreateParticles(
//       this.scene,
//       this.font,
//       this.particle,
//       this.camera,
//       this.renderer
//     );
//   }

//   render() {
//     this.createParticles.render();
//     this.renderer.render(this.scene, this.camera);
//   }

//   createCamera() {
//     this.camera = new THREE.PerspectiveCamera(
//       65,
//       this.container.clientWidth / this.container.clientHeight,
//       1,
//       10000
//     );
//     this.camera.position.set(0, 0, 100);
//   }

//   createRenderer() {
//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setSize(
//       this.container.clientWidth,
//       this.container.clientHeight
//     );

//     this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     this.renderer.outputEncoding = THREE.sRGBEncoding;
//     this.container.appendChild(this.renderer.domElement);

//     this.renderer.setAnimationLoop(() => {
//       this.render();
//     });
//   }

//   onWindowResize() {
//     this.camera.aspect =
//       this.container.clientWidth / this.container.clientHeight;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(
//       this.container.clientWidth,
//       this.container.clientHeight
//     );
//   }
// }

