const fs = require("fs");

fs.writeFile("message.txt", "hey this is aryan", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("The file has been saved");
  }
});