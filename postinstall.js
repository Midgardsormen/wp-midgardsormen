 /* eslint-disable no-undef */
 /* eslint-disable no-console */
 const path = require('path');
 const copyMacroFiles = require('./scripts/macros-copy');
 
 console.log('// templates postInstall //');
 copyMacroFiles('nodes_modules/wp-midgardsormen/templates/macros/', 'templates/macros/common/');
 if (process.cwd().includes('node_modules')) {
   const pathOrigin = path.join(process.cwd(), 'macros');
   const moduleDirectoryPath = path.resolve(__dirname).split('/node_modules')[0];
   const pathDest = path.join(moduleDirectoryPath, 'templates/macros/common');
 
   console.log('pathOrigin:', pathOrigin);
   console.log('moduleDirectoryPath:', moduleDirectoryPath);
   console.log('pathDest:', pathDest);

   
 } else {
   console.log(' - templates postInstall: stop');
   console.log('   > The script is not running from a node_modules folder');
 }