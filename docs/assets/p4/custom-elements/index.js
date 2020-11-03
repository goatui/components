import { attachShadow, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const p4ButtonCss = ":host{color:red}@keyframes ripple{0%{transform:scale(0, 0);opacity:1}20%{transform:scale(25, 25);opacity:1}100%{opacity:0;transform:scale(40, 40)}}.button-component{font-weight:var(--font-weight-regular, 400);letter-spacing:var(--letter-spacing-solid, 0rem);line-height:0;box-shadow:0 2px 0 rgba(0, 0, 0, 0.015);border-radius:var(--radius-2, 6px);cursor:pointer;text-align:center;outline:none;transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;margin-bottom:12px;}.button-component:after{content:\"\";display:block;position:absolute;height:100%;width:100%;opacity:0;left:0;top:0;transition:all 0.8s}.button-component:active:after{width:0;height:0;opacity:1;top:50%;left:50%;transition:0s}.button-component.size-lg{height:40px;padding:0 15px;font-size:16px}.button-component.size-md{padding:0 15px;height:32px;font-size:14px}.button-component.size-sm{height:24px;padding:0 7px;font-size:14px}.button-component.variant-default,.button-component.variant-dashed{color:var(--color-gray-10, #36363e);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2)}.button-component.variant-default:after,.button-component.variant-dashed:after{background:var(--color-indigo-3, #bcbaff)}.button-component.variant-default:hover,.button-component.variant-default:focus,.button-component.variant-dashed:hover,.button-component.variant-dashed:focus{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.button-component.variant-dashed{border-style:dashed}.button-component.variant-primary{color:var(--color-white, #fff);background-color:var(--color-primary, var(--color-indigo-6, #4c48ff));border:1px solid var(--color-primary, var(--color-indigo-6, #4c48ff))}.button-component.variant-primary:after{background:var(--color-indigo-3, #bcbaff)}.button-component.variant-primary:hover,.button-component.variant-primary:focus{background-color:var(--color-indigo-5, #7d79ff)}.button-component.variant-danger{color:var(--color-white, #fff);background-color:var(--color-red-6, #ff4c47);border:1px solid var(--color-red-6, #ff4c47)}.button-component.variant-danger:after{background:var(--color-red-3, #ffbbb9)}.button-component.variant-danger:hover,.button-component.variant-danger:focus{background-color:var(--color-red-5, #ff7c78)}.button-component.variant-link{color:var(--color-primary, var(--color-indigo-6, #4c48ff));background-color:var(--color-white, #fff);border:none;box-shadow:none}.button-component.variant-link:after{background-color:var(--color-white, #fff)}.button-component.variant-link:hover,.button-component.variant-link:focus{background-color:var(--color-white, #fff)}.button-component[disabled],.button-component[disabled=true]{color:var(--color-gray-5, #aaa9bb);background-color:var(--color-gray-1, #f4f7fa);border-color:var(--color-gray-5, #aaa9bb);cursor:not-allowed}.button-component[disabled]:hover,.button-component[disabled=true]:hover{color:var(--color-gray-5, #aaa9bb);background-color:var(--color-gray-1, #f4f7fa);border-color:var(--color-gray-5, #aaa9bb)}.button-component.variant-link[disabled],.button-component.variant-link[disabled=true]{color:var(--color-gray-5, #aaa9bb);background-color:var(--color-white, #fff)}.button-component.block{width:100%}";

const P4Button = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.p4Click = createEvent(this, "p4Click", 7);
    /**
     * Button size.
     * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, fits button width to its parent width. Defaults to `false`.
     */
    this.block = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.onClick = (event) => {
      if (!this.disabled)
        this.p4Click.emit(event);
    };
  }
  getCssClasses() {
    let css = ['button-component'];
    if (this.block)
      css.push('block');
    css.push(`variant-${this.variant}`);
    css.push(`size-${this.size}`);
    return css.join(' ');
  }
  render() {
    return (h(Host, null, h("button", { class: this.getCssClasses(), onClick: this.onClick, disabled: this.disabled }, h("slot", null))));
  }
  static get style() { return p4ButtonCss; }
};

