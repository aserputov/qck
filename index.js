#!/usr/bin/env node

import fs from "fs";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { exit } from "process";
import { Create } from "./create.js";
import { Main } from "./main.js";
 
fs.rmdirSync("dist", { recursive: true });
secondFunction()

function firstFunction(_callback) {
  const options = yargs(hideBin(process.argv))
    .usage("Usage: -h <file>")
    .option("i", {
      alias: "input",
      describe: "File name",
      type: "string",
    })
    .option("c", {
      alias: "config",
      describe: "Configuration file",
      type: "string",
    })
    .version("v", "version", "qck-ssg v0.1.2")
    .alias("s", "stylesheet").argv;
    // console.log(options)
    return options
}

function secondFunction() {
  
  firstFunction(function () {
    console.log("huzzah, I'm done!");
  });
  // console.log(firstFunction())
    Main(firstFunction())
}

// 213 lines before start
