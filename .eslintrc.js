module.exports = {
  root: true,
  extends: '@react-native',
  rules: {'react-native/no-inline-styles': 'off'},
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
