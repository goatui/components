import { newSpecPage } from '@stencil/core/testing';
import { P4Grid } from '../p4-table';

describe('p4-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Grid],
      html: `<p4-table></p4-table>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-table>
    `);
  });
});
