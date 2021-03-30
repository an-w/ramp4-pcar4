(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{374:function(e,t,o){"use strict";o.r(t);var s=o(40),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"the-store"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-store"}},[e._v("#")]),e._v(" The Store")]),e._v(" "),o("p",[e._v("We use "),o("code",[e._v("Vuex")]),e._v(" in RAMP to handle state storage and manipulation. The "),o("code",[e._v("Vuex")]),e._v(" website (explanations and docs) can be found "),o("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("At its base, the "),o("code",[e._v("Vuex")]),e._v(" store holds all the app state, and the rest of the code reacts to it.")]),e._v(" "),o("h2",{attrs:{id:"a-store-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-store-module"}},[e._v("#")]),e._v(" A store module")]),e._v(" "),o("p",[e._v("We have store modules for core as well as each fixture (more on that later).")]),e._v(" "),o("p",[e._v("A store module usually consists of a state object, as well as a set of "),o("code",[e._v("Getters")]),e._v(", "),o("code",[e._v("Actions")]),e._v(" and "),o("code",[e._v("Mutations")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Getters")]),e._v(" retrieve info from the state object.")]),e._v(" "),o("li",[o("code",[e._v("Mutations")]),e._v(" directly commit info to the state object.")]),e._v(" "),o("li",[o("code",[e._v("Actions")]),e._v(' are the "I want to affect the state" function calls. These usually wrap '),o("code",[e._v("Mutations")]),e._v(" and allow us to either do calculations before committing info and/or perform multiple "),o("code",[e._v("Mutations")]),e._v(" in one call.")])]),e._v(" "),o("p",[e._v("Each module has 3 files;")]),e._v(" "),o("ul",[o("li",[e._v("A state file ("),o("code",[e._v("fixturename-state.ts")]),e._v(") which is where the state object is declared.")]),e._v(" "),o("li",[e._v("A store file ("),o("code",[e._v("fixturename-store.ts")]),e._v(") which is where the "),o("code",[e._v("Getters")]),e._v(" ,"),o("code",[e._v("Actions")]),e._v(" and "),o("code",[e._v("Mutations")]),e._v(" are, as well as the store creation function. This function allows us to have multiple copies of a fixture running with separate state.")]),e._v(" "),o("li",[e._v("An index file, which is just for module exporting")])]),e._v(" "),o("h2",{attrs:{id:"our-module-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#our-module-setup"}},[e._v("#")]),e._v(" Our module setup")]),e._v(" "),o("p",[e._v("Core has multiple modules for its internal state to keep things organized. Things like "),o("code",[e._v("layers")]),e._v(" , "),o("code",[e._v("config")]),e._v(", "),o("code",[e._v("panels")]),e._v(" etc.")]),e._v(" "),o("p",[e._v("Each fixture is also able to have its own store module. Since fixtures are removable/replaceable having core being in charge of store modules for them isn't doable.")]),e._v(" "),o("p",[e._v("Core modules are added in "),o("code",[e._v("store/store.ts")]),e._v(".\nFixture modules can be added in the fixture's "),o("code",[e._v("added")]),e._v(" function using "),o("code",[e._v("this.$vApp.$store.registerModule(name, storeCreationFunction());")])]),e._v(" "),o("h2",{attrs:{id:"accessing-the-store-from-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-store-from-components"}},[e._v("#")]),e._v(" Accessing the store from components")]),e._v(" "),o("p",[e._v("For interfacing with the store we use "),o("code",[e._v("vuex-pathify")]),e._v(" which has docs "),o("a",{attrs:{href:"https://davestewart.github.io/vuex-pathify/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Instead of having to do "),o("code",[e._v("this.$vApp.$store....")]),e._v(" every time we want to use anything we have some nice decorators from "),o("code",[e._v("vuex-pathify")]),e._v(" to make it simple.")]),e._v(" "),o("h3",{attrs:{id:"get"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" @Get")]),e._v(" "),o("p",[e._v("This assigns a getter to a name in the current scope.")]),e._v(" "),o("p",[o("code",[e._v("@Get('panel/getVisible!') visible")]),e._v(" assigns the "),o("code",[e._v("getVisible")]),e._v(" getter from the "),o("code",[e._v("panel")]),e._v(" module to the name "),o("code",[e._v("visible")]),e._v(". So if you wanted the value of "),o("code",[e._v("getVisible")]),e._v(" anywhere in that file you access it using "),o("code",[e._v("this.visible")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"call"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[e._v("#")]),e._v(" @Call")]),e._v(" "),o("p",[e._v("This is "),o("code",[e._v("@Get")]),e._v(" but for actions/mutations.")]),e._v(" "),o("h3",{attrs:{id:"sync"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sync"}},[e._v("#")]),e._v(" @Sync")]),e._v(" "),o("p",[e._v("This one allows both setting and getting.")]),e._v(" "),o("p",[e._v("Lets say we have"),o("code",[e._v("@Sync('app/welcomeMessage') message")]),e._v(". Then "),o("code",[e._v("console.log(this.message)")]),e._v(" would print out the current value of "),o("code",[e._v("welcomeMessage")]),e._v(" in the store. "),o("code",[e._v('this.message = "Hello World"')]),e._v(" would commit that value to "),o("code",[e._v("welcomeMessage")]),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);