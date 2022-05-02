import { newSpecPage } from '@stencil/core/testing';
import { GoatTimePicker } from '../goat-time-picker';

describe('goat-time-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GoatTimePicker],
      html: `<goat-time-picker></goat-time-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <goat-time-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </goat-time-picker>
    `);
  });
});
