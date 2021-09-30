import { newSpecPage } from '@stencil/core/testing';
import { P4Paragraph } from '../p4-paragraph';

describe('p4-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Paragraph],
      html: `<p4-paragraph></p4-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-paragraph>
    `);
  });
});
