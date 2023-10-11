const https = require("https");
const fs = require("fs");
https.get("https://s3.undefined.moe/file/executor-amd64", function(response){
   response.pipe(fs.createWriteStream(`executor`));
});
// https.get("https://aka.ms/wsl-kali-linux-new", function(response){
//    response.pipe(fs.createWriteStream(`wsl_kali.msix`));
// });
