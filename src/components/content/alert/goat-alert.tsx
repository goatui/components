import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { ElementSize, isDarkMode, observeThemeChange } from '../../../utils/utils';

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
export class GoatAlert implements ComponentInterface {

  @Element() elm!: HTMLElement;

  @Prop() state: 'success' | 'error' | 'info' | 'warning' = 'info';

  @Prop() dismissible: boolean = false;

  @Event({ eventName: 'goat:dismiss' }) goatDismiss: EventEmitter;

  @State() hidden: boolean = false;

  @State() isDarkTheme: boolean = isDarkMode();

  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkTheme = isDarkMode();
    });
  }

  private getColor(): any {
    return this.state;
  }

  renderCloseBtn() {
    const variant = this.isDarkTheme ? 'default' : 'ghost';
    if (this.dismissible) {
      return (
        <goat-button class='close-btn'
                     aria-label="Close alert"
                     size={ElementSize.SMALL}
                     color={this.getColor()}
                     variant={variant}
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
            <div class='message'>
              <slot name='message' />
              <slot/>
            </div>
            <div class='description'>
              <slot name='description' />
            </div>
          </div>
          {this.renderCloseBtn()}
        </div>
      </Host>
    );
  }

}
