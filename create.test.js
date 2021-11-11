/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Create } from "./create.js";

const filesPaths = [
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/Silver Blaze.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Adventure of the Six Napoleans.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Adventure of the Speckled Band.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Naval Treaty.html",
  " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Red Headed League.html",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain(
    " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Red Headed League.html"
  );
  expect(new Set(shoppingList)).toContain(
    " /Users/anatoliyserputov/QckStaticSiteGenerator/dist/The Red Headed League.html"
  );
});

test("adds 1 + 2 to equal 3", () => {
  expect(Create()).toBe(3);
});
