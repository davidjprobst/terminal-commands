const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile(file, content, (err) => {
    if (err) throw err;
    console.log('New file has been saved!');
  } )
};

module.exports.mkdir = () => {
  fs.mkdir('./', dir, (err) =>  {
    if (err) throw err;
    console.log('New directory has been saved!');
  } )
};
