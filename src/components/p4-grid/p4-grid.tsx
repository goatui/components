import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { debounce } from '../../utils/utils';

const DEFAULT_CELL_WIDTH = 300;
const CHECKBOX_WIDTH = '3rem';

@Component({
  tag: 'p4-grid',
  styleUrl: 'p4-grid.scss',
  shadow: true,
})
export class P4Grid {

  @Element() private el: HTMLElement;

  @State() private hoverRecord: any;
  @State() private isSelectAll: boolean = false;

  /**
   * Grid columns configuration.
   * [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}].
   */
  @Prop() columnConfig: any[] = [];

  /**
   * Grid data to display on table
   * [{'id': '5e7118ddce4b3d577956457f', 'index': 0, 'age': 21, 'eyeColor': 'blue', 'name': 'John', 'company': 'India', 'email': 'john@example.com', 'phone': '+1 (839) 560-3581', 'address': '326 Irving Street, Grimsley, Texas, 4048'}]
   */
  @Prop() data: any[] = [];

  @Prop() selectionType: 'checkbox' | undefined;

  @Prop() selectedRows: string[] = [];

  @Prop() rowKey: string = 'id';

  @Event() p4CellClick: EventEmitter;

  @Event() p4SelectChange: EventEmitter;


  onSelectAllClick = () => {
    let selectedRows = [];
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll)
      selectedRows = this.data.map((row) => row[this.rowKey]);
    this.onSelectChange(selectedRows);
  };

  onRowSelectClick = (row) => {
    let selectedRows = [...this.selectedRows];
    if (selectedRows.includes(row[this.rowKey])) {
      this.isSelectAll = false;
      selectedRows = selectedRows.filter((rowId) => rowId !== row[this.rowKey]);
    } else {
      selectedRows.push(row[this.rowKey]);
    }
    this.onSelectChange(selectedRows);
  };

  onCellMouseOver = (row: any) => {
    this.hoverRecord = row;
  };


  onSelectChange(selectedRows: any) {
    const oldValue = this.selectedRows;
    this.selectedRows = selectedRows;
    this.p4SelectChange.emit({ oldValue: oldValue, newValue: this.selectedRows });
  }

  onCellClick(row: any, col: any) {
    this.p4CellClick.emit({ record: row, column: col });
  }

  handleScroll = debounce(() => {
    debugger;
    const $root = this.el.shadowRoot;
    const $header: HTMLElement = $root.querySelector('.header');
    const $headerRightPanel: HTMLElement = $header.querySelector('.right-panel');
    const $leftPanels = $root.querySelectorAll('.left-panel');


    const $listScrollWrapper = $root.querySelector('.list-scroll-wrapper');
    const movedBy = $listScrollWrapper.getBoundingClientRect().x - $headerRightPanel.getBoundingClientRect().x;
    $leftPanels.forEach(function($leftPanel: HTMLElement) {
      $leftPanel.style.left = movedBy + 'px';
    });

    const $body: HTMLElement = $root.querySelector('.body');
    if ($body)
      $header.style.top = ($listScrollWrapper.getBoundingClientRect().y - $body.getBoundingClientRect().y) + 'px';
  }, 10);

  componentDidRender() {
    const $root = this.el.shadowRoot;
    const $headerPanel: HTMLElement = $root.querySelector('.header');
    const $headerLeftPanel: HTMLElement = $headerPanel.querySelector('.left-panel');
    const $headerRightPanel: HTMLElement = $headerPanel.querySelector('.right-panel');
    let leftPanelWidth = $headerLeftPanel.clientWidth;
    $headerRightPanel.style.paddingLeft = leftPanelWidth + 'px';

    if (this.data && this.data.length) {
      const $bodyPanel: HTMLElement = $root.querySelector('.body');
      const $bodyRightPanel: HTMLElement = $bodyPanel.querySelector('.right-panel');
      $bodyRightPanel.style.paddingLeft = leftPanelWidth + 'px';
      $bodyPanel.style.paddingTop = $headerPanel.clientHeight + 'px';
    }
  }

  renderHeader() {
    const leftHeaderRow = [];
    const rightHeaderRow = [];

    if (this.selectionType === 'checkbox') {
      leftHeaderRow.push(
        <div class="col" style={{ width: CHECKBOX_WIDTH }}>
          <p4-checkbox class="checkbox" value={this.isSelectAll} onP4Change={this.onSelectAllClick} />
        </div>);
    }
    this.columnConfig.forEach((col) => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = parseInt(col.width);
      const colEl = <div class="col" style={{ width: colWidth + 'px', maxWidth: colWidth + 'px' }}>{col.label}</div>;
      (col.fixed) ? leftHeaderRow.push(colEl) : rightHeaderRow.push(colEl);
    });

    return <div class="header">
      <div class="left-panel">
        <div class="table">
          <div class="row">
            {leftHeaderRow}
          </div>
        </div>
      </div>
      <div class="right-panel">
        <div class="table">
          <div class="row">
            {rightHeaderRow}
          </div>
        </div>
      </div>
    </div>;
  }

  renderBody() {
    const rightBodyRows = [];
    const leftBodyRows = [];


    this.data.forEach((row) => {
      const bodyLeftRow = [];
      const bodyRightRow = [];

      if (this.selectionType === 'checkbox')
        bodyLeftRow.push(<div class={{ 'col': true, 'col-hover': this.hoverRecord === row }}
                              style={{ width: CHECKBOX_WIDTH }}>
          <p4-checkbox class="checkbox" size="sm" value={this.selectedRows.includes(row[this.rowKey])}
                       onP4Change={() => this.onRowSelectClick(row)} />
        </div>);


      this.columnConfig.forEach((col) => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (col.width)
          colWidth = parseInt(col.width);
        const colEl = <div class={{ 'col': true, 'col-hover': this.hoverRecord === row }}
                           style={{ width: colWidth + 'px', maxWidth: colWidth + 'px' }}
                           onMouseOver={() => this.onCellMouseOver(row)}
                           onClick={() => {
                             const selection = window.getSelection();
                             if (selection.type != 'Range')
                               this.onCellClick(row, col);
                           }}>
          <div class="col-content">{row[col.name] ? row[col.name] : ''}</div>
        </div>;

        col.fixed ? bodyLeftRow.push(colEl) : bodyRightRow.push(colEl);
      });
      leftBodyRows.push(<div class="row">{bodyLeftRow}</div>);
      rightBodyRows.push(<div class="row">{bodyRightRow}</div>);
    });

    return <div class="body">
      <div class="body-container">
        <div class="left-panel">
          <div class="table">
            {leftBodyRows}
          </div>
        </div>
        <div class="right-panel">
          <div class="table">
            {rightBodyRows}
          </div>
        </div>
      </div>
    </div>;
  }


  render() {
    return <Host>
      <div class="grid-component">
        <div class="list-scroll-wrapper" onScroll={(ev) => this.handleScroll(ev)}>
          {this.renderHeader()}
          {(this.data.length) ? this.renderBody() : renderEmptyData()}
        </div>
      </div>
    </Host>;
  }


}

function renderEmptyData() {
  return <div class="empty-data">
    <div class="empty-image">
      <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
          <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7" />
          <g fill-rule="nonzero" stroke="#D9D9D9">
            <path
              d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
            <path
              d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
              fill="#FAFAFA" />
          </g>
        </g>
      </svg>
    </div>
    <p class="empty-image-description">No Data</p>
  </div>;
}
