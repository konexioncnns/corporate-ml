"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5181],{61970:(e,s,r)=>{r.d(s,{Z:()=>n});r(67294);var t=r(85893);function n(e){var s=e.type,r=void 0===s?"submit":s,n=e.className,a=void 0===n?"":n,i=e.processing,c=e.children;return(0,t.jsx)("button",{type:r,className:"inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ".concat(i&&"opacity-25"," ")+a,disabled:i,children:c})}},1352:(e,s,r)=>{r.d(s,{Z:()=>a});var t=r(67294),n=r(85893);function a(e){var s=e.type,r=void 0===s?"text":s,a=e.name,i=e.value,c=e.className,o=e.autoComplete,d=e.required,l=e.isFocused,u=e.handleChange,m=(0,t.useRef)();return(0,t.useEffect)((function(){l&&m.current.focus()}),[]),(0,n.jsx)("div",{className:"flex flex-col items-start",children:(0,n.jsx)("input",{type:r,name:a,value:i,className:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm "+c,ref:m,autoComplete:o,required:d,onChange:function(e){return u(e)}})})}},12071:(e,s,r)=>{r.d(s,{Z:()=>n});r(67294);var t=r(85893);function n(e){var s=e.forInput,r=e.value,n=e.className,a=e.children;return(0,t.jsx)("label",{htmlFor:s,className:"block font-medium text-sm text-gray-700 "+n,children:r||a})}},80090:(e,s,r)=>{r.d(s,{Z:()=>n});r(67294);var t=r(85893);function n(e){var s=e.errors;return Object.keys(s).length>0&&(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("div",{className:"font-medium text-red-600",children:"Whoops! Something went wrong."}),(0,t.jsx)("ul",{className:"mt-3 list-disc list-inside text-sm text-red-600",children:Object.keys(s).map((function(e,r){return(0,t.jsx)("li",{children:s[e]},r)}))})]})}},38871:(e,s,r)=>{r.d(s,{Z:()=>i});r(67294);var t=r(3267),n=r(51636),a=r(85893);function i(e){var s=e.children;return(0,a.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[(0,a.jsx)("div",{children:(0,a.jsx)(n.rU,{href:"/",children:(0,a.jsx)(t.Z,{className:"w-20 h-20 fill-current text-gray-500"})})}),(0,a.jsx)("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:s})]})}},45181:(e,s,r)=>{r.r(s),r.d(s,{default:()=>u});var t=r(67294),n=r(61970),a=r(38871),i=r(1352),c=r(12071),o=r(80090),d=r(51636),l=r(85893);function u(){var e=(0,d.cI)({password:""}),s=e.data,r=e.setData,u=e.post,m=e.processing,f=e.errors,x=e.reset;(0,t.useEffect)((function(){return function(){x("password")}}),[]);return(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(d.Fb,{title:"Confirm Password"}),(0,l.jsx)("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),(0,l.jsx)(o.Z,{errors:f}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(route("password.confirm"))},children:[(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(c.Z,{forInput:"password",value:"Password"}),(0,l.jsx)(i.Z,{type:"password",name:"password",value:s.password,className:"mt-1 block w-full",isFocused:!0,handleChange:function(e){r(e.target.name,e.target.value)}})]}),(0,l.jsx)("div",{className:"flex items-center justify-end mt-4",children:(0,l.jsx)(n.Z,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}}}]);