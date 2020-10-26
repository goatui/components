import { newE2EPage } from '@stencil/core/testing';

describe('p4-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-checkbox></p4-checkbox>');

    const element = await page.find('p4-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
