import { newE2EPage } from '@stencil/core/testing';

describe('p4-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-item></p4-item>');

    const element = await page.find('p4-item');
    expect(element).toHaveClass('hydrated');
  });
});
