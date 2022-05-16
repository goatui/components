import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-a0beba19.js';

const tableCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;height:100%;min-height:20em;--table-border-color:var(--ui-04, var(--color-gray-50, #8d8d8d))}.table{height:100%;border:1px solid var(--table-border-color);font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}.table .table-scroll-container{position:relative;overflow:auto;height:100%}.table .empty-table{height:80%;display:flex;align-items:center;justify-content:center}.table.paginate .table-scroll-container{height:calc(100% - 2.4375rem)}.table .pagination{display:flex;border-top:1px solid var(--table-border-color)}.table .pagination .form-control{margin:0}.table .pagination .select{margin:0;--input-border-radius:none;--input-border-style:none;border-left:1px solid var(--table-border-color);border-right:1px solid var(--table-border-color)}.table .pagination .page-sizes-select{margin-inline-start:var(--spacing-3, 0.75rem)}.table .pagination .pagination-item-count{margin-inline-start:var(--spacing-4, 1rem);flex:1;display:flex;align-items:center}.row{display:flex;box-sizing:border-box}.row .columns-container{display:flex}.row .col{margin:0;color:var(--text-primary, var(--color-gray-100, #161616));box-sizing:border-box;vertical-align:middle;line-height:normal}.row .col .col-content{display:flex;align-items:center;height:100%}.row .col .col-content .col-text{padding:var(--spacing-2, 0.5rem) var(--spacing-3, 0.75rem);flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.row .col .col-content .col-action{--button-border-radius:none}.row .col .col-content .col-action.has-focus{z-index:12}.row .col .col-content .checkbox{padding:0 var(--spacing-3, 0.75rem)}.row .col.center .col-content{justify-content:center}.row .col:last-child{flex:1}.row .fixed-columns{position:sticky;left:0}.row .scrollable-columns{flex:1}.header{z-index:var(--z-index-table-header, 30);font-weight:var(--font-weight-semi-bold, 600);text-transform:uppercase;position:sticky;top:0;background:var(--ui-01, var(--color-gray-20, #e0e0e0))}.header .left-panel{position:sticky;top:0;left:0}.header .col{background:var(--ui-01, var(--color-gray-20, #e0e0e0));border-bottom:1px solid var(--table-border-color)}.header .col.sort{background:var(--active-ui, var(--color-gray-30, #c6c6c6))}.body .row:hover{background-color:var(--hover-ui, var(--color-gray-10, #f4f4f4))}.body .row:hover .col{background-color:var(--hover-ui, var(--color-gray-10, #f4f4f4))}.body .row .col{cursor:pointer;background:var(--background, #ffffff);border:2px solid transparent;border-bottom:1px solid var(--ui-03)}.body .row .col:focus{outline:none;border:2px solid var(--color-primary, var(--color-blue-60, #0f62fe));z-index:1}.body .left-panel{position:sticky;left:0}:host(.show-full-content) .body .col-text{overflow:initial;white-space:initial;text-overflow:initial}.empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;color:var(--color-neutral-600, )}";

const DEFAULT_CELL_WIDTH = 16; // in rem
const SUPPORTED_PAGE_SIZES = [{
    value: 10,
    label: 10,
  }, {
    value: 25,
    label: 25,
  }, {
    value: 50,
    label: 50,
  }, {
    value: 100,
    label: 100,
  }];
const Table = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatCellClick = createEvent(this, "goat:table-cell-click", 7);
    this.goatSelectChange = createEvent(this, "goat:table-select-change", 7);
    this.goatSort = createEvent(this, "goat:sort", 7);
    this.goatPage = createEvent(this, "goat:page", 7);
    /**
     * Grid columns configuration.
     * [
     * {
     *   "name":"name",
     *   "label":"Name",
     *   "width":300,
     *   "fixed":true
     *  },
     * {
     *   "name":"age",
     *   "label":"Age"
     * }
     * ]
     */
    this.columns = [];
    /**
     * Grid data to display on table
     * [{
     *  'id': '5e7118ddce4b3d577956457f',
     *  'age': 21,
     *  'name': 'John',
     *  'company': 'India',
     *  'email': 'john@example.com',
     *  'phone': '+1 (839) 560-3581',
     *  'address': '326 Irving Street, Grimsley, Texas, 4048'
     *  }]
     */
    this.data = [];
    this.selectedRowKeys = [];
    this.keyField = 'id';
    this.managed = false;
    this.sortable = true;
    this.sortOrder = 'asc';
    this.paginate = true;
    this.page = 1;
    this.pageSize = 10;
    this.emptyState = {
      'title': 'No items',
      'description': 'There are no items to display',
    };
    this.hoveredCell = {};
    this.isSelectAll = false;
    this.onSelectAllClick = () => {
      let selectedRowKeys = [];
      this.isSelectAll = !this.isSelectAll;
      if (this.isSelectAll)
        selectedRowKeys = this.data.map((row) => row[this.keyField]);
      this.onSelectChange(selectedRowKeys);
    };
    this.onRowSelectClick = (row) => {
      let selectedRowKeys = [...this.selectedRowKeys];
      if (selectedRowKeys.includes(row[this.keyField])) {
        this.isSelectAll = false;
        selectedRowKeys = selectedRowKeys.filter((rowId) => rowId !== row[this.keyField]);
      }
      else {
        selectedRowKeys.push(row[this.keyField]);
      }
      this.onSelectChange(selectedRowKeys);
    };
    this.onCellMouseOver = (row, column) => {
      this.hoveredCell = { row, column };
    };
  }
  onSelectChange(selectedRowKeys) {
    this.selectedRowKeys = selectedRowKeys;
    this.goatSelectChange.emit({ value: this.selectedRowKeys, isSelectAll: this.isSelectAll });
  }
  onCellClick(row, col) {
    this.goatCellClick.emit({ record: row, column: col });
  }
  renderHeader() {
    const fixedCols = [];
    const scrollCols = [];
    if (this.selectionType === 'checkbox') {
      fixedCols.push(h("div", { class: 'col center' }, h("div", { class: 'col-content' }, h("goat-checkbox", { class: 'checkbox light', size: 'sm', value: this.isSelectAll, "onGoat:change": this.onSelectAllClick }))));
    }
    this.columns.forEach((col) => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = parseInt(col.width);
      const colEl = h("div", { class: { 'col': true, 'sort': this.sortBy === col.name }, style: { width: colWidth + 'rem' } }, h("div", { class: 'col-content' }, h("div", { class: 'col-text' }, col.label), h("div", { class: 'col-actions' }, (() => {
        if (!this.sortable)
          return;
        let icon = 'arrow-down-up';
        if (this.sortBy === col.name) {
          if (this.sortOrder === 'asc')
            icon = 'arrow-up';
          else
            icon = 'arrow-down';
        }
        return h("goat-button", { size: 'sm', icon: icon, class: 'col-action color-secondary', variant: 'ghost', onClick: () => {
            if (this.sortBy === col.name) {
              if (this.sortOrder === 'asc')
                this.sortOrder = 'desc';
              else
                this.sortBy = null;
            }
            else {
              this.sortBy = col.name;
              this.sortOrder = 'asc';
            }
            this.goatSort.emit({ sortBy: this.sortBy, sortOrder: this.sortOrder });
          } });
      })())));
      (col.fixed) ? fixedCols.push(colEl) : scrollCols.push(colEl);
    });
    return h("div", { class: 'header' }, h("div", { class: 'row' }, h("div", { class: 'fixed-columns columns-container' }, fixedCols), h("div", { class: 'scrollable-columns columns-container' }, scrollCols)));
  }
  renderBody() {
    const rows = [];
    let data = [...this.data];
    if (!this.managed) {
      if (this.sortable && this.sortBy) {
        data = data.sort((a, b) => {
          if (a[this.sortBy] < b[this.sortBy])
            return this.sortOrder === 'asc' ? -1 : 1;
          if (a[this.sortBy] > b[this.sortBy])
            return this.sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
      }
      if (this.paginate) {
        data = data.slice((this.page - 1) * this.pageSize, (this.page) * this.pageSize);
      }
    }
    data.forEach((row) => {
      const fixedCols = [];
      const scrollCols = [];
      if (this.selectionType === 'checkbox')
        fixedCols.push(h("div", { class: { 'col': true, 'center': true } }, h("div", { class: 'col-content' }, h("goat-checkbox", { class: 'checkbox light', size: 'sm', value: this.selectedRowKeys.includes(row[this.keyField]), "onGoat:change": () => this.onRowSelectClick(row) }))));
      this.columns.forEach((column) => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (column.width)
          colWidth = parseInt(column.width);
        const colEl = h("div", { tabindex: '1', class: { 'col': true, 'col-hover': (this.hoveredCell.row === row && this.hoveredCell.column === column) }, style: { width: colWidth + 'rem' }, onMouseOver: () => this.onCellMouseOver(row, column), onClick: () => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, column);
          } }, h("div", { class: 'col-content' }, h("div", { class: 'col-text', title: row === null || row === void 0 ? void 0 : row[column.name] }, row === null || row === void 0 ? void 0 : row[column.name])));
        column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      });
      rows.push(h("div", { class: { 'row': true, 'row-hover': (this.hoveredCell.row === row) } }, h("div", { class: 'fixed-columns columns-container' }, fixedCols), h("div", { class: 'scrollable-columns columns-container' }, scrollCols)));
    });
    return h("div", { class: 'body' }, rows);
  }
  getTotalItems() {
    let totalItems = this.totalItems;
    if (this.paginate && !this.managed)
      totalItems = this.data.length;
    return totalItems;
  }
  renderPagination() {
    if (this.paginate)
      return h("div", { class: 'pagination' }, h("div", { class: 'page-sizes-select' }, h("goat-form-control", { label: 'Items per page:', inline: true, class: 'form-control' }, h("goat-select", { size: 'sm', class: 'select', items: SUPPORTED_PAGE_SIZES, positions: 'top-right', value: this.pageSize, "onGoat:change": (e) => {
          this.pageSize = e.detail.value;
          this.goatPage.emit({ page: this.page, pageSize: this.pageSize });
        } }))), h("div", { class: 'pagination-item-count' }, h("goat-text", { size: 'sm' }, this.pageSize * (this.page - 1), " - ", this.pageSize * (this.page) < this.getTotalItems() ? this.pageSize * (this.page) : this.getTotalItems(), " of ", this.getTotalItems(), " items")), h("div", { class: 'pagination-right' }, h("div", { class: 'table-footer-right-content' }, h("div", { class: 'table-footer-right-content-pagination' }, h("goat-button", { size: 'sm', icon: 'arrow-left', variant: 'ghost', disabled: this.page === 1, onClick: () => {
          this.page = this.page - 1;
          this.goatPage.emit({ page: this.page, pageSize: this.pageSize });
        } }), h("goat-button", { size: 'sm', icon: 'arrow-right', variant: 'ghost', disabled: this.pageSize * (this.page) >= this.getTotalItems(), onClick: () => {
          this.page = this.page + 1;
          this.goatPage.emit({ page: this.page, pageSize: this.pageSize });
        } })))));
  }
  render() {
    return h(Host, null, h("div", { class: { 'table': true, 'sortable': this.sortable, 'paginate': this.paginate } }, h("div", { class: 'table-scroll-container' }, this.renderHeader(), (this.data.length) ? this.renderBody() : this.renderEmptyState()), h("div", { class: 'table-footer' }, this.renderPagination())));
  }
  renderEmptyState() {
    return h("div", { class: 'empty-table' }, h("goat-empty-state", Object.assign({ class: 'content-center' }, this.emptyState)));
  }
  get elm() { return getElement(this); }
};
Table.style = tableCss;

export { Table as goat_table };

//# sourceMappingURL=goat-table.entry.js.map