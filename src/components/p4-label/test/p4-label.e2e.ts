import { newE2EPage } from '@stencil/core/testing';

describe('p4-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-label></p4-label>');

    const element = await page.find('p4-label');
    expect(element).toHaveClass('hydrated');
  });
});
