import { newSpecPage } from '@stencil/core/testing';
import { P4Button } from '../p4-button';

describe('p4-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4Button],
      html: `<p4-button></p4-button>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-button>
    `);
  });
});
