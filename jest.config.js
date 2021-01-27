const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { name } = require('./package.json');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  clearMocks: true,
  displayName: name,
  name,
  verbose: true,
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
};
