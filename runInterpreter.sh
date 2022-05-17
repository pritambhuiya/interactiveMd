#! /bin/bash

echo '' > markdown.md
while true;
do
  read -p "Enter the identifier:" identifier
  read -p "Enter the sentence:" sentence
  node markdownInterpreter.js ${identifier} ${sentence}
done
