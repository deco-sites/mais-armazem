// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $FormPageIsland from "./islands/FormPageIsland.tsx";
import * as $ListPageIsland from "./islands/ListPageIsland.tsx";
import * as $LoginPageIsland from "./islands/LoginPageIsland.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/FormPageIsland.tsx": $FormPageIsland,
    "./islands/ListPageIsland.tsx": $ListPageIsland,
    "./islands/LoginPageIsland.tsx": $LoginPageIsland,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
