"use strict";(self.webpackChunkminage_skyofskill=self.webpackChunkminage_skyofskill||[]).push([[730],{7730:(e,n,a)=>{a.r(n),a.d(n,{default:()=>M});var r=a(5043),i=a(7951),t=a(5547),m=a(8686),s=a(1653),l=a(7734),p=a(6026),u=a(2185),x=a(6150),o=a(168),c=a(579);const P=e=>{var n,a,i,P;let{page:v,setPage:d}=e;const h=m.JO.slice(1),[M,g]=(0,r.useState)((()=>{const e=window.innerWidth;return Number(e<=824?1:0)}));(0,r.useEffect)((()=>{const e=()=>{const e=window.innerWidth;return g(Number(e<=824?1:0))};return window.addEventListener("resize",e),()=>{d(Number(0)),window.removeEventListener("resize",e)}}),[M,d]);const j=[[],[]];for(let r=0;r<h.length;r+=17)j[0].push(h.slice(r,r+17));for(let r=0;r<h.length;r+=5)j[1].push(h.slice(r,r+5));const y=e=>{"+"===e&&v<j[M].length-1?d(v+1):"-"===e&&v>0&&d(v-1)};return(0,c.jsxs)("div",{className:"input-prestige",children:[(0,c.jsx)("div",{className:"input-chart",children:(0,c.jsxs)(s.b,{layout:"vertical",width:0===M?500:280,height:300,data:j[M][v],children:[(0,c.jsx)(l.d,{strokeDasharray:"5 5"}),(0,c.jsx)(p.h,{dataKey:"prix",tickFormatter:t.$M,type:"number",domain:["dataMin","dataMax"],reversed:!0}),(0,c.jsx)(u.W,{dataKey:"name",type:"category"}),(0,c.jsx)(x.m,{contentStyle:{backgroundColor:"var(--bg)",border:"var(--primary)",color:"var(--text)",borderRadius:"25%",textTransform:"uppercase"}}),(0,c.jsx)(o.N,{type:"monotone",dataKey:"name",stroke:"var(--primary)"})]})}),(0,c.jsxs)("div",{className:"input-btns",children:[(0,c.jsx)("button",{style:{backgroundColor:0===v?"var(--primary15)":"var(--primary65)"},onClick:()=>y("-"),children:"-"}),(0,c.jsx)("button",{style:{backgroundColor:v===j[M].length-1?"var(--primary15)":"var(--primary65)"},onClick:()=>y("+"),children:"+"})]}),(0,c.jsxs)("small",{children:["Prix de ",null===(n=j[M][v])||void 0===n||null===(a=n[0])||void 0===a?void 0:a.name," \xe0"," ",null===(i=j[M][v])||void 0===i?void 0:i[(null===(P=j[M][v])||void 0===P?void 0:P.length)-1].name]})]})};var v=a(3216),d=a(3156);const h=e=>{let{currentPrestige:n,setCurrentPrestige:a,nextPrestige:i,setNextPrestige:s,price:l,setPrice:p}=e;const u=(0,v.Zp)(),x=(0,v.zy)(),o=(0,r.useCallback)((()=>{const e=n>=1&&n<=86?n:76,a=i>=1&&i<=86?i:81;if(e>=a)return p(0);const r=m.JO.slice(e,a).reduce(((e,n)=>e+n.prix),0);p(r)}),[n,i,p]),P=(e,n)=>{const a=new URLSearchParams(x.search);a.set(e,n),u("".concat(x.pathname,"?").concat(a.toString()))};return(0,r.useEffect)((()=>o()),[n,i,o]),(0,c.jsxs)("div",{className:"calc-prestige",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h6",{children:"Votre prestige"}),(0,c.jsx)("select",{name:"Votre prestige",defaultValue:n>=1&&n<=86?n:76,onChange:e=>{return n=Number(e.target.value),a(n),void P("current",n-1);var n},children:m.JO.map(((e,n)=>(0,c.jsx)("option",{value:n+1,children:e.name},n)))})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h6",{children:"Prestige souhait\xe9"}),(0,c.jsx)("select",{name:"Prestige souhait\xe9",defaultValue:i>=1&&i<=86?i:81,onChange:e=>{return n=Number(e.target.value),s(n),void P("next",n-1);var n},children:m.JO.map(((e,n)=>(0,c.jsx)("option",{value:n+1,children:e.name},n)))})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h6",{children:"Prix du passage"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{children:(0,t.$M)(l)}),(0,c.jsx)(d.cEG,{})]}),(0,c.jsxs)("small",{children:["( ",(0,t.qy)(l),") ",(0,c.jsx)(d.cEG,{})]})]})]})},M=()=>{const{page:e,setPage:n,currentPrestige:a,setCurrentPrestige:t,nextPrestige:m,setNextPrestige:s,price:l,setPrice:p}=(0,r.useContext)(i.R);return(0,c.jsx)("section",{className:"App",children:(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"minage-prestige",children:[(0,c.jsx)(P,{page:e,setPage:n}),(0,c.jsx)(h,{currentPrestige:a,setCurrentPrestige:t,nextPrestige:m,setNextPrestige:s,price:l,setPrice:p})]})})})}},5547:(e,n,a)=>{a.d(n,{$M:()=>r,Fp:()=>m,HZ:()=>t,J8:()=>l,qy:()=>i,zK:()=>s});const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number;let n=Math.floor((""+e).length/3),a=parseFloat((0!==n?e/Math.pow(1e3,n):e).toPrecision(3));return a%1===0||a<1&&n>0||(a=a.toFixed(1)),a<1&&n>0&&(a=a.toFixed(3),a*=1e3,n--),a+["","K","M","B","T","Q","Qu"][n]},i=function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toString(),n=[];for(let a=e.length;a>0;a-=3)n.unshift(e.substring(Math.max(0,a-3),a));return n.join(" ")},t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number;const n=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"];return e>=1&&e<=12?n[e-1]:n[0]},m=e=>{if([void 0,""].includes(e))return["4","c"];const n=e.match(/[0-9a-fA-F]{1,2}/g);return n?n.map((e=>e.substring(0,2))):[]},s=e=>{const n=e.enchants[0].replace(/&[0-9a-fA-Fr]/g,"").split(" ")[1];return isNaN(n)?(e=>{const n={I:1,V:5,X:10};let a=0;for(let r=0;r<e.length;r++)n[e[r]]<n[e[r+1]]?a-=n[e[r]]:a+=n[e[r]];return a})(n):parseInt(n)},l=(e,n)=>{const a=e.defaultName.toLowerCase().match(n),r=((e,n)=>{switch(n){case"pioche":return 7===e.type;case"arc":return 6===e.type;case"hache":return 5===e.type;case"\xe9p\xe9e":return 4===e.type;case"bottes":return 3===e.type;case"pantalon":return 2===e.type;case"plastron":return 1===e.type;case"casque":return 0===e.type;case"all":return!0;default:return!1}})(e,n.split(":")[1]);return a||r}},8686:(e,n,a)=>{a.d(n,{JO:()=>t,Tx:()=>i,vC:()=>r});const r=[{name:"Mine p5",value:480},{name:"Mine p10",value:750},{name:"Mine p15",value:1250},{name:"Mine p20",value:3e3},{name:"Mine p25",value:3750},{name:"Mine p30",value:5600},{name:"Mine p35",value:7e3},{name:"Mine p40",value:9500},{name:"Mine p45",value:11500},{name:"Mine p50",value:14500},{name:"Mine p55",value:16e3},{name:"Mine p60",value:18e3},{name:"Mine p65",value:21e3},{name:"Mine p70",value:24e3},{name:"Mine p75",value:28800},{name:"Mine p80",value:32600},{name:"Mine p85",value:36700},{name:"Mine A",value:9},{name:"Mine B",value:10},{name:"Mine C",value:15},{name:"Mine D",value:17},{name:"Mine E",value:20},{name:"Mine F",value:23},{name:"Mine G",value:30},{name:"Mine H",value:44},{name:"Mine I",value:60},{name:"Mine J",value:75},{name:"Mine K",value:90},{name:"Mine L",value:115},{name:"Mine M",value:122},{name:"Mine N",value:130},{name:"Mine O",value:160},{name:"Mine P",value:175},{name:"Mine Q",value:188},{name:"Mine R",value:205},{name:"Mine S",value:218},{name:"Mine T",value:218},{name:"Mine U",value:235},{name:"Mine V",value:245},{name:"Mine W",value:275},{name:"Mine X",value:275},{name:"Mine Y",value:305},{name:"Mine Z",value:310},{name:"Mine VIP1",value:260},{name:"Mine VIP2",value:330}],i=[{name:"Boost x0",multiplicateur:1},{name:"Boost x1.2",multiplicateur:1.2},{name:"Boost x1.4",multiplicateur:1.4},{name:"Boost x1.6",multiplicateur:1.6},{name:"Boost x1.8",multiplicateur:1.8},{name:"Boost x2.25",multiplicateur:2.25},{name:"Boost x2.5",multiplicateur:2.5},{name:"Boost x2",multiplicateur:2},{name:"Boost x3",multiplicateur:3},{name:"Boost x4",multiplicateur:4},{name:"Boost x5",multiplicateur:5},{name:"Boost x6",multiplicateur:6},{name:"Boost x7",multiplicateur:7},{name:"Boost x8",multiplicateur:8},{name:"Boost x10",multiplicateur:10},{name:"Boost x20",multiplicateur:20},{name:"Boost x30 ",multiplicateur:30}],t=[{name:"P0",prix:0},{name:"P1",prix:15e9},{name:"P2",prix:15e9},{name:"P3",prix:25e9},{name:"P4",prix:5e10},{name:"P5",prix:6e10},{name:"P6",prix:8e10},{name:"P7",prix:1e11},{name:"P8",prix:14e10},{name:"P9",prix:18e10},{name:"P10",prix:22e10},{name:"P11",prix:26e10},{name:"P12",prix:3e11},{name:"P13",prix:32e10},{name:"P14",prix:36e10},{name:"P15",prix:4e11},{name:"P16",prix:45e10},{name:"P17",prix:51e10},{name:"P18",prix:58e10},{name:"P19",prix:61e10},{name:"P20",prix:65e10},{name:"P21",prix:7e11},{name:"P22",prix:75e10},{name:"P23",prix:82e10},{name:"P24",prix:88e10},{name:"P25",prix:92e10},{name:"P26",prix:1e12},{name:"P27",prix:115e10},{name:"P28",prix:125e10},{name:"P29",prix:14e11},{name:"P30",prix:155e10},{name:"P31",prix:165e10},{name:"P32",prix:175e10},{name:"P33",prix:185e10},{name:"P34",prix:195e10},{name:"P35",prix:21e11},{name:"P36",prix:22e11},{name:"P37",prix:235e10},{name:"P38",prix:25e11},{name:"P39",prix:3e12},{name:"P40",prix:33e11},{name:"P41",prix:35e11},{name:"P42",prix:375e10},{name:"P43",prix:42e11},{name:"P44",prix:48e11},{name:"P45",prix:55e11},{name:"P46",prix:65e11},{name:"P47",prix:75e11},{name:"P48",prix:85e11},{name:"P49",prix:9e12},{name:"P50",prix:1e13},{name:"P51",prix:9e12},{name:"P52",prix:9e12},{name:"P53",prix:1e13},{name:"P54",prix:1e13},{name:"P55",prix:2e13},{name:"P56",prix:1e13},{name:"P57",prix:1e13},{name:"P58",prix:15e12},{name:"P59",prix:2e13},{name:"P60",prix:55e12},{name:"P61",prix:25e12},{name:"P62",prix:25e12},{name:"P63",prix:275e11},{name:"P64",prix:3e13},{name:"P65",prix:1e14},{name:"P66",prix:325e11},{name:"P67",prix:35e12},{name:"P68",prix:4e13},{name:"P69",prix:55e12},{name:"P70",prix:15e13},{name:"P71",prix:5e13},{name:"P72",prix:1e13},{name:"P73",prix:2e13},{name:"P74",prix:4e13},{name:"P75",prix:2e14},{name:"P76",prix:2e14},{name:"P77",prix:225e12},{name:"P78",prix:25e13},{name:"P79",prix:25e13},{name:"P80",prix:35e13},{name:"P81",prix:23e13},{name:"P82",prix:26e13},{name:"P83",prix:29e13},{name:"P84",prix:32e13},{name:"P85",prix:4e14}]}}]);
//# sourceMappingURL=730.f1157fa8.chunk.js.map