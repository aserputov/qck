import { node } from "execa";

// Execute the purl command with the given options and arguments
async function run(...args) {
  try {
    const result = await node("./index.js", args);
    return result;
  } catch (err) {
    return err;
  }
}

const _run = run;
export { _run as run };
