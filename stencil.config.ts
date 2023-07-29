import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { JsonDocs } from '@stencil/core/internal';
import * as fs from 'fs';
import * as path from 'path';
import fg from 'fast-glob';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'goatui',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'goatui',
      proxiesFile: 'dist/generated/goatui-react/src/components.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'assets' }],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: '*Built with love!*',
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        docs.components.forEach(component => {
          delete component.dirPath;
          delete component.readmePath;
          delete component.usagesDir;

          // @ts-ignore
          const metadata: any = {};

          component.docsTags.forEach(tag => {
            if (tag.name === 'tags') {
              metadata[tag.name] = tag.text.split(',');
            } else {
              metadata[tag.name] = tag.text;
            }
          });

          // @ts-ignore
          component.metadata = metadata;
        });

        // @ts-ignore
        docs.categories = [];

        docs.components.forEach(component => {
          // @ts-ignore
          let categoryName = component.metadata.category;
          if (!categoryName) {
            categoryName = 'Work in progress';
          }

          // @ts-ignore
          let cat = docs.categories.find(category => category.name === categoryName);
          if (!cat) {
            cat = {
              // @ts-ignore
              name: categoryName,
              hide: false,
              components: [],
            };
            // @ts-ignore
            docs.categories.push(cat);
          }
          cat.components.push(component);
        });

        const order = ['General', 'Layout', 'Navigation', 'Form Inputs', 'Data Display',  'Feedback', 'Work in progress'];

        // @ts-ignore
        docs.categories.sort((a, b) => {
          return order.indexOf(a.name) - order.indexOf(b.name);
        });

        fs.writeFileSync(__dirname + '/docs/_data/componentsDetails.json', JSON.stringify(docs, null, 2));
      },
    },
    {
      type: 'www',
      dir: 'docs/assets/goatui-dev/',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'assets', dest: 'build/assets' }],
    },
  ],
  rollupPlugins: {
    before: [
      {
        name: 'watch-external',
        async buildStart() {
          const styleFiles = await fg(path.resolve(__dirname, './components/**/*.scss'));
          for (let file of styleFiles) {
            this.addWatchFile(file);
          }
        },
      },
    ],
  },
  plugins: [sass()],
  testing: {
    browserHeadless: "new",
  },
};
