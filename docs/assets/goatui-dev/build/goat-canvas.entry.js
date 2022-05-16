import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';

const canvasCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block}.canvas-wrapper{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='8d8d8d' class='bi bi-dot' viewBox='0 0 16 16'%3E%3Cpath d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/%3E%3C/svg%3E\");width:max-content}.line{stroke:var(--border-color, var(--color-gray-50, #8d8d8d))}.line.clickable{cursor:pointer;z-index:1}.line.clickable:hover{stroke:var(--color-primary, var(--color-blue-60, #0f62fe))}";

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Canvas_createStartString, _Canvas_createQuadraticCurveString, _Canvas_createLineString;
const Canvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.unitSize = 16;
    this.lines = [];
    this.padding = 2;
    this.drawingArea = {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    };
    this.computedViewbox = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.paths = [];
    _Canvas_createStartString.set(this, (point) => {
      this.updateDrawingArea(point);
      return `M${point.x * this.unitSize} ${point.y * this.unitSize}`;
    });
    _Canvas_createQuadraticCurveString.set(this, (pointA, pointB) => {
      this.updateDrawingArea(pointA);
      this.updateDrawingArea(pointA);
      return `Q ${pointA.x * this.unitSize} ${pointA.y * this.unitSize} ${pointB.x * this.unitSize} ${pointB.y * this.unitSize}`;
    });
    _Canvas_createLineString.set(this, (point) => {
      this.updateDrawingArea(point);
      return `L${point.x * this.unitSize} ${point.y * this.unitSize}`;
    });
  }
  componentDidLoad() {
    setTimeout(() => {
      this.renderCanvas();
    });
  }
  renderCanvas() {
    for (const line of this.lines) {
      this.drawLine(line);
    }
    this.computedViewbox = this.calculateViewbox();
    this.paths = [...this.paths];
  }
  calculateViewbox() {
    let result;
    if (this.viewbox) {
      const viewbox = this.viewbox.split(' ');
      result = {
        x: parseInt(viewbox[0], 10),
        y: parseInt(viewbox[1], 10),
        width: parseInt(viewbox[2], 10),
        height: parseInt(viewbox[3], 10),
      };
    }
    else {
      result = {
        x: this.drawingArea.minX,
        y: this.drawingArea.minY,
        width: (this.drawingArea.maxX - this.drawingArea.minX),
        height: (this.drawingArea.maxY - this.drawingArea.minY),
      };
    }
    if (this.padding) {
      result.x -= this.padding;
      result.y -= this.padding;
      result.width += 2 * this.padding;
      result.height += 2 * this.padding;
    }
    return result;
  }
  drawLine(line) {
    const startConnector = {
      x: line.start.x,
      y: line.start.y,
    };
    if (line.start.gap) {
      if (line.start.direction == 'down') {
        startConnector.y += line.start.gap;
      }
      else if (line.start.direction == 'up') {
        startConnector.y -= line.start.gap;
      }
      else if (line.start.direction == 'right') {
        startConnector.x += line.start.gap;
      }
      else if (line.start.direction == 'left') {
        startConnector.x -= line.start.gap;
      }
    }
    const endConnector = {
      x: line.end.x,
      y: line.end.y,
    };
    if (line.end.gap) {
      if (line.end.direction == 'down') {
        endConnector.y += line.end.gap;
      }
      else if (line.end.direction == 'top') {
        endConnector.y -= line.end.gap;
      }
      else if (line.end.direction == 'right') {
        endConnector.x += line.end.gap;
      }
      else if (line.end.direction == 'left') {
        endConnector.x -= line.end.gap;
      }
    }
    let pathString = __classPrivateFieldGet(this, _Canvas_createStartString, "f").call(this, line.start);
    /**
     * Straight line between two connectors
     */
    if (!line.type || line.type == 'straight_line') {
      pathString += this.createStraightLinePath(line, startConnector, endConnector);
    }
    if (line.type == 'shape_connector') {
      pathString += this.createShapeConnectorPath(line, startConnector, endConnector);
    }
    this.updateDrawingArea(line.start);
    this.updateDrawingArea(line.end);
    this.paths.push(pathString);
  }
  createStraightLinePath(line, startConnector, endConnector) {
    let pathString = [];
    pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, startConnector));
    pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, endConnector));
    pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, line.end));
    return ` ${pathString.join(' ')}`;
  }
  createShapeConnectorPath(line, startConnector, endConnector) {
    let pathString = [];
    let curveSize = 2;
    if (line.start.direction == 'down') {
      if (line.end.direction == 'top') {
        if (startConnector.x === endConnector.x) {
          pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, line.end));
        }
        else if (startConnector.x < endConnector.x) {
          pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, { x: startConnector.x, y: startConnector.y - curveSize }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createQuadraticCurveString, "f").call(this, { x: startConnector.x, y: startConnector.y }, { x: startConnector.x + curveSize, y: startConnector.y }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, { x: endConnector.x - curveSize, y: startConnector.y }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createQuadraticCurveString, "f").call(this, { x: endConnector.x, y: startConnector.y }, { x: endConnector.x, y: startConnector.y + curveSize }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, line.end));
        }
        else {
          pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, { x: startConnector.x, y: startConnector.y - curveSize }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createQuadraticCurveString, "f").call(this, { x: startConnector.x, y: startConnector.y }, { x: startConnector.x - curveSize, y: startConnector.y }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, { x: endConnector.x + curveSize, y: startConnector.y }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createQuadraticCurveString, "f").call(this, { x: endConnector.x, y: startConnector.y }, { x: endConnector.x, y: startConnector.y + curveSize }));
          pathString.push(__classPrivateFieldGet(this, _Canvas_createLineString, "f").call(this, line.end));
        }
      }
    }
    /*if (startConnector.x === endConnector.x) {
      pathString.push(this.#createLineString(endConnector));
    } else {
      if (line.start.direction === 'down' && line.end.direction === 'left') {
        if (startConnector.y < endConnector.y) {
          pathString += ` ${this.#createLineString({ x: startConnector.x, y: endConnector.y })}`;
        } else {
          pathString += ` ${this.#createLineString({ x: endConnector.x, y: startConnector.y })}`;
        }
      }
      pathString += ` ${this.#createLineString(endConnector)}`;
    }*/
    return ` ${pathString.join(' ')}`;
  }
  updateDrawingArea(position) {
    if (position.x > this.drawingArea.maxX) {
      this.drawingArea.maxX = position.x;
    }
    if (position.y > this.drawingArea.maxY) {
      this.drawingArea.maxY = position.y;
    }
    if (position.x < this.drawingArea.minX) {
      this.drawingArea.minX = position.x;
    }
    if (position.y < this.drawingArea.minY) {
      this.drawingArea.minY = position.y;
    }
  }
  render() {
    return h(Host, null, h("div", { class: 'canvas-wrapper', style: {
        'background-size': `${this.unitSize}px ${this.unitSize}px`,
        'background-position': `${this.unitSize / 2}px ${this.unitSize / 2}px`,
      } }, h("svg", { class: 'canvas', viewBox: `${this.computedViewbox.x * this.unitSize} ${this.computedViewbox.x * this.unitSize} ${this.computedViewbox.width * this.unitSize} ${this.computedViewbox.height * this.unitSize}` }, (this.paths.map((path) => {
      return h("path", { class: 'line clickable', "stroke-width": '4', "stroke-linecap": 'round', "stroke-linejoin": 'round', stroke: '#000', d: `${path}`, fill: 'none' });
    })))));
  }
  get elm() { return getElement(this); }
};
_Canvas_createStartString = new WeakMap(), _Canvas_createQuadraticCurveString = new WeakMap(), _Canvas_createLineString = new WeakMap();
Canvas.style = canvasCss;

export { Canvas as goat_canvas };

//# sourceMappingURL=goat-canvas.entry.js.map