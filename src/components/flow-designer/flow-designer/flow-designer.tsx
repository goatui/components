import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import { loadScript } from '../../../utils/utils';

/**
 * @name Flow Designer
 * @description An interactive button with a range of presentation options.
 * @img /assets/img/flow-designer.png
 */
@Component({
  tag: 'goat-flow-designer',
  styleUrl: 'flow-designer.scss',
  shadow: true,
})
export class FlowDesigner {
  @Element() elm!: HTMLElement;

  @Prop() blockSize: number = 16;

  @Prop() activities: any[] = [];

  @Prop() disabled: boolean = false;

  private isDrag: boolean = false;
  private isMouseInside: boolean = false;
  private startX: number;
  private startY: number;
  private scrollLeft: number;
  private scrollTop: number;

  private nativeScrollElm?: HTMLElement;

  @State() activityHeight: number = 10;
  @State() activityWidth: number = 5;
  @State() lines: any[] = [];
  @State() zoom: number = 1;

  @Listen('mouseup', { target: 'window', passive: false })
  handleMouseUp() {
    this.isDrag = false;
  }

  async componentWillLoad() {
    if (!window['SVG']) {
      await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.2/svg.min.js`);
    }
    this.lines = [
      {
        path: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 1, y: 2 },
          { x: 14, y: 20 },
        ],
      } /*, {
      start: { x: 1, y: 1, gap: 8, direction: 'down' },
      end: { x: 15, y: 15, direction: 'top' },
      type: 'shape_connector',
    }*/,
    ];
  }

  componentDidLoad() {
    setTimeout(() => {
      // this.nativeScrollElm.scrollLeft = (this.canvasElm.clientWidth - this.nativeScrollElm.clientWidth) / 2;
    }, 100);
  }





  render() {
    return (
      <Host disabled={this.disabled}>
        <img src="https://cdn.img42.com/4b6f5e63ac50c95fe147052d8a4db676.jpeg" style={{ height: '20px', width: '20px' }} draggable={true} />
        <div class="flow-designer-container">
          <div class="flow-designer" ref={elm => (this.nativeScrollElm = elm)}>
            <div
              class="canvas-container"
              onMouseDown={event => {
                event.preventDefault();
                this.isDrag = true;
                this.isMouseInside = true;
                this.startX = event.pageX - this.nativeScrollElm.offsetLeft;
                this.startY = event.pageY - this.nativeScrollElm.offsetTop;
                this.scrollLeft = this.nativeScrollElm.scrollLeft;
                this.scrollTop = this.nativeScrollElm.scrollTop;
              }}
              onMouseEnter={event => {
                event.preventDefault();
                this.isMouseInside = true;
              }}
              onMouseLeave={event => {
                event.preventDefault();
                this.isMouseInside = false;
              }}
              onMouseMove={event => {
                event.preventDefault();
                if (!this.isDrag || !this.isMouseInside) return;
                const x = event.pageX - this.nativeScrollElm.offsetLeft;
                const walkX = x - this.startX; //scroll-fast
                this.nativeScrollElm.scrollLeft = this.scrollLeft - walkX;
                if (!this.nativeScrollElm.scrollLeft) this.startX = this.startX - (this.scrollLeft - walkX);
                console.log(this.nativeScrollElm.scrollLeft, this.startX);

                const y = event.pageY - this.nativeScrollElm.offsetTop;
                const walkY = y - this.startY; //scroll-fast
                this.nativeScrollElm.scrollTop = this.scrollTop - walkY;
                if (!this.nativeScrollElm.scrollTop) this.startY = this.startY - (this.scrollTop - walkY);
              }}
            >
              <goat-canvas
                class="flow-lines"
                padding={0}
                zoom={this.zoom}
                shapes={[
                  { type: 'circle', x: 200, y: 200, radius: 0.25, color: 'red' },
                  {
                    type: 'connector',
                    start: { x: 4, y: 8 },
                    showArrow: true,
                    path: [{ direction: 'down', length: 7 }],
                    clickable: true,
                  },
                  {
                    type: 'connector',
                    start: { x: 4, y: 22 },
                    showArrow: true,
                    path: [{ direction: 'down', length: 7 }],
                    clickable: true,
                  }
                ]}
              />

              <div class="flow-items">
                <div class="flow-items-container">
                  <div
                    class="activity"
                    style={{
                      top: this.zoom * 11 + 'px',
                      left: this.zoom * 11 + 'px',
                      width: 230 * this.zoom + 'px',
                      height: 70 * this.zoom + 'px'
                    }}
                    onDrop={event => {
                      event.preventDefault();
                      alert('drop');
                    }}
                    onDragOver={ev => {
                      ev.preventDefault();
                    }}
                  >
                    <div class="activity-icon">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" />
                    </div>
                    <div class="activity-content">
                      <h1 class="activity-title"
                          style={{
                        "font-size": 16 * this.zoom + 'px',
                      }}>New issue in github</h1>
                      <p class="activity-description"
                         style={{
                           "font-size": 14 * this.zoom + 'px',
                         }}>
                        trigger
                      </p>
                    </div>
                  </div>

                  <div
                    class="new-activity"
                    style={{
                      top: 101 * this.zoom + 'px',
                      left: 31 * this.zoom + 'px',
                      width: 20 * this.zoom + 'px',
                      height: 20 * this.zoom + 'px',
                    }}
                  >
                    <goat-icon name={'plus'} size={this.zoom * 20 + 'px'} />
                  </div>

                  <goat-tag class="test-activity color-blue" style={{
                    top: 121 * this.zoom + 'px',
                    left: 116 * this.zoom + 'px'
                  }}>Testing</goat-tag>

                  <div
                    class="activity"
                    style={{
                      top: this.zoom * 151 + 'px',
                      left: this.zoom * 11 + 'px',
                      width: 230 * this.zoom + 'px',
                      height: 70 * this.zoom + 'px'
                    }}
                    onDrop={event => {
                      event.preventDefault();
                      alert('drop');
                    }}
                    onDragOver={ev => {
                      ev.preventDefault();
                    }}
                  >
                    <div class="activity-icon">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1024px-Circle-icons-mail.svg.png" />
                    </div>
                    <div class="activity-content">
                      <h1 class="activity-title"
                          style={{
                            "font-size": 16 * this.zoom + 'px',
                          }}>Send status update</h1>
                      <p class="activity-description"
                         style={{
                           "font-size": 14 * this.zoom + 'px',
                         }}>
                        email
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="action-bar">
            <goat-button-group>
              <goat-button
                size="sm"
                icon="plus"
                variant="outline"
                onGoat:click={() => {
                  this.zoom = this.zoom + 0.1;
                }}
              ></goat-button>
              <goat-button
                size="sm"
                icon="dash"
                variant="outline"
                onGoat:click={() => {
                  this.zoom = this.zoom - 0.1;
                }}
              ></goat-button>
            </goat-button-group>
          </div>
        </div>
      </Host>
    );
  }
}
