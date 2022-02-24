import { newE2EPage } from '@stencil/core/testing';

describe('goat-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<goat-input></goat-input>');

    const element = await page.find('goat-input');
    expect(element).toHaveClass('hydrated');
  });
});
