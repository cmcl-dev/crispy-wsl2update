const https = require("https");
const fs = require("fs");
https.get("https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi", function(response){
   response.pipe(fs.createWriteStream(`wsl_update_x64.msi`));
});
https.get("https://aka.ms/wsl-kali-linux-new", function(response){
   response.pipe(fs.createWriteStream(`wsl_kali.msix`));
});
