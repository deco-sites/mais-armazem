import { App, AppContext as AC } from "deco/mod.ts";
import website, { Props } from "apps/website/mod.ts";

import manifest, { Manifest } from "../manifest.gen.ts";
import type { Supabase } from "site/loaders/supabase/supabaseConfig.ts";

type WebsiteApp = ReturnType<typeof website>;

export interface SiteProps extends Props {
  supabaseClient: Supabase;
}

/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8
 */
export default function Site(
  { supabaseClient, ...state }: SiteProps,
): App<Manifest, SiteProps, [
  WebsiteApp,
]> {
  return {
    state: {
      supabaseClient,
      ...state,
    },
    manifest,
    dependencies: [
      website(state),
    ],
  };
}

export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
