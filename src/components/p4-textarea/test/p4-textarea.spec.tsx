import { newSpecPage } from '@stencil/core/testing';
import { P4Textarea } from '../p4-textarea';

describe('p4-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Textarea],
      html: `<p4-textarea></p4-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-textarea>
    `);
  });
});
