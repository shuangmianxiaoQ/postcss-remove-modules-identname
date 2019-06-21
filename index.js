const postcss = require('postcss');

module.exports = postcss.plugin(
  'postcss-remove-modules-identname',
  (options = {}) => {
    // Work with options here
    return css => {
      // Transform each rule here
      css.walkRules(rule => {
        // Transform each class name here
        const { selector } = rule;
        const matches = selector.match(/^.ant-\w*/g);

        if (matches !== null) {
          rule.selector = selector.split('__')[0];
        }
      });
    };
  }
);
