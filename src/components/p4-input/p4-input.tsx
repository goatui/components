import { Component, h, Host, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'p4-input',
  styleUrl: 'p4-input.scss',
  shadow: true,
})
export class P4Input {

  /**
   * The input field label.
   */
  @Prop() label: string;

  /**
   * The input field placeholder.
   */
  @Prop() placeholder: string;

  /**
   * The input field value.
   */
  @Prop() value: string;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Button variants
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'dashed' = 'default';

  /**
   * If true, the form will be in inline format. Defaults to `false`.
   */
  @Prop() inline: boolean = false;

  /**
   * Button variants
   * Possible values are `"text"`. Defaults to `"text"`.
   */
  @Prop() type: 'text' = 'text';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;

  /**
   * On change of input a CustomEvent 'inputChange' will be triggered. Event details contains parent event, oldValue, newValue of input.
   */
  @Event() inputChange: EventEmitter;

  getCssClasses() {
    const cls = [];
    cls.push(this.getVariantClass());
    cls.push(this.getSizeClass());
    cls.push(this.getInlineClass());
    cls.push(this.getTypeClass());
    if (this.required)
      cls.push('required');
    return cls.join(' ');
  }

  getVariantClass() {
    let variant = 'variant-';
    if (!this.variant)
      variant = variant + 'default';
    else
      variant = variant + this.variant;
    return variant;
  }

  getSizeClass() {
    let size = 'size-';
    if (!this.size)
      size = size + 'md';
    else
      size = size + this.size;
    return size;
  }

  getTypeClass() {
    let type = 'type-';
    if (!this.type)
      type = type + 'text';
    else
      type = type + this.type;
    return type;
  }

  getInlineClass() {
    let inline = '';
    if (this.inline)
      inline = 'inline';
    return inline;
  }

  handleInputChange(event: any) {
    if (!this.disabled) {
      const oldValue = this.value;
      this.value = event.target.value;
      this.inputChange.emit({ event, oldValue, newValue: this.value });
    }
  }

  getLabelElement() {
    return <label>{this.label}</label>;
  }

  private getInputElement() {
    return <input
      class="input-element"
      type={this.type}
      placeholder={this.placeholder}
      value={this.value}
      required={this.required}
      onInput={(event) => this.handleInputChange(event)}
      disabled={this.disabled}>
    </input>;
  }

  render() {
    return (
      <Host>
        <div class={'input-component  ' + this.getCssClasses()}>
          {[this.getLabelElement(), this.getInputElement()]}
        </div>
      </Host>
    );
  }

}
