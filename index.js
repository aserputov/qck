#!/usr/bin/env node

import fs from "fs";
import { Options } from "./options.js";

fs.rmdirSync("dist", { recursive: true });
Options();
