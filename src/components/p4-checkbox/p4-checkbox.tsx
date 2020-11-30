import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'p4-checkbox',
  styleUrl: 'p4-checkbox.scss',
  shadow: true,
})
export class P4Checkbox {

  /**
   * The checkbox label.
   */
  @Prop() label: string;

  /**
   * Button variants
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'dashed' = 'default';

  /**
   * The input field value.
   */
  @Prop() value: boolean = false;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  /**
   * On change of input a CustomEvent 'p4Change' will be triggered. Event details contains parent event, oldValue, newValue of input.
   */
  @Event() p4Change: EventEmitter;


  onChange = (event: any) => {
    if (!this.disabled) {
      this.value = !JSON.parse(event.target.value);
      this.p4Change.emit({ value: this.value });
    }
  };


  private getCssClasses() {
    const cls = ['checkbox-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }


  render() {
    return (
      <Host>
        <div
          class={this.getCssClasses()}>
          <label class="checkbox-wrapper">
            <span class={{ 'checkbox': true, 'checkbox-checked': this.value, 'checkbox-disabled': this.disabled }}>
                <input type="checkbox"
                       class="checkbox-input"
                       value={this.value + ''}
                       onClick={this.onChange}
                       disabled={this.disabled} />
                    <span class="checkbox-inner" />
             </span>
            {this.label && <span>{this.label}</span>}
          </label>
        </div>
      </Host>
    );
  }

}
