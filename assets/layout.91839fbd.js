import{_ as _export_sfc,r as resolveComponent,o as openBlock,c as createElementBlock,b as createVNode,f as defineComponent,i as usePageFrontmatter,j as computed,k as isArray,h as unref,F as Fragment,l as renderList,a as createBaseVNode,t as toDisplayString,m as createCommentVNode,n as useRoute,p as toRefs,q as createBlock,w as withCtx,s as mergeProps,v as renderSlot,d as createTextVNode,x as isLinkHttp,y as isLinkMailto,z as isLinkTel,A as useSiteData,B as useSiteLocaleData,C as useDarkMode,D as normalizeClass,E as h,G as withBase,H as ClientOnly,u as useRouteLocale,g as useThemeLocaleData,T as Transition,I as ref,J as watch,K as withDirectives,L as vShow,M as removeLeadingSlash,N as removeEndingSlash,O as useRouter,P as isString,Q as useNavLink,e as createStaticVNode,R as onMounted,S as normalizeStyle,U as usePageData,V as useSidebarItems,W as isPlainObject,X as useToggle,Y as nextTick,Z as onBeforeUnmount,$ as withKeys,a0 as pushScopeId,a1 as popScopeId,a2 as onUnmounted,a3 as useScrollPromise,a4 as isNullable,a5 as createSlots}from"./app.7d616349.js";const _sfc_main$m={},_hoisted_1$h={class:"theme-default-content"};function _sfc_render(n,t){const e=resolveComponent("Content");return openBlock(),createElementBlock("div",_hoisted_1$h,[createVNode(e)])}var HomeContent=_export_sfc(_sfc_main$m,[["render",_sfc_render],["__file","HomeContent.vue"]]);const _hoisted_1$g={key:0,class:"features"},_sfc_main$l=defineComponent({__name:"HomeFeatures",setup(n){const t=usePageFrontmatter(),e=computed(()=>isArray(t.value.features)?t.value.features:[]);return(r,o)=>unref(e).length?(openBlock(),createElementBlock("div",_hoisted_1$g,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(e),i=>(openBlock(),createElementBlock("div",{key:i.title,class:"feature"},[createBaseVNode("h2",null,toDisplayString(i.title),1),createBaseVNode("p",null,toDisplayString(i.details),1)]))),128))])):createCommentVNode("",!0)}});var HomeFeatures=_export_sfc(_sfc_main$l,[["__file","HomeFeatures.vue"]]);const _hoisted_1$f=["innerHTML"],_hoisted_2$b=["textContent"],_sfc_main$k=defineComponent({__name:"HomeFooter",setup(n){const t=usePageFrontmatter(),e=computed(()=>t.value.footer),r=computed(()=>t.value.footerHtml);return(o,i)=>unref(e)?(openBlock(),createElementBlock(Fragment,{key:0},[unref(r)?(openBlock(),createElementBlock("div",{key:0,class:"footer",innerHTML:unref(e)},null,8,_hoisted_1$f)):(openBlock(),createElementBlock("div",{key:1,class:"footer",textContent:toDisplayString(unref(e))},null,8,_hoisted_2$b))],64)):createCommentVNode("",!0)}});var HomeFooter=_export_sfc(_sfc_main$k,[["__file","HomeFooter.vue"]]);const _hoisted_1$e=["href","rel","target","aria-label"],__default__=defineComponent({inheritAttrs:!1}),_sfc_main$j=defineComponent({...__default__,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(n){const t=n,e=useRoute(),r=useSiteData(),{item:o}=toRefs(t),i=computed(()=>isLinkHttp(o.value.link)),_=computed(()=>isLinkMailto(o.value.link)||isLinkTel(o.value.link)),c=computed(()=>{if(!_.value){if(o.value.target)return o.value.target;if(i.value)return"_blank"}}),a=computed(()=>c.value==="_blank"),s=computed(()=>!i.value&&!_.value&&!a.value),l=computed(()=>{if(!_.value){if(o.value.rel)return o.value.rel;if(a.value)return"noopener noreferrer"}}),d=computed(()=>o.value.ariaLabel||o.value.text),u=computed(()=>{const f=Object.keys(r.value.locales);return f.length?!f.some(m=>m===o.value.link):o.value.link!=="/"}),p=computed(()=>u.value?e.path.startsWith(o.value.link):!1),v=computed(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):p.value:!1);return(f,m)=>{const k=resolveComponent("RouterLink"),g=resolveComponent("AutoLinkExternalIcon");return unref(s)?(openBlock(),createBlock(k,mergeProps({key:0,class:{"router-link-active":unref(v)},to:unref(o).link,"aria-label":unref(d)},f.$attrs),{default:withCtx(()=>[renderSlot(f.$slots,"before"),createTextVNode(" "+toDisplayString(unref(o).text)+" ",1),renderSlot(f.$slots,"after")]),_:3},16,["class","to","aria-label"])):(openBlock(),createElementBlock("a",mergeProps({key:1,class:"external-link",href:unref(o).link,rel:unref(l),target:unref(c),"aria-label":unref(d)},f.$attrs),[renderSlot(f.$slots,"before"),createTextVNode(" "+toDisplayString(unref(o).text)+" ",1),unref(a)?(openBlock(),createBlock(g,{key:0})):createCommentVNode("",!0),renderSlot(f.$slots,"after")],16,_hoisted_1$e))}}});var AutoLink=_export_sfc(_sfc_main$j,[["__file","AutoLink.vue"]]);const _hoisted_1$d={class:"hero"},_hoisted_2$a={key:0,id:"main-title"},_hoisted_3$8={key:1,class:"description"},_hoisted_4$6={key:2,class:"actions"},_sfc_main$i=defineComponent({__name:"HomeHero",setup(n){const t=usePageFrontmatter(),e=useSiteLocaleData(),r=useDarkMode(),o=computed(()=>r.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),i=computed(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),_=computed(()=>t.value.heroAlt||i.value||"hero"),c=computed(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),a=computed(()=>isArray(t.value.actions)?t.value.actions.map(({text:l,link:d,type:u="primary"})=>({text:l,link:d,type:u})):[]),s=()=>{if(!o.value)return null;const l=h("img",{src:withBase(o.value),alt:_.value});return t.value.heroImageDark===void 0?l:h(ClientOnly,()=>l)};return(l,d)=>(openBlock(),createElementBlock("header",_hoisted_1$d,[createVNode(s),unref(i)?(openBlock(),createElementBlock("h1",_hoisted_2$a,toDisplayString(unref(i)),1)):createCommentVNode("",!0),unref(c)?(openBlock(),createElementBlock("p",_hoisted_3$8,toDisplayString(unref(c)),1)):createCommentVNode("",!0),unref(a).length?(openBlock(),createElementBlock("p",_hoisted_4$6,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a),u=>(openBlock(),createBlock(AutoLink,{key:u.text,class:normalizeClass(["action-button",[u.type]]),item:u},null,8,["class","item"]))),128))])):createCommentVNode("",!0)]))}});var HomeHero=_export_sfc(_sfc_main$i,[["__file","HomeHero.vue"]]);const _hoisted_1$c={class:"home"},_sfc_main$h=defineComponent({__name:"Home",setup(n){return(t,e)=>(openBlock(),createElementBlock("main",_hoisted_1$c,[createVNode(HomeHero),createVNode(HomeFeatures),createVNode(HomeContent),createVNode(HomeFooter)]))}});var Home=_export_sfc(_sfc_main$h,[["__file","Home.vue"]]);const _sfc_main$g=defineComponent({__name:"NavbarBrand",setup(n){const t=useRouteLocale(),e=useSiteLocaleData(),r=useThemeLocaleData(),o=useDarkMode(),i=computed(()=>r.value.home||t.value),_=computed(()=>e.value.title),c=computed(()=>o.value&&r.value.logoDark!==void 0?r.value.logoDark:r.value.logo),a=()=>{if(!c.value)return null;const s=h("img",{class:"logo",src:withBase(c.value),alt:_.value});return r.value.logoDark===void 0?s:h(ClientOnly,()=>s)};return(s,l)=>{const d=resolveComponent("RouterLink");return openBlock(),createBlock(d,{to:unref(i)},{default:withCtx(()=>[createVNode(a),unref(_)?(openBlock(),createElementBlock("span",{key:0,class:normalizeClass(["site-name",{"can-hide":unref(c)}])},toDisplayString(unref(_)),3)):createCommentVNode("",!0)]),_:1},8,["to"])}}});var NavbarBrand=_export_sfc(_sfc_main$g,[["__file","NavbarBrand.vue"]]);const _sfc_main$f=defineComponent({__name:"DropdownTransition",setup(n){const t=r=>{r.style.height=r.scrollHeight+"px"},e=r=>{r.style.height=""};return(r,o)=>(openBlock(),createBlock(Transition,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:withCtx(()=>[renderSlot(r.$slots,"default")]),_:3}))}});var DropdownTransition=_export_sfc(_sfc_main$f,[["__file","DropdownTransition.vue"]]);const _hoisted_1$b=["aria-label"],_hoisted_2$9={class:"title"},_hoisted_3$7=createBaseVNode("span",{class:"arrow down"},null,-1),_hoisted_4$5=["aria-label"],_hoisted_5$4={class:"title"},_hoisted_6$3={class:"navbar-dropdown"},_hoisted_7$2={class:"navbar-dropdown-subtitle"},_hoisted_8$2={key:1},_hoisted_9$2={class:"navbar-dropdown-subitem-wrapper"},_sfc_main$e=defineComponent({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(n){const t=n,{item:e}=toRefs(t),r=computed(()=>e.value.ariaLabel||e.value.text),o=ref(!1),i=useRoute();watch(()=>i.path,()=>{o.value=!1});const _=a=>{a.detail===0?o.value=!o.value:o.value=!1},c=(a,s)=>s[s.length-1]===a;return(a,s)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["navbar-dropdown-wrapper",{open:o.value}])},[createBaseVNode("button",{class:"navbar-dropdown-title",type:"button","aria-label":unref(r),onClick:_},[createBaseVNode("span",_hoisted_2$9,toDisplayString(unref(e).text),1),_hoisted_3$7],8,_hoisted_1$b),createBaseVNode("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":unref(r),onClick:s[0]||(s[0]=l=>o.value=!o.value)},[createBaseVNode("span",_hoisted_5$4,toDisplayString(unref(e).text),1),createBaseVNode("span",{class:normalizeClass(["arrow",o.value?"down":"right"])},null,2)],8,_hoisted_4$5),createVNode(DropdownTransition,null,{default:withCtx(()=>[withDirectives(createBaseVNode("ul",_hoisted_6$3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(e).children,l=>(openBlock(),createElementBlock("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(openBlock(),createElementBlock(Fragment,{key:0},[createBaseVNode("h4",_hoisted_7$2,[l.link?(openBlock(),createBlock(AutoLink,{key:0,item:l,onFocusout:d=>c(l,unref(e).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(openBlock(),createElementBlock("span",_hoisted_8$2,toDisplayString(l.text),1))]),createBaseVNode("ul",_hoisted_9$2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(l.children,d=>(openBlock(),createElementBlock("li",{key:d.link,class:"navbar-dropdown-subitem"},[createVNode(AutoLink,{item:d,onFocusout:u=>c(d,l.children)&&c(l,unref(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(openBlock(),createBlock(AutoLink,{key:1,item:l,onFocusout:d=>c(l,unref(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[vShow,o.value]])]),_:1})],2))}});var NavbarDropdown=_export_sfc(_sfc_main$e,[["__file","NavbarDropdown.vue"]]);const normalizePath=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),isActiveLink=(n,t)=>{if(t.hash===n)return!0;const e=normalizePath(t.path),r=normalizePath(n);return e===r},isActiveSidebarItem=(n,t)=>n.link&&isActiveLink(n.link,t)?!0:n.children?n.children.some(e=>isActiveSidebarItem(e,t)):!1,resolveRepoType=n=>!isLinkHttp(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLinkPatterns=({docsRepo:n,editLinkPattern:t})=>{if(t)return t;const e=resolveRepoType(n);return e!==null?editLinkPatterns[e]:null},resolveEditLink=({docsRepo:n,docsBranch:t,docsDir:e,filePathRelative:r,editLinkPattern:o})=>{if(!r)return null;const i=resolveEditLinkPatterns({docsRepo:n,editLinkPattern:o});return i?i.replace(/:repo/,isLinkHttp(n)?n:`https://github.com/${n}`).replace(/:branch/,t).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(e)}/${r}`)):null},_hoisted_1$a={key:0,class:"navbar-items"},_sfc_main$d=defineComponent({__name:"NavbarItems",setup(n){const t=()=>{const s=useRouter(),l=useRouteLocale(),d=useSiteLocaleData(),u=useThemeLocaleData();return computed(()=>{var g,B,b;const p=Object.keys(d.value.locales);if(p.length<2)return[];const v=s.currentRoute.value.path,f=s.currentRoute.value.fullPath,m=s.currentRoute.value.hash;return[{text:(g=u.value.selectLanguageText)!=null?g:"unknown language",ariaLabel:(b=(B=u.value.selectLanguageAriaLabel)!=null?B:u.value.selectLanguageText)!=null?b:"unknown language",children:p.map($=>{var L,S,V,x,w,E;const T=(S=(L=d.value.locales)==null?void 0:L[$])!=null?S:{},y=(x=(V=u.value.locales)==null?void 0:V[$])!=null?x:{},C=`${T.lang}`,P=(w=y.selectLanguageName)!=null?w:C;let N;if(C===d.value.lang)N=f;else{const D=v.replace(l.value,$);s.getRoutes().some(I=>I.path===D)?N=`${D}${m}`:N=(E=y.home)!=null?E:$}return{text:P,link:N}})}]})},e=()=>{const s=useThemeLocaleData(),l=computed(()=>s.value.repo),d=computed(()=>l.value?resolveRepoType(l.value):null),u=computed(()=>l.value&&!isLinkHttp(l.value)?`https://github.com/${l.value}`:l.value),p=computed(()=>u.value?s.value.repoLabel?s.value.repoLabel:d.value===null?"Source":d.value:null);return computed(()=>!u.value||!p.value?[]:[{text:p.value,link:u.value}])},r=s=>isString(s)?useNavLink(s):s.children?{...s,children:s.children.map(r)}:s,i=(()=>{const s=useThemeLocaleData();return computed(()=>(s.value.navbar||[]).map(r))})(),_=t(),c=e(),a=computed(()=>[...i.value,..._.value,...c.value]);return(s,l)=>unref(a).length?(openBlock(),createElementBlock("nav",_hoisted_1$a,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a),d=>(openBlock(),createElementBlock("div",{key:d.text,class:"navbar-item"},[d.children?(openBlock(),createBlock(NavbarDropdown,{key:0,item:d},null,8,["item"])):(openBlock(),createBlock(AutoLink,{key:1,item:d},null,8,["item"]))]))),128))])):createCommentVNode("",!0)}});var NavbarItems=_export_sfc(_sfc_main$d,[["__file","NavbarItems.vue"]]);const _hoisted_1$9=["title"],_hoisted_2$8={class:"icon",focusable:"false",viewBox:"0 0 32 32"},_hoisted_3$6=createStaticVNode('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),_hoisted_12$1=[_hoisted_3$6],_hoisted_13$1={class:"icon",focusable:"false",viewBox:"0 0 32 32"},_hoisted_14$1=createBaseVNode("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),_hoisted_15$1=[_hoisted_14$1],_sfc_main$c=defineComponent({__name:"ToggleColorModeButton",setup(n){const t=useThemeLocaleData(),e=useDarkMode(),r=()=>{e.value=!e.value};return(o,i)=>(openBlock(),createElementBlock("button",{class:"toggle-color-mode-button",title:unref(t).toggleColorMode,onClick:r},[withDirectives((openBlock(),createElementBlock("svg",_hoisted_2$8,_hoisted_12$1,512)),[[vShow,!unref(e)]]),withDirectives((openBlock(),createElementBlock("svg",_hoisted_13$1,_hoisted_15$1,512)),[[vShow,unref(e)]])],8,_hoisted_1$9))}});var ToggleColorModeButton=_export_sfc(_sfc_main$c,[["__file","ToggleColorModeButton.vue"]]);const _hoisted_1$8=["title"],_hoisted_2$7=createBaseVNode("div",{class:"icon","aria-hidden":"true"},[createBaseVNode("span"),createBaseVNode("span"),createBaseVNode("span")],-1),_hoisted_3$5=[_hoisted_2$7],_sfc_main$b=defineComponent({__name:"ToggleSidebarButton",emits:["toggle"],setup(n){const t=useThemeLocaleData();return(e,r)=>(openBlock(),createElementBlock("div",{class:"toggle-sidebar-button",title:unref(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:r[0]||(r[0]=o=>e.$emit("toggle"))},_hoisted_3$5,8,_hoisted_1$8))}});var ToggleSidebarButton=_export_sfc(_sfc_main$b,[["__file","ToggleSidebarButton.vue"]]);const _sfc_main$a=defineComponent({__name:"Navbar",emits:["toggle-sidebar"],setup(n){const t=useThemeLocaleData(),e=ref(null),r=ref(null),o=ref(0),i=computed(()=>o.value?{maxWidth:o.value+"px"}:{});onMounted(()=>{const a=_(e.value,"paddingLeft")+_(e.value,"paddingRight"),s=()=>{var l;window.innerWidth<=719?o.value=0:o.value=e.value.offsetWidth-a-(((l=r.value)==null?void 0:l.offsetWidth)||0)};s(),window.addEventListener("resize",s,!1),window.addEventListener("orientationchange",s,!1)});function _(c,a){var d,u,p;const s=(p=(u=(d=c==null?void 0:c.ownerDocument)==null?void 0:d.defaultView)==null?void 0:u.getComputedStyle(c,null))==null?void 0:p[a],l=Number.parseInt(s,10);return Number.isNaN(l)?0:l}return(c,a)=>{const s=resolveComponent("NavbarSearch");return openBlock(),createElementBlock("header",{ref_key:"navbar",ref:e,class:"navbar"},[createVNode(ToggleSidebarButton,{onToggle:a[0]||(a[0]=l=>c.$emit("toggle-sidebar"))}),createBaseVNode("span",{ref_key:"navbarBrand",ref:r},[createVNode(NavbarBrand)],512),createBaseVNode("div",{class:"navbar-items-wrapper",style:normalizeStyle(unref(i))},[renderSlot(c.$slots,"before"),createVNode(NavbarItems,{class:"can-hide"}),renderSlot(c.$slots,"after"),unref(t).colorModeSwitch?(openBlock(),createBlock(ToggleColorModeButton,{key:0})):createCommentVNode("",!0),createVNode(s)],4)],512)}}});var Navbar=_export_sfc(_sfc_main$a,[["__file","Navbar.vue"]]);const _hoisted_1$7={class:"page-meta"},_hoisted_2$6={key:0,class:"meta-item edit-link"},_hoisted_3$4={key:1,class:"meta-item last-updated"},_hoisted_4$4={class:"meta-item-label"},_hoisted_5$3={class:"meta-item-info"},_hoisted_6$2={key:2,class:"meta-item contributors"},_hoisted_7$1={class:"meta-item-label"},_hoisted_8$1={class:"meta-item-info"},_hoisted_9$1=["title"],_sfc_main$9=defineComponent({__name:"PageMeta",setup(n){const t=()=>{const a=useThemeLocaleData(),s=usePageData(),l=usePageFrontmatter();return computed(()=>{var g,B,b;if(!((B=(g=l.value.editLink)!=null?g:a.value.editLink)!=null?B:!0))return null;const{repo:u,docsRepo:p=u,docsBranch:v="main",docsDir:f="",editLinkText:m}=a.value;if(!p)return null;const k=resolveEditLink({docsRepo:p,docsBranch:v,docsDir:f,filePathRelative:s.value.filePathRelative,editLinkPattern:(b=l.value.editLinkPattern)!=null?b:a.value.editLinkPattern});return k?{text:m!=null?m:"Edit this page",link:k}:null})},e=()=>{const a=useThemeLocaleData(),s=usePageData(),l=usePageFrontmatter();return computed(()=>{var p,v,f,m;return!((v=(p=l.value.lastUpdated)!=null?p:a.value.lastUpdated)!=null?v:!0)||!((f=s.value.git)!=null&&f.updatedTime)?null:new Date((m=s.value.git)==null?void 0:m.updatedTime).toLocaleString()})},r=()=>{const a=useThemeLocaleData(),s=usePageData(),l=usePageFrontmatter();return computed(()=>{var u,p,v,f;return((p=(u=l.value.contributors)!=null?u:a.value.contributors)!=null?p:!0)&&(f=(v=s.value.git)==null?void 0:v.contributors)!=null?f:null})},o=useThemeLocaleData(),i=t(),_=e(),c=r();return(a,s)=>{const l=resolveComponent("ClientOnly");return openBlock(),createElementBlock("footer",_hoisted_1$7,[unref(i)?(openBlock(),createElementBlock("div",_hoisted_2$6,[createVNode(AutoLink,{class:"meta-item-label",item:unref(i)},null,8,["item"])])):createCommentVNode("",!0),unref(_)?(openBlock(),createElementBlock("div",_hoisted_3$4,[createBaseVNode("span",_hoisted_4$4,toDisplayString(unref(o).lastUpdatedText)+": ",1),createVNode(l,null,{default:withCtx(()=>[createBaseVNode("span",_hoisted_5$3,toDisplayString(unref(_)),1)]),_:1})])):createCommentVNode("",!0),unref(c)&&unref(c).length?(openBlock(),createElementBlock("div",_hoisted_6$2,[createBaseVNode("span",_hoisted_7$1,toDisplayString(unref(o).contributorsText)+": ",1),createBaseVNode("span",_hoisted_8$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(c),(d,u)=>(openBlock(),createElementBlock(Fragment,{key:u},[createBaseVNode("span",{class:"contributor",title:`email: ${d.email}`},toDisplayString(d.name),9,_hoisted_9$1),u!==unref(c).length-1?(openBlock(),createElementBlock(Fragment,{key:0},[createTextVNode(", ")],64)):createCommentVNode("",!0)],64))),128))])])):createCommentVNode("",!0)])}}});var PageMeta=_export_sfc(_sfc_main$9,[["__file","PageMeta.vue"]]);const _hoisted_1$6={key:0,class:"page-nav"},_hoisted_2$5={class:"inner"},_hoisted_3$3={key:0,class:"prev"},_hoisted_4$3={key:1,class:"next"},_sfc_main$8=defineComponent({__name:"PageNav",setup(n){const t=a=>a===!1?null:isString(a)?useNavLink(a):isPlainObject(a)?a:!1,e=(a,s,l)=>{const d=a.findIndex(u=>u.link===s);if(d!==-1){const u=a[d+l];return u!=null&&u.link?u:null}for(const u of a)if(u.children){const p=e(u.children,s,l);if(p)return p}return null},r=usePageFrontmatter(),o=useSidebarItems(),i=useRoute(),_=computed(()=>{const a=t(r.value.prev);return a!==!1?a:e(o.value,i.path,-1)}),c=computed(()=>{const a=t(r.value.next);return a!==!1?a:e(o.value,i.path,1)});return(a,s)=>unref(_)||unref(c)?(openBlock(),createElementBlock("nav",_hoisted_1$6,[createBaseVNode("p",_hoisted_2$5,[unref(_)?(openBlock(),createElementBlock("span",_hoisted_3$3,[createVNode(AutoLink,{item:unref(_)},null,8,["item"])])):createCommentVNode("",!0),unref(c)?(openBlock(),createElementBlock("span",_hoisted_4$3,[createVNode(AutoLink,{item:unref(c)},null,8,["item"])])):createCommentVNode("",!0)])])):createCommentVNode("",!0)}});var PageNav=_export_sfc(_sfc_main$8,[["__file","PageNav.vue"]]);const _hoisted_1$5={class:"page"},_hoisted_2$4={class:"theme-default-content"},_sfc_main$7=defineComponent({__name:"Page",setup(n){return(t,e)=>{const r=resolveComponent("Content");return openBlock(),createElementBlock("main",_hoisted_1$5,[renderSlot(t.$slots,"top"),createBaseVNode("div",_hoisted_2$4,[renderSlot(t.$slots,"content-top"),createVNode(r),renderSlot(t.$slots,"content-bottom")]),createVNode(PageMeta),createVNode(PageNav),renderSlot(t.$slots,"bottom")])}}});var Page=_export_sfc(_sfc_main$7,[["__file","Page.vue"]]);const _hoisted_1$4=["onKeydown"],_hoisted_2$3={class:"sidebar-item-children"},_sfc_main$6=defineComponent({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(n){const t=n,{item:e,depth:r}=toRefs(t),o=useRoute(),i=useRouter(),_=computed(()=>isActiveSidebarItem(e.value,o)),c=computed(()=>({"sidebar-item":!0,"sidebar-heading":r.value===0,active:_.value,collapsible:e.value.collapsible})),[a,s]=useToggle(_.value),l=u=>{e.value.collapsible&&(u.preventDefault(),s())},d=i.afterEach(u=>{nextTick(()=>{a.value=e.value.collapsible?_.value:!0})});return onBeforeUnmount(()=>{d()}),(u,p)=>{var f;const v=resolveComponent("SidebarItem",!0);return openBlock(),createElementBlock("li",null,[unref(e).link?(openBlock(),createBlock(AutoLink,{key:0,class:normalizeClass(unref(c)),item:unref(e)},null,8,["class","item"])):(openBlock(),createElementBlock("p",{key:1,tabindex:"0",class:normalizeClass(unref(c)),onClick:l,onKeydown:withKeys(l,["enter"])},[createTextVNode(toDisplayString(unref(e).text)+" ",1),unref(e).collapsible?(openBlock(),createElementBlock("span",{key:0,class:normalizeClass(["arrow",unref(a)?"down":"right"])},null,2)):createCommentVNode("",!0)],42,_hoisted_1$4)),(f=unref(e).children)!=null&&f.length?(openBlock(),createBlock(DropdownTransition,{key:2},{default:withCtx(()=>[withDirectives(createBaseVNode("ul",_hoisted_2$3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(e).children,m=>(openBlock(),createBlock(v,{key:`${unref(r)}${m.text}${m.link}`,item:m,depth:unref(r)+1},null,8,["item","depth"]))),128))],512),[[vShow,unref(a)]])]),_:1})):createCommentVNode("",!0)])}}});var SidebarItem=_export_sfc(_sfc_main$6,[["__file","SidebarItem.vue"]]);const _hoisted_1$3={key:0,class:"sidebar-items"},_sfc_main$5=defineComponent({__name:"SidebarItems",setup(n){const t=useRoute(),e=useSidebarItems();return onMounted(()=>{watch(()=>t.hash,r=>{const o=document.querySelector(".sidebar");if(!o)return;const i=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${r}"]`);if(!i)return;const{top:_,height:c}=o.getBoundingClientRect(),{top:a,height:s}=i.getBoundingClientRect();a<_?i.scrollIntoView(!0):a+s>_+c&&i.scrollIntoView(!1)})}),(r,o)=>unref(e).length?(openBlock(),createElementBlock("ul",_hoisted_1$3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(e),i=>(openBlock(),createBlock(SidebarItem,{key:`${i.text}${i.link}`,item:i},null,8,["item"]))),128))])):createCommentVNode("",!0)}});var SidebarItems=_export_sfc(_sfc_main$5,[["__file","SidebarItems.vue"]]),sidebar_vue_vue_type_style_index_0_scoped_true_lang="";const _withScopeId=n=>(pushScopeId("data-v-74f3be5d"),n=n(),popScopeId(),n),_hoisted_1$2={class:"sidebar"},_hoisted_2$2={class:"sidebar-container"},_hoisted_3$2={class:"sidebar-bottom"},_hoisted_4$2=_withScopeId(()=>createBaseVNode("li",{class:"sidebar-item sidebar-heading appearance"},[createTextVNode(" Source Code "),createBaseVNode("a",{class:"icon",href:"https://github.com/shigma/schemastery",target:"_blank","aria-label":"GitHub"},[createBaseVNode("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[createBaseVNode("path",{d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z",fill:"currentColor"})])])],-1)),_hoisted_5$2={class:"sidebar-item sidebar-heading appearance"},_sfc_main$4=defineComponent({__name:"sidebar",setup(n){return(t,e)=>{const r=resolveComponent("el-scrollbar");return openBlock(),createElementBlock("aside",_hoisted_1$2,[createVNode(r,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_2$2,[createVNode(NavbarItems),createVNode(SidebarItems),createBaseVNode("ul",_hoisted_3$2,[_hoisted_4$2,createBaseVNode("li",_hoisted_5$2,[createTextVNode(" Appearance "),createVNode(ToggleColorModeButton)])])])]),_:1})])}}});var Sidebar=_export_sfc(_sfc_main$4,[["__scopeId","data-v-74f3be5d"],["__file","sidebar.vue"]]);const _sfc_main$3=defineComponent({__name:"Layout",setup(n){const t=usePageData(),e=usePageFrontmatter(),r=useThemeLocaleData(),o=computed(()=>e.value.navbar!==!1&&r.value.navbar!==!1),i=useSidebarItems(),_=ref(!1),c=m=>{_.value=typeof m=="boolean"?m:!_.value},a={x:0,y:0},s=m=>{a.x=m.changedTouches[0].clientX,a.y=m.changedTouches[0].clientY},l=m=>{const k=m.changedTouches[0].clientX-a.x,g=m.changedTouches[0].clientY-a.y;Math.abs(k)>Math.abs(g)&&Math.abs(k)>40&&(k>0&&a.x<=80?c(!0):c(!1))},d=computed(()=>[{"no-navbar":!o.value,"no-sidebar":!i.value.length,"sidebar-open":_.value},e.value.pageClass]);let u;onMounted(()=>{u=useRouter().afterEach(()=>{c(!1)})}),onUnmounted(()=>{u()});const p=useScrollPromise(),v=p.resolve,f=p.pending;return(m,k)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["theme-container",unref(d)]),onTouchstart:s,onTouchend:l},[renderSlot(m.$slots,"navbar",{},()=>[unref(o)?(openBlock(),createBlock(Navbar,{key:0,onToggleSidebar:c},{before:withCtx(()=>[renderSlot(m.$slots,"navbar-before")]),after:withCtx(()=>[renderSlot(m.$slots,"navbar-after")]),_:3})):createCommentVNode("",!0)]),createBaseVNode("div",{class:"sidebar-mask",onClick:k[0]||(k[0]=g=>c(!1))}),renderSlot(m.$slots,"sidebar",{},()=>[createVNode(Sidebar,null,{top:withCtx(()=>[renderSlot(m.$slots,"sidebar-top")]),bottom:withCtx(()=>[renderSlot(m.$slots,"sidebar-bottom")]),_:3})]),renderSlot(m.$slots,"page",{},()=>[unref(e).home?(openBlock(),createBlock(Home,{key:0})):(openBlock(),createBlock(Transition,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:unref(v),onBeforeLeave:unref(f)},{default:withCtx(()=>[(openBlock(),createBlock(Page,{key:unref(t).path},{top:withCtx(()=>[renderSlot(m.$slots,"page-top")]),"content-top":withCtx(()=>[renderSlot(m.$slots,"page-content-top")]),"content-bottom":withCtx(()=>[renderSlot(m.$slots,"page-content-bottom")]),bottom:withCtx(()=>[renderSlot(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var ParentLayout=_export_sfc(_sfc_main$3,[["__file","Layout.vue"]]);const _hoisted_1$1={key:0,style:{color:"var(--shiki-token-constant)"}},_hoisted_2$1={key:1,style:{color:"var(--shiki-token-string)"}},_hoisted_3$1={key:2,style:{color:"var(--shiki-token-constant)"}},_hoisted_4$1={key:3,style:{color:"var(--shiki-token-constant)"}},_hoisted_5$1=createBaseVNode("span",{style:{color:"var(--shiki-token-function)"}},"Date",-1),_hoisted_6$1=createBaseVNode("span",{style:{color:"var(--shiki-token-punctuation)"}},"(",-1),_hoisted_7={style:{color:"var(--shiki-token-string)"}},_hoisted_8=createBaseVNode("span",{style:{color:"var(--shiki-token-punctuation)"}},")",-1),_hoisted_9=createBaseVNode("span",{style:{color:"var(--shiki-token-punctuation)"}},"[ ",-1),_hoisted_10={key:0,style:{color:"var(--shiki-token-punctuation)"}},_hoisted_11=createBaseVNode("span",{style:{color:"var(--shiki-token-punctuation)"}}," ]",-1),_hoisted_12=createBaseVNode("span",{style:{color:"var(--shiki-token-punctuation)"}},"{ ",-1),_hoisted_13={key:0,style:{color:"var(--shiki-token-punctuation)"}},_hoisted_14={style:{color:"var(--shiki-token-parameter)"}},_hoisted_15=createBaseVNode("span",{style:{color:"var(--shiki-token-punctuation)"}}," }",-1),_sfc_main$2=defineComponent({__name:"json",props:{data:{}},setup(n){function t(e){return e.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")}return(e,r)=>{const o=resolveComponent("json",!0);return unref(isNullable)(n.data)?(openBlock(),createElementBlock("span",_hoisted_1$1,"null")):typeof n.data=="string"?(openBlock(),createElementBlock("span",_hoisted_2$1,'"'+toDisplayString(t(n.data))+'"',1)):typeof n.data=="number"?(openBlock(),createElementBlock("span",_hoisted_3$1,toDisplayString(n.data),1)):typeof n.data=="boolean"?(openBlock(),createElementBlock("span",_hoisted_4$1,toDisplayString(n.data),1)):n.data instanceof Date?(openBlock(),createElementBlock(Fragment,{key:4},[_hoisted_5$1,_hoisted_6$1,createBaseVNode("span",_hoisted_7,toDisplayString(n.data.toISOString()),1),_hoisted_8],64)):n.data instanceof Array?(openBlock(),createElementBlock(Fragment,{key:5},[_hoisted_9,(openBlock(!0),createElementBlock(Fragment,null,renderList(n.data,(i,_)=>(openBlock(),createElementBlock(Fragment,{key:_},[_?(openBlock(),createElementBlock("span",_hoisted_10,", ")):createCommentVNode("",!0),createVNode(o,{data:i},null,8,["data"])],64))),128)),_hoisted_11],64)):(openBlock(),createElementBlock(Fragment,{key:6},[_hoisted_12,(openBlock(!0),createElementBlock(Fragment,null,renderList(Object.entries(n.data),([i,_],c)=>(openBlock(),createElementBlock(Fragment,{key:c},[c?(openBlock(),createElementBlock("span",_hoisted_13,", ")):createCommentVNode("",!0),createBaseVNode("span",_hoisted_14,'"'+toDisplayString(i)+'"',1),createTextVNode(": "),createVNode(o,{data:_},null,8,["data"])],64))),128)),_hoisted_15],64))}}});var Json=_export_sfc(_sfc_main$2,[["__file","json.vue"]]),example_vue_vue_type_style_index_0_lang="";const _hoisted_1={class:"example-container"},_hoisted_2={class:"left-container"},_hoisted_3={class:"theme-default-content"},_hoisted_4=createBaseVNode("header",null,"Input",-1),_hoisted_5=createBaseVNode("header",null,"Output",-1),_hoisted_6={class:"right-container"},_sfc_main$1=defineComponent({__name:"example",setup(__props){const frontmatter=usePageFrontmatter(),schema=computed(()=>eval(frontmatter.value.code)),initial=ref(null),config=ref(null),output=computed(()=>{try{return schema.value(config.value)}catch{}}),input=computed(()=>{try{return JSON.parse(JSON.stringify(config.value))}catch{}});return(n,t)=>{const e=resolveComponent("content"),r=resolveComponent("el-scrollbar"),o=resolveComponent("k-schema");return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("section",_hoisted_3,[createVNode(r,null,{default:withCtx(()=>[createBaseVNode("main",null,[createVNode(e)])]),_:1})]),createBaseVNode("section",null,[_hoisted_4,createBaseVNode("main",null,[createBaseVNode("code",null,[createVNode(Json,{data:unref(input)},null,8,["data"])])])]),createBaseVNode("section",null,[_hoisted_5,createBaseVNode("main",null,[createBaseVNode("code",null,[createVNode(Json,{data:unref(output)},null,8,["data"])])])])]),createBaseVNode("section",_hoisted_6,[createVNode(r,null,{default:withCtx(()=>[createBaseVNode("form",null,[createVNode(o,{schema:unref(schema),initial:initial.value,modelValue:config.value,"onUpdate:modelValue":t[0]||(t[0]=i=>config.value=i)},null,8,["schema","initial","modelValue"])])]),_:1})])])}}});var ExamplePage=_export_sfc(_sfc_main$1,[["__file","example.vue"]]);const _sfc_main=defineComponent({__name:"layout",setup(n){const t=usePageData();return(e,r)=>(openBlock(),createBlock(ParentLayout,null,createSlots({_:2},[unref(t).frontmatter.example?{name:"page",fn:withCtx(()=>[(openBlock(),createBlock(ExamplePage,{key:unref(t).key}))]),key:"0"}:void 0]),1024))}});var layout=_export_sfc(_sfc_main,[["__file","layout.vue"]]);export{layout as default};
