var maxTime = 1000;

//If input is even, double it
//If input is odd, error
//(call takes random amount of time < 1s)


var evenDoubler = function(v, callback){
    var time =  Math.floor(Math.random() * (maxTime  + 1));

    
    if(v%2===0){
   setTimeout(function() { 
   
  callback(new Error("Odd input"));
  }, time);
    }
  else{
      setTimeout(function(){
     
     callback(null, v*2, time);
  }, time);
  }

};
/*
var handleResults = function(err, results, time) {
    if (err){
        console.log("ERROR: " + err.message);
    }  
    else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};
*/
var count = 0;

for (var i = 0; i<10; i++){
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results, time) {
             if (err){
        console.log("ERROR: " + err.message);
    }  
    else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
    if (++count === 10){
        console.log("Done");
    }
    });
    
}
console.log("------");