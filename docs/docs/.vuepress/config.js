/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";

const SITE_URL = "https://helping-js.netlify.app";

const SITE_DESCRIPTION =
  "helping-js npm package: zero-dependency JavaScript utilities — type checking (isString, isPlainObject), 50+ regex patterns, form validation, TypeScript declarations, and v3 helper modules (string, array, object, async, date, URL, tree, DOM). Docs for Vue, React, Node, Express.";

const KEYWORDS =
  "helping-js, helping js, npm helping-js, JavaScript utilities, JavaScript utility library, type checking, isString, isPlainObject, regex validation, form validation, zero dependencies, TypeScript, Vue, React, Node.js, Express, debounce, array helpers, object helpers, no lodash";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "helping-js",
  description: SITE_DESCRIPTION,
  license: "https://opensource.org/licenses/MIT",
  codeRepository: "https://github.com/parsajiravand/helping-js",
  programmingLanguage: "JavaScript",
  runtimePlatform: "Node.js, Browser",
  author: {
    "@type": "Person",
    name: "Parsa Jiravand",
  },
  url: SITE_URL,
  isAccessibleForFree: true,
});

export default defineUserConfig({
  lang: "en-US",
  title: "Helping JS",
  description: SITE_DESCRIPTION,
  head: [
    ["link", { rel: "canonical", href: `${SITE_URL}/` }],
    ["link", { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" }],
    ["meta", { name: "keywords", content: KEYWORDS }],
    ["meta", { name: "author", content: "Parsa Jiravand" }],
    ["meta", { name: "robots", content: "index,follow,max-image-preview:large" }],
    ["meta", { property: "og:title", content: "Helping JS — JavaScript utility library (helping-js)" }],
    ["meta", { property: "og:description", content: SITE_DESCRIPTION }],
    ["meta", { property: "og:url", content: `${SITE_URL}/` }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image", content: "https://i.ibb.co/JRs0Pzv1/helping-js.png" }],
    ["meta", { property: "og:site_name", content: "Helping JS" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Helping JS — helping-js npm documentation" }],
    ["meta", { name: "twitter:description", content: SITE_DESCRIPTION }],
    ["meta", { name: "twitter:image", content: "https://i.ibb.co/JRs0Pzv1/helping-js.png" }],
    ["meta", { name: "application-name", content: "Helping JS" }],
    ["meta", { name: "theme-color", content: "#1e1e1e" }],
    ["script", { type: "application/ld+json", innerHTML: JSON_LD }],
  ],
  theme: defaultTheme({
    locales: {
      "/": {
        lang: "en-US",
        title: "Helping JS",
        description: SITE_DESCRIPTION,
      },
    },
    logo: "https://i.ibb.co/JRs0Pzv1/helping-js.png",
    navbar: [
      {
        text: "Docs",
        link: "/usage/",
      },
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
  ],
});
