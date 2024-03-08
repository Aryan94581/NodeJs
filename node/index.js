import { isUtf8 } from "buffer";
import { add, diff } from "./lib.js";
import fs from "fs";

console.log(add(6, 7), diff(9, 6));

fs.readFile("message.txt","utf8",(err, txt)=>{
    if (err) console.log(err);
    console.log(txt);
  });

// const txt = fs.readFileSync("message.txt", "utf8");
// console.log(txt);
