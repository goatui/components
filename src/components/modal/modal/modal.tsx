import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';

/**
 * @name Modal
 * @description  Modals are used to display content in a layer above the app.
 * @category Up coming
 * @tags controls
 */
@Component({
  tag: 'goat-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  @Element() el!: HTMLElement;

  @Prop() show: boolean = false;

  @State() promptDetails: any = {
    title: '',
    message: '',
    action: {
      label: '',
      type: '',
      callback: () => {},
    },
  };

  @Listen('os:prompt', { target: 'window' })
  handler(evt) {
    this.promptDetails = evt.detail;
    this.show = true;
  }

  private cancel() {
    this.show = false;
  }

  private async submit() {
    await this.promptDetails.action.callback();
    this.show = false;
  }

  componentDidRender() {
    if (this.show) {
      const prompt: any = this.el.shadowRoot.querySelector('.submit');
      prompt.setFocus();
    }
  }

  render() {
    if (this.show) {
      return (
        <Host>
          <div class="prompt">
            <div class="prompt-content">
              <goat-text type="heading" heading-size="5" class="title">
                {this.promptDetails.title}
              </goat-text>
              <goat-text expressive={true} class="prompt-message">
                {this.promptDetails.message}
              </goat-text>
              <div class="actions">
                <goat-button class={`submit action`} color={this.promptDetails.action.type} onClick={() => this.submit()}>
                  {this.promptDetails.action.label}
                </goat-button>
                <goat-button class="cancel action" color={'secondary'} onClick={() => this.cancel()}>
                  Cancel
                </goat-button>
              </div>
            </div>
          </div>
        </Host>
      );
    }
  }
}
