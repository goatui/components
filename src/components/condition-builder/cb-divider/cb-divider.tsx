import {Component, h, Host, Prop} from '@stencil/core';


@Component({
  tag: 'goat-cb-divider',
  styleUrl: 'cb-divider.scss',
  shadow: true,
})
export class CbDivider {

  @Prop() vertical: boolean = false;

  @Prop() connectStart: boolean = false;

  @Prop() connectEnd: boolean = false;

  render() {
    return (
      <Host>
        <div class={{
          'divider': true,
          'connect-start': this.connectStart,
          'connect-end': this.connectEnd,
          'vertical': this.vertical
        }}>
          <div class="line line-start"/>
          <div class='content'>
            <slot/>
          </div>
          <div class="line line-end"/>
        </div>
      </Host>
    );
  }

}
