import { newSpecPage } from '@stencil/core/testing';
import { DatePicker } from '../date-picker';

describe('goat-date-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DatePicker],
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
