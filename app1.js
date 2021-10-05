FileSystem.readdir("./info.txt", (err, files) => {
  if(!err){
    console.log(files);
  }else {
    console.log("directory does not exist");
  }
  });