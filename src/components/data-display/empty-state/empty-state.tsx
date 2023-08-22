import { Component, ComponentInterface, Element, getAssetPath, h, Host, Listen, Prop, State } from '@stencil/core';
import {loadDompurify} from "../../../3d-party/dompurify";

/**
 * @name Empty State
 * @description A message that displays when there is no information to display.
 * @category Data Display
 * @example <goat-empty-state class="content-center" headline="Empty list" description="Nothing to display">
 * </goat-empty-state>
 */
@Component({
  tag: 'goat-empty-state',
  styleUrl: 'empty-state.scss',
  shadow: true,
})
export class EmptyState implements ComponentInterface {

  @Element() elm!: HTMLElement;

  @Prop({ reflect: true }) illustration: 'no-document' = 'no-document';

  @Prop({ reflect: true }) headline: string;

  @Prop({ reflect: true }) description: string;

  @Prop({ reflect: true }) action: string;

  @Prop() actionUrl: string;

  @Prop() actionVariant: 'default' | 'outline' | 'ghost' | 'link' = 'default';

  @Prop() actionDisabled: boolean = false;

  @State() vertical: boolean = false;

  @Listen('resize', { target: 'window' })
  resizeHandler() {
    this.vertical = this.elm.clientWidth < 768;
  }

  async componentWillLoad() {
    if (!window['DOMPurify']) {
      await loadDompurify();
    }
  }

  componentDidLoad() {
    this.resizeHandler();
  }

  render() {
    return (
      <Host>
        <div class={{ 'empty-state': true, 'vertical': this.vertical }}>
          <div class='illustration'>
            <goat-svg src={getAssetPath(`./assets/images/empty-state/${this.illustration}.svg`)} />
          </div>

          <div class='content'>
            {this.headline && <div class='title'>{this.headline}</div>}
            {this.description && <div class='description' innerHTML={window['DOMPurify'].sanitize(this.description)}/>}
            <div class='actions'>
              {this.action &&
                <goat-button
                  href={this.actionUrl}
                  icon={'arrow--right'}
                  disabled={this.actionDisabled}
                  variant={this.actionVariant}>
                  {this.action}
                </goat-button>}
            </div>
          </div>
        </div>
      </Host>
    );
  }


}
