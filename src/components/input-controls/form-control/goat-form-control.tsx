import { Component, ComponentInterface, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'goat-form-control',
  styleUrl: 'goat-form-control.scss',
  shadow: true,
})
export class GoatFormControl implements ComponentInterface{

  @Prop() label: string;

  @Prop() required: boolean = false;

  @State() labelId: string = '';

  @Element() elm!: HTMLElement;

  componentDidLoad() {
    this.elm.setAttribute('role', 'group');
    for(const compName of ['goat-input', 'goat-textarea', 'goat-select']) {
      const comp = this.elm.querySelector(`${compName}`);
      if(comp) {
        // @ts-ignore
        comp.required = this.required;
        // @ts-ignore
        comp.getGid().then(gid => {
          this.labelId = `goat-input-${gid}-lbl`;
        });
      }
    }
  }

  componentShouldUpdate(newVal: any, _oldVal, propName: string): boolean | void {
    if(propName === 'required') {
      for(const compName of ['goat-input', 'goat-textarea', 'goat-select']) {
        const comp = this.elm.querySelector(`${compName}`);
        if(comp) {
          // @ts-ignore
          comp.required = newVal;
        }
      }
    }
  }

  renderLabel() {
    if (this.label)
      return <div class='label' id={this.labelId}>
        {this.required && <span class='required'>*</span>}
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
