import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { debounce } from '../../utils/utils';
import { renderEmptyData } from './utils';

const DEFAULT_CELL_WIDTH = 300;
const CHECKBOX_WIDTH = '3rem';

@Component({
  tag: 'p4-table',
  styleUrl: 'p4-table.scss',
  shadow: true,
})
export class P4Table {

  @Element() private el: HTMLElement;

  @State() private hoverRecord: any;
  @State() private isSelectAll: boolean = false;

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
  @Prop() columns: any[] = [];

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
  @Prop() dataSource: any[] = [];

  @Prop() selectionType: 'checkbox' | undefined;

  @Prop() selectedRowKeys: string[] = [];

  @Prop() keyField: string = 'id';




  @Event() p4CellClick: EventEmitter;
  @Event() p4SelectChange: EventEmitter;


  onSelectAllClick = () => {
    let selectedRowKeys = [];
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll)
      selectedRowKeys = this.dataSource.map((row) => row[this.keyField]);
    this.onSelectChange(selectedRowKeys);
  };

  onRowSelectClick = (row) => {
    let selectedRowKeys = [...this.selectedRowKeys];
    if (selectedRowKeys.includes(row[this.keyField])) {
      this.isSelectAll = false;
      selectedRowKeys = selectedRowKeys.filter((rowId) => rowId !== row[this.keyField]);
    } else {
      selectedRowKeys.push(row[this.keyField]);
    }
    this.onSelectChange(selectedRowKeys);
  };

  onCellMouseOver = (row: any) => {
    this.hoverRecord = row;
  };

  onSelectChange(selectedRowKeys: any) {
    this.selectedRowKeys = selectedRowKeys;
    this.p4SelectChange.emit({ value: this.selectedRowKeys });
  }

  onCellClick(row: any, col: any) {
    this.p4CellClick.emit({ record: row, column: col });
  }

  handleScroll = debounce(() => {
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
  }, 1);

  componentDidRender() {
    const $root = this.el.shadowRoot;
    const $headerPanel: HTMLElement = $root.querySelector('.header');
    const $headerLeftPanel: HTMLElement = $headerPanel.querySelector('.left-panel');
    const $headerRightPanel: HTMLElement = $headerPanel.querySelector('.right-panel');
    let leftPanelWidth = $headerLeftPanel.clientWidth;
    $headerRightPanel.style.paddingLeft = leftPanelWidth + 'px';

    if (this.dataSource && this.dataSource.length) {
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
          <p4-checkbox class="checkbox" size="sm" value={this.isSelectAll} onP4Change={this.onSelectAllClick} />
        </div>);
    }
    this.columns.forEach((col) => {
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


    this.dataSource.forEach((row) => {
      const bodyLeftRow = [];
      const bodyRightRow = [];

      if (this.selectionType === 'checkbox')
        bodyLeftRow.push(<div class={{ 'col': true, 'col-hover': this.hoverRecord === row }}
                              style={{ width: CHECKBOX_WIDTH }}>
          <p4-checkbox class="checkbox" size="sm" value={this.selectedRowKeys.includes(row[this.keyField])}
                       onP4Change={() => this.onRowSelectClick(row)} />
        </div>);


      this.columns.forEach((col) => {
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
          {(this.dataSource.length) ? this.renderBody() : renderEmptyData()}
        </div>
      </div>
    </Host>;
  }

}
