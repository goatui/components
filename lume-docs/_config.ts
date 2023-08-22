import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
  location: new URL("https://goatui.com"),
  src: "./src",
  server: {
    port: 8000,
    open: true,
  },
});

site.use(jsx());
site.use(sass());

export default site;
