"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[503],{503:function(e,a,r){r.r(a),r.d(a,{default:function(){return ce}});var t=r(6907),n=r(9439),o=r(9434),i=r(2791),l=r(6323),c="SignIn_signInForm__E5y78",s="SignIn_signInLabel__F4AVT",d="SignIn_signInInput__nFOya",u="SignIn_signInBtn__SAOSS",p="SignIn_signInBtnIcon__onmRm",m=r(7425),h=r(4942),v=r(3366),g=r(7462),f=r(3733),b=r(4419),Z=r(2065),x=r(4036),y=r(6934),k=r(5158);var w=i.createContext(void 0);function S(){return i.useContext(w)}var P=r(4859),C=r(5878),j=r(1217);function I(e){return(0,j.Z)("PrivateSwitchBase",e)}(0,C.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var B=r(184),R=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],N=(0,y.ZP)(P.Z)((function(e){var a=e.ownerState;return(0,g.Z)({padding:9,borderRadius:"50%"},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})})),F=(0,y.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),_=i.forwardRef((function(e,a){var r=e.autoFocus,t=e.checked,o=e.checkedIcon,i=e.className,l=e.defaultChecked,c=e.disabled,s=e.disableFocusRipple,d=void 0!==s&&s,u=e.edge,p=void 0!==u&&u,m=e.icon,h=e.id,Z=e.inputProps,y=e.inputRef,w=e.name,P=e.onBlur,C=e.onChange,j=e.onFocus,_=e.readOnly,M=e.required,z=void 0!==M&&M,L=e.tabIndex,q=e.type,E=e.value,O=(0,v.Z)(e,R),T=(0,k.Z)({controlled:t,default:Boolean(l),name:"SwitchBase",state:"checked"}),W=(0,n.Z)(T,2),H=W[0],A=W[1],V=S(),D=c;V&&"undefined"===typeof D&&(D=V.disabled);var J="checkbox"===q||"radio"===q,K=(0,g.Z)({},e,{checked:H,disabled:D,disableFocusRipple:d,edge:p}),G=function(e){var a=e.classes,r=e.checked,t=e.disabled,n=e.edge,o={root:["root",r&&"checked",t&&"disabled",n&&"edge".concat((0,x.Z)(n))],input:["input"]};return(0,b.Z)(o,I,a)}(K);return(0,B.jsxs)(N,(0,g.Z)({component:"span",className:(0,f.Z)(G.root,i),centerRipple:!0,focusRipple:!d,disabled:D,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){P&&P(e),V&&V.onBlur&&V.onBlur(e)},ownerState:K,ref:a},O,{children:[(0,B.jsx)(F,(0,g.Z)({autoFocus:r,checked:t,defaultChecked:l,className:G.input,disabled:D,id:J?h:void 0,name:w,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var a=e.target.checked;A(a),C&&C(e,a)}},readOnly:_,ref:y,required:z,ownerState:K,tabIndex:L,type:q},"checkbox"===q&&void 0===E?{}:{value:E},Z)),H?o:m]}))})),M=r(9201),z=(0,M.Z)((0,B.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),L=(0,M.Z)((0,B.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),q=(0,M.Z)((0,B.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),E=r(1402);function O(e){return(0,j.Z)("MuiCheckbox",e)}var T=(0,C.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),W=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],H=(0,y.ZP)(_,{shouldForwardProp:function(e){return(0,y.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,a){var r=e.ownerState;return[a.root,r.indeterminate&&a.indeterminate,"default"!==r.color&&a["color".concat((0,x.Z)(r.color))]]}})((function(e){var a,r=e.theme,t=e.ownerState;return(0,g.Z)({color:(r.vars||r).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===t.color?r.vars.palette.action.activeChannel:r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,Z.Fq)("default"===t.color?r.palette.action.active:r.palette[t.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(a={},(0,h.Z)(a,"&.".concat(T.checked,", &.").concat(T.indeterminate),{color:(r.vars||r).palette[t.color].main}),(0,h.Z)(a,"&.".concat(T.disabled),{color:(r.vars||r).palette.action.disabled}),a))})),A=(0,B.jsx)(L,{}),V=(0,B.jsx)(z,{}),D=(0,B.jsx)(q,{}),J=i.forwardRef((function(e,a){var r,t,n=(0,E.Z)({props:e,name:"MuiCheckbox"}),o=n.checkedIcon,l=void 0===o?A:o,c=n.color,s=void 0===c?"primary":c,d=n.icon,u=void 0===d?V:d,p=n.indeterminate,m=void 0!==p&&p,h=n.indeterminateIcon,Z=void 0===h?D:h,y=n.inputProps,k=n.size,w=void 0===k?"medium":k,S=n.className,P=(0,v.Z)(n,W),C=m?Z:u,j=m?Z:l,I=(0,g.Z)({},n,{color:s,indeterminate:m,size:w}),R=function(e){var a=e.classes,r=e.indeterminate,t=e.color,n=e.size,o={root:["root",r&&"indeterminate","color".concat((0,x.Z)(t)),"size".concat((0,x.Z)(n))]},i=(0,b.Z)(o,O,a);return(0,g.Z)({},a,i)}(I);return(0,B.jsx)(H,(0,g.Z)({type:"checkbox",inputProps:(0,g.Z)({"data-indeterminate":m},y),icon:i.cloneElement(C,{fontSize:null!=(r=C.props.fontSize)?r:w}),checkedIcon:i.cloneElement(j,{fontSize:null!=(t=j.props.fontSize)?t:w}),ownerState:I,ref:a,className:(0,f.Z)(R.root,S)},P,{classes:R}))})),K=r(1582),G=r(8519);function Q(e){return(0,j.Z)("MuiTypography",e)}(0,C.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var U=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],X=(0,y.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,a){var r=e.ownerState;return[a.root,r.variant&&a[r.variant],"inherit"!==r.align&&a["align".concat((0,x.Z)(r.align))],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})((function(e){var a=e.theme,r=e.ownerState;return(0,g.Z)({margin:0},"inherit"===r.variant&&{font:"inherit"},"inherit"!==r.variant&&a.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),Y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},$={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ee=i.forwardRef((function(e,a){var r=(0,E.Z)({props:e,name:"MuiTypography"}),t=function(e){return $[e]||e}(r.color),n=(0,G.Z)((0,g.Z)({},r,{color:t})),o=n.align,i=void 0===o?"inherit":o,l=n.className,c=n.component,s=n.gutterBottom,d=void 0!==s&&s,u=n.noWrap,p=void 0!==u&&u,m=n.paragraph,h=void 0!==m&&m,Z=n.variant,y=void 0===Z?"body1":Z,k=n.variantMapping,w=void 0===k?Y:k,S=(0,v.Z)(n,U),P=(0,g.Z)({},n,{align:i,color:t,className:l,component:c,gutterBottom:d,noWrap:p,paragraph:h,variant:y,variantMapping:w}),C=c||(h?"p":w[y]||Y[y])||"span",j=function(e){var a=e.align,r=e.gutterBottom,t=e.noWrap,n=e.paragraph,o=e.variant,i=e.classes,l={root:["root",o,"inherit"!==e.align&&"align".concat((0,x.Z)(a)),r&&"gutterBottom",t&&"noWrap",n&&"paragraph"]};return(0,b.Z)(l,Q,i)}(P);return(0,B.jsx)(X,(0,g.Z)({as:C,ref:a,ownerState:P,className:(0,f.Z)(j.root,l)},S))}));function ae(e){return(0,j.Z)("MuiFormControlLabel",e)}var re=(0,C.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var te=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],ne=(0,y.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,a){var r=e.ownerState;return[(0,h.Z)({},"& .".concat(re.label),a.label),a.root,a["labelPlacement".concat((0,x.Z)(r.labelPlacement))]]}})((function(e){var a=e.theme,r=e.ownerState;return(0,g.Z)((0,h.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(re.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,h.Z)({},"& .".concat(re.label),(0,h.Z)({},"&.".concat(re.disabled),{color:(a.vars||a).palette.text.disabled})))})),oe=(0,y.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,a){return a.asterisk}})((function(e){var a=e.theme;return(0,h.Z)({},"&.".concat(re.error),{color:(a.vars||a).palette.error.main})})),ie=i.forwardRef((function(e,a){var r,t,n=(0,E.Z)({props:e,name:"MuiFormControlLabel"}),o=n.className,l=n.componentsProps,c=void 0===l?{}:l,s=n.control,d=n.disabled,u=n.disableTypography,p=n.label,m=n.labelPlacement,h=void 0===m?"end":m,Z=n.required,y=n.slotProps,k=void 0===y?{}:y,w=(0,v.Z)(n,te),P=S(),C=null!=(r=null!=d?d:s.props.disabled)?r:null==P?void 0:P.disabled,j=null!=Z?Z:s.props.required,I={disabled:C,required:j};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof s.props[e]&&"undefined"!==typeof n[e]&&(I[e]=n[e])}));var R=function(e){var a=e.props,r=e.states,t=e.muiFormControl;return r.reduce((function(e,r){return e[r]=a[r],t&&"undefined"===typeof a[r]&&(e[r]=t[r]),e}),{})}({props:n,muiFormControl:P,states:["error"]}),N=(0,g.Z)({},n,{disabled:C,labelPlacement:h,required:j,error:R.error}),F=function(e){var a=e.classes,r=e.disabled,t=e.labelPlacement,n=e.error,o=e.required,i={root:["root",r&&"disabled","labelPlacement".concat((0,x.Z)(t)),n&&"error",o&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return(0,b.Z)(i,ae,a)}(N),_=null!=(t=k.typography)?t:c.typography,M=p;return null==M||M.type===ee||u||(M=(0,B.jsx)(ee,(0,g.Z)({component:"span"},_,{className:(0,f.Z)(F.label,null==_?void 0:_.className),children:M}))),(0,B.jsxs)(ne,(0,g.Z)({className:(0,f.Z)(F.root,o),ownerState:N,ref:a},w,{children:[i.cloneElement(s,I),j?(0,B.jsxs)(K.Z,{direction:"row",alignItems:"center",children:[M,(0,B.jsxs)(oe,{ownerState:N,"aria-hidden":!0,className:F.asterisk,children:["\u2009","*"]})]}):M]}))})),le=function(){var e=(0,o.I0)(),a=(0,i.useState)(!1),r=(0,n.Z)(a,2),t=r[0],h=r[1];return(0,B.jsx)("div",{className:"wrapper",children:(0,B.jsxs)("form",{className:c,onSubmit:function(a){a.preventDefault();var r=a.currentTarget;e((0,l.Ib)({email:r.elements.email.value,password:r.elements.password.value})),r.reset()},autoComplete:"off",children:[(0,B.jsxs)("label",{className:s,children:["Email",(0,B.jsx)("input",{className:d,type:"email",name:"email",placeholder:"Enter email"})]}),(0,B.jsxs)("label",{className:s,children:["Password",(0,B.jsx)("input",{className:d,type:"password",name:"password",placeholder:"Enter password"})]}),(0,B.jsx)(ie,{control:(0,B.jsx)(J,{}),label:"Keep me logged in",checked:t,onChange:function(e){h(e.target.checked)}}),(0,B.jsxs)("button",{className:u,type:"submit",children:["Login",(0,B.jsx)(m.lqE,{className:p})]}),(0,B.jsx)("div",{})]})})};function ce(){return(0,B.jsx)(t.B6,{children:(0,B.jsxs)("div",{children:[(0,B.jsx)(t.ql,{children:(0,B.jsx)("title",{children:"Login"})}),(0,B.jsx)(le,{})]})})}}}]);
//# sourceMappingURL=503.0f5d8472.chunk.js.map