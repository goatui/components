import { newE2EPage } from '@stencil/core/testing';

describe('p4-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-input></p4-input>');

    const element = await page.find('p4-input');
    expect(element).toHaveClass('hydrated');
  });
});
