import { newE2EPage } from '@stencil/core/testing';

describe('p4-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-paragraph></p4-paragraph>');

    const element = await page.find('p4-paragraph');
    expect(element).toHaveClass('hydrated');
  });
});
