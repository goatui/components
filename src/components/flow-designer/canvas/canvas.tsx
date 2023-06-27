import { Component, Element, h, Host, Prop } from '@stencil/core';

/**
 * @name Canvas
 * @description Canvas for drawing lines and shapes on.
 * @img /assets/img/canvas.png
 */
@Component({
  tag: 'goat-canvas',
  styleUrl: 'canvas.scss',
  shadow: true,
})
export class Canvas {
  @Prop() shapes: any[] = [];
  @Prop() padding: number = 2;

  @Prop() viewbox?: string;

  private drawingArea = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  };

  private unitSize: number = 1;
  private dotRadius: number = this.unitSize;
  private gap: number = this.unitSize * 10;

  @Element() elm!: HTMLElement;

  componentDidLoad() {
    setTimeout(() => {
      this.renderCanvas();
    });
  }

  renderCanvas() {}

  createPath(path) {
    let pathString = [];
    pathString.push(this.#createLineString(path));
    return ` ${pathString.join(' ')}`;
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
          pathString.push(
            this.#createQuadraticCurveString(
              {
                x: startConnector.x,
                y: startConnector.y,
              },
              { x: startConnector.x + curveSize, y: startConnector.y },
            ),
          );

          pathString.push(this.#createLineString({ x: endConnector.x - curveSize, y: startConnector.y }));
          pathString.push(
            this.#createQuadraticCurveString(
              {
                x: endConnector.x,
                y: startConnector.y,
              },
              { x: endConnector.x, y: startConnector.y + curveSize },
            ),
          );
          pathString.push(this.#createLineString(line.end));
        } else {
          pathString.push(this.#createLineString({ x: startConnector.x, y: startConnector.y - curveSize }));
          pathString.push(
            this.#createQuadraticCurveString(
              {
                x: startConnector.x,
                y: startConnector.y,
              },
              { x: startConnector.x - curveSize, y: startConnector.y },
            ),
          );

          pathString.push(this.#createLineString({ x: endConnector.x + curveSize, y: startConnector.y }));
          pathString.push(
            this.#createQuadraticCurveString(
              {
                x: endConnector.x,
                y: startConnector.y,
              },
              { x: endConnector.x, y: startConnector.y + curveSize },
            ),
          );
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

  renderBackground() {
    const columnLength = (1000 * this.unitSize) / this.gap;
    const rowLength = (1000 * this.unitSize) / this.gap;

    const shapes = [];
    for (let i = 0; i < columnLength; i++) {
      for (let j = 0; j < rowLength; j++) {
        const x = i * this.gap + this.dotRadius;
        const y = j * this.gap + this.dotRadius;
        shapes.push(<circle cx={x} cy={y} r={this.dotRadius} fill="black" />);
      }
    }
    return shapes;
  }

  renderShapes(computedViewbox) {
    const dotRadius = this.unitSize;

    const shapes = this.shapes.map(shape => {
      switch (shape.type) {
        case 'circle': {
          if (shape.x + shape.radius > computedViewbox.width) {
            computedViewbox.width = shape.x + shape.radius;
          }
          if (shape.y + shape.radius > computedViewbox.height) {
            computedViewbox.height = shape.y + shape.radius;
          }
          return <circle cx={shape.x * this.gap + dotRadius} cy={shape.y * this.gap + dotRadius} r={shape.radius * this.gap} fill={shape.color || 'black'} />;
        }
        case 'rect': {
          if (shape.x + shape.width > computedViewbox.width) {
            computedViewbox.width = shape.x + shape.width;
          }
          if (shape.y + shape.height > computedViewbox.height) {
            computedViewbox.height = shape.y + shape.height;
          }
          return (
            <rect
              x={shape.x * this.gap + dotRadius}
              y={shape.y * this.gap}
              width={shape.width * this.gap + dotRadius}
              height={shape.height * this.gap + dotRadius}
              fill={shape.color || 'black'}
            />
          );
        }
        case 'line': {
          const pathString = `M${shape.start.x * this.gap + this.dotRadius} ${shape.start.y * this.gap + this.dotRadius} L${shape.end.x * this.gap + this.dotRadius} ${
            shape.end.y * this.gap + this.dotRadius
          }`;
          return <path class="line clickable" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#000" d={pathString} fill="none" />;
        }
        case 'connector': {
          let pathString = `M${shape.start.x * this.gap + this.dotRadius} ${shape.start.y * this.gap + this.dotRadius}`;
          let current = { ...shape.start };
          this.updateComputationArea(current, computedViewbox);

          for (let i = 0; i < shape.path.length; i++) {
            // draw line
            const path = shape.path[i];
            let point: any = {};

            if (i == 0) {
              point = this.getNextPoint(current, path.direction, 1);
              pathString += ` L${point.x * this.gap + this.dotRadius} ${point.y * this.gap + this.dotRadius}`;
              current = { ...point };
              this.updateComputationArea(current, computedViewbox);
            }

            point = this.getNextPoint(current, path.direction, path.length - 2);
            pathString += ` L${point.x * this.gap + this.dotRadius} ${point.y * this.gap + this.dotRadius}`;
            current = { ...point };
            this.updateComputationArea(current, computedViewbox);

            if (i == shape.path.length - 1) {
              point = this.getNextPoint(current, path.direction, 1);
              pathString += ` L${point.x * this.gap + this.dotRadius} ${point.y * this.gap + this.dotRadius}`;
              current = { ...point };
              this.updateComputationArea(current, computedViewbox);
            } else {
              // draw curve
              const nextPath = shape.path[i + 1];
              const midPoint: any = this.getNextPoint(current, path.direction, 1);
              const nextPoint = this.getNextPoint(midPoint, nextPath.direction, 1);
              pathString += ` Q ${midPoint.x * this.gap + this.dotRadius} ${midPoint.y * this.gap + this.dotRadius} ${nextPoint.x * this.gap + this.dotRadius} ${
                nextPoint.y * this.gap + this.dotRadius
              }`;
              current = { ...nextPoint };
              this.updateComputationArea(current, computedViewbox);
            }
          }

          //draw curve

          return (
            <g class="clickable">
              <path
                class={{ 'line': true, 'no-color': !shape.color }}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke={shape.color || '#000'}
                marker-end="url(#endarrow)"
                d={pathString}
                fill="none"
              />
              <path stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke="transparent" d={pathString} fill="none" />
            </g>
          );
        }
      }
    });

    // Padding
    computedViewbox.width = computedViewbox.width + 1;
    computedViewbox.height = computedViewbox.height + 1;

    return shapes;
  }

  updateComputationArea(point, computationArea) {
    if (point.x > computationArea.width) {
      computationArea.width = point.x;
    }
    if (point.y > computationArea.height) {
      computationArea.height = point.y;
    }
  }

  render() {
    const dotRadius = this.unitSize;

    let computedViewbox: any = { width: 0, height: 0 };

    const shapes = this.renderShapes(computedViewbox);

    if (this.viewbox) {
      computedViewbox = this.viewbox;
    }

    return (
      <Host>
        <div
          class="canvas-wrapper"
          style={{
            width: computedViewbox.width * this.gap + 2 * dotRadius + 'px',
            height: computedViewbox.height * this.gap + 2 * dotRadius + 'px',
          }}
        >
          <svg class="canvas" height="100%" width="100%" viewBox={`0 0 ${computedViewbox.width * this.gap + 2 * dotRadius} ${computedViewbox.width * this.gap + 2 * dotRadius}`}>
            {/*{this.renderBackground()}*/}
            <defs>
              <pattern id="bg" patternUnits="userSpaceOnUse" width={this.gap} height={this.gap}>
                <circle cx={1} cy={1} r={this.dotRadius} />
              </pattern>

              <marker id="startarrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
                <polygon points="5 0, 5 5, 0 2.5" fill="black" />
              </marker>

              <marker id="endarrow" markerWidth="10" markerHeight="5" refX="5" refY="0" markerUnits="userSpaceOnUse">
                <polyline points="0 5, 5 0, 10 5"></polyline>
              </marker>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg)" />

            {shapes}
          </svg>
        </div>
      </Host>
    );
  }

  private getNextPoint = (point, direction, length) => {
    const nextPoint: any = {};
    if (direction == 'down') {
      nextPoint.x = point.x;
      nextPoint.y = point.y + length;
    } else if (direction == 'up') {
      nextPoint.x = point.x;
      nextPoint.y = point.y - length;
    } else if (direction == 'left') {
      nextPoint.x = point.x - length;
      nextPoint.y = point.y;
    } else if (direction == 'right') {
      nextPoint.x = point.x + length;
      nextPoint.y = point.y;
    }
    return nextPoint;
  };

  /* #createStartString: any = point => {
     this.updateDrawingArea(point);
     return `M${point.x * this.gap + this.dotRadius} ${point.y * this.gap + this.dotRadius}`;
   };*/

  #createQuadraticCurveString: any = (pointA, pointB) => {
    this.updateDrawingArea(pointA);
    this.updateDrawingArea(pointA);
    return `Q ${pointA.x * this.unitSize} ${pointA.y * this.unitSize} ${pointB.x * this.unitSize} ${pointB.y * this.unitSize}`;
  };

  #createLineString: any = point => {
    this.updateDrawingArea(point);
    const dotSize = this.unitSize;
    const gap = dotSize * 2 * 10;
    return `L${point.x * gap + dotSize} ${point.y * gap + dotSize}`;
  };
}
