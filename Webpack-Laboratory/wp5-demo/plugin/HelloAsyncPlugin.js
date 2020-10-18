// class HelloAsyncPlugin {
//   apply(compiler) {
//     compiler.hooks.emit.tapAsync('HelloAsyncPlugin', (compilation, callback) => {
//       // Do something async...
//       setTimeout(function () {
//         console.log('Done with async work...');
//         callback();
//       }, 1000);
//     });
//   }
// }

class HelloAsyncPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapPromise('HelloAsyncPlugin', compilation => {
      // return a Promise that resolves when we are done...
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          console.log('Done with async work...');
          resolve();
        }, 1000);
      });
    });
  }
}

module.exports = HelloAsyncPlugin;