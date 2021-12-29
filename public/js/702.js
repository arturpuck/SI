"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[702],{643:function(e,a,t){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var n=o(t(3695)),i={loginFormCaption:n.default.translate("login_to_sex_empire"),loginDataCaption:n.default.translate("login_or_email"),password:n.default.translate("password"),rememberMe:n.default.translate("remember_me"),logIn:n.default.translate("log_in"),iForgotPassword:n.default.translate("i_forgot_password")};a.default=i},8340:function(e,a,t){Object.defineProperty(a,"X",{value:!0}),a.Z=void 0;var o,n=(o=t(643))&&o.__esModule?o:{default:o};var i={name:"login-form",emits:["hide"],data:function(){return{csrfToken:"",translations:n.default}},created:function(){this.csrfToken=document.getElementById("csrf-token").content},methods:{hide:function(){this.$emit("hide")}}};a.Z=i},6:function(e,a,t){a.s=function(e,a,t,m,c,u){var x=(0,o.resolveComponent)("button-close"),b=(0,o.resolveComponent)("text-input-combo"),g=(0,o.resolveComponent)("labeled-checkbox"),w=(0,o.resolveComponent)("submit-button");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("form",i,[(0,o.createElementVNode)("header",r,[(0,o.createElementVNode)("span",{textContent:(0,o.toDisplayString)(c.translations.loginFormCaption),class:"login-info"},null,8,l),(0,o.createVNode)(x,{onClick:u.hide,title:"Zamknij okno logowania","aria-label":"Zamknij okno logowania"},null,8,["onClick"])]),(0,o.createElementVNode)("input",{value:c.csrfToken,type:"hidden",name:"_token"},null,8,s),(0,o.createElementVNode)("label",{for:"login",textContent:(0,o.toDisplayString)(c.translations.loginDataCaption),class:"main-panel-label"},null,8,d),(0,o.createVNode)(b,{"input-is-required":!0,"input-id":"login",inputType:"text",name:"login-or-email"}),(0,o.createElementVNode)("label",{for:"password",textContent:(0,o.toDisplayString)(c.translations.password),class:"main-panel-label"},null,8,p),(0,o.createVNode)(b,{"input-is-required":!0,"input-id":"password",inputType:"password",name:"password"}),(0,o.createVNode)(g,{class:"remember-me-checkbox",name:"remember"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(c.translations.rememberMe),1)]})),_:1}),(0,o.createVNode)(w,null,{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(c.translations.logIn),1)]})),_:1}),(0,o.createElementVNode)("a",{href:"/haslo/resetuj/wyslij-link",textContent:(0,o.toDisplayString)(c.translations.iForgotPassword),class:"forgot-password-link"},null,8,f)])])};var o=t(5166);(0,o.pushScopeId)("data-v-17a023a0");var n={class:"login-form-container"},i={action:"/login",method:"POST",id:"login-form",class:"login-form"},r={class:"login-panel-toolbar"},l=["textContent"],s=["value"],d=["textContent"],p=["textContent"],f=["textContent"];(0,o.popScopeId)()},299:function(e,a,t){var o=t(3645),n=t.n(o)()((function(e){return e[1]}));n.push([e.id,".login-info[data-v-17a023a0]{color:#fff;font-family:Play,sans-serif;font-size:1.5vw}@media (max-width:1200px){.login-info[data-v-17a023a0]{font-size:19px}}.main-panel-label[data-v-17a023a0]{color:#fff;display:block;font-family:Exo\\ 2,sans-serif;font-size:1.3vw;padding:4px;text-align:center}@media (max-width:1200px){.main-panel-label[data-v-17a023a0]{font-size:18px}}.login-form-container[data-v-17a023a0]{-webkit-animation:fade-in-17a023a0;-moz-animation:fade-in-17a023a0;animation:fade-in-17a023a0;-webkit-animation-duration:1.5s;-moz-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;background:rgba(0,0,0,.75);height:100vh;left:0;opacity:0;position:fixed;top:0;width:100vw;z-index:999}.login-panel-toolbar[data-v-17a023a0]{-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;background:#242229;-webkit-border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;border-radius:5px 5px 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:5px}.login-form[data-v-17a023a0]{background:#000;border:2px solid #242229;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:3px 3px 3px 3px #000;-moz-box-shadow:3px 3px 3px 3px #000;box-shadow:3px 3px 3px 3px #000;font-family:Exo\\ 2,sans-serif;left:50%;min-width:320px;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:25%}.forgot-password-link[data-v-17a023a0]{background:#242229;-webkit-border-radius:0 0 7px 7px;-moz-border-radius:0 0 7px 7px;border-radius:0 0 7px 7px;color:#fff;display:block;font-family:Exo\\ 2,sans-serif;font-size:1.2vw;padding:4px;text-align:center;text-decoration:none}@media (max-width:1200px){.forgot-password-link[data-v-17a023a0]{font-size:17px}}.forgot-password-link[data-v-17a023a0]:hover{text-decoration:underline}.remember-me-checkbox[data-v-17a023a0]{color:#fff;margin:4px 2.5%}@-webkit-keyframes fade-in-17a023a0{0%{opacity:0}to{opacity:1}}@-moz-keyframes fade-in-17a023a0{0%{opacity:0}to{opacity:1}}@keyframes fade-in-17a023a0{0%{opacity:0}to{opacity:1}}",""]),a.Z=n},8702:function(e,a,t){t.r(a),t.d(a,{__esModule:function(){return n.X},default:function(){return d}});var o=t(6),n=t(8340),i=t(3379),r=t.n(i),l=t(299),s={insert:"head",singleton:!1};r()(l.Z,s),l.Z.locals;n.Z.render=o.s,n.Z.__scopeId="data-v-17a023a0";var d=n.Z}}]);