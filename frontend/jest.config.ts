export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      { useESM: true, tsconfig: "<rootDir>/tsconfig.app.json" },
    ],
  },
  moduleNameMapper: {
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
    "^.+\\.(png|jpg|jpeg|gif|svg|webp|ico)$":
      "<rootDir>/src/__mocks__/fileMock.cjs",
  },
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
};
