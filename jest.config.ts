import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  moduleDirectories: ['node_modules', './src/test'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context|@react-navigation|react-native-vector-icons)/)',
  ],
};

export default config;
