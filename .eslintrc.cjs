module.exports = {
  root: true,
  env: { 
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'karma.conf.js',
    // '*.ico',
    // '**/polyfills.ts',
    // '*.spec.ts',
    // '**/.browserslistrc',
    // '**/commands.ts',
    // '**/app.po.ts',
    // '**/middleware.js',
    // '**/*.mock.ts',
    // '**/webpack.config.js',
    // '**/*.txt',
    // '**/*.png',
    // '**/*.svg',
    // 'node_modules',
    // 'dist',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['src/**/*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          tsx: true,
        },
      },
      extends: ['plugin:import/typescript', 'prettier'],
    },
  ],
  plugins: ['react-refresh'],
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
  'array-callback-return': 0, // OK keep
  'no-await-in-loop': 0,
  'no-class-assign': 2,
  'no-constant-binary-expression': 2,
  'no-constructor-return': 2,
  'no-duplicate-imports': 2,
  'no-new-native-nonconstructor': 2,
  'no-promise-executor-return': 2,
  'no-undef': [0, { typeof: true }], // OK, keep
  'no-self-compare': 2,
  'no-template-curly-in-string': 2,
  'no-unmodified-loop-condition': 1,
  'no-unreachable-loop': 2,
  'no-unused-private-class-members': 2,
  'no-use-before-define': 2,
  'require-atomic-updates': 0,

  // Suggestions
  'arrow-body-style': 2, // OK keep
  'block-scoped-var': 2, // OK keep
  'consistent-return': 0, // not needed due to typecheck
  curly: [2, 'multi-line'],
  'default-case': 2, // not needed
  'dot-notation': 2,
  eqeqeq: [2, 'smart'], // OK keep, but syntax is breaking use ["error", "always"] in newer version (can also use smart but always is stricter)
  'id-length': [2, { min: 1 }], // Feel like this is not needed
  'new-cap': [2, { newIsCap: true, capIsNew: false }], // OK, remove exceptions
  'no-bitwise': 2,
  'no-caller': 2,
  'no-console': 2, // OK keep
  'no-continue': 2, // OK keep
  'no-else-return': [2, { allowElseIf: false }], // OK, keep changed default true to false
  'no-empty-function': 0,
  'no-eq-null': 2, // OK keep
  'no-eval': 2, // OK keep
  'no-implied-eval': 2, // OK keep
  'no-lone-blocks': 2, // OK keep
  'no-loop-func': 2, // OK, can keep
  'no-new-object': 2, // OK can keep
  'no-new-wrappers': 2, // OK
  'no-nested-ternary': 0, // Can be removed? allowed to have one nested?
  'no-restricted-syntax': [
    2,
    'ForInStatement', // to discuss https://stackoverflow.com/questions/500504/why-is-using-for-in-for-array-iteration-a-bad-idea // https://eslint.org/docs/latest/rules/guard-for-in
    'LabeledStatement',
    'WithStatement',
  ],
  'no-return-assign': [0, 'always'], // OK, keep
  'no-sequences': 2, // OK, keep
  'no-shadow': 0,
  'no-throw-literal': 0, // error later, cant throw literal only Error
  'no-undef-init': 2, // ok
  'no-unused-expressions': 2, // OK, keep
  'no-useless-return': 2, // OK, keep
  'no-var': 2, // OK, keep
  'one-var': [2, 'never'], // discuss, prefer consecutive
  'prefer-arrow-callback': 2, // OK, keep
  'prefer-const': 2, // OK, keep
  'prefer-template': 2, // OK, keep
  'quote-props': [
    2,
    'as-needed',
    {
      keywords: false,
      unnecessary: true,
      numbers: false,
    },
  ], // OK, keep
  radix: 2, // OK. keep
  'spaced-comment': 2, // keep
  yoda: 2, // ok

  // TypeScript
  '@typescript-eslint/array-type': [2, { default: 'array' }],
  '@typescript-eslint/consistent-type-assertions': 2,
  '@typescript-eslint/consistent-type-definitions': 0,
  'dot-notation': 0,
  '@typescript-eslint/dot-notation': 0, // Would like to set it to error (in STRICT)
  '@typescript-eslint/explicit-member-accessibility': [
    2,
    {
      accessibility: 'explicit',
      overrides: {
        parameterProperties: 'explicit',
      },
    },
  ], // ok might also want to have properties explicit
  '@typescript-eslint/explicit-module-boundary-types': [
    0,
    {
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowArgumentsExplicitlyTypedAsAny: false,
    },
  ],
  '@typescript-eslint/member-ordering': 2, // might have to double check that, there was a custom order before
  '@typescript-eslint/naming-convention': [
    2,
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'forbid',
    },
  ],
  'no-empty-function': 0,
  '@typescript-eslint/no-empty-function': [0, { allow: ['overrideMethods'] }],
  '@typescript-eslint/no-explicit-any': 1, // Recommended, should be 2, to be changed after moving to strict: true
  '@typescript-eslint/no-inferrable-types': 0, // Recommended, should be 2
  'no-shadow': 0, // should turn of the standard rule
  '@typescript-eslint/no-shadow': 0,
  '@typescript-eslint/no-non-null-assertion': 0, // Should be switch to error later on to make it stricter (recommended rule)
  'no-unused-expressions': 0, // OK, keep
  '@typescript-eslint/no-unused-expressions': 0,
  'no-use-before-define': 0, // OK, keep
  '@typescript-eslint/no-use-before-define': 0,
  '@typescript-eslint/typedef': [
    2,
    {
      parameter: true,
      propertyDeclaration: true,
      objectDestructuring: false,
      arrayDestructuring: false,
    },
  ], // Double check this one later, it is recommended to disable it if --noImplicitAny and --strictPropertyInitialization instead
  '@typescript-eslint/unified-signatures': 2,
  },
}
