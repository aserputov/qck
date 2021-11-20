/* eslint-disable */
import { Main } from "./main.js";
import fs from "fs";

export function Config(options) {
  let configPath = options.config;
  if (configPath) {
    const config_file = fs.readFileSync(configPath);
    const parsed = JSON.parse(config_file);
    let style;
    let filename;
    if (parsed.input) {
      if (parsed.stylesheet) {
        style = parsed.stylesheet;
      } else {
        style = "";
      }
      filename = parsed.input;
      let file = {
        _: [],
        i: `${parsed.input}`,
        input: `${parsed.input}`,
        $0: "",
      };
      Main(file);
    } else {
      console.log("Missing input path to a file or directory in config file");
      exit();
    }
  } else {
    if (!filename) {
      console.log("Missing input path to a file or directory");
      exit();
    }
  }
}
