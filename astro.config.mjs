import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";
import yaml from "js-yaml";

// https://astro.build/config
export default defineConfig({
	site: "https://www.withenoughcoffee.com",
	base: "/",
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: "material-theme-darker",
			langs: [],
		},
	},
	vite: {
		plugins: [
			{
				name: "yaml-loader",
				transform(_code, id) {
					if (id.endsWith(".yml") || id.endsWith(".yaml")) {
						const data = yaml.load(readFileSync(id, "utf-8"));
						return {
							code: `export default ${JSON.stringify(data)}`,
							map: null,
						};
					}
				},
			},
		],
	},
});
