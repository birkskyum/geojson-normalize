import fs from "node:fs";
import {normalize} from "./index.ts";
import { deepEqual } from "node:assert";

const __dirname = new URL('.', import.meta.url).pathname;

function fixture(name: string) {
  deepEqual(
    normalize(
      JSON.parse(
        fs.readFileSync(`${__dirname}/fixtures/${name}.input.geojson`).toString(),
      ),
    ),
    JSON.parse(
      fs.readFileSync(`${__dirname}/fixtures/${name}.output.geojson`).toString(),
    ),
    name,
  );
}

Deno.test("normalize", (_t) => {
  fixture("feature");
  fixture("geometry");
  fixture("featurecollection");
});
