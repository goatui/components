import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-8956d8c0.js';

const p4ListCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:inline-block;--list-border-radius:var(--border-radius, 5px);--list-max-height:inherit}.list{background:var(--color-shades-white, #ffffff);border:1px solid var(--color-neutral-200, #e2e8f0);box-sizing:border-box;border-radius:var(--list-border-radius);overflow:hidden}.list .group-container{overflow-y:auto;max-height:var(--list-max-height)}.list .group-label{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-caption, 0.75rem);line-height:var(--line-height-caption, 1.125rem);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);letter-spacing:0.08em;text-transform:uppercase;padding:var(--space-1, 0.25rem) var(--space-3, 0.75rem);box-sizing:border-box;background:var(--color-neutral-700, #334155);color:var(--color-shades-white, #ffffff)}.list .search{padding:var(--space-1, 0.25rem) var(--space-1, 0.25rem) 0 var(--space-1, 0.25rem)}.list .item{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;position:relative;cursor:pointer;padding:var(--space-3, 0.75rem) var(--space-6, 1.5rem);box-sizing:border-box;border-top:1px solid transparent;border-bottom:1px solid transparent;transition:background 0.8s}.list .item.item-separator{border-bottom:1px solid var(--border-color, #cbd5e1)}.list .item .item-content{display:flex;align-items:center;flex-direction:row}.list .item .item-content .item-icon,.list .item .item-content .item-img{padding-right:var(--space-1_5, 0.375rem)}.list .item.item-has-focus{background:var(--color-primary-50, #e8edfb);outline:none}.list .item.item-active{background:var(--color-neutral-100, #f1f5f9);border-top-color:var(--border-color, #cbd5e1);border-bottom-color:var(--border-color, #cbd5e1);font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600)}.list .item.item-active:first-child{border-top-color:transparent}.list .item.item-active:last-child{border-bottom-color:transparent}.list .item:hover{background:var(--color-primary-50, #e8edfb) radial-gradient(circle, transparent 1%, var(--color-primary-50, #e8edfb) 1%) center/15000%}.list .item:active{background-color:var(--color-neutral-900, #0f172a);background-size:100%;transition:background 0s}.list .empty-state{text-align:center;padding:var(--space-4, 1rem)}.list .empty-state .empty-state-image{padding:0 var(--space-4, 1rem) var(--space-4, 1rem) var(--space-4, 1rem)}.list .empty-state .empty-state-title{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p2, 1rem);line-height:var(--line-height-p2, 1.5rem);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);padding-bottom:var(--space-2, 0.5rem)}.list .empty-state .empty-state-message{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-caption, 0.75rem);line-height:var(--line-height-caption, 1.125rem);letter-spacing:-0.04em;color:var(--color-neutral-400, #94a3b8)}";

const P4List = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4ItemClick = createEvent(this, "p4:item-click", 7);
    this.invalidData = false;
    this.searchString = '';
    this.data = [];
    this.variant = 'default';
    this.itemVariant = 'default';
    this.showLoader = false;
    this.enableSearch = false;
    this.emptyState = {
      title: 'Empty List!',
      message: 'There are no items to display at the moment',
    };
    this.setIndexToItem = (item) => {
      item.__id = this.itemIndex++;
      if (!item.hasOwnProperty('value') || !item.hasOwnProperty('value'))
        this.invalidData = true;
      this.itemValueMap[item.value] = item;
    };
    this.itemClickHandler = (item, group = {}) => {
      this.activeItemId = item.__id;
      this.focusItemId = item.__id;
      this.value = item.value;
      const result = { value: this.value, item };
      if (this.variant == 'group') {
        result.groupValue = group.value;
      }
      this.p4ItemClick.emit(result);
    };
    this.renderItem = (item, group) => {
      return h("div", { "data-item-id": `item-${item.__id}`, class: {
          'item': true,
          'item-separator': item.separator,
          [`item-variant-${this.itemVariant}`]: true,
          'item-has-focus': this.focusItemId == item.__id,
          'item-active': this.activeItemId == item.__id || this.value === item.value,
        }, tabindex: '0', onClick: () => this.itemClickHandler(item, group), onFocus: () => {
          this.focusItemId = item.__id;
        }, onKeyDown: (evt) => {
          if (evt.key === 'Enter' || evt.key === 'ArrowDown' || evt.key === 'ArrowUp')
            evt.preventDefault();
          if (evt.key === 'Enter')
            this.itemClickHandler(item);
          else if (evt.key === 'ArrowDown')
            this.focusNextItem(this.focusItemId);
          else if (evt.key === 'ArrowUp')
            this.focusPreviousItem(this.focusItemId);
        } }, (() => {
        if (this.itemVariant == 'default')
          return item.label;
        else if (this.itemVariant == 'icon') {
          return h("div", { class: 'item-content' }, h("p4-icon", { class: 'item-icon', type: item.icon, size: 'sm' }), h("span", { class: 'item-label' }, item.label));
        }
      })());
    };
  }
  /**
   * Sets focus on the first item of list.
   */
  async setFocus(previousItem = false) {
    let focusItemId;
    if (this.value) {
      focusItemId = this.itemValueMap[this.value].__id;
    }
    else {
      if (previousItem)
        focusItemId = this.itemIndex;
      else
        focusItemId = 0;
    }
    if (previousItem)
      this.focusPreviousItem(focusItemId);
    else
      this.focusNextItem(focusItemId);
  }
  async componentWillLoad() {
    this.itemIndex = 1;
    this.itemValueMap = {};
    this.invalidData = false;
    if (this.data) {
      if (this.variant == 'group') {
        this.data.forEach((group) => {
          if (group && group.items)
            group.items.forEach(this.setIndexToItem);
        });
      }
      else
        this.data.forEach(this.setIndexToItem);
    }
    else {
      this.invalidData = true;
    }
  }
  getItemElement(itemId) {
    return this.el.shadowRoot.querySelector(`[data-item-id="item-${itemId}"]`);
  }
  focusNextItem(focusItemId) {
    if (focusItemId < this.itemIndex - 1)
      this.getItemElement(focusItemId + 1).focus();
  }
  focusPreviousItem(focusItemId) {
    if (focusItemId > 1)
      this.getItemElement(focusItemId - 1).focus();
  }
  render() {
    let data;
    if (this.variant == 'group') {
      data = this.data;
    }
    else {
      data = [{ items: this.data }];
    }
    data = data.filter((group) => {
      group.filteredItems = group.items.filter((item) => {
        return item.label && (!this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
      });
      return group.filteredItems.length;
    });
    return (h(Host, null, h("div", { class: {
        'list': true,
        [`list-variant-${this.variant}`]: true,
      } }, !!this.data.length && !this.invalidData && this.renderGroups(data), this.invalidData && P4List.renderInvalidState(), !this.data.length && this.renderEmptyState())));
  }
  renderGroups(groups) {
    return h("div", { class: 'group-container' }, this.enableSearch && h("p4-input", { size: 'sm', class: 'search', "onP4:change": (evt) => {
        const input = evt.target;
        this.searchString = input.value;
      }, onKeyDown: (evt) => {
        if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp')
          evt.preventDefault();
        if (evt.key === 'ArrowDown')
          this.focusNextItem(0);
        else if (evt.key === 'ArrowUp')
          this.focusPreviousItem(this.itemIndex);
      } }, h("p4-icon", { type: 'search', size: 'sm', slot: 'end' })), groups.map((group) => {
      return h("div", { class: 'group' }, this.variant === 'group' && h("div", { class: 'group-label' }, group.label), this.renderItems(group.filteredItems, group));
    }));
  }
  renderItems(items, group) {
    return h("div", { class: 'items-container' }, items.map((item) => this.renderItem(item, group)));
  }
  renderEmptyState() {
    return h("div", { class: 'center-content' }, h("div", { class: 'empty-state' }, h("p4-icon", { class: 'empty-state-image', type: 'list-task', size: '3rem' }), h("div", { class: 'empty-state-title' }, this.emptyState.title), h("div", { class: 'empty-state-message' }, this.emptyState.message)));
  }
  static renderInvalidState() {
    return h("div", { class: 'center-content' }, h("div", { class: 'empty-state' }, h("p4-icon", { class: 'empty-state-image', type: 'exclamation-triangle', size: '3rem' }), h("div", { class: 'empty-state-title' }, "Invalid Data"), h("div", { class: 'empty-state-message' }, "Check if all items have labels and values")));
  }
  get el() { return getElement(this); }
};
P4List.style = p4ListCss;

export { P4List as p4_list };
