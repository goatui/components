import { newE2EPage } from '@stencil/core/testing';

describe('p4-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-dropdown></p4-dropdown>');

    const element = await page.find('p4-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
