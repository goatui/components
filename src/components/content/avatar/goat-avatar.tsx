import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'goat-avatar',
  styleUrl: 'goat-avatar.scss',
  shadow: true,
})
export class GoatAvatar {

  @Element() elm!: HTMLElement;

  /**
   * Avatar size.
   */
  @Prop() size: string = '2rem';

  @Prop() name: string = '';

  @Prop() src: string = '';

  private getInitials() {
    const name = this.name.split(' ');
    let firstName = name[0] ? name[0].charAt(0).toUpperCase() : '';
    let lastName = name[1] ? name[1].charAt(0).toUpperCase() : '';
    return `${firstName}${lastName}`;
  }


  private getFontSize() {
    const size = this.size;
    const fontSize = this.size.match(/^\d+(\.\d{1,2})?/)[0];
    // @ts-ignore
    return (fontSize * 4 / 10) + size.replace(/^\d+(\.\d{1,2})?/, '');
  }


  render() {
    return (
      <Host size={this.size} title={this.name} type={this.src ? 'image' : 'initials'}>
        <div class='avatar' style={{ width: this.size, height: this.size, fontSize: this.getFontSize() }}>
          {this.src ? <img class='image' src={this.src} alt={this.name} /> : <div class='initials'>
            {this.getInitials()}
          </div>}
        </div>
      </Host>
    );
  }

}
