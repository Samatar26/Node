var maxTime = 1000;

//If input is even, double it
//If input is odd, error
//(call takes random amount of time < 1s)


var evenDoubler = function(v, callback){
setTimeout(function(){
    maxTime = Math.floor(Math.random() * (maxTime  + 1));
    if(v%2===0){
   var results=v*2; 
   var err = undefined;
   console.time
  callback(err, results, maxTime);
  }
  else{
     var err = {message: "odd input"};
     callback(err);
  }
    
}, maxTime);    
};

var handleResults = function(err, results, time) {
    if (err){
        console.log("ERROR: " + err.message);
    }  
    else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

evenDoubler(2, handleResults);

console.log("------");