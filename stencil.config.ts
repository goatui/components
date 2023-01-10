import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { JsonDocs } from '@stencil/core/internal';
import * as fs from 'fs';

export const config: Config = {
  namespace: 'goatui',
  sourceMap: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets' },
      ],
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
        docs.components.forEach((component) => {
          delete component.dirPath;
          delete component.readmePath;
          delete component.usagesDir;
          
          // @ts-ignore 
          component.metadata = {};

          component.docsTags.forEach((tag) => {
            // @ts-ignore
            component.metadata[tag.name] = tag.text;
          });

        });
        fs.writeFileSync(__dirname + '/docs/_data/components.json', JSON.stringify(docs.components, null, 2));
      },
    },
    {
      type: 'www',
      dir: 'docs/assets/goatui-dev/',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets', dest: 'build/assets' },
      ],
    },
  ],
  plugins: [
    sass(),
  ],
};
