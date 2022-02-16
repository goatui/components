import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'p4-avatar',
  styleUrl: 'p4-avatar.scss',
  shadow: true,
})
export class P4Avatar {

  @Element() elm!: HTMLElement;

  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @Prop() name: string = '';

  @Prop() src: string = '';

  private getInitials() {
    const name = this.name.split(' ');
    let firstName = name[0]?.charAt(0).toUpperCase();
    let lastName = name[1]?.charAt(0).toUpperCase();
    return `${firstName}${lastName}`;
  }

  private getSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '2rem';
    else if (this.size === 'lg')
      size = '3rem';
    else if (this.size === 'sm')
      size = '1.5rem';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }


  render() {

    return (
      <Host size={this.size} title={this.name} type={this.src ? 'image' : 'initials'}>
        <div class='avatar' style={{width: this.getSize(), height: this.getSize()}}>
          {this.src ? <img class='image' src={this.src} alt={this.name} /> : <div class='initials'>
            {this.getInitials()}
          </div>}
        </div>
      </Host>
    );
  }

}
