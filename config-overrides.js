const { injectBabelPlugin } = require('react-app-rewired');

module.exports = config => injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
}], config);
