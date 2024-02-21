const fs = require("fs");
const qr = require("qr-image");

process.stdin.setEncoding("utf8");

URL = console.log("Please enter some input:");

process.stdin.on("data", (URL) => {
  fs.writeFile("userinput.txt", URL, (err) => {
    if (err) throw err;
  });
});

const qrImage = qr.image(URL, { type: "png" });

qrImage.pipe(fs.createWriteStream('qr_code.png'));

console.log('QR code generated successfully!');
