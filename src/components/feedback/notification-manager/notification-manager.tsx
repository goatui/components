import { Component, ComponentInterface, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import { isDarkMode, observeThemeChange } from '../../../utils/utils';

const getNotificationIndex = (() => {
  let counter = 1;
  return (function() {
    return `${counter++}`;
  });
})();

/**
 * @name Notification Manager
 * @description Manages alert, toasts and notifications.
 * @category Feedback
 * @tags notification
 * @img /assets/img/notification-manager.png
 */
@Component({
  tag: 'goat-notification-manager',
  styleUrl: 'notification-manager.scss',
  shadow: true,
})
export class NotificationManager implements ComponentInterface {

  @Prop({ reflect: true }) name: string = 'global';
  @Prop() position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'bottom-right';

  @Element() elm!: HTMLElement;
  @State() notifications: any = [];
  @State() isDarkMode: boolean = isDarkMode();


  @Listen('goat:toast', { target: 'window' })
  listenToast(evt) {
    if ((evt.detail.target === this.name || this.name === 'global') && !evt.detail.procced) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.detail.procced = true;
      const notification = {
        id: getNotificationIndex(),
        type: 'toast',
        message: evt.detail.message,
        state: evt.detail.state,
        hide: false,
      };
      this.notifications = this.notifications.concat([notification]).filter(n => !n.hide);
      setTimeout(() => {
        notification.hide = true;
        this.notifications = [...this.notifications];


      }, 5000);
    }
  }

  @Listen('goat:notification', { target: 'window' })
  listenNotification(evt) {
    if ((evt.detail.target === this.name || this.name === 'global') && !evt.detail.procced) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.detail.procced = true;
      const notification = {
        id: getNotificationIndex(),
        type: 'notification',
        title: evt.detail.title,
        subtitle: evt.detail.subtitle,
        messageType: evt.detail.messageType,
        state: evt.detail.state,
        hide: false,
      };
      this.notifications = this.notifications.concat([notification]).filter(n => !n.hide);
      setTimeout(() => {
        notification.hide = true;
        this.notifications = [...this.notifications];
      }, 5000);
    }
  }

  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }

  renderNotification(notification) {
    if (notification.type) {
      switch (notification.type) {
        case 'toast':
          return (
            <goat-toast id={`${notification.id}`} state={notification.state} message={notification.message} />
          );
        case 'alert':
          return (
            <goat-alert {...notification.props} />
          );
        case 'notification':
          return (
            <goat-notification id={`${notification.id}`} state={notification.state}>
              <div innerHTML={notification.title} slot="title"/>
              <div innerHTML={notification.subtitle} slot="subtitle"/>
            </goat-notification>
          );
        default:
          return null;
      }
    }
  }

  render() {
    return (
      <Host>
        <div class={{ 'notification-manager': true, [`position-${this.position}`]: true }}>
          {this.notifications.map((notification) => (
            <div class={{ 'notification': true, 'hidden': notification.hide }}>
              {this.renderNotification(notification)}
            </div>
          ))}
        </div>
      </Host>
    );
  }

}
