import { Component, Element, Event, h, Host, Prop, State } from '@stencil/core';
import { debounce } from '../../utils/utils';
const DEFAULT_CELL_WIDTH = 300;
const CHECKBOX_WIDTH = '3rem';
export class P4Grid {
  constructor() {
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
      leftHeaderRow.push(h("div", { class: "col", style: { width: CHECKBOX_WIDTH } },
        h("p4-checkbox", { class: "checkbox", value: this.isSelectAll, onP4Change: this.onSelectAllClick })));
    }
    this.columnConfig.forEach((col) => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = parseInt(col.width);
      const colEl = h("div", { class: "col", style: { width: colWidth + 'px', maxWidth: colWidth + 'px' } }, col.label);
      (col.fixed) ? leftHeaderRow.push(colEl) : rightHeaderRow.push(colEl);
    });
    return h("div", { class: "header" },
      h("div", { class: "left-panel" },
        h("div", { class: "table" },
          h("div", { class: "row" }, leftHeaderRow))),
      h("div", { class: "right-panel" },
        h("div", { class: "table" },
          h("div", { class: "row" }, rightHeaderRow))));
  }
  renderBody() {
    const rightBodyRows = [];
    const leftBodyRows = [];
    this.data.forEach((row) => {
      const bodyLeftRow = [];
      const bodyRightRow = [];
      if (this.selectionType === 'checkbox')
        bodyLeftRow.push(h("div", { class: { 'col': true, 'col-hover': this.hoverRecord === row }, style: { width: CHECKBOX_WIDTH } },
          h("p4-checkbox", { class: "checkbox", size: "sm", value: this.selectedRows.includes(row[this.rowKey]), onP4Change: () => this.onRowSelectClick(row) })));
      this.columnConfig.forEach((col) => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (col.width)
          colWidth = parseInt(col.width);
        const colEl = h("div", { class: { 'col': true, 'col-hover': this.hoverRecord === row }, style: { width: colWidth + 'px', maxWidth: colWidth + 'px' }, onMouseOver: () => this.onCellMouseOver(row), onClick: () => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, col);
          } },
          h("div", { class: "col-content" }, row[col.name] ? row[col.name] : ''));
        col.fixed ? bodyLeftRow.push(colEl) : bodyRightRow.push(colEl);
      });
      leftBodyRows.push(h("div", { class: "row" }, bodyLeftRow));
      rightBodyRows.push(h("div", { class: "row" }, bodyRightRow));
    });
    return h("div", { class: "body" },
      h("div", { class: "body-container" },
        h("div", { class: "left-panel" },
          h("div", { class: "table" }, leftBodyRows)),
        h("div", { class: "right-panel" },
          h("div", { class: "table" }, rightBodyRows))));
  }
  render() {
    return h(Host, null,
      h("div", { class: "grid-component" },
        h("div", { class: "list-scroll-wrapper", onScroll: (ev) => this.handleScroll(ev) },
          this.renderHeader(),
          (this.data.length) ? this.renderBody() : renderEmptyData())));
  }
  static get is() { return "p4-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-grid.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-grid.css"]
  }; }
  static get properties() { return {
    "columnConfig": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Grid columns configuration.\n[{\"name\":\"name\",\"label\":\"Name\",\"width\":300,\"fixed\":true},{\"name\":\"age\",\"label\":\"Age\"},{\"name\":\"eyeColor\",\"label\":\"Eye Color\",\"width\":500}]."
      },
      "defaultValue": "[]"
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Grid data to display on table\n[{'id': '5e7118ddce4b3d577956457f', 'index': 0, 'age': 21, 'eyeColor': 'blue', 'name': 'John', 'company': 'India', 'email': 'john@example.com', 'phone': '+1 (839) 560-3581', 'address': '326 Irving Street, Grimsley, Texas, 4048'}]"
      },
      "defaultValue": "[]"
    },
    "selectionType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'checkbox' | undefined",
        "resolved": "\"checkbox\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "selection-type",
      "reflect": false
    },
    "selectedRows": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "rowKey": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "row-key",
      "reflect": false,
      "defaultValue": "'id'"
    }
  }; }
  static get states() { return {
    "hoverRecord": {},
    "isSelectAll": {}
  }; }
  static get events() { return [{
      "method": "p4CellClick",
      "name": "p4CellClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "p4SelectChange",
      "name": "p4SelectChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
function renderEmptyData() {
  return h("div", { class: "empty-data" },
    h("div", { class: "empty-image" },
      h("svg", { width: "64", height: "41", viewBox: "0 0 64 41", xmlns: "http://www.w3.org/2000/svg" },
        h("g", { transform: "translate(0 1)", fill: "none", "fill-rule": "evenodd" },
          h("ellipse", { fill: "#F5F5F5", cx: "32", cy: "33", rx: "32", ry: "7" }),
          h("g", { "fill-rule": "nonzero", stroke: "#D9D9D9" },
            h("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }),
            h("path", { d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", fill: "#FAFAFA" }))))),
    h("p", { class: "empty-image-description" }, "No Data"));
}
