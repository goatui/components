import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'p4rm-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'theme', dest: 'theme' },
      ],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      footer: '*Built with love!*',
    },
    {
      type: 'www',
      dir: 'docs/assets/p4-ui-dev/',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'demo', dest: 'demo' },
      ],
    },
  ],
  plugins: [
    sass(),
    inlineSvg(),
  ],
};
