import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { debounce } from '../../../utils/utils';
import { renderEmptyData } from './utils';

const DEFAULT_CELL_WIDTH = 300;
const CHECKBOX_WIDTH = '3rem';

/**
 * @name Table
 * @description A configurable component for displaying tabular data.
 * @img /assets/img/table.png
 */
@Component({
  tag: 'goat-table',
  styleUrl: 'goat-table.scss',
  shadow: true,
})
export class GoatTable {

  @Element() elm!: HTMLElement;



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
  @Prop({mutable: true}) selectedRowKeys: string[] = [];
  @Prop() keyField: string = 'id';

  @State() private hoveredCell: any = {};
  @State() private isSelectAll: boolean = false;

  @Event({ eventName: 'goat:table-cell-click' }) p4CellClick: EventEmitter;
  @Event({ eventName: 'goat:table-select-change' }) p4SelectChange: EventEmitter;


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

  onCellMouseOver = (row: any, column: any) => {
    this.hoveredCell = { row, column };
  };

  onSelectChange(selectedRowKeys: any) {
    this.selectedRowKeys = selectedRowKeys;
    this.p4SelectChange.emit({ value: this.selectedRowKeys });
  }

  onCellClick(row: any, col: any) {
    this.p4CellClick.emit({ record: row, column: col });
  }

  handleScroll = debounce(() => {
    const $root = this.elm.shadowRoot;
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

  componentDidLoad() {
    const $root = this.elm.shadowRoot;
    const $headerPanel: HTMLElement = $root.querySelector('.header');
    const $headerLeftPanel: HTMLElement = $headerPanel.querySelector('.left-panel');
    const $headerRightPanel: HTMLElement = $headerPanel.querySelector('.right-panel');

    let maxHeight = $headerLeftPanel.clientHeight;
    if (maxHeight < $headerRightPanel.clientHeight && $headerLeftPanel.querySelector('.col')) {
      const $col: HTMLElement = $headerLeftPanel.querySelector('.col');
      $col.style.height = $headerRightPanel.clientHeight + 'px';
    } else {
      const $col: HTMLElement = $headerRightPanel.querySelector('.col');
      $col.style.height = maxHeight + 'px';
    }

    let leftPanelWidth = $headerLeftPanel.clientWidth;
    $headerRightPanel.style.paddingLeft = leftPanelWidth + 'px';

    if (this.dataSource && this.dataSource.length) {
      const $bodyPanel: HTMLElement = $root.querySelector('.body');
      const $bodyRightPanel: HTMLElement = $bodyPanel.querySelector('.right-panel');
      const $bodyLeftPanel: HTMLElement = $bodyPanel.querySelector('.left-panel');
      $bodyRightPanel.style.paddingLeft = leftPanelWidth + 'px';
      $bodyPanel.style.paddingTop = $headerPanel.clientHeight + 'px';

      const $bodyRightRows = $bodyRightPanel.querySelectorAll('.row');
      $bodyLeftPanel.querySelectorAll('.row').forEach(($leftRow, index) => {
        const $col = $leftRow.querySelector('.col');
        if ($col) {
          let maxHeight = $leftRow.querySelector('.col').clientHeight;
          if (maxHeight < $bodyRightRows[index].querySelector('.col').clientHeight) {
            //@ts-ignore
            $leftRow.querySelector('.col').style.height = $bodyRightRows[index].querySelector('.col').clientHeight + 'px';
          } else {
            //@ts-ignore
            $bodyRightRows[index].querySelector('.col').style.height = maxHeight + 1 + 'px';
          }
        }
      });

    }
  }

  renderHeader() {
    const leftHeaderRow = [];
    const rightHeaderRow = [];

    if (this.selectionType === 'checkbox') {
      leftHeaderRow.push(
        <div class='col' style={{ width: CHECKBOX_WIDTH }}>
          <div class='col-content'>
            <goat-checkbox class='checkbox' size="sm"  value={this.isSelectAll} onGoat:change={this.onSelectAllClick} />
          </div>
        </div>);
    }
    this.columns.forEach((col) => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = parseInt(col.width);
      const colEl = <div class='col' style={{ width: colWidth + 'px', maxWidth: colWidth + 'px' }}>
        <div class='col-content'>{col.label}</div>
      </div>;
      (col.fixed) ? leftHeaderRow.push(colEl) : rightHeaderRow.push(colEl);
    });

    return <div class='header'>
      <div class='left-panel'>
        <div class='table'>
          <div class='row'>
            {leftHeaderRow}
          </div>
        </div>
      </div>
      <div class='right-panel'>
        <div class='table'>
          <div class='row'>
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
        bodyLeftRow.push(<div class={{ 'col': true }}
                              style={{ width: CHECKBOX_WIDTH }}>
          <goat-checkbox class='checkbox' size="sm" value={this.selectedRowKeys.includes(row[this.keyField])}
                       onGoat:change={() => this.onRowSelectClick(row)} />
        </div>);


      this.columns.forEach((column) => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (column.width)
          colWidth = parseInt(column.width);
        const colEl = <div
          class={{ 'col': true, 'col-hover': (this.hoveredCell.row === row && this.hoveredCell.column === column) }}
          style={{ width: colWidth + 'px', maxWidth: colWidth + 'px' }}
          onMouseOver={() => this.onCellMouseOver(row, column)}
          onClick={() => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, column);
          }}>
          <div class='col-content'>{row[column.name] ? row[column.name] : ''}</div>
        </div>;

        column.fixed ? bodyLeftRow.push(colEl) : bodyRightRow.push(colEl);
      });
      leftBodyRows.push(<div class='row'>{bodyLeftRow}</div>);
      rightBodyRows.push(<div class='row'>{bodyRightRow}</div>);
    });

    return <div class='body'>
      <div class='body-container'>
        <div class='left-panel'>
          <div class='table'>
            {leftBodyRows}
          </div>
        </div>
        <div class='right-panel'>
          <div class='table'>
            {rightBodyRows}
          </div>
        </div>
      </div>
    </div>;
  }


  render() {
    return <Host>
      <div class='table-component'>
        <div class='list-scroll-wrapper' onScroll={(ev) => this.handleScroll(ev)}>
          {this.renderHeader()}
          {(this.dataSource.length) ? this.renderBody() : renderEmptyData()}
        </div>
      </div>
    </Host>;
  }

}
