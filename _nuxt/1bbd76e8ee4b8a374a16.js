(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{179:function(t,e,l){"use strict";var n={props:["title","sub"]},r=l(11),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"tile is-ancestor"},[l("div",{staticClass:"tile is-vertical is-20"},[l("div",{staticClass:"tile"}),t._v(" "),l("div",{staticClass:"tile is-parent"},[l("article",{staticClass:"tile is-child notification is-danger"},[l("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),l("p",{staticClass:"subtitle"},[t._v(t._s(t.sub))]),t._v(" "),l("div",{staticClass:"content"})])])])])},[],!1,null,"5bf8eac4",null);e.a=component.exports},188:function(t,e,l){"use strict";l.r(e);var n=l(6),r=(l(19),l(35)),o={props:["uMovie"],data:function(){return{data:this.uMovie,totalPage:0,loading:!1,sortField:"vote_count",defalutSort:"desc",sortSelect:"desc",page:1,cname:[],parPage:20}},computed:Object(n.a)({},Object(r.b)(["movie"])),methods:{typer:function(t){return"Action"===t?"is-danger":"Science Fiction"===t?"is-info":"Thriller"===t?"is-warning":"Adventure"===t?"is-success":"Drama"===t?"is-dark":"Crime"===t?"has-background-grey-light":"Horror"===t?"is-primary":void 0},sorTer:function(t,e){this.sortField=t,this.sortSelect=e,this.getMovieData()},pageChange:function(t){this.page=t,this.getMovieData()}},filters:{cutText:function(t,e){return t.length>e?t.substr(0,e)+"...":t}}},c=l(11),d={components:{MovieList:Object(c.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("b-table",{attrs:{data:t.data,total:t.data.length,paginated:"","backend-pagination":"","default-sort-direction":t.defalutSort,"default-sort":[t.sortField,t.sortSelect],"backend-sorting":"","per-page":t.parPage},on:{"page-change":t.pageChange,sort:t.sorTer},scopedSlots:t._u([{key:"default",fn:function(e){return[l("b-table-column",{attrs:{width:"200",field:"original_title",label:"Movie Title",sortable:""}},[l("p",{staticClass:"title"},[t._v(t._s(e.row.mName))])]),t._v(" "),l("b-table-column",{attrs:{feild:"type",label:"type",numeric:"",sortable:"",centered:""}},[l("span",{staticClass:"tag",class:t.typer(e.row.type)},[t._v("\n          "+t._s(e.row.type)+"\n        ")])]),t._v(" "),l("b-table-column",{attrs:{label:"Overview"}},[t._v(t._s(t._f("cutText")(e.row.Overview,80)))]),t._v(" "),l("b-table-column",[l("nuxt-link",{attrs:{to:"/user/editM/"+e.row.id}},[l("a",{staticClass:"button is-primary is-outlined"},[t._v("Edit")])]),t._v(" "),l("a",{staticClass:"button is-primary is-danger",on:{click:function(l){return t.$emit("delete",e.row.id)}}},[t._v("Delete")])],1)]}}])})],1)},[],!1,null,null,null).exports,Titles:l(179).a},data:function(){return{}},methods:{Delete:function(t){console.log(t),this.$store.dispatch("deleteMovie",t)}},computed:Object(n.a)({},Object(r.b)(["uMovies","isloaded"]))},v=Object(c.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("titles",{attrs:{title:"Your Movies",sub:"Miewmiew"}}),this._v(" "),e("no-ssr",{attrs:{placeholder:"Loading..."}},[e("movie-list",{attrs:{uMovie:this.uMovies},on:{delete:this.Delete}})],1)],1)},[],!1,null,null,null);e.default=v.exports}}]);