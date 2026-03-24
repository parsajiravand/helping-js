/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
export default {
  theme: defaultTheme({
    locales: {
      "/": {
        lang: "en-US",
        title: "Helping JS",
        description: "Simple utils for JavaScript — type checkers, regex patterns, and environment support.",
      },
    },
    logo: "https://i.ibb.co/JRs0Pzv1/helping-js.png",
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
      {
        text: "Changelog",
        link: "https://github.com/parsajiravand/helping-js/blob/master/CHANGELOG.md",
      },
    ],
    sidebar: [
      // NavbarItem
      {
        text: "Usage",
        link: "/usage/",
      },
      {
        text: "Setup",
        link: "/setup/",
      },
      {
        text: "Form validation",
        link: "/form-validation/",
      },
      {
        text: "Types",
        link: "/types/",
      },
      {
        text: "Helpers",
        collapsible: true,
        children: [
          { text: "Overview", link: "/helpers/" },
          { text: "Number", link: "/helpers/number/" },
          { text: "String", link: "/helpers/string/" },
          { text: "Value", link: "/helpers/value/" },
          { text: "Array", link: "/helpers/array/" },
          { text: "Object", link: "/helpers/object/" },
          { text: "Function", link: "/helpers/function/" },
          { text: "Async", link: "/helpers/async/" },
          { text: "URL", link: "/helpers/url/" },
          { text: "Date", link: "/helpers/date/" },
          { text: "Advanced", link: "/helpers/advanced/" },
          { text: "Tree", link: "/helpers/tree/" },
          { text: "DOM", link: "/helpers/dom/" },
        ],
      },
      {
        text: "Support",
        link: "/support/",
      },
      {
        text: "Safe Type",
        link: "/safe-type/",
      },
      {
        text: "Regex Helper",
        link: "/regex/",
      },
      {
        text: "PhoneNumbers Regex Helper",
        link: "/phone-regex/",
      },
      {
        text: "Currency Regex Helper",
        link: "/currency-regex/",
      },
      {
        text: "Changelog",
        link: "https://github.com/parsajiravand/helping-js/blob/master/CHANGELOG.md",
      },
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    mediumZoomPlugin({
      // options
      selector: ":not(a) > s",
    }),
  ],
};
