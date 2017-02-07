var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, 'utf-8', (err, data) => {

  if(err){
    return console.log(err)
  }

  var lines = data.match(/\n/g).length;
  console.log(lines);

});
