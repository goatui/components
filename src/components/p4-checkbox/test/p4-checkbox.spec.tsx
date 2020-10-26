import { newSpecPage } from '@stencil/core/testing';
import { P4Checkbox } from '../p4-checkbox';

describe('p4-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Checkbox],
      html: `<p4-checkbox></p4-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-checkbox>
    `);
  });
});
