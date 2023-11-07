import{r as t,h as i,H as s,g as e}from"./p-6592004b.js";import{l as o}from"./p-96630149.js";const r="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, white);background:var(--color-primary, #0f62fe)}::-webkit-scrollbar{width:var(--scrollbar-width, 0.75rem);height:var(--scrollbar-width, 0.75rem)}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;--table-border-radius:var(border-radius, );height:400px}.flow-designer-container{position:relative;width:100%;height:100%}.flow-designer-container .action-bar{position:absolute;right:10px;top:10px;background:white}.flow-designer{overflow:hidden;position:relative;height:100%;width:100%;border-radius:var(--table-border-radius);background-color:var(--background-color, );border:1px solid var(--border-strong-01, #8d8d8d)}.flow-designer .canvas-container{position:relative;min-width:100%;min-height:100%}.flow-designer .clear{clear:both}.flow-lines,.flow-items{position:absolute;top:0;left:0}.flow-items{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.flow-items .flow-items-container{position:relative}.flow-items .new-activity{pointer-events:auto;position:absolute;background:var(--color-neutral-30, #c6c6c6);border-radius:100%;line-height:0;box-sizing:border-box;border:2px solid var(--color-neutral-30, #c6c6c6);display:flex;align-items:center;justify-content:center}.flow-items .new-activity:hover{border-color:var(--color-primary, #0f62fe);cursor:pointer}.flow-items .test-activity{pointer-events:auto;position:absolute}.flow-items .activity{pointer-events:auto;position:absolute;display:flex;align-items:center;box-sizing:border-box}.flow-items .activity .activity-icon{background:var(--background, white);border:2px solid var(--border-strong-01, #8d8d8d);border-radius:5px}.flow-items .activity .activity-icon img{width:100%;height:100%}.flow-items .activity .activity-content{flex:1;overflow:hidden;display:flex;flex-direction:column;padding:10px}.flow-items .activity .activity-content .activity-title{margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:16px;font-weight:500}.flow-items .activity .activity-content .activity-description{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:0}.flow-items .activity:hover{cursor:pointer}.flow-items .activity:hover .activity-icon{border-color:var(--color-primary, #0f62fe)}.activity{fill:var(--background, white);stroke:var(--border-strong-01, #8d8d8d)}.flow-designer{}";const a=class{constructor(i){t(this,i);this.isDrag=false;this.isMouseInside=false;this.gap=10;this.blockSize=16;this.data=[];this.disabled=false;this.activityHeight=10;this.activityWidth=5;this.lines=[];this.zoom=1}handleMouseUp(){this.isDrag=false}async componentWillLoad(){if(!window["SVG"]){await o(`https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.2/svg.min.js`)}this.lines=[{path:[{x:0,y:0},{x:1,y:0},{x:1,y:2},{x:14,y:20}]}]}componentDidLoad(){setTimeout((()=>{}),100)}processData(){const t=[];let s={x:5,y:2};const e=this.data.map((e=>{t.push({type:"connector",start:{x:s.x+3,y:s.y+7},showArrow:true,path:[{direction:"down",length:7}],clickable:true});return i("div",{class:"activity",style:{top:this.zoom*(s.y*this.gap+1)+"px",left:this.zoom*(s.x*this.gap+1)+"px",width:23*this.gap*this.zoom+"px",height:7*this.gap*this.zoom+"px"},onDrop:t=>{t.preventDefault();alert("drop")},onDragOver:t=>{t.preventDefault()}},i("div",{class:"activity-icon",style:{width:6*this.gap*this.zoom+"px",height:6*this.gap*this.zoom+"px",padding:this.gap*this.zoom+"px"}},i("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"})),i("div",{class:"activity-content"},i("h1",{class:"activity-title",style:{"font-size":16*this.zoom+"px"}},e.title),i("p",{class:"activity-description",style:{"font-size":14*this.zoom+"px"}},"trigger")))}));return{shapes:t,activities:e}}render(){const{activities:t,shapes:e}=this.processData();return i(s,{disabled:this.disabled},i("img",{src:"https://cdn.img42.com/4b6f5e63ac50c95fe147052d8a4db676.jpeg",style:{height:"20px",width:"20px"},draggable:true}),i("div",{class:"flow-designer-container"},i("div",{class:"flow-designer",ref:t=>this.nativeScrollElm=t},i("div",{class:"canvas-container",onMouseDown:t=>{t.preventDefault();this.isDrag=true;this.isMouseInside=true;this.startX=t.pageX-this.nativeScrollElm.offsetLeft;this.startY=t.pageY-this.nativeScrollElm.offsetTop;this.scrollLeft=this.nativeScrollElm.scrollLeft;this.scrollTop=this.nativeScrollElm.scrollTop},onMouseEnter:t=>{t.preventDefault();this.isMouseInside=true},onMouseLeave:t=>{t.preventDefault();this.isMouseInside=false},onMouseMove:t=>{t.preventDefault();if(!this.isDrag||!this.isMouseInside)return;const i=t.pageX-this.nativeScrollElm.offsetLeft;const s=i-this.startX;this.nativeScrollElm.scrollLeft=this.scrollLeft-s;if(!this.nativeScrollElm.scrollLeft)this.startX=this.startX-(this.scrollLeft-s);console.log(this.nativeScrollElm.scrollLeft,this.startX);const e=t.pageY-this.nativeScrollElm.offsetTop;const o=e-this.startY;this.nativeScrollElm.scrollTop=this.scrollTop-o;if(!this.nativeScrollElm.scrollTop)this.startY=this.startY-(this.scrollTop-o)}},i("goat-canvas",{class:"flow-lines",padding:0,zoom:this.zoom,shapes:[{type:"circle",x:200,y:200,radius:.25,color:"red"},...e,{type:"connector",start:{x:4,y:22},showArrow:true,path:[{direction:"down",length:7}],clickable:true,dashed:true}]}),i("div",{class:"flow-items"},i("div",{class:"flow-items-container"},t,i("div",{class:"new-activity",style:{top:101*this.zoom+"px",left:31*this.zoom+"px",width:20*this.zoom+"px",height:20*this.zoom+"px"}},i("goat-icon",{name:"plus",size:this.zoom*20+"px"})),i("goat-tag",{class:"test-activity color-blue",style:{top:121*this.zoom+"px",left:116*this.zoom+"px"}},"Testing"),i("div",{class:"activity",style:{top:this.zoom*151+"px",left:this.zoom*11+"px",width:230*this.zoom+"px",height:70*this.zoom+"px"},onDrop:t=>{t.preventDefault();alert("drop")},onDragOver:t=>{t.preventDefault()}},i("div",{class:"activity-icon",style:{width:60*this.zoom+"px",height:60*this.zoom+"px",padding:10*this.zoom+"px"}},i("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1024px-Circle-icons-mail.svg.png"})),i("div",{class:"activity-content"},i("h1",{class:"activity-title",style:{"font-size":16*this.zoom+"px"}},"Send status update"),i("p",{class:"activity-description",style:{"font-size":14*this.zoom+"px"}},"email"))))),i("div",{class:"clear"}))),i("div",{class:"action-bar"},i("goat-button-group",null,i("goat-button",{size:"sm",icon:"plus",variant:"outline","onGoat:click":()=>{this.zoom=this.zoom+.1}}),i("goat-button",{size:"sm",icon:"dash",variant:"outline","onGoat:click":()=>{this.zoom=this.zoom-.1}})))))}get elm(){return e(this)}};a.style=r;export{a as goat_flow_designer};
//# sourceMappingURL=p-bc6d8e4b.entry.js.map