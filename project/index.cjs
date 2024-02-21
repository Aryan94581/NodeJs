const fs = require("fs");
const qr = require("qr-image");

process.stdin.setEncoding("utf8");

console.log("Please enter some input:");

process.stdin.on("data", (URL) => {
  fs.writeFile("userinput.txt", URL, (err) => {
    if (err) throw err;

    // Once the file is written, read it and generate the QR code
    fs.readFile("userinput.txt", "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        const qrImage = qr.image(data, { type: "png" });

        qrImage.pipe(fs.createWriteStream("qr_code.png"));

        console.log("QR code generated successfully!");
      }
    });
  });
});
