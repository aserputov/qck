import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Main } from "./main.js";

export function Options() {
  function chooseOptions(_callback) {
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

    return options;
  }

  function callMain() {
    Main(chooseOptions());
  }
  
  callMain();
}
