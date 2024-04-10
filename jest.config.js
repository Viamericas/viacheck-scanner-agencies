module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__test__/mocks/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/__test__/mocks/assetsTransformer.js"
  },
  testEnvironment: "jsdom"
};
