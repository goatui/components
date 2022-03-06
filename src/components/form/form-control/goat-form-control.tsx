import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';

/**
 * @name Form Control
 * @description The Form Control component adds a label and caption for its child control.
 * @example <goat-form-control label='Full Name' required>
 *   <goat-input type='text'></goat-input>
 * </goat-form-control>
 */
@Component({
  tag: 'goat-form-control',
  styleUrl: 'goat-form-control.scss',
  shadow: true,
})
export class GoatFormControl implements ComponentInterface {

  /**
   * The label for the form control.
   */
  @Prop() label: string;

  /**
   * The caption for the form control.
   */
  @Prop() caption: string;

  /**
   * Whether the form control is required.
   */
  @Prop() required: boolean = false;

  @Element() elm!: HTMLElement;

  componentDidLoad() {
    this.elm.setAttribute('role', 'group');
    for (const compName of ['goat-input', 'goat-textarea', 'goat-select', 'goat-checkbox', 'goat-radio', 'goat-code-editor']) {
      const comp = this.elm.querySelector(`${compName}`);
      if (comp) {
        // @ts-ignore
        comp.required = this.required;
        if (this.label) {
          // @ts-ignore
          const oldProps = comp.configAria;
          // @ts-ignore
          comp.configAria = {
            'aria-label': this.label,
            ...oldProps
          };
        }
      }
    }
  }

  componentShouldUpdate(newVal: any, _oldVal, propName: string): boolean | void {
    if (propName === 'required') {
      for (const compName of ['goat-input', 'goat-textarea', 'goat-select']) {
        const comp = this.elm.querySelector(`${compName}`);
        if (comp) {
          // @ts-ignore
          comp.required = newVal;
        }
      }
    }
  }

  renderLabel() {
    if (this.label)
      return <label class='label'>
        {this.required && <span class='required'>*</span>}
        {this.label}
      </label>;
  }

  renderCaption() {
    if (this.caption)
      return 'Caption';
  }

  render() {
    return (
      <Host>
        <div class='form-control'>
          {this.renderLabel()}
          <div class='field'>
            <slot />
          </div>
          {this.renderCaption()}
        </div>
      </Host>
    );
  }

}
