import { newSpecPage } from '@stencil/core/testing';
import { P4Item } from '../p4-item';

describe('p4-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Item],
      html: `<p4-item></p4-item>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-item>
    `);
  });
});
