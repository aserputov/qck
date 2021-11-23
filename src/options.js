import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Main } from "./main.js";

export function Options() {
  // eslint-disable-next-line
  function chooseOptions(_callback) {
    const options = yargs(hideBin(process.argv)) //eslint-disable-line
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

    if (options.config === undefined && options.input === undefined) {
      throw new Error(
        `error: Option isn't correct. Please provide correct input`
      );
    }

    return options;
  }

  function callMain() {
    Main(chooseOptions());
  }

  callMain();
}
