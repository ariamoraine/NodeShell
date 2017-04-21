var commands = require('./commands');

process.stdout.write('What can I do for you? ');

process.stdin.on('data', function (data) {
  const tolkens = data.toString().trim().split(' ');
  var cmd = tolkens[0];
  const args = tolkens.slice(1).join(' ')

  if (commands[cmd]) {
    commands[cmd](args);
  } else {
    process.stdout.write(`You typed "${cmd}" I don't know what that is.`);
    process.stdout.write('\nWhat can I do for you? ');
  }

});

