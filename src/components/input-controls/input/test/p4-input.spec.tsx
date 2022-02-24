import { newSpecPage } from '@stencil/core/testing';
import { P4Input } from '../goat-input';

describe('goat-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Input],
      html: `<goat-input></goat-input>`,
    });
    expect(page.root).toEqualHtml(`
      <goat-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </goat-input>
    `);
  });
});
