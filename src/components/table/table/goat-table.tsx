import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { renderEmptyData } from './utils';

const DEFAULT_CELL_WIDTH = 16; // in rem
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
  @Prop({ mutable: true }) selectedRowKeys: string[] = [];
  @Prop() keyField: string = 'id';

  @Prop() sort: 'none' | 'default' | 'managed' = 'default';
  @Prop({ mutable: true }) sortByField: string;
  @Prop({ mutable: true }) sortOrder: 'asc' | 'desc' = 'asc';

  @State() private hoveredCell: any = {};
  @State() private isSelectAll: boolean = false;

  @Event({ eventName: 'goat:table-cell-click' }) goatCellClick: EventEmitter;
  @Event({ eventName: 'goat:table-select-change' }) goatSelectChange: EventEmitter;
  @Event({ eventName: 'goat:sort' }) goatSort: EventEmitter;


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
    this.goatSelectChange.emit({ value: this.selectedRowKeys });
  }

  onCellClick(row: any, col: any) {
    this.goatCellClick.emit({ record: row, column: col });
  }

  renderHeader() {
    const fixedCols = [];
    const scrollCols = [];

    if (this.selectionType === 'checkbox') {
      fixedCols.push(
        <div class='col center'>
          <div class='col-content'>
            <goat-checkbox class='checkbox light' size='sm' value={this.isSelectAll}
                           onGoat:change={this.onSelectAllClick} />
          </div>
        </div>);
    }
    this.columns.forEach((col) => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = parseInt(col.width);
      const colEl = <div class={{ 'col': true, 'sort': this.sortByField === col.name }}
                         style={{ width: colWidth + 'rem' }}>
        <div class='col-content'>
          <div class='col-text'>{col.label}</div>
          <div class='col-actions'>
            {
              (() => {
                let icon = 'arrow-down-up';
                if (this.sortByField === col.name) {
                  if (this.sortOrder === 'asc')
                    icon = 'arrow-up';
                  else
                    icon = 'arrow-down';
                }
                return <goat-button size='sm'
                                    icon={icon}
                                    class='col-action'
                                    variant='ghost' color='secondary' onClick={() => {
                  if (this.sortByField === col.name) {
                    this.sortOrder = (this.sortOrder == 'asc') ? 'desc' : 'asc';
                  } else {
                    this.sortByField = col.name;
                    this.sortOrder = 'asc';
                  }
                  this.goatSort.emit({ sortByField: this.sortByField, sortOrder: this.sortOrder });
                }} />;
              })()
            }
          </div>
        </div>

      </div>;
      (col.fixed) ? fixedCols.push(colEl) : scrollCols.push(colEl);
    });

    return <div class='header'>
      <div class='row'>
        <div class='fixed-columns columns-container'>
          {fixedCols}
        </div>
        <div class='scrollable-columns columns-container'>
          {scrollCols}
        </div>
      </div>
    </div>;
  }

  renderBody() {
    const rows = [];

    let data = this.dataSource;

    if (this.sort === 'default' && this.sortByField) {
      data = data.sort((a, b) => {
        if (a[this.sortByField] < b[this.sortByField])
          return this.sortOrder === 'asc' ? -1 : 1;
        if (a[this.sortByField] > b[this.sortByField])
          return this.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    this.dataSource.forEach((row) => {
      const fixedCols = [];
      const scrollCols = [];

      if (this.selectionType === 'checkbox')
        fixedCols.push(<div class={{ 'col': true, 'center': true }}>
          <div class='col-content'>
            <goat-checkbox class='checkbox light' size='sm' value={this.selectedRowKeys.includes(row[this.keyField])}
                           onGoat:change={() => this.onRowSelectClick(row)} />
          </div>
        </div>);


      this.columns.forEach((column) => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (column.width)
          colWidth = parseInt(column.width);
        const colEl = <div
          tabindex='1'
          class={{ 'col': true, 'col-hover': (this.hoveredCell.row === row && this.hoveredCell.column === column) }}
          style={{ width: colWidth + 'rem' }}
          onMouseOver={() => this.onCellMouseOver(row, column)}
          onClick={() => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, column);
          }}>
          <div class='col-content'>
            <div class='col-text' title={row?.[column.name]}>{row?.[column.name]}</div>
          </div>
        </div>;

        column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      });
      rows.push(<div class={{ 'row': true, 'row-hover': (this.hoveredCell.row === row) }}>
        <div class='fixed-columns columns-container'>
          {fixedCols}
        </div>
        <div class='scrollable-columns columns-container'>
          {scrollCols}
        </div>
      </div>);
    });

    return <div class='body'>
      {rows}
    </div>;
  }


  render() {
    return <Host>
      <div class='table'>
        <div class='table-scroll-container'>
          {this.renderHeader()}
          {(this.dataSource.length) ? this.renderBody() : renderEmptyData()}
        </div>
      </div>
    </Host>;
  }

}
