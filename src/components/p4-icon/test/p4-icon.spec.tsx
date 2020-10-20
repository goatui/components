import { newSpecPage } from '@stencil/core/testing';
import { P4Icon } from '../p4-icon';

describe('p4-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Icon],
      html: `<p4-icon></p4-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-icon>
    `);
  });
});
