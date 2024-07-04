import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

/**
 * @name Current Time
 * @description Displays the current time in a given timezone.
 * @category Others
 * @example <goat-current-time></goat-current-time>
 */

@Component({
  tag: 'goat-current-time',
  styleUrl: 'current-time.scss',
  shadow: true,
})
export class CurrentTime implements ComponentInterface {
  timer: number;

  @Prop() timezone: string;

  // `currentTime` is decorated with `@State()`,
  // as we need to trigger a rerender when its
  // value changes to show the latest time
  @State() currentTime: number = Date.now();

  connectedCallback() {
    this.timer = window.setInterval(() => {
      // the assignment to `this.currentTime`
      // will trigger a re-render
      this.currentTime = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.currentTime).toLocaleTimeString('en-US', { timeZone: this.timezone });

    return (
      <Host>
        <div class="current-time">{time}</div>
      </Host>
    );
  }
}
