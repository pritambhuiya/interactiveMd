const fs = require('fs');

const readFile = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));

const append = (path, contents) => fs.appendFileSync(path, contents, 'utf8');

const mdInterpreter = (path, identifier, sentence = '') => {
  const syntaxes = readFile(path);
  const startingTag = syntaxes[identifier][0];
  let closingTag = syntaxes[identifier][1];
  let space = '';

  if (closingTag === undefined) {
    space = ' ';
    closingTag = '';
  }
  const mdContents = startingTag + space + sentence + closingTag + '\n';
  append('./markdown.md', mdContents);
};

const sentence = process.argv.slice(3).join(' ');
mdInterpreter('./mdSymbols.json', process.argv[2], sentence);
