(this.webpackJsonpreacthangman=this.webpackJsonpreacthangman||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/4.db9097e8.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.fbff4784.jpg"},function(e,t,n){e.exports=n.p+"static/media/6.c4ea9528.jpg"},function(e,t,n){e.exports=n.p+"static/media/7.62a781c8.jpg"},function(e,t,n){e.exports=n.p+"static/media/8.0f8ca81e.jpg"},function(e,t,n){e.exports=n.p+"static/media/9.1b557aa7.jpg"},function(e,t,n){e.exports=n.p+"static/media/10.c80394c2.jpg"},function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),o=n.n(s),c=(n(19),n(1)),i=n(2),u=n(4),l=n(3),E=(n(20),["DAFFODIL","EXISTENT","CASUISTRY","SOPHISTRY","COPIOUS","VERISIMILITUDE","CHIMERICAL","CIRCUITOUS","LUGUBRIOUS","MELANCHOLY","AILUROPHOBIC","VITRIOLIC","HYPERBOLE","SPELUNKING","ACQUISITION","ABYSMAL","ANALAGOUS","EMINENT","EXACERBATE","DEFENESTRATE","QUIXOTIC","ZEALOUS","UNPRECEDENTED","MESMERIZE","RHETORICAL","PENITENCE","OBSEQUIOUS","OSTENTATIOUS","MAVERICK","GRANDIOSE","PHANTASMAGORIA","REDOLENT","ANOMALY","CONTINGENCY","PASTICHE"]);function m(){return E[Math.floor(Math.random()*E.length)]}var d=n(7),p=n.n(d),g=n(8),h=n.n(g),I=n(9),f=n.n(I),O=n(10),A=n.n(O),S=n(11),N=n.n(S),b=n(12),v=n.n(b),w=n(13),C=n.n(w),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target.value;a.setState((function(e){return{guessed:e.guessed.add(t),wrong:e.wrong+(e.answer.includes(t)?0:1)}})),console.log(a.state)},a.reset=function(){a.setState({wrong:0,guessed:new Set([]),answer:m()})},a.state={wrong:0,guessed:new Set([]),answer:m()},console.log(a.state),a}return Object(i.a)(n,[{key:"guessedWord",value:function(){var e=this;return this.state.answer.split("").map((function(t){return e.state.guessed.has(t)?t:" _ "}))}},{key:"renderButtons",value:function(){var e=this;return"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((function(t){return r.a.createElement("button",{class:"btn btn-lg btn-primary m-2",key:t,value:t,onClick:e.handleInput,disabled:e.state.guessed.has(t)},t)}))}},{key:"render",value:function(){var e=this.guessedWord().join("")===this.state.answer,t=this.state.wrong>=this.props.maxWrong,n=this.renderButtons();return e&&(n="A winner is you."),t&&(n="Loser.  Just give up."),r.a.createElement("div",{className:"gameboard container"},r.a.createElement("h1",{className:"hangman-banner text-center"},"HangMan React"),r.a.createElement("div",{className:"hangman-box text-center"},r.a.createElement("img",{src:this.props.images[this.state.wrong],alt:""})),r.a.createElement("div",{className:"text-center"},r.a.createElement("h4",null,"Guess the word"),r.a.createElement("h2",null,t?this.state.answer:this.guessedWord()),r.a.createElement("p",null,n),r.a.createElement("button",{className:"reset-button btn btn-info",onClick:this.reset},"Reset")))}}]),n}(a.Component);T.defaultProps={images:[p.a,h.a,f.a,A.a,N.a,v.a,C.a],maxWrong:6};var R=T,U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.10dfc9ad.chunk.js.map