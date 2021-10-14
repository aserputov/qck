import { Create } from "./create.js";
import path from "path";
import fs from "fs";
import glob from "glob";
import matter from "gray-matter";
import marked from "marked";
import mkdirp from "mkdirp";
import { Config } from "./config.js";

export function Main(file) {
  let arr = []; // I can't see the way how to get rid of it because I push into that array all the files path's to build one index.js

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

  const getOutputFilename = (filename, outPath) => {
    const basename = path.basename(filename);
    const newfilename = basename.substring(0, basename.length - 3) + "html";
    const outfile = path.join(outPath, newfilename);
    return outfile;
  };

  const getOutputFilename_md = (filename, outPath) => {
    const basename = path.basename(filename);
    const newfilename = basename.substring(0, basename.length - 2) + "html";
    const outfile = path.join(outPath, newfilename);
    return outfile;
  };

  const processFile = (filename, template, outPath) => {
    const file = readFile(filename);
    const outfilename = getOutputFilename(filename, outPath);
    arr.push(` ${outfilename}`);
    const templatized = templatize(template, {
      link: `${file.stylesheet}`,
      title: file.data.title,
      content: file.html,
    });
    saveFile(outfilename, templatized);
  };

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
    const template = fs.readFileSync(
      path.join(srcPath, "template.html"),
      "utf8"
    );

    if (file.input.includes(".")) {
      const filenames = glob.sync(srcPath + `/**/${file.input}`);
      filenames.forEach((filename) => {
        if (filename.includes("txt")) {
          processFile(filename, template, outPath);
        } else if (filename.includes("md")) {
          processFile_md(filename, template, outPath);
        } else if (filename.includes(".json")) {
          Config();
        }
      });
    } else {
      const filenames = glob.sync(srcPath + `/${file.input}/**/*.txt`);
      filenames.forEach((filename) => {
        if (filename.includes(".txt")) {
          processFile(filename, template, outPath);
        } else {
          processFile_md(filename, template, outPath);
        }
      });
    }
  };

  main();
  Create(arr);
}
