import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'p4-list',
  styleUrl: 'p4-list.scss',
  shadow: true,
})
export class P4List {

  private itemIndex;
  private itemValueMap;

  @Element() el!: HTMLElement;
  @State() focusItemId;
  @State() activeItemId;
  @State() invalidData: boolean = false;

  @Prop({ mutable: true }) data: any[] = [];

  @Prop() variant: 'default' | 'group' = 'default';

  @Prop() itemVariant: 'default' | 'icon' | 'img' | 'caption' | 'icon-caption' | 'img-caption' = 'default';

  @Prop() showLoader: boolean = false;

  @Prop({ mutable: true }) value?: string | number;


  @Prop({ mutable: true }) emptyState: any = {
    title: 'Empty List!',
    message: 'There are no items to display at the moment',
  };


  /**
   * Emitted when the item is clicked.
   */
  @Event({ eventName: 'p4:item-click' }) p4ItemClick: EventEmitter;


  /**
   * Sets focus on the first item of list.
   */
  @Method()
  async setFocus(previousItem: boolean = false) {
    let focusItemId;
    if (this.value) {
      focusItemId = this.itemValueMap[this.value].__id;
    } else {
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


  private setIndexToItem = (item) => {
    item.__id = this.itemIndex++;
    if (!item.hasOwnProperty('value') || !item.hasOwnProperty('value'))
      this.invalidData = true;
    this.itemValueMap[item.value] = item;
  };

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
      } else
        this.data.forEach(this.setIndexToItem);
    } else {
      this.invalidData = true;
    }
  }

  private getItemElement(itemId): HTMLElement {
    return this.el.shadowRoot.querySelector(`[data-item-id="item-${itemId}"]`);
  }

  private focusNextItem(focusItemId) {
    if (focusItemId < this.itemIndex - 1)
      this.getItemElement(focusItemId + 1).focus();
  }

  private focusPreviousItem(focusItemId) {
    if (focusItemId > 1)
      this.getItemElement(focusItemId - 1).focus();
  }

  private itemClickHandler = (item, group: any = {}) => {
    this.activeItemId = item.__id;
    this.focusItemId = item.__id;
    this.value = item.value;
    const result: any = { value: this.value, item };
    if (this.variant == 'group') {
      result.groupValue = group.value;
    }
    this.p4ItemClick.emit(result);
  };

  render() {
    return (
      <Host>
        <div class={{
          'list': true,
          [`list-variant-${this.variant}`]: true,
        }}>
          {!!this.data.length && this.variant === 'default' && !this.invalidData && this.renderItems(this.data)}
          {!!this.data.length && this.variant === 'group' && !this.invalidData && this.renderGroups(this.data)}
          {this.invalidData && this.renderInvalidState()}
          {!this.data.length && this.renderEmptyState()}
        </div>
      </Host>
    );
  }

  private renderGroups(groups) {
    return <div class='group-container'>
      {groups.map((group) => {
        return <div class='group'>
          <div class='group-label'>{group.label}</div>
          {this.renderItems(group.items, group)}
        </div>;
      })}
    </div>;
  }

  private renderItems(items, group?) {
    return <div class='items-container'>
      {items.map((item) => this.renderItem(item, group))}
    </div>;
  }

  private renderItem = (item, group?) => {
    return <div
      data-item-id={`item-${item.__id}`}
      class={{
        'item': true,
        'item-separator': item.separator,
        [`item-variant-${this.itemVariant}`]: true,
        'item-has-focus': this.focusItemId == item.__id,
        'item-active': this.activeItemId == item.__id || this.value === item.value,
      }}
      tabindex='1'
      onClick={() => this.itemClickHandler(item, group)}
      onFocus={() => {
        this.focusItemId = item.__id;
      }}
      onKeyDown={(evt) => {
        if (evt.key === 'Enter' || evt.key === 'ArrowDown' || evt.key === 'ArrowUp')
          evt.preventDefault();
        if (evt.key === 'Enter')
          this.itemClickHandler(item);
        else if (evt.key === 'ArrowDown')
          this.focusNextItem(this.focusItemId);
        else if (evt.key === 'ArrowUp')
          this.focusPreviousItem(this.focusItemId);
      }}>
      {
        (() => {
          if (this.itemVariant == 'default')
            return item.label;
          else if (this.itemVariant == 'icon') {
            return <div class='item-content'>
              <p4-icon class='item-icon' type={item.icon} size="sm" />
              <span class='item-label'>{item.label}</span>
            </div>;
          }
        })()
      }
    </div>;
  };

  private renderEmptyState() {
    return <div class='center-content'>
      <div class='empty-state'>
        <p4-icon class='empty-state-image' type='list-task' size='3rem' />
        <div class='empty-state-title'>{this.emptyState.title}</div>
        <div class='empty-state-message'>{this.emptyState.message}</div>
      </div>
    </div>;
  }

  private renderInvalidState() {
    return <div class='center-content'>
      <div class='empty-state'>
        <p4-icon class='empty-state-image' type='exclamation-triangle' size='3rem' />
        <div class='empty-state-title'>Invalid Data</div>
        <div class='empty-state-message'>Check if all items have labels and values</div>
      </div>
    </div>;
  }
}
