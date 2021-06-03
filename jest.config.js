module.exports = {
    moduleNameMapper: {
        '@core/(.*)': '<rootDir>/src/app/core/$1',
        '@features/(.*)': '<rootDir>/src/app/features/$1',
        '@shared/(.*)': '<rootDir>/src/app/shared/$1',
        '@environment/(.*)': '<rootDir>/src/app/environment/$1',
    },
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
