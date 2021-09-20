import { newE2EPage } from '@stencil/core/testing';

describe('p4-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-select></p4-select>');

    const element = await page.find('p4-select');
    expect(element).toHaveClass('hydrated');
  });
});
