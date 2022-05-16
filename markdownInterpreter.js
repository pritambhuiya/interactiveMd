const fs = require('fs');

const readFile = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));

const writeFile = (path, contents) => fs.writeFileSync(path, contents, 'utf8');

const markdownInterpreter = (identifier, sentence) => {
  const syntaxes = readFile('./mdSymbols.json');
  const mdContents = syntaxes[identifier] + ' ' + sentence;
  writeFile('./markdown.md', mdContents);
};

markdownInterpreter('h1', 'h1 tag');
