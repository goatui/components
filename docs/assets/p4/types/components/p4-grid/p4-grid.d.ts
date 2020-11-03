import { EventEmitter } from '../../stencil-public-runtime';
export declare class P4Grid {
  private el;
  private hoverRecord;
  private isSelectAll;
  /**
   * Grid columns configuration.
   * [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}].
   */
  columnConfig: any[];
  /**
   * Grid data to display on table
   * [{'id': '5e7118ddce4b3d577956457f', 'index': 0, 'age': 21, 'eyeColor': 'blue', 'name': 'John', 'company': 'India', 'email': 'john@example.com', 'phone': '+1 (839) 560-3581', 'address': '326 Irving Street, Grimsley, Texas, 4048'}]
   */
  data: any[];
  selectionType: 'checkbox' | undefined;
  selectedRows: string[];
  rowKey: string;
  p4CellClick: EventEmitter;
  p4SelectChange: EventEmitter;
  onSelectAllClick: () => void;
  onRowSelectClick: (row: any) => void;
  onCellMouseOver: (row: any) => void;
  onSelectChange(selectedRows: any): void;
  onCellClick(row: any, col: any): void;
  handleScroll: (...args: any[]) => any;
  componentDidRender(): void;
  renderHeader(): any;
  renderBody(): any;
  render(): any;
}
