/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Create } from "./create";

// eslint-disable-next-line no-undef
describe("Create tests", () => {
  function checkOptions(arr) {
    expect(options.arr).toBe(arr);
  }

//   test("passing an nothing or empty object should result in good defaults", () => {
//     [null, undefined, {}].forEach((options) => {
//       const result = applyDefaults(options);
//       checkOptions(result, 80, 2);
//     });
  });

  test("should be able to give no options", () => {
    const result = Create();
    checkOptions(result);
  });

  //   test("should be able to override printWidth", () => {
  //     const result = applyDefaults({ printWidth: 100 });
  //     checkOptions(result, 100, 2);
  //   });

  //   test("should be able to override tabWidth", () => {
  //     const result = applyDefaults({ tabWidth: 4 });
  //     checkOptions(result, 80, 4);
  //   });

  //   test("should be able to override both printWidth and tabWidth", () => {
  //     const result = applyDefaults({ printWidth: 100, tabWidth: 4 });
  //     checkOptions(result, 100, 4);
  //   });
});
