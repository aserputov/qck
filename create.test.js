/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Create, createFile } from "./create.js";
import fs from "fs";
import { stat } from "fs";

const filesPaths = [
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/Silver Blaze.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Adventure of the Six Napoleans.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Adventure of the Speckled Band.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Naval Treaty.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Red Headed League.html",
];

// test("the shopping list has milk on it", () => {
//   expect(shoppingList).toContain(
//     " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Red Headed League.html"
//   );
//   expect(new Set(shoppingList)).toContain(
//     " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Red Headed League.html"
//   );
// });

// test("adds 1 + 2 to equal 3", () => {
//   expect(Create()).toBe(3);
// });

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

describe("end-to-end integration", () => {
  test("checking the output of the function", () => {
    expect(createFile()).toBeTruthy(); // This works.
  });

  test("adding floating point numbers", () => {
    expect(createAdd(filesPaths)).toBeTruthy();
  });
});
