import { newSpecPage } from '@stencil/core/testing';
import { P4Label } from '../p4-label';

describe('p4-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Label],
      html: `<p4-label></p4-label>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-label>
    `);
  });
});
