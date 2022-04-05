import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import { loadScript } from '../../../utils/utils';


function PX(unit: number) {
  return unit * 16;
}

/**
 * @name Flow Designer
 * @description An interactive button with a range of presentation options.
 * @example <goat-flow-designer>
 *   </goat-flow-designer>
 */
@Component({
  tag: 'goat-flow-designer',
  styleUrl: 'goat-flow-designer.scss',
  shadow: true,
})
export class GoatFlowDesigner {

  @Element() elm!: HTMLElement;

  @Prop() blockSize: number = 10;

  @Prop() activities: any[] = [];

  @Prop() disabled: boolean = false;

  private isMouseDown: boolean = false;
  private startX: number;
  private startY: number;
  private scrollLeft: number;
  private scrollTop: number;

  private nativeScrollElm?: HTMLElement;
  private canvasElm?: HTMLElement;

  @State() activityHeight: number = 10;
  @State() activityWidth: number = 5;
  @State() lines: any[] = [];

  @Listen('mouseup', { passive: false })
  handleMouseDown() {
    this.isMouseDown = false;
  }

  async componentWillLoad() {
    if (!window['SVG']) {
      await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.2/svg.min.js`);
    }
    this.lines = [{
      start: { x: 0, y: 0, gap: 8, direction: 'down' },
      end: { x: -15, y: 15, direction: 'top' },
      type: 'shape_connector',
    }, {
      start: { x: 0, y: 0, gap: 8, direction: 'down' },
      end: { x: 15, y: 15, direction: 'top' },
      type: 'shape_connector',
    }];
  }

  componentDidLoad() {

    setTimeout(() => {
      this.nativeScrollElm.scrollLeft = (this.canvasElm.clientWidth - this.nativeScrollElm.clientWidth) / 2;
      this.initializeCanvas();
    }, 100);
  }

  getViewBoxHeight() {
    return PX(this.blockSize * this.activityHeight);
  }

  getViewBoxWidth() {
    return PX(this.blockSize * this.activityWidth);
  }

  initializeCanvas() {
    //  const draw = (window['SVG']()).addTo(this.canvasElm).viewbox(0, 0, this.getViewBoxWidth(), this.getViewBoxHeight());

    // this.createActivityNode(1, 1).addTo(draw);

  }

  createStartNode() {
    const radius = PX(this.blockSize / 2);

    return (new window['SVG'].Circle())
      .radius(radius).move(0, 0)
      .attr({ fill: 'var(--color-success-100)' })
      .stroke({ color: 'var(--color-success-500)' });
  }

  createActivityNode(x, y) {
    const size = PX(this.blockSize / 2);

    /* var image = new window['SVG'].Image().load('https://cdn.img42.com/4b6f5e63ac50c95fe147052d8a4db676.jpeg');
     image.size(100, 100).move(20, 20);*/

    const centerOfRect = (size / 2);
    return (new window['SVG'].Rect())
      .addClass('activity')
      .size(size, size)
      .radius(15)
      .move((((this.activityWidth - 1) / 2 + x) * PX(this.blockSize)) + centerOfRect, ((y) * PX(this.blockSize)) + centerOfRect);
  }

  render() {
    return <Host disabled={this.disabled}>
      <div class='flow-designer' ref={elm => this.nativeScrollElm = elm}>
        <div class='canvas-wrapper'
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

          <goat-canvas ref={elm => this.canvasElm = elm} class='flow-lines' lines={this.lines} padding={0}
                       viewbox={`0 0 124 134`} />

          <div class='flow-items'
               style={{ 'width': `${this.getViewBoxWidth()}px`, 'height': `${this.getViewBoxHeight()}px` }} />
        </div>
      </div>
    </Host>;
  }


  /* renderCanvas() {
     console.log(this.canvasElm);
     const draw = (window['SVG']())
       .addTo(this.canvasElm);

     const panel = {
       minX: 0,
       minY: 0,
       maxX: 0,
       maxY: 0,
     };

     for (const line of this.lines) {
       this.drawLine(draw, line, panel);
     }

     panel.minX -= 1;
     panel.minY -= 1;
     panel.maxX += 1;
     panel.maxY += 1;

     this.width = (panel.maxX - panel.minX);
     this.height = (panel.maxY - panel.minY);

     draw.viewbox(panel.minX * this.unitSize, panel.minY * this.unitSize, this.width * this.unitSize, this.height * this.unitSize);
   }


   drawLine(draw, line, panel) {

     let pathString = `M${(line.start.x) * this.unitSize} ${(line.start.y) * this.unitSize}`;
     this.updatePanel(panel, line.start);

     const currentPosition = { x: line.start.x, y: line.start.y };
     for (let i = 0; i < line.path.length; i++) {
       const step = line.path[i];
       const nextStep = line.path[i + 1];
       if (step.move === 'down' || step.move === 'up') {
         if (step.move === 'down') {
           currentPosition.y += step.size * this.stepSize;
         } else if (step.move === 'up') {
           currentPosition.y += -1 * step.size * this.stepSize;
         }

         if (nextStep && (nextStep.move === 'left' || nextStep.move === 'right')) {

           if (step.move == 'down' && nextStep.move === 'right') {
             currentPosition.x += -1 * step.size * this.stepSize;
           } else if (nextStep.move === 'right') {
             currentPosition.x += step.size * this.stepSize;
           }
           pathString +=

           /!* draw.path('M0 16 Q 0 48 32 48')
              .fill('none')
              .stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' }); *!/

         } else {
           pathString += ` V ${currentPosition.y * this.unitSize}`;
         }
       } else if (step.move === 'right' || step.move === 'left') {
         if (step.move === 'left') {
           currentPosition.x += -1 * step.size * this.stepSize;
         } else if (step.move === 'right') {
           currentPosition.x += step.size * this.stepSize;
         }

         if (nextStep && (nextStep.move === 'up' || nextStep.move === 'down')) {

         } else {
           pathString += ` H ${currentPosition.x * this.unitSize}`;
         }
       }
       this.updatePanel(panel, currentPosition);
     }

     const path = draw.path(pathString)
       .addClass('line')
       .addClass('clickable')
       .fill('none')
       .stroke({ width: 4, linecap: 'round', linejoin: 'round' });

     path.node.onclick = () => {
       alert('click');
     };
   }

   updatePanel(panel, position) {
     if (position.x > panel.maxX) {
       panel.maxX = position.x;
     }
     if (position.y > panel.maxY) {
       panel.maxY = position.y;
     }
     if (position.x < panel.minX) {
       panel.minX = position.x;
     }
     if (position.y < panel.minY) {
       panel.minY = position.y;
     }
   }*/

}
