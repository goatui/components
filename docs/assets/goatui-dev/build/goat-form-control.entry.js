import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';

const formControlCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;margin-bottom:var(--spacing-4, 1rem)}.form-control{display:flex;flex-direction:column}.form-control slot::slotted(goat-input),.form-control slot::slotted(goat-textarea),.form-control slot::slotted(goat-checkbox),.form-control slot::slotted(goat-radio),.form-control slot::slotted(goat-code-editor){margin-bottom:0.375rem}.label{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);font-weight:var(--font-weight-medium, 500);margin-bottom:0.375rem;color:var(--text-secondary, var(--color-gray-70, #525252));overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.label .required{color:var(--danger-02, #da1e28);padding-right:var(--spacing-1, 0.25rem)}.subtitle{font-size:var(--text-xs-font-size, 0.75rem);line-height:var(--text-xs-line-height, 1.125rem);letter-spacing:var(--text-xs-letter-spacing, 0rem);font-weight:var(--font-weight-regular, normal)}.subtitle .subtitle-caption{color:var(--text-05, var(--color-gray-60, #6f6f6f))}.subtitle .subtitle-error{color:var(--support-error-inverse, #fa4d56)}.subtitle .subtitle-success{color:var(--support-success-inverse, #42be65)}.subtitle .subtitle-warning{color:var(--support-warning-inverse, #f1c21b)}.form-control.inline{flex-direction:row;align-items:center}.form-control.inline .label{margin-bottom:0;margin-inline-end:var(--spacing-2, 0.5rem)}";

const FormControl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inline = false;
    /**
     * Whether the form control is required.
     */
    this.required = false;
  }
  componentDidLoad() {
    this.elm.setAttribute('role', 'group');
    for (const compName of ['goat-input', 'goat-textarea', 'goat-select', 'goat-checkbox', 'goat-radio', 'goat-code-editor']) {
      this.controlElm = this.elm.querySelector(`${compName}`);
      this.passRequiredToField(this.required);
      this.passLabelToField(this.label);
    }
  }
  passRequiredToField(required) {
    if (this.controlElm) {
      // @ts-ignore
      this.controlElm.required = required;
    }
  }
  passLabelToField(label) {
    if (this.controlElm) {
      // @ts-ignore
      const oldProps = this.controlElm.configAria;
      // @ts-ignore
      this.controlElm.configAria = Object.assign({ 'aria-label': label }, oldProps);
    }
  }
  componentShouldUpdate(newVal, _oldVal, propName) {
    if (propName === 'required') {
      this.passRequiredToField(newVal);
    }
    else if (propName === 'label') {
      this.passLabelToField(newVal);
    }
  }
  renderLabel() {
    if (this.label)
      return h("label", { class: 'label' }, this.required && h("span", { class: 'required' }, "*"), this.label);
  }
  renderSubtitle() {
    if (this.error)
      return h("div", { class: 'subtitle-error' }, this.error);
    else if (this.success)
      return h("div", { class: 'subtitle-success' }, this.success);
    else if (this.warning)
      return h("div", { class: 'subtitle-warning' }, this.warning);
    else if (this.caption)
      return h("div", { class: 'subtitle-caption' }, this.caption);
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
    return (h(Host, { class: {
        [this.getInputState()]: true,
      } }, h("div", { class: { 'form-control': true, 'inline': this.inline } }, this.renderLabel(), h("div", { class: 'field' }, h("slot", null)), h("div", { class: 'subtitle' }, this.renderSubtitle()))));
  }
  get elm() { return getElement(this); }
};
FormControl.style = formControlCss;

export { FormControl as goat_form_control };

//# sourceMappingURL=goat-form-control.entry.js.map