// @NOTE: https://github.com/styled-components/stylelint-processor-styled-components/issues/187#issuecomment-396687345
module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    indentation: 2,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
  },
  customSyntax: '@stylelint/postcss-css-in-js',
};
