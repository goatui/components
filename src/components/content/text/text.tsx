import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

/**
 * @name Text
 * @description Typography are used for rendering headlines, paragraphs and captions.
 * @example <goat-text type="heading" level="1">Heading</goat-typography>
 */
@Component({
  tag: 'goat-text',
  styleUrl: 'text.scss',
  shadow: true,
})
export class Text implements ComponentInterface {


  @Prop({ reflect: true }) type: 'heading' | 'paragraph' | 'text' = 'text';

  @Prop({ reflect: true }) shade: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * The heading level.
   */
  @Prop() level: 1 | 2 | 3 | 4 | 5 = 1;

  /**
   * Text size.
   */
  @Prop({ reflect: true, mutable: true}) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  render() {
    return (
      <Host>
        {(() => {
          if (this.type === 'heading')
            return this.renderHeading();
          else if (this.type === 'paragraph')
            return this.renderParagraph();
          else if (this.type === 'text')
            return this.renderText();
        })()}
      </Host>
    );
  }

  componentWillLoad() {
    if (this.type === 'heading') {
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
    } else {
      if (!this.size) {
        this.size = 'md';
      }
    }
  }


  renderHeading() {
    const HeadingTag = `h${this.level}`;

    return (
      <HeadingTag class='heading'>
        <slot />
      </HeadingTag>
    );
  }

  renderParagraph() {
    return (
      <p class={{ 'paragraph': true, [`size-${this.size}`]: true }}>
        <slot />
      </p>
    );
  }

  renderText() {
    return (
      <span class={{ 'text': true, [`size-${this.size}`]: true }}>
        <slot />
      </span>
    );
  }

}
