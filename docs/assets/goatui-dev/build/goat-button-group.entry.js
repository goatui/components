import { r as registerInstance, h, e as Host } from './index-433d423f.js';

const buttonGroupCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host .button-group{display:flex}:host .button-group slot::slotted(goat-button){display:block;margin:0;--button-border-width:0.125rem;--button-border-radius:0}:host .button-group slot::slotted(goat-button:first-child){--button-border-radius:var(--border-radius, 3px) 0 0 var(--border-radius, 3px);--button-border-width:0.125rem 0 0.125rem 0.125rem}:host .button-group slot::slotted(goat-button:last-child){--button-border-radius:0 var(--border-radius, 3px) var(--border-radius, 3px) 0;--button-border-width:0.125rem 0.125rem 0.125rem 0}:host .button-group slot::slotted(goat-button:only-child){--button-border-radius:var(--border-radius, 3px);--button-border-width:0.125rem}";

let ButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: 'button-group' }, h("slot", null))));
  }
};
ButtonGroup.style = buttonGroupCss;

export { ButtonGroup as goat_button_group };

//# sourceMappingURL=goat-button-group.entry.js.map