import { newE2EPage } from '@stencil/core/testing';

describe('goat-date-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<goat-date-picker></goat-date-picker>');

    const element = await page.find('goat-date-picker');
    expect(element).toHaveClass('hydrated');
  });
});
