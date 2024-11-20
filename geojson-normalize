#!/usr/bin/env node

import {normalize} from "./index.ts";
import fs from "node:fs";

process.stdout.write(
  JSON.stringify(normalize(JSON.parse(fs.readFileSync(process.argv[2]).toString()))),
);
