import { newSpecPage } from '@stencil/core/testing';
import { P4Select } from '../p4-list';

describe('p4-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Select],
      html: `<p4-list></p4-list>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-list>
    `);
  });
});
