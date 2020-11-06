import { newSpecPage } from '@stencil/core/testing';
import { P4ScriptEditor } from '../p4-script-editor';

describe('p4-script-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4ScriptEditor],
      html: `<p4-script-editor></p4-script-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-script-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-script-editor>
    `);
  });
});
