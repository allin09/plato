webpackJsonp([3],{436:function(e,t,n){var o,c;o=n(639),c=n(675),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},491:[484,159,161,68],492:34,493:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},align:{type:String,"default":""},value:{twoWay:!0},field:{type:String,"default":""},attrs:{type:Object,"default":function(){return{}}},extra:{type:Object,"default":function(){return{}}},validate:null},methods:{_validate:function(){this.validate&&this.$validation&&this.$validate&&this.$validate()}}},e.exports=t["default"]},494:function(e,t,n){var o,c;n(497),o=n(495),c=n(498),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},495:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},dir:{type:String,"default":""}}},e.exports=t["default"]},496:function(e,t,n){t=e.exports=n(430)(),t.push([e.id,".c-pane{margin:1rem}.c-pane.vertical{margin:1rem 0}.c-pane.horizontal{margin:0 1rem}","",{version:3,sources:["/./node_modules/plato-styles/pane.css"],names:[],mappings:"AAAA,QACE,WAAY,CACb,AACD,iBACE,aAAc,CACf,AACD,mBACE,aAAc,CACf",file:"pane.css",sourcesContent:[".c-pane {\n  margin: 1rem\n}\n.c-pane.vertical {\n  margin: 1rem 0\n}\n.c-pane.horizontal {\n  margin: 0 1rem\n}\n"],sourceRoot:"webpack://"}])},497:function(e,t,n){var o=n(496);"string"==typeof o&&(o=[[e.id,o,""]]);n(431)(o,{});o.locals&&(e.exports=o.locals)},498:function(e,t){e.exports=" <div :class=\"['c-pane', class, dir]\"><slot></slot></div> "},499:[480,101,150,491],500:[490,517,502],501:[465,154,491],502:[472,506,69,516,149,150,492,510,499,515,491],503:[485,501,491,492,48],504:function(e,t,n){n(518);for(var o=n(68),c=n(149),i=n(492),l=n(491)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],r=0;5>r;r++){var a=s[r],A=o[a],d=A&&A.prototype;d&&!d[l]&&c(d,l,a),i[a]=i.Array}},505:[468,68],506:function(e,t){e.exports=!0},507:function(e,t){e.exports=function(){}},508:[469,492,491],509:[470,148],510:[471,513,152,499,149,491],511:[473,491],512:124,513:[475,148,514,158,153,156,505],514:[476,101,148,105,52],515:[478,150,102,153],516:function(e,t,n){e.exports=n(149)},517:[482,106,104],518:[488,507,512,492,103,502],521:function(e,t,n){var o,c;n(531),o=n(525),c=n(535),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},523:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(493),i=o(c);t["default"]={mixins:[i["default"]],computed:{_truthy:function(){return this.extra.hasOwnProperty("true-value")?this.extra["true-value"]:!0},_falsy:function(){return this.extra.hasOwnProperty("false-value")?this.extra["false-value"]:!1},_label:function(){return this.extra[this._ok?"true-label":"false-label"]},_ok:function(){return this.value===this._truthy}}},e.exports=t["default"]},525:191,526:function(e,t,n){t=e.exports=n(430)(),t.push([e.id,'.c-checkbox{height:1.5rem}.c-checkbox input{-webkit-appearance:none;appearance:none;position:absolute;visibility:hidden;z-index:-1}.c-checkbox span{display:inline-block;vertical-align:top;margin:0 -1rem 0 0;-webkit-transition:margin .5s ease;transition:margin .5s ease}.c-checkbox label{display:inline-block;text-align:center;min-width:3rem;height:1.5rem;border:1px solid #ccc;border-radius:1.5rem;box-sizing:border-box;background:#ccc;-webkit-transition:color .5s ease;transition:color .5s ease}.c-checkbox label:after,.c-checkbox label:before{content:" ";display:inline-block;vertical-align:top;width:1.4rem;height:1.4rem;border-radius:.7rem;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.c-checkbox label:after{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.c-checkbox.checked span{margin:0 0 0 -1rem}.c-checkbox.checked label{color:#fff;border-color:#39b983;background-color:#39b983}.c-checkbox.checked label:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.c-checkbox.checked label:after{-webkit-transform:scaleX(1);transform:scaleX(1)}html[dir=rtl] .c-checkbox span{margin:0 0 0 -1rem}html[dir=rtl] .c-checkbox.checked span{margin:0 -1rem 0 0}',"",{version:3,sources:["/./node_modules/plato-styles/checkbox.css"],names:[],mappings:"AAAA,YACE,aAAc,CAGf,AAED,kBACE,wBAAyB,AACjB,gBAAiB,AACzB,kBAAmB,AACnB,kBAAmB,AACnB,UAAW,CACZ,AAED,iBACE,qBAAsB,AACtB,mBAAoB,AACpB,mBAAoB,AACpB,mCAAqC,AACrC,0BAA4B,CAC7B,AAED,kBACE,qBAAsB,AACtB,kBAAmB,AACnB,eAAgB,AAChB,cAAe,AACf,sBAAqC,AACrC,qBAAsB,AACtB,sBAAuB,AACvB,gBAA+B,AAC/B,kCAAoC,AACpC,yBAA2B,CAK5B,AAED,iDAEE,YAAe,AACf,qBAAsB,AACtB,mBAAoB,AACpB,aAAc,AACd,cAAe,AACf,oBAAsB,AACtB,sBAAwB,AACxB,oCAAyC,AACzC,8CAAgD,AAChD,sCAAwC,AACxC,8BAAgC,AAChC,wDAA4D,CAC7D,AAED,wBACE,iCAAoC,AAC5B,wBAA2B,CACpC,AAKD,yBACE,kBAAmB,CACpB,AAED,0BACE,WAAa,AACb,qBAAsB,AACtB,wBAAyB,CAC1B,AAED,iCACE,iCAAoC,AAC5B,wBAA2B,CACpC,AAED,gCACE,4BAAoC,AAC5B,mBAA2B,CACpC,AAQD,+BACE,kBAAmB,CACpB,AAKD,uCACE,kBAAmB,CACpB",file:"checkbox.css",sourcesContent:['.c-checkbox {\n  height: 1.5rem\n\n  /* as background */\n}\n\n.c-checkbox input {\n  -webkit-appearance: none;\n          appearance: none;\n  position: absolute;\n  visibility: hidden;\n  z-index: -1\n}\n\n.c-checkbox span {\n  display: inline-block;\n  vertical-align: top;\n  margin: 0 -1rem 0 0;\n  -webkit-transition: margin 0.5s ease;\n  transition: margin 0.5s ease\n}\n\n.c-checkbox label {\n  display: inline-block;\n  text-align: center;\n  min-width: 3rem;\n  height: 1.5rem;\n  border: 1px solid rgb(204, 204, 204);\n  border-radius: 1.5rem;\n  box-sizing: border-box;\n  background: rgb(204, 204, 204);\n  -webkit-transition: color 0.5s ease;\n  transition: color 0.5s ease\n\n  /* as a dot */\n\n  /* as label */\n}\n\n.c-checkbox label::before,\n    .c-checkbox label::after {\n  content: "\\20";\n  display: inline-block;\n  vertical-align: top;\n  width: 1.4rem;\n  height: 1.4rem;\n  border-radius: 0.7rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease\n}\n\n.c-checkbox label::after {\n  -webkit-transform: scale3d(0, 0, 0);\n          transform: scale3d(0, 0, 0)\n}\n\n.c-checkbox.checked {\n}\n\n.c-checkbox.checked span {\n  margin: 0 0 0 -1rem\n}\n\n.c-checkbox.checked label {\n  color: white;\n  border-color: #39b983;\n  background-color: #39b983\n}\n\n.c-checkbox.checked label::before {\n  -webkit-transform: scale3d(0, 0, 0);\n          transform: scale3d(0, 0, 0)\n}\n\n.c-checkbox.checked label::after {\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1)\n}\n\nhtml[dir=rtl] {\n}\n\nhtml[dir=rtl] .c-checkbox {\n}\n\nhtml[dir=rtl] .c-checkbox span {\n  margin: 0 0 0 -1rem\n}\n\nhtml[dir=rtl] .c-checkbox.checked {\n}\n\nhtml[dir=rtl] .c-checkbox.checked span {\n  margin: 0 -1rem 0 0\n}\n'],sourceRoot:"webpack://"}])},528:function(e,t,n){t=e.exports=n(430)(),t.push([e.id,".c-label{white-space:nowrap}","",{version:3,sources:["/./node_modules/plato-styles/label.css"],names:[],mappings:"AAAA,SACE,kBAAoB,CACrB",file:"label.css",sourcesContent:[".c-label {\n  white-space: nowrap;\n}\n"],sourceRoot:"webpack://"}])},529:function(e,t,n){var o=n(526);"string"==typeof o&&(o=[[e.id,o,""]]);n(431)(o,{});o.locals&&(e.exports=o.locals)},531:function(e,t,n){var o=n(528);"string"==typeof o&&(o=[[e.id,o,""]]);n(431)(o,{});o.locals&&(e.exports=o.locals)},533:function(e,t){e.exports=" <div :class=\"['c-checkbox', class, {checked: _ok}]\"> <label> <span v-if=_label>{{_label}}</span> <input type=checkbox :field=field :true-value=_truthy :false-value=_falsy :aria-label=_label v-model=value v-bind=attrs> </label> </div> "},535:function(e,t){e.exports=" <div :class=\"['c-label', class]\"><slot></slot></div> "},536:function(e,t,n){var o,c;n(529),o=n(523),c=n(533),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},539:function(e,t,n){var o,c;n(575),o=n(540),c=n(584),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},540:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},direction:{type:String,"default":""}}},e.exports=t["default"]},554:function(e,t,n){e.exports={"default":n(607),__esModule:!0}},561:[483,151,610,505,156,68,154],565:function(e,t,n){t=e.exports=n(430)(),t.push([e.id,".c-cell{padding:1rem;border-top:1px solid #e6e6e6}.c-cell.row{-webkit-box-orient:horizontal;flex-direction:row}.c-cell.column,.c-cell.row{display:-webkit-box;display:flex;-webkit-box-direction:normal}.c-cell.column{-webkit-box-orient:vertical;flex-direction:column}.c-cell:first-child{border-top:none;border-radius:inherit}.c-cell:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.c-cell:active{background-color:rgba(52,73,94,.1)}","",{version:3,sources:["/./node_modules/plato-styles/cell.css"],names:[],mappings:"AAAA,QACE,aAAc,AACd,4BAAwC,CACzC,AACD,YAIE,8BAA+B,AAGvB,kBAAmB,CAC5B,AACD,2BARE,oBAAqB,AAErB,aAAc,AAEd,4BAA8B,CAY/B,AARD,eAIE,4BAA6B,AAGrB,qBAAsB,CAC/B,AACD,oBACE,gBAAiB,AACjB,qBAAsB,CACvB,AACD,mBACE,kCAAmC,AACnC,kCAAmC,CACpC,AACD,eACE,kCAAuC,CACxC",file:"cell.css",sourcesContent:[".c-cell {\n  padding: 1rem;\n  border-top: 1px solid rgb(230, 230, 230)\n}\n.c-cell.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row\n}\n.c-cell.column {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column\n}\n.c-cell:first-child {\n  border-top: none;\n  border-radius: inherit\n}\n.c-cell:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit\n}\n.c-cell:active {\n  background-color: rgba(52, 73, 94, 0.1)\n}\n"],sourceRoot:"webpack://"}])},575:function(e,t,n){var o=n(565);"string"==typeof o&&(o=[[e.id,o,""]]);n(431)(o,{});o.locals&&(e.exports=o.locals)},584:function(e,t){e.exports=" <div :class=\"['c-cell', class, direction]\"><slot></slot></div> "},603:function(e,t,n){var o,c;n(622),o=n(604),c=n(625),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},604:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},align:{type:String,"default":""}}},e.exports=t["default"]},605:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function c(e){return new l["default"](function(t,n){var o=new Image;o.onload=function(){t({width:o.width,height:o.height})},o.onerror=function(){n(null)},o.src=e})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(554),l=o(i);t["default"]={props:{"class":{type:String,"default":""},src:{type:String,"default":"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},alt:{type:String,"default":""},title:{type:String,"default":""},width:{type:[String,Number],"default":""},height:{type:[String,Number],"default":""},keepRatio:{type:Boolean,"default":!0}},methods:{_load:function(e){this.keepRatio&&!function(){var t=e.path[0];c(t.src).then(function(e){var n=e.width,o=e.height,c=n/o;c!==t.width/t.height&&(t.height=t.width/c)})}()}}},e.exports=t["default"]},606:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function c(e){return e?"function"==typeof e.then?e:r["default"].resolve(e):e===!1?r["default"].reject(e):r["default"].resolve(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(107),l=o(i),s=n(554),r=o(s),a=n(494),A=o(a),d=n(155),p=o(d),u=n(539),f=o(u),b=n(603),x=o(b),m=n(164),C=o(m);t["default"]={props:{"class":{type:String,"default":""},show:{twoWay:!0,type:Boolean,"default":!1},backdrop:{type:Boolean,"default":!0},actions:{type:Object,"default":function(){return{submit:{label:"确定","class":"warning",type:"submit"},cancel:{label:"取消","class":"default",type:"button"}}}},callback:{type:Function,"default":function(){return r["default"].resolve(!0)}}},computed:{_actions:function(){return this.actions&&0!==(0,l["default"])(this.actions).length?this.actions:null}},methods:{_click:function(e){var t=this;c(this.callback(e)).then(function(){t.show=!1},function(){t.show=!0})}},components:{CMask:p["default"],CPane:A["default"],CCell:f["default"],CFlex:x["default"],CButton:C["default"]}},e.exports=t["default"]},607:function(e,t,n){n(617),n(500),n(504),n(618),e.exports=n(48).Promise},608:30,609:[467,151,509,508,148,160,503],610:59,611:[474,68,561,154],612:[477,166,152,103,167,150,165,52],613:function(e,t,n){var o=n(149);e.exports=function(e,t,n){for(var c in t)n&&e[c]?e[c]=t[c]:o(e,c,t[c]);return e}},614:[479,71,148,151,612],615:function(e,t,n){"use strict";var o=n(68),c=n(48),i=n(101),l=n(52),s=n(491)("species");e.exports=function(e){var t="function"==typeof c[e]?c[e]:o[e];l&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},616:[481,148,162,491],617:function(e,t){},618:[489,506,68,151,501,69,71,148,162,608,609,614,616,561,611,491,613,499,615,48,511],619:function(e,t,n){t=e.exports=n(430)(),t.push([e.id,".c-flex{-webkit-box-flex:1;flex:auto;text-align:inherit}.c-flex.left{text-align:left}.c-flex.center{text-align:center}.c-flex.right{text-align:right}","",{version:3,sources:["/./node_modules/plato-styles/flex.css"],names:[],mappings:"AAAA,QACE,mBAAoB,AAEZ,UAAW,AACnB,kBAAmB,CACpB,AACD,aACE,eAAgB,CACjB,AACD,eACE,iBAAkB,CACnB,AACD,cACE,gBAAiB,CAClB",file:"flex.css",sourcesContent:[".c-flex {\n  -webkit-box-flex: 1;\n  -webkit-flex: auto;\n          flex: auto;\n  text-align: inherit\n}\n.c-flex.left {\n  text-align: left\n}\n.c-flex.center {\n  text-align: center\n}\n.c-flex.right {\n  text-align: right\n}\n"],sourceRoot:"webpack://"}])},620:function(e,t,n){t=e.exports=n(430)(),t.push([e.id,".c-image{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-align:center;-webkit-box-pack:center;justify-content:center}","",{version:3,sources:["/./node_modules/plato-styles/image.css"],names:[],mappings:"AAAA,SACE,oBAAqB,AAErB,aAAc,AACd,yBAA0B,AAElB,mBAAoB,AAC5B,kBAAmB,AACnB,wBAAyB,AAEjB,sBAAwB,CACjC",file:"image.css",sourcesContent:[".c-image {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  text-align: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.c-image-img {\n}\n"],sourceRoot:"webpack://"}])},621:function(e,t,n){t=e.exports=n(430)(),t.push([e.id,".c-modal-content{position:fixed;z-index:1001;left:0;bottom:0;width:100%;background-color:#fff}.c-modal-body{text-align:center;padding:1rem}.c-modal-footer{border-top:1px solid #e6e6e6}.c-modal-footer:empty{border-top:none}.c-modal-footer .c-cell{padding:1rem 0 0;margin:0 -.5rem}.c-modal-footer .c-flex{margin:0 .5rem}","",{version:3,sources:["/./node_modules/plato-styles/modal.css"],names:[],mappings:"AAGA,iBACE,eAAgB,AAChB,aAAc,AACd,OAAQ,AACR,SAAU,AACV,WAAY,AACZ,qBAAwB,CACzB,AAED,cACE,kBAAmB,AACnB,YAAc,CACf,AAED,gBACE,4BAAwC,CACzC,AAED,sBACE,eAAiB,CAClB,AAED,wBACE,iBAAkB,AAClB,eAAkB,CACnB,AAED,wBACE,cAAiB,CAClB",file:"modal.css",sourcesContent:[".c-modal {\n}\n\n.c-modal-content {\n  position: fixed;\n  z-index: 1001;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n}\n\n.c-modal-body {\n  text-align: center;\n  padding: 1rem;\n}\n\n.c-modal-footer {\n  border-top: 1px solid rgb(230, 230, 230)\n}\n\n.c-modal-footer:empty {\n  border-top: none;\n}\n\n.c-modal-footer .c-cell {\n  padding: 1rem 0 0;\n  margin: 0 -0.5rem;\n}\n\n.c-modal-footer .c-flex {\n  margin: 0 0.5rem;\n}\n"],sourceRoot:"webpack://"}])},622:function(e,t,n){var o=n(619);"string"==typeof o&&(o=[[e.id,o,""]]);n(431)(o,{});o.locals&&(e.exports=o.locals)},623:function(e,t,n){var o=n(620);"string"==typeof o&&(o=[[e.id,o,""]]);n(431)(o,{});o.locals&&(e.exports=o.locals)},624:function(e,t,n){var o=n(621);"string"==typeof o&&(o=[[e.id,o,""]]);n(431)(o,{});o.locals&&(e.exports=o.locals)},625:function(e,t){e.exports=" <div :class=\"['c-flex', class, align]\"><slot></slot></div> "},626:function(e,t){e.exports=" <div :class=\"['c-image', class]\"> <img class=c-image-img :src=src :width=width :height=height :alt=alt :title=title @load=_load> </div> "},627:function(e,t){e.exports=' <div :class="[\'c-modal\', class]" v-show=show transition=fade> <c-mask v-if=backdrop v-show=show @touchend.prevent="show = false" transition=fade></c-mask> <div class=c-modal-content v-show=show transition=slide-up> <div class=c-modal-body><slot></slot></div> <c-pane class=c-modal-footer v-if=_actions> <c-cell direction=row> <c-flex v-for="action in _actions"> <c-button :class=action.class :type=action.type @click=_click($key)>{{action.label}}</c-button> </c-flex> </c-cell> </c-pane> </div> </div> '},628:function(e,t,n){var o,c;n(623),o=n(605),c=n(626),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},629:function(e,t,n){var o,c;n(624),o=n(606),c=n(627),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)},639:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(628),i=o(c),l=n(494),s=o(l),r=n(539),a=o(r),A=n(70),d=o(A),p=n(521),u=o(p),f=n(536),b=o(f),x=n(603),m=o(x),C=n(629),h=o(C);t["default"]={data:function(){return{model1:{label:"Label",value:!0},model2:{label:"Label",value:1},showModal:!1,showSheet:!1}},methods:{click1:function(){this.click1ed=!0},click2:function(){this.click2ed=!0}},components:{CImage:i["default"],CPane:s["default"],CIcon:d["default"],CLabel:u["default"],CCheckbox:b["default"],CCell:a["default"],CFlex:m["default"],CModal:h["default"]}},e.exports=t["default"]},675:function(e,t){e.exports=' <div class=v-misc> <c-pane style=background-color:gray>it\'s pane</c-pane> <c-modal :show.sync=showModal>showModal</c-modal> <c-modal :show.sync=showSheet :actions={}> <c-cell direction=row> <c-button>Action 1</c-button> </c-cell> <c-cell direction=row> <c-button>Action 2</c-button> </c-cell> </c-modal> <c-pane> <c-cell direction=column style=height:100px> <c-flex align=center @click="this.showModal=true">Show Modal</c-flex> <c-flex align=center @click="this.showSheet=true">Show sheet-like Modal</c-flex> </c-cell> <c-cell direction=row> <c-icon class=c-cell-icon>user</c-icon> <c-label class=c-cell-label>Align Center</c-label> <c-flex align=center> <c-checkbox :value.sync=model2.value></c-checkbox> </c-flex> </c-cell> <c-cell direction=row> <c-icon class=c-cell-icon>lock</c-icon> <c-label class=c-cell-label>Align Right</c-label> <c-flex align=right> <c-checkbox :value.sync=model1.value></c-checkbox> </c-flex> </c-cell> </c-pane> <c-image class=img1 src=images/logo.png></c-image> <c-image class=img2 src=images/logo.png width=500 height=500></c-image> </div> '}});