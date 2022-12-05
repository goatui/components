import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'goat-canvas',
  styleUrl: 'canvas.scss',
  shadow: true,
})
export class Canvas {

  @Prop() unitSize: number = 16;
  @Prop() lines: any[] = [];
  @Prop() padding: number = 2;

  @Prop() viewbox?: string;

  private drawingArea = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  };

  @State() computedViewbox = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  @State() paths: string[] = [];

  @Element() elm!: HTMLElement;


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
    } else {
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
      } else if (line.start.direction == 'up') {
        startConnector.y -= line.start.gap;
      } else if (line.start.direction == 'right') {
        startConnector.x += line.start.gap;
      } else if (line.start.direction == 'left') {
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
      } else if (line.end.direction == 'top') {
        endConnector.y -= line.end.gap;
      } else if (line.end.direction == 'right') {
        endConnector.x += line.end.gap;
      } else if (line.end.direction == 'left') {
        endConnector.x -= line.end.gap;
      }
    }

    let pathString = this.#createStartString(line.start);

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
    pathString.push(this.#createLineString(startConnector));
    pathString.push(this.#createLineString(endConnector));
    pathString.push(this.#createLineString(line.end));
    return ` ${pathString.join(' ')}`;
  }

  createShapeConnectorPath(line, startConnector, endConnector) {

    let pathString = [];
    let curveSize = 2;

    if (line.start.direction == 'down') {
      if (line.end.direction == 'top') {
        if (startConnector.x === endConnector.x) {
          pathString.push(this.#createLineString(line.end));
        } else if (startConnector.x < endConnector.x) {
          pathString.push(this.#createLineString({ x: startConnector.x, y: startConnector.y - curveSize }));
          pathString.push(this.#createQuadraticCurveString({ x: startConnector.x, y: startConnector.y },
            { x: startConnector.x + curveSize, y: startConnector.y }));

          pathString.push(this.#createLineString({ x: endConnector.x - curveSize, y: startConnector.y }));
          pathString.push(this.#createQuadraticCurveString({ x: endConnector.x, y: startConnector.y },
            { x: endConnector.x, y: startConnector.y + curveSize }));
          pathString.push(this.#createLineString(line.end));
        } else {
          pathString.push(this.#createLineString({ x: startConnector.x, y: startConnector.y - curveSize }));
          pathString.push(this.#createQuadraticCurveString({ x: startConnector.x, y: startConnector.y },
            { x: startConnector.x - curveSize, y: startConnector.y }));

          pathString.push(this.#createLineString({ x: endConnector.x + curveSize, y: startConnector.y }));
          pathString.push(this.#createQuadraticCurveString({ x: endConnector.x, y: startConnector.y },
            { x: endConnector.x, y: startConnector.y + curveSize }));
          pathString.push(this.#createLineString(line.end));
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
    console.log(`Canvas size ${this.computedViewbox.x * this.unitSize} ${this.computedViewbox.x * this.unitSize} ${this.computedViewbox.width * this.unitSize} ${this.computedViewbox.height * this.unitSize}`);
    return <Host>
      <div class='canvas-wrapper' style={{
        'background-size': `${this.unitSize}px ${this.unitSize}px`,
        'background-position': `${this.unitSize / 2}px ${this.unitSize / 2}px`,
      }}>

        <svg class='canvas'
             height={`100%`}
             width={`100%`}
             viewBox={`${this.computedViewbox.x * this.unitSize} ${this.computedViewbox.x * this.unitSize} ${this.computedViewbox.width * this.unitSize} ${this.computedViewbox.height * this.unitSize}`}>
          {
            (this.paths.map((path) => {
              return <path class='line clickable'
                           stroke-width='4'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                           stroke='#000'
                           d={`${path}`}
                           fill='none' />;
            }))
          }
        </svg>
      </div>
    </Host>;
  }

  #createStartString: any = (point) => {
    this.updateDrawingArea(point);
    return `M${point.x * this.unitSize} ${point.y * this.unitSize}`;
  };

  #createQuadraticCurveString: any = (pointA, pointB) => {
    this.updateDrawingArea(pointA);
    this.updateDrawingArea(pointA);
    return `Q ${pointA.x * this.unitSize} ${pointA.y * this.unitSize} ${pointB.x * this.unitSize} ${pointB.y * this.unitSize}`;
  };

  #createLineString: any = (point) => {
    this.updateDrawingArea(point);
    return `L${point.x * this.unitSize} ${point.y * this.unitSize}`;
  };

}
