import { newSpecPage } from '@stencil/core/testing';
import { P4Spinner } from '../p4-spinner';

describe('p4-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Spinner],
      html: `<p4-spinner></p4-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-spinner>
    `);
  });
});
