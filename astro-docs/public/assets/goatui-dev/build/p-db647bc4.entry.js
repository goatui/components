import{r,h as o,H as a}from"./p-6592004b.js";import{i as e,s as t}from"./p-b187649f.js";import"./p-d51a9f28.js";const s="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, white);background:var(--color-primary, #0f62fe)}::-webkit-scrollbar{width:var(--scrollbar-width, 0.75rem);height:var(--scrollbar-width, 0.75rem)}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;--calendar-border-color:var(--border-strong-01, #8d8d8d);--scale-size:3rem;--scale-color:var(--text-placeholder, #a8a8a8)}.background .row{display:flex;height:2rem;border-bottom:1px dashed var(--scale-color, )}.background .row.hour{border-bottom:1px solid var(--scale-color, )}.background .row:last-child{border-bottom:0}.background .row .column{flex:1;border-right:1px solid var(--scale-color, )}";const l=class{constructor(o){r(this,o);this.columns=1}renderBackgroundColumns(){const r=[];for(let a=0;a<this.columns;a++){const s=["column"];if(e(t(a),t(new Date)))s.push("active");r.push(o("div",{class:s.join(" ")}))}return r}render(){const r=[];for(let a=0;a<48;a++){const e=["row"];if(a%2)e.push("hour");const t=o("div",{class:e.join(" ")},this.renderBackgroundColumns());r.push(t)}return o(a,null,o("div",{class:"background"},r))}};l.style=s;export{l as goat_calendar_month_view_background};
//# sourceMappingURL=p-db647bc4.entry.js.map