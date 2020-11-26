const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook,
} = require('tapable');

const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// ES2015 tagged template literal
// log(chalk`
// CPU: {red ${100}%}
// RAM: {green ${0.2 * 100}%}
// DISK: {rgb(255,131,0) ${0.5 * 100}%}
// `);

// Use RGB colors in terminal emulators that support it.
// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

// class Car {
//   constructor() {
//     this.hooks = {
//       accelerate: new SyncHook(['newSpeed']),
//       brake: new SyncHook(),
//       calculateRoutes: new AsyncParallelHook([
//         'source',
//         'target',
//         'routesList',
//       ]),
//     };
//   }
// }

// const myCar = new Car();

// myCar.hooks.brake.tap('WarningLampPlugin', () => warningLamp.on());

// myCar.hooks.accelerate.tap('LoggerPlugin', (newSpeed) =>
//   console.log(`Accelerating to ${newSpeed}`)
// );

// const hook = new SyncHook();
// hook.tap('first', () => {
//   log(chalk.red('first'));
// });
// hook.tap(
//   {
//     name: 'second',
//     stage: 10,
//   },
//   () => {
//     log(chalk.green('second'));
//   }
// );
// hook.tap('third', () => {
//   log(chalk.blue('third'));
// });
// hook.call('call');

// const hook = new SyncHook();
// hook.tap('first', (name) => {
//   console.log('first', name);
// });

// hook.tap('second', (name) => {
//   console.log('second', name);
// });

// hook.tap({
//   name: 'third',
//   before: 'second',
// }, (name) => {
//   console.log('third', name);
// });
// hook.call('call');

// const hook = new SyncHook(['name']);
// hook.tap('first', (name, other) => {
//   console.log('first', name, other);
// });
// hook.call('call', 'test');

// const hook = new SyncHook();
// hook.intercept({
//   // 注册时执行
//   register(tap) {
//     console.log('register', tap);
//     return tap;
//   },
//   // 触发事件时执行
//   call(...args) {
//     console.log('call', args);
//   },
//   // 在 call 拦截器之后执行
//   loop(...args) {
//     console.log('loop', args);
//   },
//   // 事件回调调用前执行
//   tap(tap) {
//     console.log('tap', tap);
//   },
// });

// hook.call('call', 'test');

const hook = new SyncHook(['name']);

hook.intercept({
  // 在添加拦截器的配置对象中启用 context
  context: true,
  register(tap) {
    console.log('register', tap);
    return tap;
  },
  call(...args) {
    // args[0] 会变成 context 对象
    console.log('call', args);
  },
  loop(...args) {
    // args[0] 会变成 context 对象
    console.log('loop', args);
  },
  tap(context, tap) {
    // 第一个参数变成 context 对象
    context.fileChanged = true;
    console.log('tap', context, tap);
  },
});

hook.tap(
  {
    name: 'first',
    context: true,
  },
  // 第一个参数变成 context 对象
  (context, name) => {
    // context 中将会有 fileChanged 属性
    // context: { fileChanged: true }
    console.log('first', context, name);
  }
);

hook.call('call');
