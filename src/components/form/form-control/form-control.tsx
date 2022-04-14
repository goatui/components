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
  styleUrl: 'form-control.scss',
  shadow: true,
})
export class FormControl implements ComponentInterface {

  /**
   * The label for the form control.
   */
  @Prop() label: string;

  /**
   * The caption for the form control.
   */
  @Prop() caption: string;


  @Prop() error: string;

  @Prop() warning: string;

  @Prop() success: string;

  @Prop() inline: boolean = false;

  /**
   * Whether the form control is required.
   */
  @Prop() required: boolean = false;

  @Element() elm!: HTMLElement;

  private controlElm!: HTMLElement;

  componentDidLoad() {
    this.elm.setAttribute('role', 'group');
    for (const compName of ['goat-input', 'goat-textarea', 'goat-select', 'goat-checkbox', 'goat-radio', 'goat-code-editor']) {
      this.controlElm = this.elm.querySelector(`${compName}`);
      this.passRequiredToField(this.required);
      this.passLabelToField(this.label);
    }
  }

  passRequiredToField(required: boolean) {
    if (this.controlElm) {
      // @ts-ignore
      this.controlElm.required = required;
    }
  }

  passLabelToField(label: string) {
    if (this.controlElm) {
      // @ts-ignore
      const oldProps = this.controlElm.configAria;
      // @ts-ignore
      this.controlElm.configAria = {
        'aria-label': label,
        ...oldProps,
      };
    }
  }

  componentShouldUpdate(newVal: any, _oldVal, propName: string): boolean | void {
    if (propName === 'required') {
      this.passRequiredToField(newVal);
    } else if (propName === 'label') {
      this.passLabelToField(newVal);
    }
  }

  renderLabel() {
    if (this.label)
      return <label class='label'>
        {this.required && <span class='required'>*</span>}
        {this.label}
      </label>;
  }


  renderSubtitle() {
    if (this.error)
      return <div class='subtitle-error'>
        {this.error}
      </div>;
    else if (this.success)
      return <div class='subtitle-success'>
        {this.success}
      </div>;
    else if (this.warning)
      return <div class='subtitle-warning'>
        {this.warning}
      </div>;
    else if (this.caption)
      return <div class='subtitle-caption'>
        {this.caption}
      </div>;
  }

  getInputState() {
    if (this.error)
      return 'input-state-error';
    else if (this.success)
      return 'input-state-success';
    else if (this.warning)
      return 'input-state-warning';
    return 'input-state-default';
  }

  render() {
    return (
      <Host class={{
        [this.getInputState()]: true,
      }}>
        <div class={{ 'form-control': true, 'inline': this.inline }}>
          {this.renderLabel()}
          <div class='field'>
            <slot />
          </div>
          <div class='subtitle'>
            {this.renderSubtitle()}
          </div>
        </div>
      </Host>
    );
  }

}
