import { newSpecPage } from '@stencil/core/testing';
import { P4FieldGroup } from '../p4-field-group';

describe('p4-field-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P4FieldGroup],
      html: `<p4-field-group></p4-field-group>`,
    });
    expect(page.root).toEqualHtml(`
      <p4-field-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p4-field-group>
    `);
  });
});
