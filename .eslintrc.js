module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        "max-len": [
            "warn",
            100,
            4,
            {
                "ignoreComments": true
            }
        ],
        "no-unused-vars": [
            "warn",
            {
                "vars": "local",
                "args": "none"
            }
        ],
        "indent": [
            "warn",
            2
        ],
        "quotes": 0,
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "arrow-parens": [
            "warn",
            "always"
        ],
        "prefer-const": "warn",
        "prefer-template": 0,
        "brace-style": [
            "warn",
            "stroustrup"
        ],
        "no-console": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent": "off",
        // ["error", {
        //     "allowTypedFunctionExpressions": true
        // }],
    }
};