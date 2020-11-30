import { newE2EPage } from '@stencil/core/testing';

describe('p4-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-table></p4-table>');

    const element = await page.find('p4-table');
    expect(element).toHaveClass('hydrated');
  });
});
