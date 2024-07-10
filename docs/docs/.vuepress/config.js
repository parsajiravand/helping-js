/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
export default {
  theme: defaultTheme({
    locales: {
      "/": {
        lang: "en-US",
        title: "Vue Client Recaptcha",
        description:
          "Build simple recaptcha for vuejs without need server .",
      },
    },
    logo: "https://i.ibb.co/7RkRvX0/helping-js-icon.png",
    navbar: [
      // NavbarItem
      {
        text: "Docs",
        link: "/usage/",
      },
      // NavbarGroup
      {
        text: "Github",
        children: [
          {
            text: "Package",
            link: "https://github.com/parsajiravand/helping-js",
          },
          {
            text: "Docs",
            link: "https://github.com/parsajiravand/helping-js-doc",
          },
        ],
      },
       // NavbarItem
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/helping-js",
      },
    ],
    sidebar: [
      // NavbarItem
      {
        text: "Usage",
        link: "/usage/",
      },
      {
        text: "Types",
        link: "/types/",
      },
      {
        text: "Support",
        link: "/support/",
      },
      {
        text: "SafeType",
        link: "/safe-type/",
      },
      {
        text: "RegexHelper",
        link: "/regex/",
      }
    ],
  }),
  plugins: [
    registerComponentsPlugin({

      componentsDir: path.resolve(__dirname, "./components"),
    }),
    mediumZoomPlugin({
      // options
      selector:':not(a) > s'
    }),
  ],
};
