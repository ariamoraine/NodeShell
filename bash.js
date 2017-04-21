var commands = require('./commands');

process.stdout.write('What can I do for you? ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();

  // process.stdout.write(`\nWhat? > ` );
  //console.log(process.env.PWD)
  //process.stdout.write(process.env.PWD);
  if (cmd === 'pwd') {
    commands[cmd]();
  } else if (cmd === 'date') {
    commands.date();
  } else if (cmd === 'ls') {
    commands.ls();
  } else {
    process.stdout.write(`You typed "${cmd}" I don't know what that is.`);
    process.stdout.write('\nWhat can I do for you? ');
  }

  // process.stdout.write('\nWhat can I do for you? ');

});

