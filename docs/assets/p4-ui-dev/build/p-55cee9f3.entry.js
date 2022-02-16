import{h as t,r as e,c as l,H as o,g as r}from"./p-ed5f4057.js";import{a as i}from"./p-1df439d8.js";const s=class{constructor(t){e(this,t),this.p4CellClick=l(this,"p4:table-cell-click",7),this.p4SelectChange=l(this,"p4:table-select-change",7),this.isSelectAll=!1,this.columns=[],this.dataSource=[],this.selectedRowKeys=[],this.keyField="id",this.onSelectAllClick=()=>{let t=[];this.isSelectAll=!this.isSelectAll,this.isSelectAll&&(t=this.dataSource.map((t=>t[this.keyField]))),this.onSelectChange(t)},this.onRowSelectClick=t=>{let e=[...this.selectedRowKeys];e.includes(t[this.keyField])?(this.isSelectAll=!1,e=e.filter((e=>e!==t[this.keyField]))):e.push(t[this.keyField]),this.onSelectChange(e)},this.onCellMouseOver=t=>{this.hoverRecord=t},this.handleScroll=i((()=>{const t=this.el.shadowRoot,e=t.querySelector(".header"),l=e.querySelector(".right-panel"),o=t.querySelectorAll(".left-panel"),r=t.querySelector(".list-scroll-wrapper"),i=r.getBoundingClientRect().x-l.getBoundingClientRect().x;o.forEach((function(t){t.style.left=i+"px"}));const s=t.querySelector(".body");s&&(e.style.top=r.getBoundingClientRect().y-s.getBoundingClientRect().y+"px")}),1)}onSelectChange(t){this.selectedRowKeys=t,this.p4SelectChange.emit({value:this.selectedRowKeys})}onCellClick(t,e){this.p4CellClick.emit({record:t,column:e})}componentDidLoad(){const t=this.el.shadowRoot,e=t.querySelector(".header"),l=e.querySelector(".left-panel"),o=e.querySelector(".right-panel");let r=l.clientHeight;r<o.clientHeight&&l.querySelector(".col")?l.querySelector(".col").style.height=o.clientHeight+"px":o.querySelector(".col").style.height=r+"px";let i=l.clientWidth;if(o.style.paddingLeft=i+"px",this.dataSource&&this.dataSource.length){const l=t.querySelector(".body"),o=l.querySelector(".right-panel"),r=l.querySelector(".left-panel");o.style.paddingLeft=i+"px",l.style.paddingTop=e.clientHeight+"px";const s=o.querySelectorAll(".row");r.querySelectorAll(".row").forEach(((t,e)=>{if(t.querySelector(".col")){let l=t.querySelector(".col").clientHeight;l<s[e].querySelector(".col").clientHeight?t.querySelector(".col").style.height=s[e].querySelector(".col").clientHeight+"px":s[e].querySelector(".col").style.height=l+1+"px"}}))}}renderHeader(){const e=[],l=[];return"checkbox"===this.selectionType&&e.push(t("div",{class:"col",style:{width:"3rem"}},t("div",{class:"col-content"},t("p4-checkbox",{class:"checkbox",value:this.isSelectAll,"onP4:change":this.onSelectAllClick})))),this.columns.forEach((o=>{let r=300;o.width&&(r=parseInt(o.width));const i=t("div",{class:"col",style:{width:r+"px",maxWidth:r+"px"}},t("div",{class:"col-content"},o.label));o.fixed?e.push(i):l.push(i)})),t("div",{class:"header"},t("div",{class:"left-panel"},t("div",{class:"table"},t("div",{class:"row"},e))),t("div",{class:"right-panel"},t("div",{class:"table"},t("div",{class:"row"},l))))}renderBody(){const e=[],l=[];return this.dataSource.forEach((o=>{const r=[],i=[];"checkbox"===this.selectionType&&r.push(t("div",{class:{col:!0,"col-hover":this.hoverRecord===o},style:{width:"3rem"}},t("p4-checkbox",{class:"checkbox",value:this.selectedRowKeys.includes(o[this.keyField]),"onP4:change":()=>this.onRowSelectClick(o)}))),this.columns.forEach((e=>{let l=300;e.width&&(l=parseInt(e.width));const s=t("div",{class:{col:!0,"col-hover":this.hoverRecord===o},style:{width:l+"px",maxWidth:l+"px"},onMouseOver:()=>this.onCellMouseOver(o),onClick:()=>{"Range"!=window.getSelection().type&&this.onCellClick(o,e)}},t("div",{class:"col-content"},o[e.name]?o[e.name]:""));e.fixed?r.push(s):i.push(s)})),l.push(t("div",{class:"row"},r)),e.push(t("div",{class:"row"},i))})),t("div",{class:"body"},t("div",{class:"body-container"},t("div",{class:"left-panel"},t("div",{class:"table"},l)),t("div",{class:"right-panel"},t("div",{class:"table"},e))))}render(){return t(o,null,t("div",{class:"table-component"},t("div",{class:"list-scroll-wrapper",onScroll:t=>this.handleScroll(t)},this.renderHeader(),this.dataSource.length?this.renderBody():t("div",{class:"empty-data"},t("div",{class:"empty-image"},t("svg",{width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},t("g",{transform:"translate(0 1)",fill:"none","fill-rule":"evenodd"},t("ellipse",{fill:"#F5F5F5",cx:"32",cy:"33",rx:"32",ry:"7"}),t("g",{"fill-rule":"nonzero",stroke:"#D9D9D9"},t("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),t("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:"#FAFAFA"}))))),t("p",{class:"empty-image-description"},"No Data")))))}get el(){return r(this)}};s.style='*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block;--table-border-radius:var(--border-radius, 5px)}.table-component{font-family:var(--font-family-paragraph, "Inter", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;border:1px solid var(--color-neutral-200, #e2e8f0);box-sizing:border-box;border-radius:var(--table-border-radius);overflow:hidden;height:100%}.table-component .list-scroll-wrapper{position:relative;z-index:var(--z-index-table-header, 100);overflow:auto;height:100%;width:100%;min-height:20em}.table-component .list-scroll-wrapper .header{z-index:1;font-family:var(--font-family-paragraph, "Inter", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-caption, 0.75rem);line-height:var(--line-height-caption, 1.125rem);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);letter-spacing:0.08em;text-transform:uppercase;position:absolute;left:0;top:0}.table-component .list-scroll-wrapper .header .col{background:var(--color-neutral-50, #f8fafc)}.table-component .list-scroll-wrapper .body{position:absolute}.table-component .list-scroll-wrapper .checkbox{padding-bottom:0}.table-component .list-scroll-wrapper .body-container{position:relative}.table-component .list-scroll-wrapper .left-panel{position:absolute}.table-component .list-scroll-wrapper .table{display:table;line-height:normal}.table-component .list-scroll-wrapper .table .row{display:table-row;line-height:normal}.table-component .list-scroll-wrapper .table .col{margin:0;display:table-cell;border-right:1px solid var(--color-neutral-200, #e2e8f0);border-bottom:1px solid var(--color-neutral-200, #e2e8f0);padding:var(--space-3, 0.75rem) var(--space-6, 1.5rem);box-sizing:border-box;vertical-align:middle;line-height:normal}.table-component .list-scroll-wrapper .body .row .col{cursor:pointer;background:white}.table-component .list-scroll-wrapper .body .row .col .col-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.table-component .list-scroll-wrapper .body .row .col.col-hover{background:var(--color-success-50, #ecfdf5)}.table-component .list-scroll-wrapper .right-panel .table{width:100%;table-layout:fixed}.table-component .list-scroll-wrapper .right-panel .table .col:last-child{border-right:none}.table-component .list-scroll-wrapper .empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;color:var(--color-neutral-600, #475569)}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}';export{s as p4_table}