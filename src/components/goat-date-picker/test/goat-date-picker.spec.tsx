import { newSpecPage } from '@stencil/core/testing';
import { GoatDatePicker } from '../goat-date-picker';

describe('goat-date-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GoatDatePicker],
      html: `<goat-date-picker></goat-date-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <goat-date-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </goat-date-picker>
    `);
  });
});
