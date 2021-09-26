import { newE2EPage } from '@stencil/core/testing';

describe('p4-field-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p4-field-group></p4-field-group>');

    const element = await page.find('p4-field-group');
    expect(element).toHaveClass('hydrated');
  });
});
