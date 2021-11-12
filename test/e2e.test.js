/* eslint-disable no-undef */
import { run } from "./run";
import fs from "fs";

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
  //     fs
  //       .exists("/dist/index.html", (exists) => {
  //         return exist;
  //       })
  //       .not.toBeTruthy()
  //   );
  // });
  // test("prints formatted output to specified width for --indent", async () => {
  //   const { stderr, stdout, exitCode } = await run(
  //     "--indent",
  //     "4",
  //     "./test/sample.html"
  //   );
  //   expect(exitCode).toBe(0);
  //   expect(stdout).toMatchSnapshot();
  //   expect(stderr).toEqual("");
  // });

  // test("prints formatted output to specified width for -i", async () => {
  //   const { stderr, stdout, exitCode } = await run(
  //     "-i",
  //     "4",
  //     "./test/sample.html"
  //   );
  //   expect(exitCode).toBe(0);
  //   expect(stdout).toMatchSnapshot();
  //   expect(stderr).toEqual("");
  // });
});
