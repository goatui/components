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
   * The input field value.
   */
  @Prop({ mutable: true }) value: boolean = false;

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


  onChange = (ev: PointerEvent) => {
    const input = ev.target as HTMLInputElement;
    if (!this.disabled) {
      this.value = !JSON.parse(input.value);
      this.p4Change.emit(ev);
    }
  };


  private getCssClasses() {
    const cls = ['checkbox'];
    cls.push('size-' + this.size);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }

  getCheckboxSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '1.25rem';
    else if (this.size === 'lg')
      size = '1.5rem';
    else if (this.size === 'sm')
      size = '1rem';
    return size;
  }

  render() {
    return (
      <Host>
        <label class={this.getCssClasses()}>

          {
            this.value &&
            <svg width={this.getCheckboxSize()} height={this.getCheckboxSize()} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class="icon square-checked">
              <path d='M9 11L12 14L22 4' stroke='#0F172A' stroke-width='2' stroke-linecap='round'
                    stroke-linejoin='round' />
              <path
                d='M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16'
                stroke='#0F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            </svg>
          }

          {
            !this.value &&
            <svg width={this.getCheckboxSize()} height={this.getCheckboxSize()} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class="icon square">
              <path
                d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
                stroke='#0F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            </svg>
          }


          <input type='checkbox'
                 class='checkbox-input'
                 value={this.value + ''}
                 required={this.required}
                 onClick={this.onChange}
                 disabled={this.disabled} />

          {this.label && <span class="label">{this.label}</span>}
        </label>
      </Host>
    );
  }

}
