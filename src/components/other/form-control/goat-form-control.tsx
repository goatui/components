import { Component, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'goat-form-control',
  styleUrl: 'goat-form-control.scss',
  shadow: true,
})
export class GoatFormControl {

  @Prop() label: string;

  @State() isRequired: boolean = false;

  @Listen('goat:input-required')
  onInputRequired(event: CustomEvent) {
    this.isRequired = event.detail;
  }

  renderLabel() {
    if (this.label)
      return <div class='label'>
        {this.isRequired && <span class='required'>*</span>}
        {this.label}
      </div>;
  }

  render() {
    return (
      <Host>
        <div class='form-control'>
          {this.renderLabel()}
          <div class='field'>
            <slot />
          </div>
        </div>
      </Host>
    );
  }

}
