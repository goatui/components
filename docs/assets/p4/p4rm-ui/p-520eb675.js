const t=(t,r)=>{const n=t._original||t;return{_original:t,emit:e(n.emit.bind(n),r)}},e=(t,e=0)=>{let r;return(...n)=>{clearTimeout(r),r=setTimeout(t,e,...n)}},r=t=>{const e=t.closest("p4-item");return e?e.querySelector("p4-label"):null};export{e as a,t as d,r as f}