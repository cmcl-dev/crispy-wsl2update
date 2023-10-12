const https = require("https");
const fs = require("fs");
// https.get("https://github.com/criyle/go-judge/releases/download/v1.6.0/executorserver_1.6.0_linux_amd64", function(response){
//    response.pipe(fs.createWriteStream(`./executor.wtf`));
// });
require("child_process").execSync("curl -L https://github.com/criyle/go-judge/releases/download/v1.6.0/executorserver_1.6.0_linux_amd64 -o executor.wtf");
// https.get("https://aka.ms/wsl-kali-linux-new", function(response){
//    response.pipe(fs.createWriteStream(`wsl_kali.msix`));
// });
