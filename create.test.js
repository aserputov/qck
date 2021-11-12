/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Create, createFile } from "./create.js";
import fs from "fs";

test("adding floating point numbers", () => {
  expect(createFile()).toBeTruthy(); // This works.
});
