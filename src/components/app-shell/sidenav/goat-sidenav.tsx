import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';

/**
 * @name1 Side Navigation
 * @description1 The side navigation component provides an easy way to navigate through your website / application.
 * @img1 /assets/img/sidenav.png
 */
@Component({
  tag: 'goat-sidenav',
  styleUrl: 'goat-sidenav.scss',
  shadow: true,
})
export class GoatSidenav implements ComponentInterface {


  @Element() elm!: HTMLElement;

  @Prop() showLoader: boolean = false;



  componentWillLoad() {

  }


  render() {
    return <div class='sidenav'>
      <slot />
    </div>;
  }


}
