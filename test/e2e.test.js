/* eslint-disable no-undef */
const { run } = require("./run");

describe("end-to-end integration", () => {
  test("prints error and help message when no arguments given", async () => {
    const { stderr, stdout, exitCode } = await run();
    const errorMsg = "error: Option isn't corect. Please provide correct input";
    expect(exitCode === 0).toBeFalsy();
    expect(stderr.includes(errorMsg)).toBeTruthy();
    expect(stdout).toEqual("");
  });

  test("prints help message when --help given", async () => {
    const { stderr, stdout, exitCode } = await run("--help");
    expect(exitCode).toBe(0);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual("");
  });

  test("prints version message when --version given", async () => {
    const { stderr, stdout, exitCode } = await run("-v");
    expect(exitCode).toBe(0);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual("");
  });

  test("single valid text file input should generate an html", async () => {
    const { stderr, stdout, exitCode } = await run("--input", "same.txt");
    expect(exitCode).toBe(0);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual("");
  });

  test("single valid text file input should generate an html", async () => {
    const { stderr, stdout, exitCode } = await run(
      "--input",
      "same.txt",
      "--stylesheet",
      "link"
    );
    expect(exitCode).toBe(0);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual("");
  });
});
