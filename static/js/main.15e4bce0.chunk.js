(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(t,n,e){t.exports={input:"Input_input__RxGlr",label:"Input_label__3hrVD",form:"Input_form__2Nn1B",animate:"Input_animate__2GWFQ",button:"Input_button__wI6CT",span:"Input_span__28E27"}},,,function(t,n,e){t.exports={card:"CountryCard_card__13OcJ",name:"CountryCard_name__2Zl6Q",info:"CountryCard_info__1zHSb"}},,function(t,n,e){t.exports={container:"Country_container__zUKDR",loading:"Country_loading__1CUwC",spin:"Country_spin__N3e4w"}},,function(t,n,e){t.exports={list:"CountryList_list__3t57w"}},,,,,,function(t,n,e){},,function(t,n,e){"use strict";e.r(n);var a=e(9),c=e.n(a),r=(e(16),e(11)),i=e(2),s=e(1),o=e(8),u=e.n(o),l=e(6),j=e.n(l),p=e(0),d=function(t){var n=t.arrData,e=t.deleteCard;return Object(p.jsxs)("li",{className:j.a.card,children:[Object(p.jsx)("span",{className:j.a.name,children:n.name}),Object(p.jsx)("img",{src:n.flag,alt:n.name}),Object(p.jsxs)("div",{className:j.a.info,children:[Object(p.jsxs)("span",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044f - ",n.population]}),Object(p.jsxs)("span",{children:["\u0420\u0435\u0433\u0456\u043e\u043d - ",n.region]}),Object(p.jsxs)("span",{children:["\u0421\u0442\u043e\u043b\u0438\u0446\u044f - ",n.capital]})]}),Object(p.jsx)("button",{onClick:function(){return e(n.name)},children:"delete"})]})},b=e(10),f=e.n(b),m=function(t){var n=t.arrData,e=t.deleteCard,a=t.inputValue;return Object(p.jsx)("ul",{className:f.a.list,children:n.map((function(t){return Object(p.jsx)(d,{arrData:t,deleteCard:e,inputValue:a},t.id)}))})},_=e(3),O=e.n(_),x=function(t){var n=Object(s.useState)(""),e=Object(i.a)(n,2),a=e[0],c=e[1];return Object(p.jsx)("form",{className:O.a.form,onSubmit:function(n){n.preventDefault(),t.inputValue(a),c("")},children:Object(p.jsxs)("div",{className:O.a.animate,children:[Object(p.jsxs)("label",{className:O.a.label,htmlFor:"input",children:["Country",Object(p.jsx)("input",{className:O.a.input,id:"input",type:"text",onChange:function(n){c(n.target.value),t.setError()},value:a})]}),t.isError&&Object(p.jsx)("span",{className:O.a.span,children:"".concat(t.input," - is not defined")}),Object(p.jsx)("button",{className:O.a.button,type:"submit",children:"Add card"})]})})},h=function(){console.log("render");var t=Object(s.useState)(""),n=Object(i.a)(t,2),e=n[0],a=n[1],c=Object(s.useState)([]),o=Object(i.a)(c,2),l=o[0],j=o[1],d=Object(s.useState)(!1),b=Object(i.a)(d,2),f=b[0],_=b[1],O=Object(s.useState)(!1),h=Object(i.a)(O,2),C=h[0],g=h[1],v=function(){_(!0)};return Object(s.useEffect)((function(){e&&(g(!0),fetch("https://restcountries.com/v3.1/name/".concat(e)).then((function(t){return t.json()})).then((function(t){if(t[0]){var n=t[0];j((function(t){return[].concat(Object(r.a)(t),[{name:n.name.common,flag:n.flags.png,population:n.population,region:n.region,capital:n.capital,id:Math.random()}])}))}else v()})).catch((function(){v()})).finally((function(){g(!1)})))}),[e]),Object(p.jsxs)("div",{className:u.a.container,children:[Object(p.jsx)(x,{inputValue:function(t){a(t)},isError:f,input:e,setError:function(){return _(!1)}}),C?Object(p.jsx)("div",{className:u.a.loading}):Object(p.jsx)(m,{arrData:l,deleteCard:function(t){j(l.filter((function(n){return n.name!==t})))}})]})};c.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.15e4bce0.chunk.js.map