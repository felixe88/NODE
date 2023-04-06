const fs = require("fs");

const content = "Questo è ciò che va scritto nel file";

fs.writeFile("example.txt", content, (err) => {
  if (err) throw err;
  console.log("Il file è stato salvato");
});
