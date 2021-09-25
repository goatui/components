import { newE2EPage } from '@stencil/core/testing';

describe('p4-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-list></p4-list>');

    const element = await page.find('p4-list');
    expect(element).toHaveClass('hydrated');
  });
});
