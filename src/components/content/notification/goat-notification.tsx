import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { ElementSize, isDarkMode, observeThemeChange } from '../../../utils/utils';


/**
 * @name Notification
 * @description Notifications are messages that communicate information to the user.
 * @example <goat-notification state="success" low-contrast dismissible>
 *               <div slot='title'>Successful saved the record</div>
 *             </goat-notification>
 */
@Component({
  tag: 'goat-notification',
  styleUrl: 'goat-notification.scss',
  shadow: true,
})
export class GoatNotification implements ComponentInterface {

  @Element() elm!: HTMLElement;

  @Prop() state: 'success' | 'error' | 'info' | 'warning' = 'info';

  @Prop() lowContrast: boolean = false;

  @Prop() dismissible: boolean = false;

  @Prop() actionable: boolean = true;
  @Prop() actionName: string = 'dismiss';
  @Prop() actionLabel: string = 'Dismiss';

  @Event({ eventName: 'goat:dismiss' }) goatDismiss: EventEmitter;

  @State() hidden: boolean = false;

  @State() isDarkMode: boolean = isDarkMode();

  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }

  render() {
    return (
      <Host state={this.state} hidden={this.hidden}>
        <div class={{ 'notification': true, 'low-contrast': this.lowContrast }} role='alert'>
          <div class='state-icon'>
            {this.renderStateIcon()}
          </div>
          <div class='content'>
            <div class='title'>
              <slot name='title' />
              <slot />
            </div>
            <div class='subtitle'>
              <slot name='subtitle' />
            </div>
          </div>
          {this.renderAction()}
          {this.renderCloseButton()}
        </div>
      </Host>
    );
  }

  renderAction() {
    if (this.actionable)
      return (
        <div class='action'>
          <slot name='action' />
        </div>
      );
  }

  renderCloseButton() {

    if (this.dismissible) {
      return (
        <div class="close-button-container">
          <goat-button class={{ 'close-button': true }}
                       aria-label='Close alert'
                       size={ElementSize.SMALL}
                       icon='x'
                       variant='link'
                       onGoat:click={(evt) => {
                         this.hidden = true;
                         this.goatDismiss.emit(evt);
                       }} />
        </div>
      );
    }
  }

  renderStateIcon() {
    if (this.state === 'success') {
      return <goat-icon class='inherit' name='check-circle-fill' size='sm' />;
    } else if (this.state === 'error') {
      return <goat-icon class='inherit' name='x-circle-fill' size='sm' />;
    } else if (this.state === 'info') {
      return <goat-icon class='inherit' name='info-circle-fill' size='sm' />;
    } else if (this.state === 'warning') {
      return <goat-icon class='inherit' name='exclamation-circle-fill' size='sm' />;
    }
  }

}
