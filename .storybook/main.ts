import type { StorybookConfig } from "@storybook/nextjs"
const path = require("path")

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: "../next.config.js",
    },
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve = {
        ...config.resolve,
        modules: [path.resolve(__dirname, ".."), "node_modules"],
        alias: {
          ...(config.resolve.alias ?? {}),
          "@/lib": path.resolve(__dirname, "../lib"),
        },
      }
    }

    return config
  },
}
export default config
