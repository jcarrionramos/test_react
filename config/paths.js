var path = require('path');
var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath){
  return path.resolve(appDirectory, relativePath)
}

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(resolveApp);

module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('app/public'),
  appHtml: resolveApp('app/public/index.html'),
  appIndexJs: resolveApp('app/src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('app/src'),
  testsSetup: resolveApp('app/test/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  nodePaths: nodePaths
};
