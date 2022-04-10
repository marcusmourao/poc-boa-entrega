const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

function isWebService(directory) {
  return directory.includes('web-service');
}
const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) => readdirSync(source)
  .map((name) => join(source, name)).filter(isDirectory);

const BASE_DIR = join(__dirname);

const modulesDirectories = getDirectories(BASE_DIR);

const modules = [];

modulesDirectories.filter(isWebService).forEach((directory) => {
  // eslint-disable-next-line
  const module = require(directory);
  modules.push(module);
});

module.exports = modules;
