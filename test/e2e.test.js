/* eslint-disable no-undef */
import { run } from "./run";
import fs from "fs";
import { stat } from "fs";

describe("end-to-end integration", () => {
  test("prints error and help message when no arguments given", async () => {
    const { stderr, stdout, exitCode } = await run();
    expect(exitCode).toBe(1);
    expect(stderr).toMatchSnapshot();
    expect(stdout).toEqual("[]");
  });

  test("prints error and help message when no arguments given", async () => {
    const { stderr, stdout, exitCode } = await run();
    expect(exitCode).toBe(1);
    expect(stderr).toMatchSnapshot();
    expect(stdout).toEqual("[]");
  });

  test("prints help message when --help given", async () => {
    const { stderr, stdout, exitCode } = await run("--help");
    expect(exitCode).toBe(0);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual("");
  });

  // test("check if file created in the dist directory ", () => {
  //   expect(
  //     stat("./dist", (err, stats) => {
  //       console.log(stats.isDirectory());
  //     }).toBeTruthy()
  //   );
  // });
  test("check specified file with name and styles ", async () => {
    const { stderr, stdout, exitCode } = await run("./dist/same.txt");
    expect(exitCode).toBe(1);
    // expect(stdout).toMatchSnapshot();
    // expect(stderr).toEqual("");
  });
});
