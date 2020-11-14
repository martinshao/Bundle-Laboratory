const {validate} = require('schema-utils');

// schema for options object
const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string',
    },
  },
};

class HelloWorldPlugin {
  constructor(options = {}) {
    validate(schema, options, 'Hello World Plugin');
    this.options = options;
  }

  apply(compiler) {
    console.info(this.options);
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log('Hello World!', this.options);
    });
  }
}

module.exports = HelloWorldPlugin;
