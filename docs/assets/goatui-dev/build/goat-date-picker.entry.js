import { r as registerInstance, h, e as Host } from './index-433d423f.js';

const goatDatePickerCss = ":host{display:block}";

let GoatDatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
GoatDatePicker.style = goatDatePickerCss;

export { GoatDatePicker as goat_date_picker };

//# sourceMappingURL=goat-date-picker.entry.js.map