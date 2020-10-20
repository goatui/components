import { newE2EPage } from '@stencil/core/testing';

describe('p4-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-button></p4-button>');

    const element = await page.find('p4-button');
    expect(element).toHaveClass('hydrated');
  });
});
