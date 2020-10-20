import { newE2EPage } from '@stencil/core/testing';

describe('p4-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-icon></p4-icon>');

    const element = await page.find('p4-icon');
    expect(element).toHaveClass('hydrated');
  });
});
