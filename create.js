import fs from "fs";
export function Create(arr) {
  fs.writeFile(
    "dist/index.html",
    "<hr><br><h1><em>List of Stories</em></h1><hr> ",
    function (err) {
      if (err) throw err;
    }
  );

  arr.forEach((path) => {
    var afterComma = path.substr(path.indexOf("t/") + 2);
    var after = afterComma.substring(0, afterComma.indexOf("."));
    fs.appendFile(
      "dist/index.html",
      `<h3><a href="${path}">${after}</a></h3><br>` + "\n",
      function (err) {
        if (err) throw err;
        console.log("-- Link to Page Created In Index File");
      }
    );
  });
}
