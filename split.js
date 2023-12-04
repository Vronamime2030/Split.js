const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI for various JavaScript string utilities')
  .version('0.8.0');

program
  .command('split')
  .description('Splits a string into substrings and displays the result as an array')
  .argument('<string>', 'String to split')
  .option('--first', 'Display only the first substring')
  .option('-s, --separator <char>', 'Separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
