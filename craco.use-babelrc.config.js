const { getLoaders, loaderByName } = require('@craco/craco');
const { createTransformer } = require('babel-jest');

// The path to the babel transform for Jest.
const BABEL_TRANSFORM_PATH = createTransformer({ babelrc: true });

// A list of all of the known transform keys from different CRA versions.
const BABEL_TRANSFORM_KEYS = ['^.+\\.(js|jsx)$', '^.+\\.(js|jsx|ts|tsx)$'];

module.exports = {
    overrideWebpackConfig: ({ webpackConfig }) => {
        if (process.env.NODE_ENV === 'production') {
            return webpackConfig;
        }

        // Search for all instances of babel-loader.
        const { hasFoundAny, matches } = getLoaders(webpackConfig, loaderByName('babel-loader'));

        // If we can't find the loader then throw an error.
        if (!hasFoundAny) {
            throw new Error('could not find babel-loader');
        }

        // Loop through each match, enabling babelrc and clearing any presets.
        matches.forEach(({ loader }) => {
            if (loader.test.test('.ts') || loader.test.test('.tsx')) {
                loader.options.babelrc = true;
            }
        });

        return webpackConfig;
    },
    overrideJestConfig: ({ jestConfig }) => {
        // Replace any keys we know about with our custom transform.
        BABEL_TRANSFORM_KEYS.filter(key => jestConfig.transform[key]).forEach(key => (jestConfig.transform[key] = BABEL_TRANSFORM_PATH));

        return jestConfig;
    },
};
