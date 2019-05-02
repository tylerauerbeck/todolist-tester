module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  testPathIgnorePatterns: [
    "<rootDir>/package-contents/",
    "<rootDir>/node_modules/",
    "<rootDir>/server/"
  ],
  transformIgnorePatterns: ["/node_modules/.*"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue,json,jsx}",
    "!src/**/*.test.{js,jsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/node_modules/"
  ],
  testResultsProcessor: "./node_modules/jest-junit-reporter",
  coverageDirectory: "./reports/coverage",
  coverageReporters: ["text", "html", "clover"]
};
