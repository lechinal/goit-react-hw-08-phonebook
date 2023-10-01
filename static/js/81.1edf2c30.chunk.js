"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[81],{1582:function(e,o,n){n.d(o,{Z:function(){return R}});var t=n(4942),r=n(3366),i=n(7462),l=n(2791),c=n(3733),a=n(2466),u=n(4419),s=n(1217),d=(0,n(2451).ZP)(),v=n(7078),f=n(8519),p=n(5080),m=n(1184),h=n(5682),S=n(184),Z=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,p.Z)(),y=d("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}});function x(e){return(0,v.Z)({props:e,name:"MuiStack",defaultTheme:g})}function k(e,o){var n=l.Children.toArray(e).filter(Boolean);return n.reduce((function(e,t,r){return e.push(t),r<n.length-1&&e.push(l.cloneElement(o,{key:"separator-".concat(r)})),e}),[])}var b=function(e){var o=e.ownerState,n=e.theme,r=(0,i.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:n},(0,m.P$)({values:o.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(o.spacing){var l=(0,h.hB)(n),c=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof o.spacing&&null!=o.spacing[n]||"object"===typeof o.direction&&null!=o.direction[n])&&(e[n]=!0),e}),{}),u=(0,m.P$)({values:o.direction,base:c}),s=(0,m.P$)({values:o.spacing,base:c});"object"===typeof u&&Object.keys(u).forEach((function(e,o,n){if(!u[e]){var t=o>0?u[n[o-1]]:"column";u[e]=t}}));r=(0,a.Z)(r,(0,m.k9)({theme:n},s,(function(e,n){return o.useFlexGap?{gap:(0,h.NA)(l,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,t.Z)({},"margin".concat((r=n?u[n]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,h.NA)(l,e))};var r})))}return r=(0,m.dt)(n.breakpoints,r)};var w=n(6934),P=n(1402),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.createStyledComponent,n=void 0===o?y:o,t=e.useThemeProps,a=void 0===t?x:t,d=e.componentName,v=void 0===d?"MuiStack":d,p=function(){return(0,u.Z)({root:["root"]},(function(e){return(0,s.Z)(v,e)}),{})},m=n(b),h=l.forwardRef((function(e,o){var n=a(e),t=(0,f.Z)(n),l=t.component,u=void 0===l?"div":l,s=t.direction,d=void 0===s?"column":s,v=t.spacing,h=void 0===v?0:v,g=t.divider,y=t.children,x=t.className,b=t.useFlexGap,w=void 0!==b&&b,P=(0,r.Z)(t,Z),z={direction:d,spacing:h,useFlexGap:w},R=p();return(0,S.jsx)(m,(0,i.Z)({as:u,ownerState:z,ref:o,className:(0,c.Z)(R.root,x)},P,{children:g?k(y,g):y}))}));return h}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}}),useThemeProps:function(e){return(0,P.Z)({props:e,name:"MuiStack"})}}),R=z},9201:function(e,o,n){n.d(o,{Z:function(){return g}});var t=n(7462),r=n(2791),i=n(3366),l=n(3733),c=n(4419),a=n(4036),u=n(1402),s=n(6934),d=n(5878),v=n(1217);function f(e){return(0,v.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,"inherit"!==n.color&&o["color".concat((0,a.Z)(n.color))],o["fontSize".concat((0,a.Z)(n.fontSize))]]}})((function(e){var o,n,t,r,i,l,c,a,u,s,d,v,f,p=e.theme,m=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:m.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(o=p.transitions)||null==(n=o.create)?void 0:n.call(o,"fill",{duration:null==(t=p.transitions)||null==(t=t.duration)?void 0:t.shorter}),fontSize:{inherit:"inherit",small:(null==(r=p.typography)||null==(i=r.pxToRem)?void 0:i.call(r,20))||"1.25rem",medium:(null==(l=p.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(a=p.typography)||null==(u=a.pxToRem)?void 0:u.call(a,35))||"2.1875rem"}[m.fontSize],color:null!=(s=null==(d=(p.vars||p).palette)||null==(d=d[m.color])?void 0:d.main)?s:{action:null==(v=(p.vars||p).palette)||null==(v=v.action)?void 0:v.active,disabled:null==(f=(p.vars||p).palette)||null==(f=f.action)?void 0:f.disabled,inherit:void 0}[m.color]}})),S=r.forwardRef((function(e,o){var n=(0,u.Z)({props:e,name:"MuiSvgIcon"}),s=n.children,d=n.className,v=n.color,S=void 0===v?"inherit":v,Z=n.component,g=void 0===Z?"svg":Z,y=n.fontSize,x=void 0===y?"medium":y,k=n.htmlColor,b=n.inheritViewBox,w=void 0!==b&&b,P=n.titleAccess,z=n.viewBox,R=void 0===z?"0 0 24 24":z,C=(0,i.Z)(n,m),N=r.isValidElement(s)&&"svg"===s.type,j=(0,t.Z)({},n,{color:S,component:g,fontSize:x,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:R,hasSvgAsChild:N}),A={};w||(A.viewBox=R);var B=function(e){var o=e.color,n=e.fontSize,t=e.classes,r={root:["root","inherit"!==o&&"color".concat((0,a.Z)(o)),"fontSize".concat((0,a.Z)(n))]};return(0,c.Z)(r,f,t)}(j);return(0,p.jsxs)(h,(0,t.Z)({as:g,className:(0,l.Z)(B.root,d),focusable:"false",color:k,"aria-hidden":!P||void 0,role:P?"img":void 0,ref:o},A,C,N&&s.props,{ownerState:j,children:[N?s.props.children:s,P?(0,p.jsx)("title",{children:P}):null]}))}));S.muiName="SvgIcon";var Z=S;function g(e,o){function n(n,r){return(0,p.jsx)(Z,(0,t.Z)({"data-testid":"".concat(o,"Icon"),ref:r},n,{children:e}))}return n.muiName=Z.muiName,r.memo(r.forwardRef(n))}},5158:function(e,o,n){n.d(o,{Z:function(){return i}});var t=n(9439),r=n(2791);var i=function(e){var o=e.controlled,n=e.default,i=(e.name,e.state,r.useRef(void 0!==o).current),l=r.useState(n),c=(0,t.Z)(l,2),a=c[0],u=c[1];return[i?o:a,r.useCallback((function(e){i||u(e)}),[])]}},8519:function(e,o,n){n.d(o,{Z:function(){return u}});var t=n(3433),r=n(7462),i=n(3366),l=n(2466),c=n(7416),a=["sx"];function u(e){var o,n=e.sx,u=function(e){var o,n,t={systemProps:{},otherProps:{}},r=null!=(o=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?o:c.Z;return Object.keys(e).forEach((function(o){r[o]?t.systemProps[o]=e[o]:t.otherProps[o]=e[o]})),t}((0,i.Z)(e,a)),s=u.systemProps,d=u.otherProps;return o=Array.isArray(n)?[s].concat((0,t.Z)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return(0,l.P)(e)?(0,r.Z)({},s,e):s}:(0,r.Z)({},s,n),(0,r.Z)({},d,{sx:o})}}}]);
//# sourceMappingURL=81.1edf2c30.chunk.js.map