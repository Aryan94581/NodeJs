const fs = require("fs");

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;

  const newdata = data.replace("het my name is aryan", "hey my name is aryan");

  fs.writeFile("message.txt", newdata, (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
});