const p4CheckboxCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}@-webkit-keyframes checkboxEffect{0%{transform:scale(1);opacity:0.5}100%{transform:scale(1.6);opacity:0}}@keyframes checkboxEffect{0%{transform:scale(1);opacity:0.5}100%{transform:scale(1.6);opacity:0}}.checkbox-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);font-size:var(--font-size-5, 1rem);}.checkbox-component .checkbox{margin:0;padding:0;color:rgba(0, 0, 0, 0.65);font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:\"tnum\";position:relative;top:-0.09em;display:inline-block;white-space:nowrap;vertical-align:middle;outline:none;cursor:pointer}.checkbox-component .checkbox-wrapper:hover .checkbox-inner,.checkbox-component .checkbox:hover .checkbox-inner,.checkbox-component .checkbox-input:focus+.checkbox-inner{border-color:var(--color-blue-7, #4087e2)}.checkbox-component .checkbox-checked::after{position:absolute;top:0;left:0;border:1px solid var(--color-blue-7, #4087e2);border-radius:2px;visibility:hidden;animation:checkboxEffect 0.36s ease-in-out;animation-fill-mode:backwards;content:\"\"}.checkbox-component .checkbox:hover::after,.checkbox-component .checkbox-wrapper:hover .checkbox::after{visibility:visible}.checkbox-component .checkbox-inner{position:relative;top:0;left:0;display:block;width:1.2em;height:1.2em;background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);border-radius:2px;border-collapse:separate;transition:all 0.3s}.checkbox-component .checkbox-inner::after{position:absolute;top:45%;left:12%;display:table;width:0.35em;height:0.7em;border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg) scale(0) translate(-50%, -50%);opacity:0;transition:all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;content:\" \"}.checkbox-component .checkbox-input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;cursor:pointer;opacity:0;margin:0}.checkbox-component .checkbox-checked .checkbox-inner{background-color:var(--color-blue-7, #4087e2);border-color:var(--color-blue-7, #4087e2)}.checkbox-component .checkbox-checked .checkbox-inner::after{position:absolute;display:table;border:2px solid var(--color-white, #fff);border-top:0;border-left:0;transform:rotate(45deg) scale(1) translate(-50%, -50%);opacity:1;transition:all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;content:\" \"}.checkbox-component .checkbox-disabled.checkbox-checked .checkbox-inner::after{animation-name:none}.checkbox-component .checkbox-disabled .checkbox-inner{background-color:#f5f5f5;border-color:#d9d9d9 !important}.checkbox-component .checkbox-disabled .checkbox-inner::after{border-color:#f5f5f5;border-collapse:separate;animation-name:none}.checkbox-component .checkbox-disabled,.checkbox-component .checkbox-disabled+span,.checkbox-component .checkbox-disabled .checkbox-input{cursor:not-allowed}.checkbox-component .checkbox-disabled:hover::after,.checkbox-component .checkbox-wrapper:hover .checkbox-disabled::after{visibility:hidden}.checkbox-component .checkbox-wrapper{margin:0;padding:0;color:rgba(0, 0, 0, 0.65);display:inline-block;line-height:unset;cursor:pointer}.checkbox-component .checkbox-wrapper+.checkbox-wrapper{margin-left:8px}.checkbox-component .checkbox+span{padding-right:8px;padding-left:8px}.checkbox-component.variant-dashed .checkbox-inner{border-style:dashed}.checkbox-component.size-lg{font-size:var(--font-size-5, 1rem)}.checkbox-component.size-md{font-size:var(--font-size-4, 0.875rem)}.checkbox-component.size-sm{font-size:var(--font-size-3, 0.8125rem)}";

const P4Checkbox = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.p4Change = createEvent(this, "p4Change", 7);
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The input field value.
     */
    this.value = false;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.onChange = (event) => {
      if (!this.disabled) {
        this.value = !JSON.parse(event.target.value);
        this.p4Change.emit(event);
      }
    };
  }
  getCssClasses() {
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
    return (h(Host, null, h("div", { class: this.getCssClasses() }, h("label", { class: "checkbox-wrapper" }, h("span", { class: { 'checkbox': true, 'checkbox-checked': this.value, 'checkbox-disabled': this.disabled } }, h("input", { type: "checkbox", class: "checkbox-input", value: this.value + '', onClick: this.onChange, disabled: this.disabled }), h("span", { class: "checkbox-inner" })), this.label && h("span", null, this.label)))));
  }
  static get style() { return p4CheckboxCss; }
};

const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
const findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest('p4-item');
  if (itemEl) {
    return itemEl.querySelector('p4-label');
  }
  return null;
};

