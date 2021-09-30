import { newE2EPage } from '@stencil/core/testing';

describe('p4-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-heading></p4-heading>');

    const element = await page.find('p4-heading');
    expect(element).toHaveClass('hydrated');
  });
});
