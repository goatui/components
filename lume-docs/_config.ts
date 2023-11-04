import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  location: new URL("https://my-site.com/blog/"),
  url: new URL("https://my-site.com/blog/"),
  src: "./src",
  server: {
    port: 7000,
    open: true,
    page404: "./404/",
  },
});



site.copy("assets", "assets");

site.data("site_data", {
  "company": "GOATUI",
  "title": "GOAT UI",
  "description": "GOAT UI contains design system and most used web components built using Stencil. So you don't need to include any additional framework dependencies, You can simple import required component js, and right away start using it.",
  "tagline": "A light weight web component library",
  "baseurl": "",
  "url": "https://goatui.com",
  "email": "contact@shivajivarma.com",
  "author": "Shivaji Varma",
  "author_url": "https://shivajivarma.com",
  "twitter_username": "goatui",
  "github_username": "goatui",
  "github_project": "components",
  "npm_package": "@goatui/components",
  "script": "https://cdn.jsdelivr.net/npm/@goatui/components@1.5.11/dist/goatui/goatui.esm.js",
  "themeCss": "https://cdn.jsdelivr.net/npm/@goatui/components@1.5.11/dist/goatui/assets/styles/theme.css",
})

site.use(jsx());
site.use(sass());
site.use(sitemap());

export default site;