const p4GridCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.grid-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);font-size:var(--font-size-5, 1rem);font-weight:var(--font-weight-regular, 400);letter-spacing:var(--letter-spacing-solid, 0em);border:1px solid var(--color-gray-3, #dcdbe2);height:100%}.grid-component .list-scroll-wrapper{position:relative;overflow:auto;height:100%;width:100%;min-height:20em}.grid-component .list-scroll-wrapper .header{position:absolute;left:0;top:0;z-index:100}.grid-component .list-scroll-wrapper .body{position:absolute;padding-top:100px}.grid-component .list-scroll-wrapper .body-container{position:relative}.grid-component .list-scroll-wrapper .left-panel{position:absolute}.grid-component .list-scroll-wrapper .table{display:table;line-height:normal}.grid-component .list-scroll-wrapper .table .row{display:table-row;line-height:normal}.grid-component .list-scroll-wrapper .table .col{display:table-cell;margin:0;border-right:1px solid var(--color-gray-3, #dcdbe2);border-bottom:1px solid var(--color-gray-3, #dcdbe2);padding:12px;line-height:normal}.grid-component .list-scroll-wrapper .table .checkbox{line-height:normal}.grid-component .list-scroll-wrapper .header .col{background:#fafafa}.grid-component .list-scroll-wrapper .body .row .col{background:white}.grid-component .list-scroll-wrapper .body .row .col .col-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.grid-component .list-scroll-wrapper .body .row .col.col-hover{background:#e6f7ff}.grid-component .list-scroll-wrapper .right-panel .table{width:100%;table-layout:fixed}.grid-component .list-scroll-wrapper .right-panel .table .col:last-child{border-right:none}.grid-component .list-scroll-wrapper .empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;color:var(--color-gray-6, #9f9eb2)}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}";

const DEFAULT_CELL_WIDTH = 300;
const CHECKBOX_WIDTH = '3rem';
const P4Grid = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.p4CellClick = createEvent(this, "p4CellClick", 7);
    this.p4SelectChange = createEvent(this, "p4SelectChange", 7);
    this.isSelectAll = false;
    /**
     * Grid columns configuration.
     * [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}].
     */
    this.columnConfig = [];
    /**
     * Grid data to display on table
     * [{'id': '5e7118ddce4b3d577956457f', 'index': 0, 'age': 21, 'eyeColor': 'blue', 'name': 'John', 'company': 'India', 'email': 'john@example.com', 'phone': '+1 (839) 560-3581', 'address': '326 Irving Street, Grimsley, Texas, 4048'}]
     */
    this.data = [];
    this.selectedRows = [];
    this.rowKey = 'id';
    this.onSelectAllClick = () => {
      let selectedRows = [];
      this.isSelectAll = !this.isSelectAll;
      if (this.isSelectAll)
        selectedRows = this.data.map((row) => row[this.rowKey]);
      this.onSelectChange(selectedRows);
    };
    this.onRowSelectClick = (row) => {
      let selectedRows = [...this.selectedRows];
      if (selectedRows.includes(row[this.rowKey])) {
        this.isSelectAll = false;
        selectedRows = selectedRows.filter((rowId) => rowId !== row[this.rowKey]);
      }
      else {
        selectedRows.push(row[this.rowKey]);
      }
      this.onSelectChange(selectedRows);
    };
    this.onCellMouseOver = (row) => {
      this.hoverRecord = row;
    };
    this.handleScroll = debounce(() => {
      debugger;
      const $root = this.el.shadowRoot;
      const $header = $root.querySelector('.header');
      const $headerRightPanel = $header.querySelector('.right-panel');
      const $leftPanels = $root.querySelectorAll('.left-panel');
      const $listScrollWrapper = $root.querySelector('.list-scroll-wrapper');
      const movedBy = $listScrollWrapper.getBoundingClientRect().x - $headerRightPanel.getBoundingClientRect().x;
      $leftPanels.forEach(function ($leftPanel) {
        $leftPanel.style.left = movedBy + 'px';
      });
      const $body = $root.querySelector('.body');
      if ($body)
        $header.style.top = ($listScrollWrapper.getBoundingClientRect().y - $body.getBoundingClientRect().y) + 'px';
    }, 10);
  }
  onSelectChange(selectedRows) {
    const oldValue = this.selectedRows;
    this.selectedRows = selectedRows;
    this.p4SelectChange.emit({ oldValue: oldValue, newValue: this.selectedRows });
  }
  onCellClick(row, col) {
    this.p4CellClick.emit({ record: row, column: col });
  }
  componentDidRender() {
    const $root = this.el.shadowRoot;
    const $headerPanel = $root.querySelector('.header');
    const $headerLeftPanel = $headerPanel.querySelector('.left-panel');
    const $headerRightPanel = $headerPanel.querySelector('.right-panel');
    let leftPanelWidth = $headerLeftPanel.clientWidth;
    $headerRightPanel.style.paddingLeft = leftPanelWidth + 'px';
    if (this.data && this.data.length) {
      const $bodyPanel = $root.querySelector('.body');
      const $bodyRightPanel = $bodyPanel.querySelector('.right-panel');
      $bodyRightPanel.style.paddingLeft = leftPanelWidth + 'px';
      $bodyPanel.style.paddingTop = $headerPanel.clientHeight + 'px';
    }
  }
  renderHeader() {
    const leftHeaderRow = [];
    const rightHeaderRow = [];
    if (this.selectionType === 'checkbox') {
      leftHeaderRow.push(h("div", { class: "col", style: { width: CHECKBOX_WIDTH } }, h("p4-checkbox", { class: "checkbox", value: this.isSelectAll, onP4Change: this.onSelectAllClick })));
    }
    this.columnConfig.forEach((col) => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = parseInt(col.width);
      const colEl = h("div", { class: "col", style: { width: colWidth + 'px', maxWidth: colWidth + 'px' } }, col.label);
      (col.fixed) ? leftHeaderRow.push(colEl) : rightHeaderRow.push(colEl);
    });
    return h("div", { class: "header" }, h("div", { class: "left-panel" }, h("div", { class: "table" }, h("div", { class: "row" }, leftHeaderRow))), h("div", { class: "right-panel" }, h("div", { class: "table" }, h("div", { class: "row" }, rightHeaderRow))));
  }
  renderBody() {
    const rightBodyRows = [];
    const leftBodyRows = [];
    this.data.forEach((row) => {
      const bodyLeftRow = [];
      const bodyRightRow = [];
      if (this.selectionType === 'checkbox')
        bodyLeftRow.push(h("div", { class: { 'col': true, 'col-hover': this.hoverRecord === row }, style: { width: CHECKBOX_WIDTH } }, h("p4-checkbox", { class: "checkbox", size: "sm", value: this.selectedRows.includes(row[this.rowKey]), onP4Change: () => this.onRowSelectClick(row) })));
      this.columnConfig.forEach((col) => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (col.width)
          colWidth = parseInt(col.width);
        const colEl = h("div", { class: { 'col': true, 'col-hover': this.hoverRecord === row }, style: { width: colWidth + 'px', maxWidth: colWidth + 'px' }, onMouseOver: () => this.onCellMouseOver(row), onClick: () => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, col);
          } }, h("div", { class: "col-content" }, row[col.name] ? row[col.name] : ''));
        col.fixed ? bodyLeftRow.push(colEl) : bodyRightRow.push(colEl);
      });
      leftBodyRows.push(h("div", { class: "row" }, bodyLeftRow));
      rightBodyRows.push(h("div", { class: "row" }, bodyRightRow));
    });
    return h("div", { class: "body" }, h("div", { class: "body-container" }, h("div", { class: "left-panel" }, h("div", { class: "table" }, leftBodyRows)), h("div", { class: "right-panel" }, h("div", { class: "table" }, rightBodyRows))));
  }
  render() {
    return h(Host, null, h("div", { class: "grid-component" }, h("div", { class: "list-scroll-wrapper", onScroll: (ev) => this.handleScroll(ev) }, this.renderHeader(), (this.data.length) ? this.renderBody() : renderEmptyData())));
  }
  get el() { return this; }
  static get style() { return p4GridCss; }
};
function renderEmptyData() {
  return h("div", { class: "empty-data" }, h("div", { class: "empty-image" }, h("svg", { width: "64", height: "41", viewBox: "0 0 64 41", xmlns: "http://www.w3.org/2000/svg" }, h("g", { transform: "translate(0 1)", fill: "none", "fill-rule": "evenodd" }, h("ellipse", { fill: "#F5F5F5", cx: "32", cy: "33", rx: "32", ry: "7" }), h("g", { "fill-rule": "nonzero", stroke: "#D9D9D9" }, h("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }), h("path", { d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", fill: "#FAFAFA" }))))), h("p", { class: "empty-image-description" }, "No Data"));
}

