import { newE2EPage } from '@stencil/core/testing';

describe('p4-script-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-script-editor></p4-script-editor>');

    const element = await page.find('p4-script-editor');
    expect(element).toHaveClass('hydrated');
  });
});
