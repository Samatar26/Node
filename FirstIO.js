var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]).toString();
console.log(contents.match(/\n/g).length);

//Original solution
// var lines = contents.toString().split('/n').length - 1
//console.log(lines);
