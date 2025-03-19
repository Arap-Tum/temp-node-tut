// npm - global comand, comes with node 
// npm --version

// local dependancy - use it only in pativular project 
// npm i <packageName>

// global dependancy -  useit in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file that (stores important info about project/package )
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems)