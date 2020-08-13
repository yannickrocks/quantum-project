const CracoAlias = require('craco-alias');
const BabelRcPlugin = require('./craco.use-babelrc.config');

require('dotenv').config();

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: './src',
                // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
                tsConfigPath: './tsconfig.path.json',
            },
        },
        { plugin: BabelRcPlugin, options: {} },
    ],
};
