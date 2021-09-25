import { newSpecPage } from '@stencil/core/testing';
import { P4Dropdown } from '../p4-dropdown';

describe('p4-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Dropdown],
      html: `<p4-dropdown></p4-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-dropdown>
    `);
  });
});
