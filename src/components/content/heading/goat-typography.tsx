import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

/**
 * @name Typography
 * @description Typography are used for rendering headlines, paragraphs and captions.
 * @example <goat-typography variant="heading" level="1">Heading</goat-typography>
 */
@Component({
  tag: 'goat-typography',
  styleUrl: 'goat-typography.scss',
  shadow: true,
})
export class GoatTypography implements ComponentInterface{


  @Prop({ reflect: true }) variant: 'heading' | 'paragraph' | 'text' = 'text';

  /**
   * The heading level.
   */
  @Prop() level: 1 | 2 | 3 | 4 | 5 = 1;

  @Prop({ reflect: true }) secondary: boolean = false;

  /**
   * Text size.
   */
  @Prop({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';


  render() {
    return (
      <Host>
        {(() => {
          if (this.variant === 'heading')
            return this.renderHeading();
          else if (this.variant === 'paragraph')
            return this.renderParagraph();
          else if (this.variant === 'text')
            return this.renderText();
        })()}
      </Host>
    );
  }

  componentDidLoad() {
    if (this.variant === 'heading') {
      if (!this.size) {
        if (this.level === 1) {
          this.size = 'xl';
        } else if (this.level === 2) {
          this.size = 'lg';
        } else if (this.level === 3) {
          this.size = 'md';
        } else if (this.level === 4) {
          this.size = 'sm';
        } else if (this.level === 5) {
          this.size = 'xs';
        }
      }
    }
  }


  renderHeading() {
    const HeadingTag = `h${this.level}`;

    return (
      <HeadingTag class="heading">
        <slot />
      </HeadingTag>
    );
  }

  renderParagraph() {
    let size = this.size || 'md';
    return (
      <p class={{ 'paragraph': true, [`size-${size}`]: true }}>
        <slot />
      </p>
    );
  }

  renderText() {
    let size = this.size || 'md';
    return (
      <span class={{ 'text': true, [`size-${size}`]: true }}>
        <slot />
      </span>
    );
  }

}
