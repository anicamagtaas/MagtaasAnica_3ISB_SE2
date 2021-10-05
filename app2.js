const fs = require("fs");
fs.data("./info2.txt", function(err){
  if (err) {
    return console.error(err);
  }else {
    console.log("created 'data' directory...");
  
  }
  });
