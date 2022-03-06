import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
import { loadScript } from '../../../utils/utils';

let scriptLoaded = false;
@Component({
  tag: 'goat-flow-designer',
  styleUrl: 'goat-flow-designer.scss',
  shadow: true,
})
export class GoatFlowDesigner {

  @Element() elm!: HTMLElement;

  @Prop() activities: any[] = [];

  @Prop() disabled: boolean = false;

  private isMouseDown: boolean = false;
  private startX: number;
  private startY: number;
  private scrollLeft: number;
  private scrollTop: number;

  private nativeScrollElm?: HTMLElement;
  private canvasElm?: HTMLElement;

  @Listen('mouseup', { passive: false })
  handleMouseDown() {
    this.isMouseDown = false
  }
  async componentWillLoad() {
    if (!scriptLoaded) {
      scriptLoaded = true;
      await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.2/svg.min.js`);
    }
  }

  componentDidLoad() {
    setTimeout(() => this.initializeCanvas(), 1000);
  }

  get SVG() {
    // @ts-ignore
    return window.SVG;
  }

  initializeCanvas() {
    const draw = (this.SVG()).addTo(this.canvasElm);
    this.createStartNode().addTo(draw);
    setTimeout(() => {
      this.nativeScrollElm.scrollTop = this.canvasElm.getBoundingClientRect().top - this.nativeScrollElm.getBoundingClientRect().top - 32;
      this.nativeScrollElm.scrollLeft = this.canvasElm.getBoundingClientRect().left - this.nativeScrollElm.getBoundingClientRect().left - 32;
    }, 0)
  }

  createStartNode() {
    // @ts-ignore
    return (new this.SVG.Circle()).radius(10).move(5, 5).attr({ fill: 'var(--color-success-100)' }).stroke({ color: 'var(--color-success-500)' })
  }

  render() {
    return <Host disabled={this.disabled}>
      <div class='flow-designer'>
        <div class='flow-scroll-wrapper' ref={elm => this.nativeScrollElm = elm} >
          <div class='flow'
               onMouseDown={(event) => {
                 event.preventDefault();
                 this.isMouseDown = true;
                 this.startX = event.pageX - this.nativeScrollElm.offsetLeft;
                 this.startY = event.pageY - this.nativeScrollElm.offsetTop;
                 this.scrollLeft = this.nativeScrollElm.scrollLeft;
                 this.scrollTop = this.nativeScrollElm.scrollTop;
               }}
               onMouseLeave={(event) => {
                 event.preventDefault();
                 this.isMouseDown = false;
               }}
               onMouseMove={(event) => {
                 event.preventDefault();
                 if (!this.isMouseDown) return;

                 const x = event.pageX - this.nativeScrollElm.offsetLeft;
                 const walkX = (x - this.startX); //scroll-fast
                 this.nativeScrollElm.scrollLeft = this.scrollLeft - walkX;

                 const y = event.pageY - this.nativeScrollElm.offsetTop;
                 const walkY = (y - this.startY); //scroll-fast
                 this.nativeScrollElm.scrollTop = this.scrollTop - walkY;

               }}>
            <div class='canvas' ref={elm => this.canvasElm = elm}></div>
          </div>
        </div>
      </div>
    </Host>;
  }

}
