import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { JsonDocs } from '@stencil/core/internal';
import dotEnvPlugin from 'rollup-plugin-dotenv';
import * as fs from 'fs';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'goatui',
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'assets' }],
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: '@goatui/components',
      proxiesFile: 'dist/generated/goatui-react/index.ts',
    }),
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
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
            categoryName = 'Up coming';
          }

          // @ts-ignore
          let cat = docs.categories.find(
            category => category.name === categoryName,
          );
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
          cat.components.push(component.tag);
        });

        const order = [
          'Data Display',
          'Feedback',
          'Form Inputs',
          'General',
          'Layout',
          'Navigation',
          'Charts',
          'Others',
          'Up coming',
        ];

        // @ts-ignore
        docs.categories.sort((a, b) => {
          return order.indexOf(a.name) - order.indexOf(b.name);
        });

        fs.writeFileSync(
          __dirname + '/astro-docs/src/_data/componentsDetails.json',
          JSON.stringify(docs, null, 2),
        );
      },
    },
    {
      type: 'www',
      dir: 'astro-docs/public/assets/goatui-dev/',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'assets', dest: 'build/assets' }],
    },
  ],
  plugins: [sass(), dotEnvPlugin()],
  testing: {
    browserHeadless: 'new',
  },
};
