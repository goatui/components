import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'p4-alert',
  styleUrl: 'p4-alert.scss',
  shadow: true,
})
export class P4Alert {

  @Element() elm!: HTMLElement;

  @Prop() state: 'success' | 'error' | 'info' | 'warning' = 'info';

  @Prop() message: string = '';

  @Prop() dismissible: boolean = false;

  @Prop() description: string = '';

  @Event({ eventName: 'p4:dismiss' }) p4Click: EventEmitter;

  @State() hidden: boolean = false;


  render() {
    let variant;
    if (this.state === 'info') {
      variant = 'primary';
    } else if (this.state === 'success') {
      variant = 'success';
    } else if (this.state === 'error') {
      variant = 'danger';
    } else if (this.state === 'warning') {
      variant = 'warning';
    }
    return (
      <Host state={this.state} hidden={this.hidden}>
        <div class='alert' role='alert'>
          <div class='content'>
            <div class='content-wrapper'>
              <div class='message'>{this.message}</div>
              {this.description ? <div class='description'>{this.description}</div> : null}
            </div>
          </div>
          {this.dismissible ? <p4-button class='close-btn'
                                         variant={variant}
                                         ghost={true}
                                         icon='x-lg'
                                         onP4:click={(evt) => {
                                           this.hidden = true;
                                           this.p4Click.emit(evt)
                                         }} /> : null}
        </div>
      </Host>
    );
  }

}
