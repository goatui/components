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
        { src: 'styles', dest: 'styles' },
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
        { src: 'styles', dest: 'styles' },
      ],
    },
  ],
  plugins: [
    sass(),
    inlineSvg(),
  ],
};
