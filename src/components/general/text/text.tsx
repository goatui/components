import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';

/**
 * @name Text
 * @description Typography are used for rendering headlines, paragraphs and captions.
 * @category General
 * @example <goat-text type="heading" level="1">Heading</goat-typography>
 */
@Component({
  tag: 'goat-text',
  styleUrl: 'text.scss',
  shadow: true,
})
export class Text implements ComponentInterface {
  @Prop({ reflect: true }) type: 'code' | 'helper-text' | 'label' | 'legal' | 'heading' | 'body' | 'body-compact' | 'heading-compact' = 'body';

  @Prop({ reflect: true }) expressive: boolean = false;

  @Prop() headingSize: 1 | 2 | 3 | 4 | 5 | 6 | 7 = 7;

  @Prop() headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  @Prop({ reflect: true }) inline: boolean = false;

  @Prop({ reflect: true, mutable: true }) configAria: any = {};

  @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'helper' | 'error' | 'on-color' | 'inverse' = 'primary';

  @Element() elm!: HTMLElement;

  componentWillLoad() {
    // If the goat-text has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-text to avoid causing tabbing twice on the same element
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
  }

  render() {
    return (
      <Host>
        <div class={{ text: true, inline: this.inline, expressive: this.expressive }}>
          {this.renderText()}
        </div>
      </Host>
    );
  }

  renderText() {
    if (this.type == 'heading') return this.renderHeading();
    else return this.renderSimpleText();
  }

  renderSimpleText() {
    if (this.inline) {
      return (<span class='native-element' {...this.configAria}>
        <slot />
      </span>);
    } else {
      return (
        <p class='native-element' {...this.configAria}>
          <slot />
        </p>
      );
    }
  }

  renderHeading() {
    const Heading = `h${this.headingLevel}`;
    return (<Heading class='native-element' {...this.configAria}>
        <slot />
      </Heading>);
  }
}
