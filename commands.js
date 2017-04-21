const fs = require('fs');

module.exports = {
  pwd: () => {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nWhat can I do for you? ');
  },

  date: () => {
    process.stdout.write(`${Date()}`);
    process.stdout.write('\nWhat can I do for you? ');
  },

  ls: () => {
    fs.readdir('.', (err, files) => {
      if (err) throw err;
      files.forEach((file, index) => {
        const newLine = index === files.length-1 ? '' : '\n'
        process.stdout.write(`${file.toString()} ${newLine}`)
      });
        process.stdout.write('\nWhat can I do for you? ');
    });
  }
};
