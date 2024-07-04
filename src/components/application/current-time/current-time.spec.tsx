import { newSpecPage } from '@stencil/core/testing';
import { CurrentTime } from './current-time';

describe('current-time', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CurrentTime],
      html: '<goat-current-time></goat-current-time>',
    });
    const time = new Date().toLocaleTimeString('en-US');
    expect(page.root).toEqualHtml(`
      <goat-current-time>
        <mock:shadow-root>
          <div class='current-time'>
            ${time}
          </div>
        </mock:shadow-root>
      </goat-current-time>
    `);
  });
});
