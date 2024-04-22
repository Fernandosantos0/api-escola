module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
        env: {
            node: true,
        },
        files: [
            '.eslintrc.{js,cjs}',
        ],
        parserOptions: {
            sourceType: 'script',
        },
        },
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'indent': 'on'
    },
};
