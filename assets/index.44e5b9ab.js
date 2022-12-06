import{r as b,j as s,a as _,c as L,L as w,F as z}from"./index.3f5dcb5c.js";import{UserContext as M}from"./UserContext.9942ed02.js";import{_ as l,c as I,a as T,p as X,i as Y,g as ee,b as oe,s as R,u as re,d as O,e as te,C as k,f as U,h as W}from"./CardContent.dc871c2f.js";import{N as ne}from"./index.e6a23744.js";const se="_container_cgpnz_1",ae="_profilePicture_cgpnz_15",le="_name_cgpnz_29",ie="_username_cgpnz_39",ce="_fontBold_cgpnz_47",de="_bioContainer_cgpnz_55",P={container:se,profilePicture:ae,name:le,username:ie,fontBold:ce,bioContainer:de};function pe(e){return typeof e=="string"}function ue(e,o,r){return e===void 0||pe(e)?o:l({},o,{ownerState:l({},o.ownerState,r)})}function me(e,o=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!o.includes(t)).forEach(t=>{r[t]=e[t]}),r}function fe(e,o){return typeof e=="function"?e(o):e}function he(e,o){typeof e=="function"?e(o):e&&(e.current=o)}function j(...e){return b.exports.useMemo(()=>e.every(o=>o==null)?null:o=>{e.forEach(r=>{he(r,o)})},e)}function H(e){if(e===void 0)return{};const o={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{o[r]=e[r]}),o}function ye(e){const{getSlotProps:o,additionalProps:r,externalSlotProps:t,externalForwardedProps:n,className:a}=e;if(!o){const g=I(n==null?void 0:n.className,t==null?void 0:t.className,a,r==null?void 0:r.className),d=l({},r==null?void 0:r.style,n==null?void 0:n.style,t==null?void 0:t.style),u=l({},r,n,t);return g.length>0&&(u.className=g),Object.keys(d).length>0&&(u.style=d),{props:u,internalRef:void 0}}const c=me(l({},n,t)),p=H(t),h=H(n),i=o(c),m=I(i==null?void 0:i.className,r==null?void 0:r.className,a,n==null?void 0:n.className,t==null?void 0:t.className),v=l({},i==null?void 0:i.style,r==null?void 0:r.style,n==null?void 0:n.style,t==null?void 0:t.style),y=l({},i,r,h,p);return m.length>0&&(y.className=m),Object.keys(v).length>0&&(y.style=v),{props:y,internalRef:i.ref}}const ge=["sx"],ve=e=>{const o={systemProps:{},otherProps:{}};return Object.keys(e).forEach(r=>{X[r]?o.systemProps[r]=e[r]:o.otherProps[r]=e[r]}),o};function xe(e){const{sx:o}=e,r=T(e,ge),{systemProps:t,otherProps:n}=ve(r);let a;return Array.isArray(o)?a=[t,...o]:typeof o=="function"?a=(...c)=>{const p=o(...c);return Y(p)?l({},t,p):t}:a=l({},t,o),l({},n,{sx:a})}const Pe=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],be=["component","slots","slotProps"],Ce=["component"];function F(e,o){const{className:r,elementType:t,ownerState:n,externalForwardedProps:a,getSlotOwnerState:c,internalForwardedProps:p}=o,h=T(o,Pe),{component:i,slots:m={[e]:void 0},slotProps:v={[e]:void 0}}=a,y=T(a,be),g=m[e]||t,d=fe(v[e],n),u=ye(l({className:r},h,{externalForwardedProps:e==="root"?y:void 0,externalSlotProps:d})),{props:{component:x},internalRef:D}=u,S=T(u.props,Ce),C=j(D,j(d==null?void 0:d.ref,e==="root"?o.ref:void 0)),f=c?l({},n,c(S)):n,N=e==="root"?x||i:x,$=ue(g,l({},e==="root"&&!i&&!m[e]&&p,e!=="root"&&!m[e]&&p,S,N&&{as:N},{ref:C}),f);return[g,$]}function Ne(e){return ee("JoyTypography",e)}oe("JoyTypography",["root","h1","h2","h3","h4","h5","h6","body1","body2","body3","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","variantPlain","variantOutlined","variantSoft","variantSolid"]);const _e=["color","textColor"],De=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant"],J=b.exports.createContext(!1),Se=e=>{const{gutterBottom:o,noWrap:r,level:t,color:n,variant:a}=e,c={root:["root",t,o&&"gutterBottom",r&&"noWrap",n&&`color${O(n)}`,a&&`variant${O(a)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return te(c,Ne,{})},Te=R("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(e,o)=>o.startDecorator})(({ownerState:e})=>{var o;return l({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"},((o=e.sx)==null?void 0:o.alignItems)==="flex-start"&&{marginTop:"2px"})}),$e=R("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(e,o)=>o.endDecorator})(({ownerState:e})=>{var o;return l({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"},((o=e.sx)==null?void 0:o.alignItems)==="flex-start"&&{marginTop:"2px"})}),Ue=R("span",{name:"JoyTypography",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{var r,t;return l({"--Icon-fontSize":"1.25em",margin:0},o.nesting?{display:"inline"}:{fontFamily:e.vars.fontFamily.body,display:"block"},(o.startDecorator||o.endDecorator)&&l({display:"flex",alignItems:"center"},o.nesting&&l({display:"inline-flex"},o.startDecorator&&{verticalAlign:"bottom"})),o.level&&o.level!=="inherit"&&e.typography[o.level],o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.color&&{color:`rgba(${(r=e.vars.palette[o.color])==null?void 0:r.mainChannel} / 1)`},o.variant&&l({borderRadius:e.vars.radius.xs,paddingBlock:"min(0.15em, 4px)",paddingInline:"0.375em"},!o.nesting&&{marginInline:"-0.375em"},(t=e.variants[o.variant])==null?void 0:t[o.color]))}),Ee={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",display1:"h1",display2:"h2",body1:"p",body2:"p",body3:"span",body4:"span",body5:"span",inherit:"p"},Fe=b.exports.forwardRef(function(o,r){const t=re({props:o,name:"JoyTypography"}),{color:n,textColor:a}=t,c=T(t,_e),p=b.exports.useContext(J),h=xe(l({},c,{color:a})),{component:i,gutterBottom:m=!1,noWrap:v=!1,level:y="body1",levelMapping:g={},children:d,endDecorator:u,startDecorator:x,variant:D}=h,S=T(h,De),C=p?o.level||"inherit":y,f=i||(p?"span":g[C]||Ee[C]||"span"),N=l({},h,{level:C,component:f,color:D?n!=null?n:"neutral":n,gutterBottom:m,noWrap:v,nesting:p,variant:D}),$=Se(N),E=l({},S,{component:f}),[Z,V]=F("root",{ref:r,className:$.root,elementType:Ue,externalForwardedProps:E,ownerState:N}),[q,G]=F("startDecorator",{className:$.startDecorator,elementType:Te,externalForwardedProps:E,ownerState:N}),[K,Q]=F("endDecorator",{className:$.endDecorator,elementType:$e,externalForwardedProps:E,ownerState:N});return s(J.Provider,{value:!0,children:_(Z,l({},V,{children:[x&&s(q,l({},G,{children:x})),d,u&&s(K,l({},Q,{children:u}))]}))})}),A=Fe,Be="_postsContainer_1abx7_1",we="_card_1abx7_23",B={postsContainer:Be,card:we},Re=()=>{const{username:e,posts:o,searchedUserPosts:r}=b.exports.useContext(M),{usernameParams:t}=L();return s("div",{className:B.postsContainer,children:e!==null&&t===e?o.map(({_id:n,title:a,imageUrl:c})=>s("div",{children:s(w,{to:`post/${n}`,children:_(k,{className:B.card,children:[s(U,{children:s("img",{src:c,loading:"lazy",alt:"post picture"})}),s(U,{sx:{background:"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)"}}),s(W,{sx:{justifyContent:"flex-end"},children:s(A,{level:"h2",fontSize:"lg",textColor:"#fff",mb:1,children:a})})]})})},n)):r.map(({_id:n,title:a,imageUrl:c})=>s("div",{children:s(w,{to:`post/${n}`,children:_(k,{className:B.card,children:[s(U,{children:s("img",{src:c,loading:"lazy",alt:"post picture"})}),s(U,{sx:{background:"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)"}}),s(W,{sx:{justifyContent:"flex-end"},children:s(A,{level:"h2",fontSize:"lg",textColor:"#fff",mb:1,children:a})})]})})},n))})};function We(){const{user:e,appendSearchedUserDetails:o,appendSearchedUserPosts:r,appendSearchedUserId:t,appendSearchedUsername:n,searchedUser:a,searchedUsername:c}=b.exports.useContext(M),{firstName:p,lastName:h,username:i,password:m,email:v,imageUrl:y,bio:g}=e,{usernameParams:d}=L(),[u,x]=b.exports.useState(),D=async S=>{try{const f=await(await fetch(`https://memoirs.onrender.com/api/v1/users/${S}?limit=6&offset=0`)).json();if(f.Error==="No User found")return x(null);o(f.userDetails),r(f.userPosts),t(f.userDetails.userId),n(f.userDetails.username)}catch{x(null)}};return b.exports.useEffect(()=>{c===void 0&&i===void 0&&D(d)},[]),_(z,{children:[s(ne,{}),s("div",{className:P.container,children:u===null?s("h1",{children:"No user found."}):_(z,{children:[s("img",{src:i!==null&&d===i?e.imageUrl:a.imageUrl,alt:"profile picture",className:P.profilePicture}),_("div",{className:P.userDetails,children:[s("p",{className:`${P.fontBold} ${P.name}`,children:i!==null&&d===i?`${e.firstName} ${e.lastName}`:`${a.firstName} ${a.lastName}`}),_("p",{className:P.username,children:["@",d]}),i!==null&&d===i?s(w,{to:"update",state:{previousFirstName:p,previousLastName:h,previousUsername:i,previousPassword:m,previousEmail:v,previousImageUrl:y,previousBio:g},className:P.editProfile,children:"Edit profile"}):null,s("div",{className:P.bioContainer,children:i!==null&&d===i?e.bio===null?s("p",{children:"Edit your profile to add bio"}):s("p",{children:e.bio}):a.bio===null?s("p",{children:"No bio"}):s("p",{children:a.bio})})]}),s(Re,{})]})})]})}export{We as default};
