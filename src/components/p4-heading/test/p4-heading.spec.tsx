import { newSpecPage } from '@stencil/core/testing';
import { P4Heading } from '../p4-heading';

describe('p4-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Heading],
      html: `<p4-heading></p4-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-heading>
    `);
  });
});
