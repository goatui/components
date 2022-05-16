import { r as registerInstance, h, e as Host } from './index-a0beba19.js';

const cardCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;margin-bottom:var(--spacing-3, 0.75rem);height:100%}.card{border:1px solid var(--border-color, var(--color-gray-50, #8d8d8d));border-radius:var(--border-radius, 3px);height:100%;background-color:var(--background, #ffffff)}:host([shadow-level=xxl]) .card{box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))}:host([shadow-level=xl]) .card{box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))}:host([shadow-level=lg]) .card{box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))}:host([shadow-level=md]) .card{box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))}:host([shadow-level=sm]) .card{box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))}:host([shadow-level=xs]) .card{box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))}slot::slotted(goat-card-content){display:block;padding:1rem;border-bottom:1px solid var(--border-color, var(--color-gray-50, #8d8d8d))}slot::slotted(goat-card-content:last-child){border-bottom:none}";

const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { "shadow-level": this.shadowLevel }, h("div", { class: "card" }, h("slot", null))));
  }
};
Card.style = cardCss;

export { Card as goat_card };

//# sourceMappingURL=goat-card.entry.js.map