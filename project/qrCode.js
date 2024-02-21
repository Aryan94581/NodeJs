import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL",
    },
    {
      message: "Type Qr-image name you want:",
      name: "Image_name",
    },
  ])
  .then((answers) => {
    const { URL, Image_name } = answers;
    const qrImage = qr.image(URL, { type: "png" });
    qrImage.pipe(fs.createWriteStream(`${Image_name}.png`));
    console.log("your Qr is ready sir");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
