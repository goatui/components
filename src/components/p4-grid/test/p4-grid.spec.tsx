import { newSpecPage } from '@stencil/core/testing';
import { P4Grid } from '../p4-grid';

describe('p4-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Grid],
      html: `<p4-grid></p4-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-grid>
    `);
  });
});
