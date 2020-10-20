import { newSpecPage } from '@stencil/core/testing';
import { P4Input } from '../p4-input';

describe('p4-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Input],
      html: `<p4-input></p4-input>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-input>
    `);
  });
});
