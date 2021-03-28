const fs = require ("fs");
const { resolve } = require("path");

function myOwnPromise(filePath){
    return new Promise (function(resolve , reject){
        fs.readFile(filePath, function(error , data){
            if (error){
                reject();
            }
            else {
                resolve(data);
            }
        })
  })
}

let pendingPromise = myOwnPromise('./f1.txt');
 
pendingPromise.then(function(data){
    console.log(data + "");
})

pendingPromise.catch(function(error){
    console.log(error);
})





