import{r as t,h as e,g as i,c as s,H as r}from"./p-6592004b.js";import{g as o,d as n,c as a}from"./p-96630149.js";const l="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, white);background:var(--color-primary, #0f62fe)}::-webkit-scrollbar{width:var(--scrollbar-width, 0.75rem);height:var(--scrollbar-width, 0.75rem)}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block;--list-border-radius:var(--border-radius);--list-background:var(--background, white);--list-max-height:100%;--list-border-color:var(--border-strong-01, #8d8d8d);--list-shadow:var(--shadow-sm, 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06))}.menu{background:var(--list-background);box-sizing:border-box;border-radius:var(--list-border-radius);max-height:var(--list-max-height);overflow:auto;border:1px solid var(--list-border-color);box-shadow:var(--list-shadow)}slot::slotted(goat-divider){--divider-color:var(--border-subtle-01, #e0e0e0);--divider-padding:var(--spacing-03, 0.5rem)}";const h=class{constructor(e){t(this,e);this.showLoader=false;this.value=undefined;this.size="md";this.empty=false;this.emptyState=`{\n    "headline": "No items",\n    "description": "There are no items to display"\n  }`;this.internalEmptyState=undefined}parseEmptyState(){if(typeof this.emptyState==="string"){this.internalEmptyState=JSON.parse(this.emptyState)}else{this.internalEmptyState=this.emptyState}}handleKeyDown(t){const e=t.composedPath();let i=null;for(const s of e){if(s.tagName==="GOAT-MENU-ITEM"){i=s}if(s!==this.elm)continue;if(t.key==="ArrowDown"){t.preventDefault();this.focusNextItem(i)}else if(t.key==="ArrowUp"){t.preventDefault();this.focusPreviousItem(i)}}}async setFocus(){const t=this.getFirstItem();t===null||t===void 0?void 0:t.setFocus()}getFirstItem(){return this.elm.querySelector("goat-menu-item")}focusNextItem(t){let e=t.nextElementSibling;do{if(e&&e.tagName==="GOAT-MENU-ITEM"&&!e.disabled){e.setFocus();return}if(!e){e=this.elm.querySelector("goat-menu-item")}else{e=e.nextElementSibling}}while(e!==t)}focusPreviousItem(t){let e=t.previousElementSibling;do{if(e&&e.tagName==="GOAT-MENU-ITEM"&&!e.disabled){e.setFocus();return}if(!e){e=this.elm.querySelector("goat-menu-item:last-child")}else{e=e.previousElementSibling}}while(e!==t)}componentDidLoad(){this.parseEmptyState()}render(){return e("div",{class:"menu"},e("slot",null),this.renderEmptyState())}renderEmptyState(){if(this.empty)return e("goat-empty-state",Object.assign({class:"empty-menu"},this.internalEmptyState))}get elm(){return i(this)}static get watchers(){return{emptyState:["parseEmptyState"]}}};h.style=l;const c="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, white);background:var(--color-primary, #0f62fe)}::-webkit-scrollbar{width:var(--scrollbar-width, 0.75rem);height:var(--scrollbar-width, 0.75rem)}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;--menu-item-padding:var(--spacing-04, 0.75rem)}.menu-item{border:1px solid transparent;min-height:2.5rem;cursor:pointer;font-family:var(--text-md-font-family, );font-size:var(--text-md-font-size, 1rem);font-weight:var(--text-md-font-weight, );line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);padding:0 var(--menu-item-padding);box-sizing:border-box;display:flex;align-items:center;gap:var(--spacing-02, 0.25rem);color:var(--text-secondary, #525252)}.menu-item .item-section{display:flex;align-items:center}.menu-item .slot-main{display:block;flex:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.menu-item .slot-end{color:var(--text-helper, #6f6f6f)}:host-context([size=sm]) .menu-item{min-height:2rem}:host-context([size=md]) .menu-item{min-height:2.5rem}:host-context([size=lg]) .menu-item{min-height:3rem}.menu-item:hover,.menu-item.has-focus:not(.active){background:var(--layer-hover-01, #e8e8e8);color:var(--text-primary, #161616)}.menu-item:hover .slot-end,.menu-item.has-focus:not(.active) .slot-end{color:var(--icon-01, #161616)}.menu-item.active,.menu-item.selected{background:var(--selected-ui, #e0e0e0)}.menu-item.has-focus:not(.active){outline:none;border:1px solid var(--color-primary, #0f62fe)}.menu-item.disabled{cursor:not-allowed;color:var(--text-disabled, rgba(22, 22, 22, 0.25)) !important;background-color:var(--disabled-01, #f4f4f4) !important}.menu-item.disabled:hover,.menu-item.disabled.has-focus:not(.active){color:var(--text-disabled, rgba(22, 22, 22, 0.25)) !important;background-color:var(--disabled-01, #f4f4f4) !important}.menu-item.disabled.active,.menu-item.disabled.selected{color:var(--text-disabled, rgba(22, 22, 22, 0.25)) !important;background-color:var(--disabled-01, #f4f4f4) !important}.menu-item:not(.start-slot-has-content) .slot-start{display:none}.menu-item:not(.end-slot-has-content) .slot-end{display:none}";const d=class{constructor(i){t(this,i);this.goatMenuItemClick=s(this,"goat:menu-item-click",7);this.gid=o();this.tabindex=1;this.clickHandler=t=>{if(!this.disabled){this.setFocus();this.goatMenuItemClick.emit({value:this.value||this.elm.innerText})}else{t.preventDefault();t.stopPropagation();return}};this.blurHandler=()=>{this.hasFocus=false};this.focusHandler=()=>{this.hasFocus=true};this.mouseDownHandler=()=>{this.isActive=true};this.keyDownHandler=t=>{if(t.key==" "||t.key=="Enter"){t.preventDefault();this.isActive=true;this.clickHandler(t)}};this.render=()=>e(r,{active:this.isActive,"has-focus":this.hasFocus},e("div",{ref:t=>this.nativeElement=t,class:{"menu-item":true,selected:this.selected,active:this.isActive,disabled:this.disabled,"has-focus":this.hasFocus,"start-slot-has-content":this.startSlotHasContent,"end-slot-has-content":this.endSlotHasContent},tabindex:this.tabindex,onBlur:this.blurHandler,onFocus:this.focusHandler,onClick:this.clickHandler,onMouseDown:this.mouseDownHandler,onKeyDown:this.keyDownHandler,"aria-disabled":this.disabled},e("div",{class:"item-section slot-start",tabindex:0},e("slot",{name:"start"})),e("div",{class:"item-section slot-main",tabindex:0},e("slot",null)),e("div",{class:"item-section slot-end",tabindex:0},e("slot",{name:"end"}))));this.value=undefined;this.disabled=false;this.selected=false;this.startSlotHasContent=false;this.endSlotHasContent=false;this.hasFocus=false;this.isActive=false}async setFocus(){if(this.nativeElement){this.nativeElement.focus()}}async setBlur(){if(this.nativeElement){this.nativeElement.blur()}}windowMouseUp(){if(this.isActive)this.isActive=false}windowKeyUp(t){if(this.isActive&&t.key==" ")this.isActive=false}componentWillLoad(){if(this.elm.hasAttribute("tabindex")){const t=this.elm.getAttribute("tabindex");this.tabindex=t!==null?t:undefined;this.elm.removeAttribute("tabindex")}this.startSlotHasContent=!!this.elm.querySelector('[slot="start"]');this.endSlotHasContent=!!this.elm.querySelector('[slot="end"]')}get elm(){return i(this)}};d.style=c;const u="*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, white);background:var(--color-primary, #0f62fe)}::-webkit-scrollbar{width:var(--scrollbar-width, 0.75rem);height:var(--scrollbar-width, 0.75rem)}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;width:100%;margin-bottom:var(--spacing-03, 0.5rem);--input-border-radius:var(--border-radius, 3px);--input-border-style:solid;color:var(--text-primary, #161616)}:host([inline]){display:inline-block;width:auto;margin-bottom:0}.form-control{display:flex;flex-direction:column}.form-control .label{font-family:var(--text-sm-font-family, );font-size:var(--text-sm-font-size, 0.875rem);font-weight:var(--text-sm-font-weight, );line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);font-weight:var(--font-weight-medium, 500);margin-bottom:0.375rem;color:var(--text-secondary, #525252);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.form-control .label .required{color:var(--danger-02, #da1e28);padding-right:var(--spacing-01, 0.125rem)}.form-control .helper{margin-block-start:var(--spacing-02, 0.25rem);font-family:var(--helper-text-01-font-family, IBM Plex Sans, Helvetica Neue, Arial, sans-serif);font-size:var(--helper-text-01-font-size, 0.75rem);font-weight:var(--helper-text-01-font-weight, 400);line-height:var(--helper-text-01-line-height, 1rem);letter-spacing:var(--helper-text-01-letter-spacing, 0.32px)}.form-control .helper.text{color:var(--text-helper, #6f6f6f)}.form-control .helper.invalid{color:var(--support-error-inverse, #fa4d56)}.form-control .helper.warn{color:var(--support-warning-inverse, #f1c21b)}.form-control.inline{flex-direction:row;align-items:center}.form-control.inline .label{margin-bottom:0;margin-inline-end:var(--spacing-04, 0.75rem)}.input-container{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--input-background-color, var(--field-01, #f4f4f4));border:1px var(--input-border-style) var(--border-strong-01, #8d8d8d);border-radius:var(--input-border-radius);overflow:hidden;cursor:text;font-weight:var(--font-weight-regular)}.input-container .input{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;color:var(--text-primary, #161616);padding:0 var(--spacing-05, 1rem);font-size:0.875rem;line-height:1.28572;letter-spacing:0.16px}.input-container .input::placeholder{color:var(--text-placeholder, #a8a8a8)}.input-container .slot-container{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot::slotted(*){padding-bottom:0 !important;margin-bottom:0 !important;color:var(--color-neutral-400, )}.input-container .slot-container slot::slotted(*) goat-icon{--color:var(--color-neutral-400, )}.input-container .slot-container.start{margin-inline-start:1rem}.input-container .slot-container.end{margin-inline-end:1rem;margin-inline-start:0.5rem}.input-container.start-slot-has-content .input{padding-inline-start:0.5rem}.input-container.end-slot-has-content .input{padding-inline-end:0.5rem}.input-container:not(.start-slot-has-content) .slot-container.start{display:none}.input-container:not(.end-slot-has-content) .slot-container.end{display:none}.input-container .input-action{cursor:pointer;--button-padding:.625rem}.input-container .input-action:hover{--text-color:var(--text-secondary)}.input-container slot::slotted(*){font-size:0.875rem}:host(.bg-light) .input-container{background-color:var(--field-02, white)}.input-container.has-focus{outline:2px solid var(--border-interactive, #0f62fe);border-color:transparent}:host([warn]) .input-container{border-color:var(--support-warning, #f1c21b)}:host([warn]) .input-container.has-focus{outline:2px solid var(--support-warning, #f1c21b)}:host([invalid]) .input-container{border-color:var(--support-error, #da1e28)}:host([invalid]) .input-container.has-focus{outline:2px solid var(--support-error, #da1e28)}:host(.no-border) .input-container{border-color:transparent}:host(.bg-light) .input-container{background-color:var(--field-02, white)}.input-container goat-button{height:100%;--button-height:100%;--button-border-radius:0}:host([size=sm]) .input-container{height:var(--input-height, 2rem)}:host([size=md]) .input-container{height:var(--input-height, 2.5rem)}:host([size=lg]) .input-container{height:var(--input-height, 3rem)}:host([success]) .input-container{border-color:var(--color-success, #198038)}:host([error]) .input-container{border-color:var(--color-error, #da1e28);box-shadow:0 0 0 0.25rem rgba(239, 68, 68, 0.25)}:host([readonly]) .input-container{cursor:initial;background-color:var(--disabled-01, #f4f4f4) !important;border-color:var(--disabled-01, #f4f4f4) !important;opacity:1 !important}:host([disabled]){color:var(--text-disabled, rgba(22, 22, 22, 0.25)) !important}:host([disabled]) .input-container{cursor:not-allowed;background-color:var(--disabled-01, #f4f4f4) !important;border-color:var(--disabled-01, #f4f4f4) !important;opacity:1 !important}:host([disabled]) .input-container .input{color:var(--text-disabled, rgba(22, 22, 22, 0.25)) !important}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.dropdown{position:relative}.dropdown .dropdown-content{z-index:var(--z-index-dropdown-content, 40);position:absolute;width:max-content;line-height:0;transform:scale(0);transition:transform 0.1s ease-out 0s;max-height:300px}.dropdown .chevron-down{transition:transform 0.1s ease-out 0s;padding:0 0.625rem;cursor:pointer}.dropdown .loader{padding:0 0.625rem}.dropdown.is-open .dropdown-content{transform:scale(1)}.dropdown.is-open .chevron-down{transform:rotate(180deg)}.dropdown.bottom-right .dropdown-content{top:calc(100% + var(--spacing-02, 0.25rem));left:0;transform-origin:top}.dropdown.bottom-left .dropdown-content{top:calc(100% + var(--spacing-02, 0.25rem));right:0;transform-origin:top}.dropdown.top-right .dropdown-content{bottom:calc(100% + var(--spacing-02, 0.25rem));left:0;transform-origin:bottom}.dropdown.top-left .dropdown-content{bottom:calc(100% + var(--spacing-02, 0.25rem));right:0;transform-origin:bottom}.dropdown.search-none.center .dropdown-content{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;max-height:100%;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none;padding:0 1rem}.select .dropdown-content{width:100%;min-width:10rem}.select .menu{width:100%;--list-max-height:20rem}.select .display-value{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;height:100%;display:flex;align-items:center}.select .display-value-container{display:flex;align-items:center;gap:var(--spacing-02, 0.25rem)}.select .multi-select-values{display:flex;flex-wrap:wrap;gap:var(--spacing-03, 0.5rem);padding-inline-start:var(--spacing-05, 1rem)}.select .input-container:not(.has-value) .display-value{color:var(--text-placeholder, #a8a8a8)}.select .start-search{height:10rem;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:var(--spacing-03, 0.5rem)}.select .text-secondary{color:var(--text-secondary, #525252)}";const m=class{constructor(e){t(this,e);this.goatChange=s(this,"goat:change",7);this.goatSearch=s(this,"goat:search",7);this.goatSearchEnter=s(this,"goat:search-enter",7);this.gid=o();this.selectHandler=t=>{if(!this.disabled&&!this.readonly){this.addItem(t)}this.closeList()};this.clearInput=()=>{if(!this.disabled&&!this.readonly){this.removeItem(this.value)}};this.blurHandler=()=>{this.hasFocus=false};this.focusHandler=()=>{this.hasFocus=true};this.closeList=()=>{if(!this.disabled&&!this.readonly&&this.isOpen){this.isOpen=false;setTimeout((()=>this.setFocus()),100)}};this.openList=()=>{if(!this.disabled&&!this.readonly&&!this.isOpen){this.isOpen=true;if(this.search!=="none"){this.searchString="";setTimeout((()=>{const t=this.dropdownContentElm;this.dropdownContentHeight=t.getBoundingClientRect().height;this.dropdownContentWidth=t.getBoundingClientRect().width;this.fixPosition();this.nativeElement.focus()}),100)}else{setTimeout((()=>{const t=this.dropdownContentElm;this.dropdownContentHeight=t.getBoundingClientRect().height;this.dropdownContentWidth=t.getBoundingClientRect().width;this.fixPosition()}),100)}}};this.toggleList=t=>{t.stopPropagation();t.preventDefault();if(this.isOpen)this.closeList();else this.openList()};this.keyDownHandler=t=>{if(t.key==="Enter"){t.preventDefault();this.toggleList(t);this.goatSearchEnter.emit({value:this.searchString,currentItems:this.filterItems()})}else if(t.key==="ArrowDown"){if(this.isOpen){console.log("inside select");t.preventDefault();this.menuElm.setFocus()}}else if(t.key==="ArrowUp"){if(this.isOpen){t.preventDefault();this.menuElm.setFocus()}}};this.onInput=t=>{const e=t.target;this.searchString=e.value||"";this.goatSearch.emit({value:this.searchString})};this.name=`goat-input-${this.gid}`;this.placeholder=undefined;this.value="";this.multiple=false;this.hideDropdownIcon=false;this.size="md";this.inline=false;this.search="none";this.state="default";this.required=false;this.disabled=false;this.readonly=false;this.showLoader=false;this.isOpen=false;this.configAria={};this.items=[];this.positions="bottom-right,top-right,bottom-left,top-left";this.clearable=false;this.debounce=300;this.hasFocus=false;this.searchString="";this.startSlotHasContent=false;this.endSlotHasContent=false;this.position=undefined}async setFocus(){if(!this.isOpen&&this.displayElement){this.displayElement.focus()}else if(this.isOpen&&this.nativeElement){this.nativeElement.focus()}}async setBlur(){if(this.nativeElement){this.nativeElement.blur()}}debounceChanged(){this.goatSearch=n(this.goatSearch,this.debounce)}windowClick(t){const e=t.path||t.composedPath();for(const t of e){if(t==this.elm)return}this.isOpen=false}menuItemClick(t){this.selectHandler(t.detail.value)}async getComponentId(){return this.gid}tagDismissClick(t){this.removeItem(t.detail.value)}getValues(){if(this.value)return this.value.toString().split(",");else return[]}addItem(t){let e=this.getValues();if(!e.includes(t)){if(!this.multiple)e=[];e.push(t);this.value=e.join(",");this.goatChange.emit({value:this.value,newItem:this.getItemByValue(t)})}}removeItem(t){let e=this.getValues();if(e.includes(t)){e=e.filter((e=>e!==t));this.value=e.join(",");this.goatChange.emit({value:this.value,removedItem:this.getItemByValue(t)})}}hasValue(){return(this.value||"").toString().length>0}getItemByValue(t){if(this.items){return this.items.find((e=>e.value==t))}}getDisplayValue(){if(!this.multiple){if(this.items){const t=this.getItemByValue(this.value);if(t){return e("div",{class:"display-value-container"},t.icon&&e("goat-icon",{name:t.icon,size:"sm"}),t.label)}}if(!this.disabled&&!this.readonly){return this.placeholder}else{return e("span",null," ")}}else{if(!this.value&&!this.disabled&&!this.readonly){return this.placeholder}else{return e("span",null," ")}}}componentWillLoad(){if(this.positions)this.position=this.positions.split(",")[0];this.elm.getAttributeNames().forEach((t=>{if(t.includes("aria-")){this.configAria[t]=this.elm.getAttribute(t);this.elm.removeAttribute(t)}}));this.startSlotHasContent=!!this.elm.querySelector('[slot="start"]');this.endSlotHasContent=!!this.elm.querySelector('[slot="end"]')}fixPosition(){if(this.isOpen&&this.dropdownContentHeight&&this.dropdownContentWidth){if(this.position==="center"){this.position=this.positions.split(",")[0]}const t=this.positions.split(",");for(let e=0;e<t.length;e++){const i=this.elm.getBoundingClientRect();const s={};if(t[e]==="bottom-right"){s.top=i.top+i.height;s.bottom=s.top+this.dropdownContentHeight;s.left=i.left;s.right=i.left+this.dropdownContentWidth}else if(t[e]==="top-right"){s.top=i.top-this.dropdownContentHeight;s.bottom=i.top;s.left=i.left;s.right=i.left+this.dropdownContentWidth}else if(t[e]==="bottom-left"){s.top=i.top+i.height;s.bottom=s.top+this.dropdownContentHeight;s.left=i.left-this.dropdownContentWidth;s.right=i.left}else if(t[e]==="top-left"){s.top=i.top-this.dropdownContentHeight;s.bottom=i.top;s.left=i.left-this.dropdownContentWidth;s.right=i.left}const r=a(s);if(!r.any){this.position=t[e];break}}}}connectedCallback(){this.debounceChanged()}renderMultiSelectValues(){const t=this.getValues();if(this.multiple&&t.length){return e("div",{class:"multi-select-values"},t.map((t=>{const i=this.getItemByValue(t);if(i){return e("goat-tag",{filter:true,class:"multi-select-value",value:i.value},i.label)}})))}}render(){return e(r,{"has-value":this.hasValue(),"has-focus":this.hasFocus,"is-open":this.isOpen,position:this.position},e("div",{class:{dropdown:true,select:true,[this.position]:true,"is-open":this.isOpen,[`search-${this.search}`]:true}},e("div",{class:{"input-container":true,"has-focus":this.hasFocus,disabled:this.disabled,readonly:this.readonly,"has-value":this.hasValue(),"start-slot-has-content":this.startSlotHasContent,"end-slot-has-content":this.endSlotHasContent}},e("div",{class:"slot-container start"},e("slot",{name:"start"})),this.renderMultiSelectValues(),(()=>{if(this.search!=="none"&&this.isOpen){return e("input",Object.assign({class:"input input-native",ref:t=>this.nativeElement=t,type:"text",name:this.name,value:this.searchString,placeholder:this.placeholder,onBlur:this.blurHandler,onFocus:this.focusHandler,onInput:this.onInput,onKeyDown:this.keyDownHandler},this.configAria))}else{return e("div",Object.assign({class:"input display-value",tabindex:"0",ref:t=>this.displayElement=t,"aria-disabled":this.disabled?"true":null,onFocus:this.focusHandler,onBlur:this.blurHandler,onKeyDown:this.keyDownHandler,onClick:this.toggleList},this.configAria),this.getDisplayValue())}})(),this.clearable&&!this.multiple&&this.hasValue()&&e("goat-button",{class:"clear input-action",size:"full",color:"secondary",kind:"simple",variant:"ghost",icon:"close",onClick:this.clearInput}),e("div",{class:"slot-container end"},e("slot",{name:"end"})),this.getModeIcon()),e("div",{class:"dropdown-content",ref:t=>this.dropdownContentElm=t},this.isOpen&&this.renderDropdownList())))}getModeIcon(){if(this.showLoader){return e("goat-spinner",{class:"input-action loader"})}if(!this.disabled&&!this.readonly&&!this.hideDropdownIcon)return e("goat-icon",{tabindex:-1,class:"chevron-down color-secondary",size:this.size,name:"chevron--down",onClick:this.toggleList})}renderDropdownList(){if(this.search==="managed"&&!this.items.length){return e("goat-menu",{class:"menu",ref:t=>this.menuElm=t,size:this.size},e("div",{class:"start-search"},e("goat-icon",{name:"search",size:this.size}),e("goat-text",{class:"text-secondary"},"Start typing to perform search")))}if(this.items){const t=this.filterItems();return e("goat-menu",{class:"menu",empty:t.length==0,ref:t=>this.menuElm=t,size:this.size},(()=>t.map((t=>e("goat-menu-item",{value:t.value},t.icon&&e("goat-icon",{name:t.icon,slot:"start",size:"sm"}),t.label||t.value))))())}}filterItems(){if(this.search==="managed")return this.items;return this.items.filter((t=>!this.searchString||t.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase())))}get elm(){return i(this)}static get watchers(){return{debounce:["debounceChanged"]}}};m.style=u;export{h as goat_menu,d as goat_menu_item,m as goat_select};
//# sourceMappingURL=p-35cd4a4b.entry.js.map