(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),s=n.n(i),r=(n(17),n(1)),c=n.n(r),l=n(4),m=n(5),u=n(6),v=n(9),p=n(7),d=n(10),h=(n(21),n(8)),f=n.n(h);n(25);var _=function(e){var t=e.title,n=e.poster,a=e.genres,i=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie__Column"},o.a.createElement("img",{className:"Movie__Poster",src:n,alt:t})),o.a.createElement("div",{className:"Movie__Column"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"Movie__Genres"},a.map(function(e){return o.a.createElement("span",{className:"Movie__Genre"},e)})),o.a.createElement("p",{className:"Movie__Synopsis"},o.a.createElement(f.a,{text:i,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},g=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={},n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._renderMovies=function(){return n.state.movies.map(function(e){return o.a.createElement(_,{title:e.title_english,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis,key:e.id})})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return o.a.createElement("div",{className:this.state.movies?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.0069463c.chunk.js.map