import { newE2EPage } from '@stencil/core/testing';

describe('p4-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-textarea></p4-textarea>');

    const element = await page.find('p4-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
