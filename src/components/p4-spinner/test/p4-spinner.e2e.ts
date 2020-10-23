import { newE2EPage } from '@stencil/core/testing';

describe('p4-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-spinner></p4-spinner>');

    const element = await page.find('p4-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
