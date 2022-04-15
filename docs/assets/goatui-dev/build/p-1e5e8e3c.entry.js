import{r as t,h as i,H as s,g as e}from"./p-433e69ff.js";const h="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block}.canvas-wrapper{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='8d8d8d' class='bi bi-dot' viewBox='0 0 16 16'%3E%3Cpath d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/%3E%3C/svg%3E\");width:max-content}.line{stroke:var(--border-color, var(--color-gray-50, #8d8d8d))}.line.clickable{cursor:pointer;z-index:1}.line.clickable:hover{stroke:var(--color-primary, var(--color-blue-60, #0f62fe))}";var r=undefined&&undefined.__classPrivateFieldGet||function(t,i,s,e){if(s==="a"&&!e)throw new TypeError("Private accessor was defined without a getter");if(typeof i==="function"?t!==i||!e:!i.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return s==="m"?e:s==="a"?e.call(t):e?e.value:i.get(t)};var a,o,n;let l=class{constructor(i){t(this,i);this.unitSize=16;this.lines=[];this.padding=2;this.drawingArea={minX:0,minY:0,maxX:0,maxY:0};this.computedViewbox={x:0,y:0,width:0,height:0};this.paths=[];a.set(this,(t=>{this.updateDrawingArea(t);return`M${t.x*this.unitSize} ${t.y*this.unitSize}`}));o.set(this,((t,i)=>{this.updateDrawingArea(t);this.updateDrawingArea(t);return`Q ${t.x*this.unitSize} ${t.y*this.unitSize} ${i.x*this.unitSize} ${i.y*this.unitSize}`}));n.set(this,(t=>{this.updateDrawingArea(t);return`L${t.x*this.unitSize} ${t.y*this.unitSize}`}))}componentDidLoad(){setTimeout((()=>{this.renderCanvas()}))}renderCanvas(){for(const t of this.lines){this.drawLine(t)}this.computedViewbox=this.calculateViewbox();this.paths=[...this.paths]}calculateViewbox(){let t;if(this.viewbox){const i=this.viewbox.split(" ");t={x:parseInt(i[0],10),y:parseInt(i[1],10),width:parseInt(i[2],10),height:parseInt(i[3],10)}}else{t={x:this.drawingArea.minX,y:this.drawingArea.minY,width:this.drawingArea.maxX-this.drawingArea.minX,height:this.drawingArea.maxY-this.drawingArea.minY}}if(this.padding){t.x-=this.padding;t.y-=this.padding;t.width+=2*this.padding;t.height+=2*this.padding}return t}drawLine(t){const i={x:t.start.x,y:t.start.y};if(t.start.gap){if(t.start.direction=="down"){i.y+=t.start.gap}else if(t.start.direction=="up"){i.y-=t.start.gap}else if(t.start.direction=="right"){i.x+=t.start.gap}else if(t.start.direction=="left"){i.x-=t.start.gap}}const s={x:t.end.x,y:t.end.y};if(t.end.gap){if(t.end.direction=="down"){s.y+=t.end.gap}else if(t.end.direction=="top"){s.y-=t.end.gap}else if(t.end.direction=="right"){s.x+=t.end.gap}else if(t.end.direction=="left"){s.x-=t.end.gap}}let e=r(this,a,"f").call(this,t.start);if(!t.type||t.type=="straight_line"){e+=this.createStraightLinePath(t,i,s)}if(t.type=="shape_connector"){e+=this.createShapeConnectorPath(t,i,s)}this.updateDrawingArea(t.start);this.updateDrawingArea(t.end);this.paths.push(e)}createStraightLinePath(t,i,s){let e=[];e.push(r(this,n,"f").call(this,i));e.push(r(this,n,"f").call(this,s));e.push(r(this,n,"f").call(this,t.end));return` ${e.join(" ")}`}createShapeConnectorPath(t,i,s){let e=[];let h=2;if(t.start.direction=="down"){if(t.end.direction=="top"){if(i.x===s.x){e.push(r(this,n,"f").call(this,t.end))}else if(i.x<s.x){e.push(r(this,n,"f").call(this,{x:i.x,y:i.y-h}));e.push(r(this,o,"f").call(this,{x:i.x,y:i.y},{x:i.x+h,y:i.y}));e.push(r(this,n,"f").call(this,{x:s.x-h,y:i.y}));e.push(r(this,o,"f").call(this,{x:s.x,y:i.y},{x:s.x,y:i.y+h}));e.push(r(this,n,"f").call(this,t.end))}else{e.push(r(this,n,"f").call(this,{x:i.x,y:i.y-h}));e.push(r(this,o,"f").call(this,{x:i.x,y:i.y},{x:i.x-h,y:i.y}));e.push(r(this,n,"f").call(this,{x:s.x+h,y:i.y}));e.push(r(this,o,"f").call(this,{x:s.x,y:i.y},{x:s.x,y:i.y+h}));e.push(r(this,n,"f").call(this,t.end))}}}return` ${e.join(" ")}`}updateDrawingArea(t){if(t.x>this.drawingArea.maxX){this.drawingArea.maxX=t.x}if(t.y>this.drawingArea.maxY){this.drawingArea.maxY=t.y}if(t.x<this.drawingArea.minX){this.drawingArea.minX=t.x}if(t.y<this.drawingArea.minY){this.drawingArea.minY=t.y}}render(){return i(s,null,i("div",{class:"canvas-wrapper",style:{"background-size":`${this.unitSize}px ${this.unitSize}px`,"background-position":`${this.unitSize/2}px ${this.unitSize/2}px`}},i("svg",{class:"canvas",viewBox:`${this.computedViewbox.x*this.unitSize} ${this.computedViewbox.x*this.unitSize} ${this.computedViewbox.width*this.unitSize} ${this.computedViewbox.height*this.unitSize}`},this.paths.map((t=>i("path",{class:"line clickable","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#000",d:`${t}`,fill:"none"}))))))}get elm(){return e(this)}};a=new WeakMap,o=new WeakMap,n=new WeakMap;l.style=h;export{l as goat_canvas};
//# sourceMappingURL=p-1e5e8e3c.entry.js.map