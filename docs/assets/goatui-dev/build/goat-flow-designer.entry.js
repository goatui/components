import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';
import { l as loadScript } from './utils-5b2b26db.js';

const flowDesignerCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;--table-border-radius:var(border-radius, );height:400px}.flow-designer{height:100%;width:100%;overflow:hidden;border-radius:var(--table-border-radius);background-color:var(background-color, );border:1px solid var(border-color, )}.canvas-wrapper{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);position:relative;width:100%;height:100%}.flow-lines,.flow-items{position:absolute;top:0;left:0}.flow-items{position:absolute;top:0;left:50%;pointer-events:none}.activity{fill:var(--background, #ffffff);stroke:var(--border-color, var(--color-gray-50, #8d8d8d))}.flow-designer{}";

function PX(unit) {
  return unit * 16;
}
const FlowDesigner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.blockSize = 10;
    this.activities = [];
    this.disabled = false;
    this.isMouseDown = false;
    this.activityHeight = 10;
    this.activityWidth = 5;
    this.lines = [];
  }
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
    return h(Host, { disabled: this.disabled }, h("div", { class: 'flow-designer', ref: elm => this.nativeScrollElm = elm }, h("div", { class: 'canvas-wrapper', onMouseDown: (event) => {
        event.preventDefault();
        this.isMouseDown = true;
        this.startX = event.pageX - this.nativeScrollElm.offsetLeft;
        this.startY = event.pageY - this.nativeScrollElm.offsetTop;
        this.scrollLeft = this.nativeScrollElm.scrollLeft;
        this.scrollTop = this.nativeScrollElm.scrollTop;
      }, onMouseLeave: (event) => {
        event.preventDefault();
        this.isMouseDown = false;
      }, onMouseMove: (event) => {
        event.preventDefault();
        if (!this.isMouseDown)
          return;
        const x = event.pageX - this.nativeScrollElm.offsetLeft;
        const walkX = (x - this.startX); //scroll-fast
        this.nativeScrollElm.scrollLeft = this.scrollLeft - walkX;
        const y = event.pageY - this.nativeScrollElm.offsetTop;
        const walkY = (y - this.startY); //scroll-fast
        this.nativeScrollElm.scrollTop = this.scrollTop - walkY;
      } }, h("goat-canvas", { ref: elm => this.canvasElm = elm, class: 'flow-lines', lines: this.lines, padding: 0, viewbox: `0 0 124 134` }), h("div", { class: 'flow-items', style: { 'width': `${this.getViewBoxWidth()}px`, 'height': `${this.getViewBoxHeight()}px` } }))));
  }
  get elm() { return getElement(this); }
};
FlowDesigner.style = flowDesignerCss;

export { FlowDesigner as goat_flow_designer };

//# sourceMappingURL=goat-flow-designer.entry.js.map