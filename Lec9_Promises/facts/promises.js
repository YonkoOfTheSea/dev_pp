const fs = require("fs");

let pendingPromise = fs.promises.readFile("./f1.txt");

pendingPromise.then(function(data){
    console.log("Inside then callback scb");
    console.log(data);
    console.log(pendingPromise);
});

pendingPromise.catch(function(error){
    console.log("Inside catch ka callback fcb");
    console.log(error);
    console.log(pendingPromise);
});