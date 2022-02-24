import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'goatui',
  sourceMap: true,
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
      dir: 'docs/assets/dev-build/',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'styles', dest: 'styles' },
      ],
    },
  ],
  plugins: [
    sass(),
    inlineSvg(),
  ],
};
