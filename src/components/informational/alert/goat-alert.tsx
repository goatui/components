import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { ElementColor, ElementSize } from '../../../utils/utils';

/**
 * @name Alert
 * @description Alerts provide important information inline with the content body within a view.
 * @example <goat-alert state="success" dismissible>
 *               <div slot='message'>Successful saved the record</div>
 *             </goat-alert>
 */
@Component({
  tag: 'goat-alert',
  styleUrl: 'goat-alert.scss',
  shadow: true,
})
export class GoatAlert {

  @Element() elm!: HTMLElement;

  @Prop() state: 'success' | 'error' | 'info' | 'warning' = 'info';

  @Prop() message: string = '';

  @Prop() dismissible: boolean = false;

  @Prop() description: string = '';

  @Event({ eventName: 'goat:dismiss' }) goatDismiss: EventEmitter;

  @State() hidden: boolean = false;

  private getColor(): ElementColor {
    switch (this.state) {
      case 'success':
        return ElementColor.SUCCESS;
      case 'error':
        return ElementColor.ERROR;
      case 'info':
        return ElementColor.PRIMARY;
      case 'warning':
        return ElementColor.WARNING;
    }
  }

  renderCloseBtn() {
    if (this.dismissible) {
      return (
        <goat-button class='close-btn'
                   size={ElementSize.SMALL}
                   color={this.getColor()}
                   variant={'light'}
                   icon='x-lg'
                   onGoat:click={(evt) => {
                     this.hidden = true;
                     this.goatDismiss.emit(evt);
                   }} />
      );
    }
  }

  render() {
    return (
      <Host state={this.state} hidden={this.hidden}>
        <div class='alert' role='alert'>
          <div class='content'>
            <div class='message'><slot name="message" /></div>
            <div class='description'><slot name="description" /></div>
          </div>
          {this.renderCloseBtn()}
        </div>
      </Host>
    );
  }

}
