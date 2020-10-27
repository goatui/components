import { newE2EPage } from '@stencil/core/testing';

describe('p4-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-grid></p4-grid>');

    const element = await page.find('p4-grid');
    expect(element).toHaveClass('hydrated');
  });
});
