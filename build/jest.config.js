module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testRegex: '/tests/.*\\.(test|spec)\\.(ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      functions: 2,
      lines: 1,
      statements: 1
    }
  },
  moduleNameMapper: {
    'svg': '<rootDir>/tests/src/mock-svg.js',
  },
  collectCoverageFrom: ['src/*.{ts}', 'src/**/*.{js,ts}']
}
