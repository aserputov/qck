#!/usr/bin/env node

import fs from "fs";
import glob from "glob";
import matter from "gray-matter";
import marked from "marked";
import mkdirp from "mkdirp";
import path from "path";
import boxen from "boxen";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import prettier from "prettier";

const dir = "dist";


// delete directory recursively
fs.rmdir(dir, { recursive: true }, (err) => {
  if (err) {
    console.error('Directory cant be deleted');
    process.exit(1);
  }

  console.log(`${dir} is deleted!`);
});

setTimeout(function () {
  const options = yargs(hideBin(process.argv))
    .usage("Usage: -h <file>")
    .option("i", {
      alias: "input",
      describe: "File name",
      type: "string",
      demandOption: true,
    })
    .version("v", "version", "qck-ssg v0.1.2")
    .alias("v", "version")
    .alias("s", "stylesheet").argv;

  let filename = `${options.input}`;
  let style = `${options.stylesheet}`;

  const readFile = (filename) => {
    const rawFile = fs.readFileSync(filename, "utf8");
    const parsed = matter(rawFile);
    const html = marked(parsed.content);

    return { ...parsed, html };
  };

  const templatize = (template, { link, title, content }) =>
    template
      .replace(/<!-- Link -->/g, link)
      .replace(/<!-- TITLE -->/g, title)
      .replace(/<!-- CONTENT -->/g, content);

  const saveFile = (filename, contents) => {
    const dir = path.dirname(filename);
    mkdirp.sync(dir);
    fs.writeFileSync(filename, contents);
  };

  //for .txt input file
  const getOutputFilename = (filename, outPath) => {
    const basename = path.basename(filename);
    const newfilename = basename.substring(0, basename.length - 3) + "html";
    const outfile = path.join(outPath, newfilename);
    return outfile;
  };

  //for .md input file //delete last 2 elements which is "md"
  const getOutputFilename_md = (filename, outPath) => {
    const basename = path.basename(filename);
    const newfilename = basename.substring(0, basename.length - 2) + "html";
    const outfile = path.join(outPath, newfilename);
    return outfile;
  };

  let arr = [];
  //read->make temp->save file (.txt)
  const processFile = (filename, template, outPath) => {
    const file = readFile(filename);
    const outfilename = getOutputFilename(filename, outPath);
    arr.push(` ${outfilename}`);
    const templatized = templatize(template, {
      link: `${style}`,
      title: file.data.title,
      content: file.html,
    });
    saveFile(outfilename, templatized);
  };

  //read->make temp->save file (.md)
  const processFile_md = (filename, template, outPath) => {
    const file = readFile(filename);

    const outfilename = getOutputFilename_md(filename, outPath);
    arr.push(` ${outfilename}`);

    var lines = file.content.toString().split(/\r?\n\r?\n/);
    var mdtext = "";
    lines.forEach((line) => {
      mdtext += line
      .replace(/^# (.*$)/gim, "\n<h1>$1</h1>")
      .replace(/^## (.*$)/gim, "\n<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "\n<h3>$1</h3>")
      .replace(/\*\*(.*)\*\*/gim, "<br><b>$1</b>")
      .replace(/\_\_(.*)\_\_/gim, "<br><b>$1</b>")
      .replace(/\*(.*)\*/gim, "<br><i>$1</i>")
      .replace(/\_(.*)\_/gim, "<br><i>$1</i>")
      .replace(/\`(.*)\`/gim, "<br><code>$1</code>")
      .replace("---", "\n<hr>");
    });
    const templatized = templatize(template, {
      content: mdtext,
    });
    saveFile(outfilename, templatized);
  };

  const main = () => {
    const srcPath = path.resolve("src");
    const outPath = path.resolve("dist");
    const template = fs.readFileSync(path.join(srcPath, "template.html"), "utf8");

    if (filename.includes(".")) {
      //if the file name contains txt
      if (filename.includes("txt")) {
        const filenames = glob.sync(srcPath + `/**/${filename}`);
        filenames.forEach((filename) => {
          processFile(filename, template, outPath);
        });
      }
      //if the file name does NOT contain txt
      else {
        const filenames = glob.sync(srcPath + `/**/${filename}`);
        filenames.forEach((filename) => {
          processFile_md(filename, template, outPath);
        });
      }
    } else {
      
      const filenames = glob.sync(srcPath + `/${filename}/**/*.txt`);
      filenames.forEach((filename) => {
        if (filename.includes(".txt")) {
        processFile(filename, template, outPath);
        }else{
          processFile_md(filename, template, outPath);
        }
      });
    }
  };

  main();

  const create = () => {
    fs.writeFile(
      "dist/index.html",
      "<hr><br><h1 style='text-align:center;'><em>List of Stories</em></h1><p style='text-align:center;'>(Sherlock Holmes)</p><hr> ",
      function (err) {
        if (err) throw err;
        console.log("Optional Main(Index) File is created successfully.");
      }
    );
    arr.forEach((path) => {
      var afterComma = path.substr(path.indexOf("t/") + 2); //2 blank lines
      var after = afterComma.substring(0, afterComma.indexOf("."));
      console.log(after);
      // var replaced = path.split(' ').join('%20');
      fs.appendFile(
        "dist/index.html",
        `<h3 style='text-align:center; text-decoration: none'><a href="${path}">${after}</a></h3><br>` +
          "\n",
        // callback function that is called after writing file is done
        function (err) {
          if (err) throw err;
          // if no error
          console.log("Data is written to file successfully.");
        }
      );
    });
  };
  create();
}, 1000);