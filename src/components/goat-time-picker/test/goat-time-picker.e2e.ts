import { newE2EPage } from '@stencil/core/testing';

describe('goat-time-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<goat-time-picker></goat-time-picker>');

    const element = await page.find('goat-time-picker');
    expect(element).toHaveClass('hydrated');
  });
});
