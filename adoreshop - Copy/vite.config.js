const path = require('path');

module.exports = {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist')
  },
  server: {
    port: 3000
  }
};



// import { defineConfig } from 'vite';

// export default defineConfig({
//   root: './src',
//   server: {
//     port: 3000,
//   },
// });



// export default {
//   // ...
//   root: './src',
//   // ...
// }



// export default {
//   root: './'
// }



// export default {
//     // ...
//     root: './src/src_modules/vite',
//     // ...
//   }