const Alarm = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-alarm" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg>`;

const ChevronLeft = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>`;

const ChevronRight = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

const ChevronDown = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>`;

const ChevronUp = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>`;

const House = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>`;

const Book = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>`;

const ColumnsGap = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-columns-gap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
</svg>`;

const Search = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
</svg>`;

const PieChartFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pie-chart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
</svg>`;

const Tools = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
  <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg>`;

const Trash = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`;

const X = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

const Envelope = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg>`;

const InboxFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-inbox-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
</svg>`;

const Inbox = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-inbox" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
</svg>`;

const InfoCircle = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
  <circle cx="8" cy="4.5" r="1"/>
</svg>`;

const InfoCircleFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>`;

const CaretDownFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>`;

const CaretUpFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>`;

const Pencil = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>`;

const Info = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
  <circle cx="8" cy="4.5" r="1"/>
</svg>`;

const p4IconCss = ":host{display:inline-block;color:var(--color-gray-10, #36363e)}:host-context(.item){--color:initial;color:var(--color)}:host(.danger){color:var(--color-red-6, #ff4c47)}:host(.success){color:var(--color-green-6, #48ff4d)}:host(.primary){color:var(--color-primary, var(--color-indigo-6, #4c48ff))}";

const ICONS = {
  'alarm': Alarm,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'envelope': Envelope,
  'house': House,
  'book': Book,
  'columns-gap': ColumnsGap,
  'search': Search,
  'pie-chart-fill': PieChartFill,
  'tools': Tools,
  'trash': Trash,
  'x': X,
  'inbox-fill': InboxFill,
  'inbox': Inbox,
  'info-circle': InfoCircle,
  'info-circle-fill': InfoCircleFill,
  'caret-down-fill': CaretDownFill,
  'caret-up-fill': CaretUpFill,
  'pencil': Pencil,
  'info': Info
};
const P4Icon = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.type = 'alarm';
    /**
     * Icon variants to add additional styling
     * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  getCssClasses() {
    const cls = ['icon-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }
  render() {
    let Icon = ICONS[this.type];
    if (!Icon)
      return null;
    Icon = Icon.replace('width="1em"', 'width="' + this.getSize() + '"').replace('height="1em"', 'height="' + this.getSize() + '"');
    return (h(Host, null, h("div", { innerHTML: Icon, class: this.getCssClasses() })));
  }
  static get style() { return p4IconCss; }
};

const p4InputCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}.input-component{}.input-component.size-lg{height:2.75rem}.input-component.size-md{height:2rem}.input-component.size-sm{height:1.5rem}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}";

let inputIds = 0;
const P4Input = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.p4Input = createEvent(this, "p4Input", 7);
    this.p4Change = createEvent(this, "p4Change", 7);
    this.p4Blur = createEvent(this, "p4Blur", 7);
    this.p4Focus = createEvent(this, "p4Focus", 7);
    this.inputId = `p4-input-${inputIds++}`;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = this.inputId;
    /**
     * The input field value.
     */
    this.value = '';
    /**
     * The input field size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Input field variants to add additional styling
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The type of control to display. The default type is text.
     */
    this.type = 'text';
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
     */
    this.debounce = 0;
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = 'off';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.p4Blur.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  getCssClasses() {
    const cls = ['input-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.p4Change.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }
  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.el,
    }));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.el,
    }));
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, h("div", { class: this.getCssClasses() }, h("input", { class: "native-input", name: this.name, "aria-labelledby": labelId, ref: input => this.nativeInput = input, type: this.type, placeholder: this.placeholder, autocomplete: this.autocomplete, value: value, tabindex: this.tabindex, required: this.required, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, disabled: this.disabled }), h("div", { class: "input-actions" }, (this.clearInput && !this.disabled && this.hasValue()) && h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, h("p4-icon", { type: "x", size: "1.1rem", class: "icon" }))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["valueChanged"],
    "debounce": ["debounceChanged"]
  }; }
  static get style() { return p4InputCss; }
};

const p4ItemCss = ":host{display:block}";

const P4Item = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return p4ItemCss; }
};

const p4LabelCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}:host-context(.item){--color:initial;display:block;color:var(--color);font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}:host([text-wrap]){white-space:normal}::slotted(*) h1,::slotted(*) h2,::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{text-overflow:inherit;overflow:inherit}.label-component{padding-bottom:0.5rem;display:inline-block}:host(.required)::before{display:inline-block;margin-right:4px;color:var(--color-red-6, #ff4c47);font-size:14px;font-family:SimSun, sans-serif;line-height:1;content:\"*\"}";

const P4Label = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("div", { class: "label-component" }, h("slot", null))));
  }
  static get style() { return p4LabelCss; }
};

const p4SelectCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}.select-component{}.select-component.mode-read .native-input{display:none}.select-component.mode-edit .select-selection-item{display:none}.select-component .select-result{position:absolute;top:110%;width:100%;left:0;padding:0.2rem 0;z-index:1000;background-color:white;box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);transition:background 1s cubic-bezier(0.075, 0.82, 0.165, 1)}.select-component .select-result .select-option{padding:0.25rem 0.75rem;cursor:pointer}.select-component .select-result .select-option.select-option-active{background-color:var(--color-gray-2, #eef0f2)}.select-component .no-data{text-align:center;color:var(--color-gray-8, #626175);padding:15px}.select-component .no-data p4-icon{max-height:4em;max-width:4em}.select-component .no-data .no-data-text{font-size:1.2em}.select-component.size-lg{height:2.75rem}.select-component.size-lg .display-value{line-height:2}.select-component.size-md{height:2rem}.select-component.size-sm{height:1.5rem}.select-component.size-sm .display-value{line-height:1}";

let inputIds$1 = 0;
const P4Select = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.p4Input = createEvent(this, "p4Input", 7);
    this.p4Change = createEvent(this, "p4Change", 7);
    this.p4ActionClick = createEvent(this, "p4ActionClick", 7);
    this.p4Blur = createEvent(this, "p4Blur", 7);
    this.p4Focus = createEvent(this, "p4Focus", 7);
    this.inputId = `p4-select-${inputIds$1++}`;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = this.inputId;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.showLoader = false;
    this.filterOptions = true;
    this.config = { itemValue: 'value', itemLabel: 'label' };
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.options = [];
    this.actions = [];
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
     */
    this.debounce = 0;
    this.mode = 'read';
    this.searchString = '';
    this.onChange = (item) => {
      if (!this.disabled) {
        this.setReadable();
        this.value = this.getItemValue(item);
        this.searchString = '';
        this.p4Change.emit(item);
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.searchString = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onKeyDown = (ev) => {
      if (ev.key === 'Enter') {
        if (this.activeOption)
          this.onChange(this.activeOption);
      }
      else if (ev.key === 'ArrowDown') {
        const options = this.getDisplayOptions();
        if (!this.activeOption)
          this.activeOption = options[0];
        else {
          const index = options.findIndex((option) => {
            return this.getItemValue(option) == this.getItemValue(this.activeOption);
          });
          this.activeOption = options[(index + 1) % options.length];
        }
      }
      else if (ev.key === 'ArrowUp') {
        const options = this.getDisplayOptions();
        if (!this.activeOption)
          this.activeOption = options[options.length - 1];
        else {
          const index = options.findIndex((option) => {
            return this.getItemValue(option) == this.getItemValue(this.activeOption);
          });
          this.activeOption = options[((options.length + index - 1) % options.length)];
        }
      }
    };
    this.onActionClick = (action) => {
      this.p4ActionClick.emit(action.name);
    };
    this.setEditable = () => {
      if (!this.disabled && this.mode == 'read') {
        if (this.options.length)
          this.activeOption = this.options[0];
        this.mode = 'edit';
        setTimeout(() => {
          this.setFocus();
        }, 100);
      }
    };
    this.setReadable = () => {
      if (!this.disabled && this.mode == 'edit') {
        this.mode = 'read';
      }
    };
    this.onBlur = () => {
      this.hasFocus = false;
      setTimeout(() => {
        this.setReadable();
      }, 300);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter')
        this.clearTextInput(ev);
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = null;
      this.searchString = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  optionsWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.options = JSON.parse(newValue);
    }
  }
  configWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.config = JSON.parse(newValue);
    }
  }
  getOptionLabelByValue(value) {
    if (typeof this.options !== 'string') {
      const item = this.options.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }
  getItemValue(item) {
    return item[this.config.itemValue];
  }
  getItemLabel(item) {
    return item[this.config.itemLabel];
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getComponentStyleClasses() {
    const cls = ['component input-component select-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('mode-' + this.mode);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }
  getActions() {
    return this.actions.map((action) => {
      return h("button", { type: "button", onClick: () => this.onActionClick(action) }, h("p4-icon", { type: action.icon, size: "1rem", class: "icon" }));
    });
  }
  getModeIcon() {
    if (this.showLoader)
      return h("button", { type: "button", disabled: true }, h("p4-spinner", { class: "icon", size: "1.5rem" }));
    else if (this.mode === 'read') {
      return h("button", { type: "button", onClick: () => setTimeout(() => this.setEditable()) }, h("p4-icon", { type: "chevron-down", size: "1rem", class: "icon" }));
    }
    else {
      return h("button", { type: "button", disabled: true }, h("p4-icon", { type: "search", size: "1rem", class: "icon" }));
    }
  }
  getDisplayOptions() {
    let options = [];
    if (typeof this.options !== 'string') {
      options = this.options;
      if (this.filterOptions)
        options = this.options.filter((item) => {
          return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
        });
    }
    return options;
  }
  getOptions() {
    if (typeof this.options !== 'string') {
      const options = this.getDisplayOptions();
      if (this.mode == 'edit')
        return h("div", { class: "select-result" }, h("div", { class: "select-items" }, options.length ?
          options.map((item) => {
            return h("div", { class: {
                'select-option': true,
                'select-option-active': (this.activeOption && this.getItemValue(item) === this.getItemValue(this.activeOption)),
              }, "data-value": this.getItemValue(item), "on-mouseover": () => {
                this.activeOption = item;
              }, "on-click": () => this.onChange(item) }, this.getItemLabel(item));
          })
          :
            (!this.searchString && !this.filterOptions && !this.showLoader) ?
              (h("div", { class: "no-data" }, h("p4-icon", { type: "pencil", size: "100%" }), h("div", { class: "no-data-text" }, "Please enter text to search")))
              : (h("div", { class: "no-data" }, h("p4-icon", { type: "inbox-fill", size: "100%" }), h("div", { class: "no-data-text" }, "No data")))));
    }
  }
  async componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
    this.optionsWatcher(this.options);
    this.configWatcher(this.config);
  }
  render() {
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, h("div", { class: this.getComponentStyleClasses() }, h("input", { class: "native-input", ref: input => this.nativeInput = input, type: "text", "aria-labelledby": labelId, name: this.name, value: this.searchString, placeholder: this.placeholder, tabindex: this.tabindex, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, onKeyDown: this.onKeyDown }), h("div", { class: "select-selection-item display-value", tabindex: "1", onFocus: this.setEditable, onClick: this.setEditable }, this.getOptionLabelByValue(this.value)), h("div", { class: "input-actions" }, (this.clearInput && !this.disabled && this.hasValue()) && h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, h("p4-icon", { type: "x", size: "1.1rem", class: "icon" })), this.getActions(), this.getModeIcon()), this.getOptions())));
  }
  get el() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "options": ["optionsWatcher"],
    "config": ["configWatcher"]
  }; }
  static get style() { return p4SelectCss; }
};

const p4SpinnerCss = ":host{display:inline-block}.spinner-component.variant-default{color:var(--color-black, #000)}.spinner-component.variant-primary{color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.spinner-component.variant-danger{color:var(--color-red-6, #ff4c47)}.spinner-component.variant-success{color:var(--color-green-6, #48ff4d)}";

const P4Spinner = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    /**
     * Spinner variants to add additional styling
     * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  getCssClasses() {
    const cls = ['spinner-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }
  render() {
    return (h(Host, null, h("div", { class: this.getCssClasses() }, h("svg", { version: "1.1", class: "loader icon-svg", x: "0px", y: "0px", width: this.getSize(), height: this.getSize(), viewBox: "0 0 50 50", fill: "currentColor" }, h("path", { fill: "#000", d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" }, h("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))))));
  }
  static get style() { return p4SpinnerCss; }
};

const p4TextareaCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}.textarea-component textarea.native-input{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);resize:vertical}.textarea-component .input-actions{position:absolute;right:0;top:0;height:2rem}";

let inputIds$2 = 0;
const P4Textarea = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.p4Input = createEvent(this, "p4Input", 7);
    this.p4Change = createEvent(this, "p4Change", 7);
    this.p4Blur = createEvent(this, "p4Blur", 7);
    this.p4Focus = createEvent(this, "p4Focus", 7);
    this.inputId = `p4-textarea-${inputIds$2++}`;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = this.inputId;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, the form will be in inline format. Defaults to `false`.
     */
    this.inline = false;
    /**
     * Button variants
     * Possible values are `"text"`. Defaults to `"text"`.
     */
    this.type = 'text';
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */
    this.debounce = 0;
    this.onInputChange = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.p4Blur.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  getCssClasses() {
    const cls = ['component input-component textarea-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.p4Change.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }
  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.el,
    }));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.el,
    }));
  }
  getValue() {
    return (this.value || '').toString();
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, h("div", { class: this.getCssClasses() }, h("textarea", { rows: 4, ref: input => this.nativeInput = input, required: this.required, class: "native-input", name: this.name, "aria-labelledby": labelId, placeholder: this.placeholder, value: value, tabindex: this.tabindex, onInput: this.onInputChange, onBlur: this.onBlur, onFocus: this.onFocus, disabled: this.disabled }), h("div", { class: "input-actions" }, (this.clearInput && !this.disabled && this.hasValue()) && h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, h("p4-icon", { type: "x", size: "1.1rem", class: "icon" }))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
  static get style() { return p4TextareaCss; }
};

const P4Button$1 = /*@__PURE__*/proxyCustomElement(P4Button, [1,"p4-button",{"size":[1],"variant":[1],"block":[4],"disabled":[4]}]);
const P4Checkbox$1 = /*@__PURE__*/proxyCustomElement(P4Checkbox, [1,"p4-checkbox",{"label":[1],"variant":[1],"value":[4],"size":[1],"required":[4],"disabled":[4]}]);
const P4Grid$1 = /*@__PURE__*/proxyCustomElement(P4Grid, [1,"p4-grid",{"columnConfig":[16],"data":[16],"selectionType":[1,"selection-type"],"selectedRows":[16],"rowKey":[1,"row-key"],"hoverRecord":[32],"isSelectAll":[32]}]);
const P4Icon$1 = /*@__PURE__*/proxyCustomElement(P4Icon, [1,"p4-icon",{"type":[1],"variant":[1],"size":[1]}]);
const P4Input$1 = /*@__PURE__*/proxyCustomElement(P4Input, [1,"p4-input",{"name":[1],"placeholder":[1],"value":[1032],"size":[1],"variant":[1],"type":[1],"disabled":[4],"required":[4],"clearInput":[4,"clear-input"],"debounce":[2],"autocomplete":[1],"hasFocus":[32]}]);
const P4Item$1 = /*@__PURE__*/proxyCustomElement(P4Item, [1,"p4-item"]);
const P4Label$1 = /*@__PURE__*/proxyCustomElement(P4Label, [1,"p4-label"]);
const P4Select$1 = /*@__PURE__*/proxyCustomElement(P4Select, [1,"p4-select",{"name":[1],"placeholder":[1],"value":[1032],"size":[1],"variant":[1],"required":[4],"disabled":[4],"showLoader":[4,"show-loader"],"filterOptions":[4,"filter-options"],"config":[8],"options":[1],"actions":[16],"clearInput":[4,"clear-input"],"debounce":[2],"activeOption":[32],"hasFocus":[32],"mode":[32],"searchString":[32]}]);
const P4Spinner$1 = /*@__PURE__*/proxyCustomElement(P4Spinner, [1,"p4-spinner",{"variant":[1],"size":[1]}]);
const P4Textarea$1 = /*@__PURE__*/proxyCustomElement(P4Textarea, [1,"p4-textarea",{"name":[1],"placeholder":[1],"value":[1],"size":[1],"variant":[1],"inline":[4],"type":[1],"disabled":[4],"required":[4],"clearInput":[4,"clear-input"],"debounce":[2],"hasFocus":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      P4Button$1,
  P4Checkbox$1,
  P4Grid$1,
  P4Icon$1,
  P4Input$1,
  P4Item$1,
  P4Label$1,
  P4Select$1,
  P4Spinner$1,
  P4Textarea$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { P4Button$1 as P4Button, P4Checkbox$1 as P4Checkbox, P4Grid$1 as P4Grid, P4Icon$1 as P4Icon, P4Input$1 as P4Input, P4Item$1 as P4Item, P4Label$1 as P4Label, P4Select$1 as P4Select, P4Spinner$1 as P4Spinner, P4Textarea$1 as P4Textarea, defineCustomElements };
