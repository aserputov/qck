// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import { Options } from "./options";
// import mockArgv from "mock-argv";

// describe("Options tests", () => {
//   test("No input options should throw error", async () => {
//     mockArgv([], () => {
//       process.argv = [
//         "path-to-node",
//         "path-to-current-script",
//         "no",
//         "rightInput",
//       ];
//     });
//     expect(() => {
//       Options();
//     }).toThrow(`error: Option isn't corect. Please provide correct input`);
//   });

//   test("With input options should not throw error", async () => {
//     mockArgv([], () => {
//       process.argv = [
//         "path-to-node",
//         "path-to-current-script",
//         "-i",
//         "hasInput",
//       ];
//     });
//     expect(() => {
//       Options();
//     }).not.toThrow(Error);
//   });
// });
