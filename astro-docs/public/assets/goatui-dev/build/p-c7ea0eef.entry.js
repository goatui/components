import{r as e,c as i,h as r,g as t}from"./p-6592004b.js";import{r as o,t as a}from"./p-d51a9f28.js";import{b as l,t as n,g as s,c,a as d,C as v,B as u,f as m}from"./p-bc20e6ca.js";import{s as h,i as w}from"./p-b187649f.js";var b=36e5;function y(e,i){o(2,arguments);var r=n(i);return l(e,r*b)}function f(e,i){var r,t,l,c,d,v,u,m;o(1,arguments);var h=s();var w=n((r=(t=(l=(c=i===null||i===void 0?void 0:i.weekStartsOn)!==null&&c!==void 0?c:i===null||i===void 0?void 0:(d=i.locale)===null||d===void 0?void 0:(v=d.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&l!==void 0?l:h.weekStartsOn)!==null&&t!==void 0?t:(u=h.locale)===null||u===void 0?void 0:(m=u.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&r!==void 0?r:0);if(!(w>=0&&w<=6)){throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")}var b=a(e);var y=b.getDay();var f=(y<w?7:0)+y-w;b.setDate(b.getDate()-f);b.setHours(0,0,0,0);return b}var p=864e5;function g(e,i){o(2,arguments);var r=h(e);var t=h(i);var a=r.getTime()-c(r);var l=t.getTime()-c(t);return Math.round((a-l)/p)}function x(e,i){var r=e.getFullYear()-i.getFullYear()||e.getMonth()-i.getMonth()||e.getDate()-i.getDate()||e.getHours()-i.getHours()||e.getMinutes()-i.getMinutes()||e.getSeconds()-i.getSeconds()||e.getMilliseconds()-i.getMilliseconds();if(r<0){return-1}else if(r>0){return 1}else{return r}}function k(e,i){o(2,arguments);var r=a(e);var t=a(i);var l=x(r,t);var n=Math.abs(g(r,t));r.setDate(r.getDate()-l*n);var s=Number(x(r,t)===-l);var c=l*(n-s);return c===0?0:c}function z(e,i){o(2,arguments);return a(e).getTime()-a(i).getTime()}function D(e){o(1,arguments);var i=a(e);i.setHours(23,59,59,999);return i}function E(e){o(1,arguments);var i=a(e);var r=i.getMonth();i.setFullYear(i.getFullYear(),r+1,0);i.setHours(23,59,59,999);return i}function $(e){o(1,arguments);var i=a(e);i.setDate(1);i.setHours(0,0,0,0);return i}function M(e,i){var r,t,l,c,d,v,u,m;o(1,arguments);var h=s();var w=n((r=(t=(l=(c=i===null||i===void 0?void 0:i.weekStartsOn)!==null&&c!==void 0?c:i===null||i===void 0?void 0:(d=i.locale)===null||d===void 0?void 0:(v=d.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&l!==void 0?l:h.weekStartsOn)!==null&&t!==void 0?t:(u=h.locale)===null||u===void 0?void 0:(m=u.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&r!==void 0?r:0);if(!(w>=0&&w<=6)){throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")}var b=a(e);var y=b.getDay();var f=(y<w?-7:0)+6-(y-w);b.setDate(b.getDate()+f);b.setHours(23,59,59,999);return b}function S(e,i=1){const r=f($(e),{weekStartsOn:i});const t=M(E(e),{weekStartsOn:i});return{startDate:r,endDate:t,totalDays:42}}function P(e,i=1){const r=f(e,{weekStartsOn:i});const t=M(e,{weekStartsOn:i});return{startDate:r,endDate:t,totalDays:7}}function j(e,i,r){if(e==="week"){return P(i,1)}else{const e={};e.startDate=h(i);e.endDate=D(d(i,r-1));e.totalDays=r;return e}}var C=undefined&&undefined.__classPrivateFieldGet||function(e,i,r,t){if(r==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof i==="function"?e!==i||!t:!i.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?t:r==="a"?t.call(e):t?t.value:i.get(e)};var T;class B extends v{constructor(e){super(e.start,e.end,e.title,e.data);this.width=1}}class O{constructor(){T.set(this,[])}addEvents(e){e.forEach((e=>{C(this,T,"f").push(new B(e))}))}process(){this.columns=[];let e=C(this,T,"f").sort(((e,i)=>z(e.start,i.start)||i.length()-e.length()));let i=null;while(e.length){if(i==e.length)throw new Error("Events not processed in previous run, breaking infinite loop");i=e.length;const r=[];for(let i=0;i<e.length;i++){if(i==0)r.push(e[i]);else if(z(e[i].start,r[r.length-1].end)>=0){r.push(e[i])}}this.columns.push(r);e=e.filter((e=>!r.find((i=>i.gid==e.gid))))}for(let e=0;e<this.columns.length-1;e++){this.columns[e].forEach((i=>{for(let r=e+1;r<this.columns.length;r++){if(this.columns[r].find((e=>i.isOverlapping(e)))){break}i.width++}}))}}}T=new WeakMap;const _="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, white);background:var(--color-primary, #0f62fe)}::-webkit-scrollbar{width:var(--scrollbar-width, 0.75rem);height:var(--scrollbar-width, 0.75rem)}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;height:100%;--calendar-border-color:var(--border-strong-01, #8d8d8d);--scale-size:3rem;--scale-color:var(--text-placeholder, #a8a8a8)}.scale{width:var(--scale-size)}.calendar-column-view{display:flex;flex-direction:column;height:100%}.calendar-column-view .view-header{border-top:1px solid var(--border-strong-01, #8d8d8d);display:flex}.calendar-column-view .view-header .scale{border-right:1px solid var(--scale-color, )}.calendar-column-view .view-header .columns{display:flex;flex:1}.calendar-column-view .view-header .columns .column{flex:1;border-right:1px solid var(--scale-color, )}.calendar-column-view .view-header .columns .column .column-content{display:flex;border-top:0.5rem solid transparent;align-items:center;padding:0.5rem;gap:0.5rem}.calendar-column-view .view-header .columns .column.today .column-content{border-top-color:var(--color-primary, #0f62fe)}.calendar-column-view .view-header .columns .column.today .column-content .date{color:var(--color-primary, #0f62fe)}.calendar-column-view .view-header .columns .column .date{font-size:2rem;cursor:pointer;border-radius:100%;padding:0.5rem}.calendar-column-view .view-header .columns .column .date:hover{background:var(--color-primary-30, #a6c8ff)}.calendar-column-view .view-header .columns .column .day{font-size:1rem}.calendar-column-view .view-header .scrollbar-placeholder{width:var(--scrollbar-width)}.calendar-column-view .multi-day-section-wrapper{border-bottom:1px solid var(--scale-color, )}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll{overflow-y:scroll;max-height:6rem}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section{position:relative}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-day-background{display:flex;height:100%;position:absolute;width:100%}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-day-background .scale{border-right:1px solid var(--scale-color, )}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-day-background .columns{display:flex;flex:1}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-day-background .columns .column{flex:1;border-right:1px solid var(--scale-color, )}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events{padding:0 0 0 var(--scale-size)}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events .row{height:1.8rem;box-sizing:content-box;position:relative;padding-bottom:0.5rem}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events .row:last-child{padding-bottom:0}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events .row-spacer{height:1rem}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events .event{background:var(--color-primary-20, #d0e2ff);border-left:0.35rem solid var(--color-primary, #0f62fe);border-radius:3px;position:absolute;height:1.8rem;text-overflow:ellipsis;overflow:hidden}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events .event .event-title{padding:0.25rem;font-family:var(--body-01-font-family, IBM Plex Sans, Helvetica Neue, Arial, sans-serif);font-size:var(--body-01-font-size, 0.875rem);font-weight:var(--body-01-font-weight, 400);line-height:var(--body-01-line-height, 1.25rem);letter-spacing:var(--body-01-letter-spacing, 0.16px)}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events .event.clickable{cursor:pointer}.calendar-column-view .multi-day-section-wrapper .multi-day-section-scroll .multi-day-section .multi-events .event.clickable:hover{background:var(--color-primary-30, #a6c8ff)}.calendar-column-view .view-body{height:100%;border-bottom:1px solid var(--calendar-border-color, );overflow-y:scroll}.calendar-column-view .view-body .view-body-scroll{display:flex;position:relative}.calendar-column-view .view-body .view-body-scroll .scale{border-right:1px solid var(--scale-color, )}.calendar-column-view .view-body .view-body-scroll .scale .row{width:0;position:relative;height:2rem;border-bottom:1px dashed var(--scale-color, )}.calendar-column-view .view-body .view-body-scroll .scale .row.hour{border-bottom:1px solid var(--scale-color, );width:50%;margin-inline-start:50%}.calendar-column-view .view-body .view-body-scroll .scale .row:last-child{border-bottom:0}.calendar-column-view .view-body .view-body-scroll .scale .row .time{position:absolute;top:-0.5rem;font-size:0.75rem}.calendar-column-view .view-body .view-body-scroll .drawing-area{flex:1}.calendar-column-view .view-body .view-body-scroll .drawing-area .events-container{position:absolute;top:0;left:var(--scale-size);width:calc(100% - var(--scale-size));height:100%;display:flex}.calendar-column-view .view-body .view-body-scroll .drawing-area .events-container .column{flex:1;padding:0 1rem 0 1px}.calendar-column-view .view-body .view-body-scroll .drawing-area .events-container .column .column-content{position:relative;height:100%}.calendar-column-view .view-body .view-body-scroll .drawing-area .events-container .column .event{background:var(--color-primary-20, #d0e2ff);border-left:0.35rem solid var(--color-primary, #0f62fe);border-radius:3px;position:absolute}.calendar-column-view .view-body .view-body-scroll .drawing-area .events-container .column .event .event-title{padding:0.25rem}.calendar-column-view .view-body .view-body-scroll .drawing-area .events-container .column .event.clickable{cursor:pointer}.calendar-column-view .view-body .view-body-scroll .drawing-area .events-container .column .event.clickable:hover{background:var(--color-primary-30, #a6c8ff)}.calendar-column-view .view-body .view-body-scroll .current-time-line{position:absolute;z-index:100;pointer-events:none;width:calc(100% - var(--scale-size));margin-inline-start:var(--scale-size)}.calendar-column-view .view-body .view-body-scroll .current-time-line .time{position:absolute;font-size:0.5rem;font-weight:600;color:var(--color-primary, #0f62fe);top:-6px;left:-3rem;background:var(--color-primary-10, #edf5ff);padding:2px;border-radius:3px}.calendar-column-view .view-body .view-body-scroll .current-time-line .dash-line{position:absolute;left:0;border-bottom:1px dashed var(--color-primary, #0f62fe)}.calendar-column-view .view-body .view-body-scroll .current-time-line .dot{border-radius:100%;width:0.5rem;height:0.5rem;background:var(--color-primary, #0f62fe);display:block;position:absolute;top:-0.25rem}.calendar-column-view .view-body .view-body-scroll .current-time-line .line{border-bottom:2px solid var(--color-primary, #0f62fe);position:absolute;top:-1px}";var H=undefined&&undefined.__classPrivateFieldGet||function(e,i,r,t){if(r==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof i==="function"?e!==i||!t:!i.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?t:r==="a"?t.call(e):t?t.value:i.get(e)};var W,N,R;const A=class{constructor(r){e(this,r);this.goatColumnViewDateClick=i(this,"goat:column-view-date-click",7);this.goatColumnViewEventClick=i(this,"goat:column-view-event-click",7);W.add(this);this.singleDayEvents={};this.multiDayEvents=[];this.events=[];this.view="week";this.days=7;this.eventClickable=true;this.currentTime=undefined;this.contextDate=undefined}async componentWillRender(){this.dateRange=j(this.view,this.contextDate,this.days);this.singleDayEvents={};H(this,W,"m",N).call(this,(e=>{const i=new O;i.addEvents(this.events.filter((i=>i.isOverlapping(new u(h(e),D(e)))&&i.length()<864e5)));i.process();this.singleDayEvents[H(this,W,"m",R).call(this,e)]=i.columns}));const e=new O;e.addEvents(this.events.filter((e=>e.isOverlapping(new u(this.dateRange.startDate,this.dateRange.endDate))&&e.length()>=864e5)));e.process();this.multiDayEvents=e.columns}async componentDidLoad(){const e=this.elm.shadowRoot.querySelector(".view-body").scrollHeight;this.elm.shadowRoot.querySelector(".view-body").scroll({top:this.getTimePercent(this.currentTime)/100*e-150})}renderHeader(){const e=[];H(this,W,"m",N).call(this,(i=>{const t=["column"];const o=k(h(i),h(this.currentTime));if(o===0)t.push("today");else if(o<0)t.push("past");else if(o<0)t.push("future");e.push(r("div",{class:t.join(" ")},r("div",{class:"column-content"},r("div",{class:"date",onClick:()=>this.goatColumnViewDateClick.emit({date:i})},m(i,"dd")),r("div",{class:"day"},m(i,"E")))))}));return e}renderMultiDayBackground(){const e=[];for(let i=new Date(this.dateRange.startDate);k(h(this.dateRange.endDate),i)>=0;i=d(i,1)){const t=["column"];const o=k(h(i),h(this.currentTime));if(o===0)t.push("today");else if(o<0)t.push("past");else if(o<0)t.push("future");e.push(r("div",{class:t.join(" ")}))}return e}renderScale(){const e=[];for(let i=0;i<48;i++){const t=["row"];if(i%2)t.push("hour");const o=h(new Date);const a=r("div",{class:t.join(" ")},(()=>{if(i%2==0&&i){return r("div",{class:"time"},m(y(o,i/2),"hh a"))}})());e.push(a)}return r("div",{class:"background"},e)}renderEvents(){const e=[];for(let i=new Date(this.dateRange.startDate),t=0;k(h(this.dateRange.endDate),i)>=0;i=d(i,1),t++){const t=["column"];if(w(h(i),h(this.currentTime)))t.push("active");e.push(r("div",{class:t.join(" ")},r("div",{class:"column-content"},(()=>{const e=this.singleDayEvents[H(this,W,"m",R).call(this,i)];if(e){const t=e.length;return e.map(((e,o)=>e.map((e=>{const a=["event"];if(this.eventClickable)a.push("clickable");return r("div",{class:a.join(" "),onClick:()=>{if(this.eventClickable){this.goatColumnViewEventClick.emit({event:e.data})}},style:{top:`${this.getTimePercent(e.start,h(i))}%`,height:`${this.getTimePercent(e.end,h(i))-this.getTimePercent(e.start,h(i))}%`,left:`${o/t*100}%`,width:`calc(${1*e.width/t*100}% - 1px)`}},r("div",{class:"event-title"},e.title||"(no title)"))}))))}})())))}return r("div",{class:"events-container"},e)}renderMultiDayEvents(){const e=this.multiDayEvents;if(e&&e.length){return r("div",{class:"row-content"},e.map((e=>r("div",{class:"row"},e.map((e=>{const i=["event"];if(this.eventClickable)i.push("clickable");return r("div",{class:i.join(" "),onClick:()=>{if(this.eventClickable){this.goatColumnViewEventClick.emit({event:e.data})}},style:{left:`${this.getDatePercent(e.start)}%`,width:`${this.getDatePercent(d(e.end,1))-this.getDatePercent(e.start)}%`}},r("div",{class:"event-title"},e.title||"(no title)"))}))))),r("div",{class:"row-spacer"}))}}getDatePercent(e){const i=k(h(e),this.dateRange.startDate);const r=i/this.dateRange.totalDays*100;if(r<0)return 0;if(r>100)return 100;return r}getTimePercent(e,i){if(!i)i=e;const r=h(i);const t=D(i);const o=(e.valueOf()-r.valueOf())/(t.valueOf()-r.valueOf())*100;if(o<0)return 0;if(o>100)return 100;return o}renderCurrentTime(){if(this.currentTime.valueOf()>this.dateRange.startDate.valueOf()-1&&this.currentTime.valueOf()<this.dateRange.endDate.valueOf()+1){return r("div",{class:"current-time-line",style:{top:`calc(${this.getTimePercent(this.currentTime)}% - 1px)`}},r("div",{class:"time"},m(this.contextDate,"hh:mm a")),r("div",{class:"dash-line",style:{width:`${this.getDatePercent(this.currentTime)}%`}}),r("div",{class:"dot",style:{left:`calc( ${this.getDatePercent(this.currentTime)}% - 0.25rem)`}}),r("div",{class:"line",style:{left:`${this.getDatePercent(this.currentTime)}%`,width:`${1/this.dateRange.totalDays*100}%`}}))}}render(){return r("div",{class:"calendar-column-view"},r("div",{class:"view-header"},r("div",{class:"scale"}),r("div",{class:"columns"},this.renderHeader()),r("div",{class:"scrollbar-placeholder"})),r("div",{class:"multi-day-section-wrapper"},r("div",{class:"multi-day-section-scroll"},r("div",{class:"multi-day-section"},r("div",{class:"multi-day-background"},r("div",{class:"scale"}),r("div",{class:"columns"},this.renderMultiDayBackground())),r("div",{class:"multi-events"},this.renderMultiDayEvents())))),r("div",{class:"view-body"},r("div",{class:"view-body-scroll"},r("div",{class:"scale"},this.renderScale()),r("div",{class:"drawing-area"},r("goat-calendar-column-view-background",{columns:this.dateRange.totalDays}),this.renderEvents()),this.renderCurrentTime())))}get elm(){return t(this)}};W=new WeakSet,N=function e(i){for(let e=new Date(this.dateRange.startDate);k(h(this.dateRange.endDate),e)>=0;e=d(e,1)){i(e)}},R=function e(i){return m(i,"dd-MM-yyyy")};A.style=_;var I=undefined&&undefined.__classPrivateFieldGet||function(e,i,r,t){if(r==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof i==="function"?e!==i||!t:!i.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?t:r==="a"?t.call(e):t?t.value:i.get(e)};var L;class Y extends v{constructor(e){super(e.start,e.end,e.title,e.data);this.width=1}}class q{constructor(){L.set(this,[])}addEvents(e){e.forEach((e=>{I(this,L,"f").push(new Y(e))}))}process(){this.columns=[];let e=I(this,L,"f").sort(((e,i)=>z(e.start,i.start)||i.length()-e.length()));let i=null;while(e.length){if(i==e.length)throw new Error("Events not processed in previous run, breaking infinite loop");i=e.length;const r=[];for(let i=0;i<e.length;i++){if(i==0)r.push(e[i]);else if(z(e[i].start,r[r.length-1].end)>=0){r.push(e[i])}}this.columns.push(r);e=e.filter((e=>!r.find((i=>i.gid==e.gid))))}for(let e=0;e<this.columns.length-1;e++){this.columns[e].forEach((i=>{for(let r=e+1;r<this.columns.length;r++){if(this.columns[r].find((e=>i.isOverlapping(e)))){break}i.width++}}))}}}L=new WeakMap;const F="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, white);background:var(--color-primary, #0f62fe)}::-webkit-scrollbar{width:var(--scrollbar-width, 0.75rem);height:var(--scrollbar-width, 0.75rem)}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;height:100%;--calendar-border-color:var(--border-strong-01, #8d8d8d);--scale-size:3rem;--scale-color:var(--text-placeholder, #a8a8a8)}.scale{width:var(--scale-size)}.calendar-month-view{display:flex;flex-direction:column;height:100%}.calendar-month-view .view-header{border-top:1px solid var(--border-strong-01, #8d8d8d);border-bottom:1px solid var(--border-strong-01, #8d8d8d);display:flex}.calendar-month-view .view-header .scale{border-right:1px solid var(--scale-color, )}.calendar-month-view .view-header .columns{display:flex;flex:1}.calendar-month-view .view-header .columns .column{flex:1;border-right:1px solid var(--scale-color, )}.calendar-month-view .view-header .columns .column .column-content{display:flex;align-items:center;padding:0.5rem;gap:0.5rem}.calendar-month-view .view-header .columns .column .date{font-size:2rem;cursor:pointer;border-radius:100%;padding:0.5rem}.calendar-month-view .view-header .columns .column .day{font-size:1rem}.calendar-month-view .view-header .scrollbar-placeholder{width:var(--scrollbar-width)}.calendar-month-view .view-body{height:100%;overflow-y:scroll}.calendar-month-view .view-body .view-body-scroll{display:flex;position:relative;min-height:100%}.calendar-month-view .view-body .view-body-scroll .drawing-area{flex:1}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section{border-bottom:1px solid var(--scale-color, );min-height:9rem;height:20%}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-body-scroll{position:relative;height:100%}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-background{display:flex;height:100%;position:absolute;width:100%}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-background .scale{border-inline-end:1px solid var(--scale-color, )}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-background .columns{display:flex;flex:1}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-background .columns .column{flex:1;border-right:1px solid var(--scale-color, )}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-background .columns .column .column-header{font-family:var(--helper-text-01-font-family, IBM Plex Sans, Helvetica Neue, Arial, sans-serif);font-size:var(--helper-text-01-font-size, 0.75rem);font-weight:var(--helper-text-01-font-weight, 400);line-height:var(--helper-text-01-line-height, 1rem);letter-spacing:var(--helper-text-01-letter-spacing, 0.32px);padding-inline-start:0.5rem;padding-top:0.3rem;border-top:0.2rem solid transparent}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-background .columns .column.today{background:var(--color-primary-10, #edf5ff)}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-day-background .columns .column.today .column-header{border-top-color:var(--color-primary, #0f62fe)}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events{min-height:4rem;padding-top:2rem;height:100%}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events .row{height:1.8rem;box-sizing:content-box;position:relative;padding-bottom:0.5rem}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events .row:last-child{padding-bottom:0}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events .row-spacer{height:1rem}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events .event{background:var(--color-primary-30, #a6c8ff);border-left:0.25rem solid var(--color-primary, #0f62fe);border-radius:var(--border-radius, 3px);position:absolute;height:1.8rem;text-overflow:ellipsis;overflow:hidden}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events .event .event-title{padding:0.25rem;font-family:var(--body-01-font-family, IBM Plex Sans, Helvetica Neue, Arial, sans-serif);font-size:var(--body-01-font-size, 0.875rem);font-weight:var(--body-01-font-weight, 400);line-height:var(--body-01-line-height, 1.25rem);letter-spacing:var(--body-01-letter-spacing, 0.16px)}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events .event.clickable{cursor:pointer}.calendar-month-view .view-body .view-body-scroll .drawing-area .multi-day-section .multi-events .event.clickable:hover{background:var(--color-primary-40, #78a9ff)}.calendar-month-view .view-body .view-body-scroll .current-time-line{position:absolute;z-index:100;pointer-events:none;width:calc(100% - var(--scale-size));margin-inline-start:var(--scale-size)}.calendar-month-view .view-body .view-body-scroll .current-time-line .time{position:absolute;font-size:0.5rem;font-weight:600;color:var(--color-primary, #0f62fe);top:-6px;left:-3rem;background:var(--color-primary-10, #edf5ff);padding:2px;border-radius:3px}.calendar-month-view .view-body .view-body-scroll .current-time-line .dash-line{position:absolute;left:0;border-bottom:1px dashed var(--color-primary, #0f62fe)}.calendar-month-view .view-body .view-body-scroll .current-time-line .dot{border-radius:100%;width:0.5rem;height:0.5rem;background:var(--color-primary, #0f62fe);display:block;position:absolute;top:-0.25rem}.calendar-month-view .view-body .view-body-scroll .current-time-line .line{border-bottom:2px solid var(--color-primary, #0f62fe);position:absolute;top:-1px}";const G=class{constructor(r){e(this,r);this.goatMonthViewDateClick=i(this,"goat:month-view-date-click",7);this.goatMonthViewEventClick=i(this,"goat:month-view-event-click",7);this.weekDayEvents=[];this.events=[];this.eventClickable=true;this.currentTime=undefined;this.contextDate=undefined}async componentWillRender(){this.dateRange=S(this.contextDate,1);this.weekDayEvents=[];for(let e=new Date(this.dateRange.startDate),i=0;i<5;e=d(e,7),i++){const i=new q;i.addEvents(this.events.filter((i=>i.isOverlapping(new u(h(e),D(d(e,6)))))));i.process();this.weekDayEvents.push(i.columns)}}async componentDidLoad(){const e=this.elm.shadowRoot.querySelector(".view-body").scrollHeight;this.elm.shadowRoot.querySelector(".view-body").scroll({top:this.getTimePercent(this.currentTime)/100*e-150})}renderHeader(){const e=[];for(let i=new Date(this.dateRange.startDate),t=0;t<7;i=d(i,1),t++){const t=["column"];e.push(r("div",{class:t.join(" ")},r("div",{class:"column-content"},r("div",{class:"day"},m(i,"EEEE")))))}return e}renderMultiDayBackground(e){const i=[];for(let t=new Date(e),o=0;o<7;t=d(t,1),o++){const e=["column"];const o=k(h(t),h(this.currentTime));if(o===0)e.push("today");else if(o<0)e.push("past");else if(o<0)e.push("future");i.push(r("div",{class:e.join(" ")},r("div",{class:"column-content"},r("div",{class:"column-header"},r("div",{class:"day"},m(t,"d"))))))}return i}renderScale(){const e=[];for(let i=0;i<48;i++){const t=["row"];if(i%2)t.push("hour");const o=h(new Date);const a=r("div",{class:t.join(" ")},(()=>{if(i%2==0&&i){return r("div",{class:"time"},m(y(o,i/2),"hh a"))}})());e.push(a)}return r("div",{class:"background"},e)}renderEvents(){const e=.25;return this.weekDayEvents.map(((i,t)=>r("div",{class:"multi-day-section"},r("div",{class:"multi-day-body-scroll"},r("div",{class:"multi-day-background"},r("div",{class:"columns"},this.renderMultiDayBackground(d(this.dateRange.startDate,t*7)))),r("div",{class:"multi-events"},r("div",{class:"row-content"},i.map((i=>r("div",{class:"row"},i.map((i=>{const o=["event"];if(this.eventClickable)o.push("clickable");return r("div",{class:o.join(" "),onClick:()=>{if(this.eventClickable){this.goatMonthViewEventClick.emit({event:i.data})}},style:{left:`${this.getDatePercent(i.start,{startDate:d(this.dateRange.startDate,t*7)})+e}%`,width:`${this.getDatePercent(d(i.end,1),{startDate:d(this.dateRange.startDate,t*7)})-this.getDatePercent(i.start,{startDate:d(this.dateRange.startDate,t*7)})-2*e}%`}},r("div",{class:"event-title"},i.title||"(no title)"))}))))),r("div",{class:"row-spacer"})))))))}getDatePercent(e,i){const r=k(h(e),i.startDate);const t=r/7*100;if(t<0)return 0;if(t>100)return 100;return t}getTimePercent(e,i){if(!i)i=e;const r=h(i);const t=D(i);const o=(e.valueOf()-r.valueOf())/(t.valueOf()-r.valueOf())*100;if(o<0)return 0;if(o>100)return 100;return o}render(){return r("div",{class:"calendar-month-view"},r("div",{class:"view-header"},r("div",{class:"columns"},this.renderHeader()),r("div",{class:"scrollbar-placeholder"})),r("div",{class:"view-body"},r("div",{class:"view-body-scroll"},r("div",{class:"drawing-area"},this.renderEvents()))))}get elm(){return t(this)}};G.style=F;export{A as goat_calendar_column_view,G as goat_calendar_month_view};
//# sourceMappingURL=p-c7ea0eef.entry.js.map