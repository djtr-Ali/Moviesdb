(this.webpackJsonpmoviesdb=this.webpackJsonpmoviesdb||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(29),r=c(1),a=c.n(r),s=c(19),i=c.n(s),o=(c(35),c(36),c(6)),j=(c(37),c(38),c(14)),d=c(12),l=c(2);var b=function(e){var t=Object(d.b)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main_container",children:[Object(l.jsx)("img",{src:"http://image.tmdb.org/t/p/w200"+e.poster,alt:"Photo"}),Object(l.jsx)("h1",{children:e.title}),Object(l.jsxs)("div",{className:"movie_overview",children:[Object(l.jsx)("h3",{children:"Overview : "}),Object(l.jsxs)("p",{children:[e.desc.slice(0,200)," ",Object(l.jsx)("strong",{children:Object(l.jsx)(j.b,{to:"/detail/".concat(e.movie_id),children:"...Read more "})})," "]})]}),Object(l.jsxs)("div",{className:"pre_fav",children:[Object(l.jsx)("button",{className:"watch_preview",children:Object(l.jsx)("strong",{children:Object(l.jsx)(j.b,{to:"/preview",children:"\ud83c\udfac Watch Preview "})})}),Object(l.jsx)("button",{onClick:function(){return t({type:"MARK_FAV",payload:e.movie_id})},className:"favourite",children:Object(l.jsx)("h1",{children:e.fav?"\u2b50":"\u2729"})})]})]})})};var u=function(){var e=Object(d.c)((function(e){return e}));return console.log(e),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"movies",children:e.movies.map((function(t,c){return Object(l.jsx)(b,{poster:t.poster_path,title:t.title,desc:t.overview,movie_id:t.id,fav:e.fav[c]})}))})})};c(45);var h=function(){var e={},t=Object(o.f)().id;return Object(d.c)((function(e){return e})).movies.map((function(c){c.id==t&&(e=c)})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main_detail",children:[Object(l.jsx)("div",{className:"detailPoster",children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/"+e.poster_path,alt:"pic"})}),Object(l.jsxs)("div",{className:"detail_content",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("p",{children:e.overview}),Object(l.jsxs)("h4",{children:["Release Date : ",e.release_date]}),Object(l.jsxs)("h4",{children:["Popularity : ",e.popularity]}),Object(l.jsxs)("h4",{children:["Rating :",e.vote_average]}),Object(l.jsx)("h4",{})]})]})})},p=c(27);var v=function(){return Object(l.jsx)(p.a,{src:"https://content.jwplatform.com/manifests/yp34SRmf.m3u8",autoPlay:!1,controls:!0,width:"100%",height:"auto"})};var O=function(){var e=Object(d.b)();return Object(r.useEffect)((function(){e({type:"GET_MOVIES"})}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"main_header",children:Object(l.jsx)("h1",{children:"\ud83c\udfa5 MOVIES DB"})}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(o.a,{exact:!0,path:"/detail/:id",component:h}),Object(l.jsx)(o.a,{exact:!0,path:"/preview",component:v})]})]})},m=c(18),x=Object(m.b)({movies:[],fav:[]},(function(e){e.addCase("MOVIES_SUCCESS",(function(e,t){e.movies=t.payload})),e.addCase("MARK_FAV",(function(e,t){var c=0;e.movies.map((function(n){if(n.id===t.payload)return e.fav[c]=!e.fav[c];c+=1}))}))})),f=c(30),g=c(15),w=c.n(g),_=c(28),y=c(26),S=w.a.mark(k),E=w.a.mark(M),N=function(){var e=Object(_.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1");case 2:return t=e.sent,c=t.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function k(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N();case 3:return e=t.sent,t.next=6,Object(y.a)({type:"MOVIES_SUCCESS",payload:e.results});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),S,null,[[0,8]])}function M(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)("GET_MOVIES",k);case 2:case"end":return e.stop()}}),E)}var C=M,V=Object(f.a)(),F=Object(m.a)({reducer:x,middleware:[].concat(Object(n.a)(Object(m.c)()),[V])});V.run(C),i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d.a,{store:F,children:Object(l.jsx)(j.a,{children:Object(l.jsx)(O,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0341b3bd.chunk.js.map