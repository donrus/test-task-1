module.exports = {
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        'arrow-parens': [`error`, `always`],
        // parens are optional but recommended.
        // ESLint doesn't support a *consistent*
        // setting so "always" is used.
        'constructor-super': `error`, // eslint:recommended
        'generator-star-spacing': [`error`, `after`],
        'no-new-symbol': `error`, // eslint:recommended
        'no-this-before-super': `error`, // eslint:recommended
        'no-var': `error`,
        'prefer-rest-params': `error`,
        'prefer-spread': `error`,
        'rest-spread-spacing': `error`,
        'yield-star-spacing': [`error`, `after`]
    },
    globals: [
        'jQuery',
        '$'
    ]
};