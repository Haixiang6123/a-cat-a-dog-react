(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=n(47),u=n(29),l=n(55),s=n.n(l),p=s.a.create({baseURL:"https://api.thecatapi.com/v1",headers:{"x-api-key":"416848bd-ea2f-4d38-a329-0e858ab5cd38"}}),m=s.a.create({baseURL:"https://api.thedogapi.com/v1",headers:{"x-api-key":"89e98203-1b5b-4c32-a67b-e314bf19f4c5"}}),b={CAT:p,DOG:m},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_AXIOS":return b[t.payload];default:return e}},d=Object(u.b)({axios:f}),h=Object(u.c)(d);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=n(15),O=n(16),v=n(18),g=n(17),E=n(19),y=n(87),x=n(25),w=n(89),k=n.n(w),A=n(56),C=n.n(A),S=n(84),P=n(31),D=n.n(P),I=h.getState().axios;h.subscribe(function(){I=h.getState().axios});var T=function(e){return I.get("/images/search",{params:e}).then(function(e){return e.data})},U=n(13),_=n(14),B=n(59),J=n.n(B),L=n(48),R=n.n(L);function W(){var e=Object(U.a)([" \n  background: #fadb14 !important;\n  color: white !important;\n"]);return W=function(){return e},e}function X(){var e=Object(U.a)(["\n  background: #20232a !important;\n  color: #61dafb !important;\n"]);return X=function(){return e},e}function z(){var e=Object(U.a)([" \n"]);return z=function(){return e},e}function F(){var e=Object(U.a)(["\n  display: flex;\n  margin-top: 16px;\n  justify-content: space-around;\n"]);return F=function(){return e},e}function G(){var e=Object(U.a)(["\n  min-height: 100%;\n  vertical-align: top;\n  border-radius: 8px;\n"]);return G=function(){return e},e}function M(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 520px;\n  overflow: hidden;\n  border-radius: 12px;\n"]);return M=function(){return e},e}function N(){var e=Object(U.a)(["\n"]);return N=function(){return e},e}function V(){var e=Object(U.a)(["\n\n"]);return V=function(){return e},e}function $(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  color: #20232a;\n  font-size: 1.2em;\n"]);return $=function(){return e},e}function q(){var e=Object(U.a)(["\n  margin: 0 auto;\n  width: 100%;\n"]);return q=function(){return e},e}var H=_.a.div(q()),K=_.a.header($()),Q=Object(_.a)(J.a)(V()),Y=Object(_.a)(J.a)(N()),Z=_.a.div(M()),ee=_.a.img(G()),te=_.a.div(F()),ne=Object(_.a)(R.a)(z()),ae=Object(_.a)(R.a)(X()),re=Object(_.a)(R.a)(W()),ce=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={images:[]},n}return Object(E.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.updateAxios("CAT");case 2:return e.next=4,T();case 4:t=e.sent,this.setState({images:t});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.images;return a.createElement(H,null,e.map(function(e){return a.createElement("div",{key:e.id},a.createElement(K,null,a.createElement(Q,null,a.createElement(D.a,null,"person")),a.createElement("span",null,"\ud83d\udc31A\ud83d\udc36"),a.createElement(Y,null,a.createElement(D.a,null,"settings"))),a.createElement(Z,null,a.createElement(ee,{src:e.url,alt:"Animal Image"})),a.createElement(te,null,a.createElement(ae,{color:"secondary"},a.createElement(D.a,null,"thumb_up")),a.createElement(re,{color:"default"},a.createElement(D.a,null,"star")),a.createElement(ne,{color:"secondary"},a.createElement(D.a,null,"close"))))}))}}]),t}(a.Component),oe={updateAxios:function(e){return{type:"UPDATE_AXIOS",payload:e}}},ie=Object(i.b)(function(e){return{axios:e.axios}},oe)(ce),ue=function(e){function t(){return Object(j.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",null,"Setting Page")}}]),t}(a.Component),le=function(e){function t(){return Object(j.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",null,"Vote Page")}}]),t}(a.Component),se=function(e){function t(){return Object(j.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",null,"Favourite Page")}}]),t}(a.Component),pe=(n(193),function(e){function t(){return Object(j.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(k.a,{className:"app-wrapper"},r.a.createElement(x.a,{path:"/",exact:!0,component:ie}),r.a.createElement(x.a,{path:"/setting",component:ue}),r.a.createElement(x.a,{path:"/vote",component:le}),r.a.createElement(x.a,{path:"/favourite",component:se})))}}]),t}(a.Component));o.a.render(r.a.createElement(i.a,{store:h},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(202)}},[[91,1,2]]]);
//# sourceMappingURL=main.ebfbab40.chunk.js.map