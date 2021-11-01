/* eslint-disable */

import fs from "fs";

export function Config(arr) {
  let configPath = options.config;
  if (configPath) {
    const config_file = fs.readFileSync(configPath);
    const parsed = JSON.parse(config_file);
    if (parsed.input) {
      if (parsed.stylesheet) {
        style = parsed.stylesheet;
      } else {
        style = "";
      }
      filename = parsed.input;
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
