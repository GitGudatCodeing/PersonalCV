(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,9],{432:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var c=n(433),r=n(0),l=Object(r.h)("v-card__actions"),o=Object(r.h)("v-card__subtitle"),d=Object(r.h)("v-card__text"),f=Object(r.h)("v-card__title");c.a},456:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("17f38dcc",content,!0,{sourceMap:!1})},457:function(t,e,n){"use strict";n.r(e);var c={name:"HeadingText",props:{title:{type:String,required:!0},subtitle:{type:String,default:""}}},r=n(34),l=n(40),o=n.n(l),d=n(433),f=n(432),v=n(445),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{color:"transparent",tile:"",flat:""}},[n("v-card-title",{staticClass:"justify-center pa-6"},[n("span",{staticClass:"text-h2 font-italic"},[t._v(t._s(t.title))])]),t._v(" "),t.subtitle?n("v-card-subtitle",{staticClass:"text-center"},[n("span",{staticClass:"subtitle-Text"},[t._v(t._s(t.subtitle))])]):t._e()],1)],1)}),[],!1,null,"2a17caeb",null);e.default=component.exports;o()(component,{VCard:d.a,VCardSubtitle:f.b,VCardTitle:f.d,VCol:v.a})},458:function(t,e,n){"use strict";n(456)},459:function(t,e,n){var c=n(17)(!1);c.push([t.i,".v-enter-active[data-v-6318cc0c],.v-leave-active[data-v-6318cc0c]{transition:opacity .5s ease}.v-enter-from[data-v-6318cc0c],.v-leave-to[data-v-6318cc0c]{opacity:0}",""]),t.exports=c},460:function(t,e,n){"use strict";n.r(e);n(24);var c={name:"ContentCore",components:{HeadingText:n(457).default},props:{title:{type:String,required:!0},showHeading:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!1},color:{type:String,default:"transparent"},flat:{type:Boolean,default:!0},columns:{type:Number,default:12},mdCol:{type:Number,default:6},smCol:{type:Number,default:10}}},r=(n(458),n(34)),l=n(40),o=n.n(l),d=n(433),f=n(432),v=n(445),_=n(446),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[t.showHeading?n("heading-text",{attrs:{title:t.title}}):t._e(),t._v(" "),n("v-col",{attrs:{cols:t.columns,md:t.mdCol,sm:t.smCol}},[n("v-card",{attrs:{tile:"",flat:t.flat,color:t.color}},[t.showTitle?n("v-card-title",{staticClass:"justify-center"},[t._t("title")],2):t._e(),t._v(" "),n("v-card-text",{staticClass:"text-center"},[t._t("content")],2),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[t._t("actions")],2)],1)],1)],1)}),[],!1,null,"6318cc0c",null);e.default=component.exports;o()(component,{VCard:d.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:v.a,VRow:_.a})},605:function(t,e,n){"use strict";n.r(e);var c={name:"ProjectsContent",layout:"primary",components:{ContentCore:n(460).default},data:function(){return{title:"Projects"}}},r=n(34),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content-core",{attrs:{title:t.title},scopedSlots:t._u([{key:"content",fn:function(){return[n("span",[t._v("Content to still be added.")])]},proxy:!0}])})}),[],!1,null,"9a2365ca",null);e.default=component.exports}}]);