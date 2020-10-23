import { newSpecPage } from '@stencil/core/testing';
import { P4Select } from '../p4-select';

describe('p4-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Select],
      html: `<p4-select></p4-select>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-select>
    `);
  });
});
