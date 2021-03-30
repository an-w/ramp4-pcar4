(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{365:function(e,t,s){"use strict";s.r(t);var n=s(40),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"core-class-structures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-class-structures"}},[e._v("#")]),e._v(" Core Class Structures")]),e._v(" "),s("p",[e._v("This section outlines the classes and interfaces found in the exposed parts of the RAMP instance. When adding new things, the classes and patterns should be observed for consistency.")]),e._v(" "),s("h2",{attrs:{id:"instanceapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceapi"}},[e._v("#")]),e._v(" InstanceAPI")]),e._v(" "),s("p",[e._v("This is the class that defines the public API of a running instance of RAMP.")]),e._v(" "),s("h2",{attrs:{id:"apiscope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apiscope"}},[e._v("#")]),e._v(" APIScope")]),e._v(" "),s("p",[e._v("This couples together the "),s("code",[e._v("InstanceAPI")]),e._v(" and the "),s("code",[e._v("Vue")]),e._v(" application and provides easy access to both.")]),e._v(" "),s("h2",{attrs:{id:"subcomponentapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subcomponentapi"}},[e._v("#")]),e._v(" SubcomponentAPI")]),e._v(" "),s("p",[e._v("These are the classes that define a subcomponent of the Instance API. E.g. "),s("code",[e._v("EventAPI")]),e._v(", "),s("code",[e._v("FixtureAPI")]),e._v(". These classes should extend "),s("code",[e._v("APIScope")]),e._v(".")]),e._v(" "),s("p",[e._v("Subcomponents are accessed in the following manner.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("iApi.event.emit(stuff);\n")])])]),s("p",[s("code",[e._v(".event")]),e._v(" is the subcomponent, "),s("code",[e._v(".emit")]),e._v(" is a method exposed by the subcomponent API.")]),e._v(" "),s("h2",{attrs:{id:"subcomponentinstance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subcomponentinstance"}},[e._v("#")]),e._v(" SubcomponentInstance")]),e._v(" "),s("p",[e._v("These are classes that define instances of API subcomponents that can be created by a caller. The two prime examples are "),s("code",[e._v("FixtureInstance")]),e._v(" and "),s("code",[e._v("PanelInstance")]),e._v(". These classes should extend "),s("code",[e._v("APIScope")]),e._v(".")]),e._v(" "),s("p",[e._v("An example of Subcomponent Instances using Panel subcomponent:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var myPanel = iApi.panel.get('panelId');\nmyPanel.pin(true);\n")])])]),s("p",[s("code",[e._v("myPanel")]),e._v(" is an instance of the Subcomponent Instance. "),s("code",[e._v(".panel")]),e._v(" is the SubcomponentAPI. "),s("code",[e._v(".pin")]),e._v(" is a method exposed on Subcomponent Instance.")]),e._v(" "),s("h2",{attrs:{id:"isubcomponentinstance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isubcomponentinstance"}},[e._v("#")]),e._v(" ISubcomponentInstance")]),e._v(" "),s("p",[e._v("This denotes an interface for a constructor of an item that has a "),s("code",[e._v("SubcomponentInstance")]),e._v(" class.")]),e._v(" "),s("p",[e._v("NOTE since this only appears to exist for "),s("code",[e._v("FixtureInstance")]),e._v(" and not for Panels or the Ramp Instance, might be worth omitting or marking this as highly optional.")]),e._v(" "),s("h2",{attrs:{id:"fixtures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixtures"}},[e._v("#")]),e._v(" Fixtures")]),e._v(" "),s("p",[e._v("Similar to the "),s("code",[e._v("SubcomponentAPI")]),e._v(" classes of the Instance API, Fixtures can implement specific API classes. The classname should be in the format "),s("code",[e._v("FixturenameAPI")]),e._v(" and they should extend the class "),s("code",[e._v("FixtureInstance")]),e._v(" from the main API.")]),e._v(" "),s("p",[e._v("The main fixture class should have the name "),s("code",[e._v("FixturenameFixture")]),e._v(" and extend the previously created "),s("code",[e._v("FixturenameAPI")]),e._v(". If the fixture has no API class then "),s("code",[e._v("FixturenameFixture")]),e._v(" can directly extend "),s("code",[e._v("FixtureInstance")]),e._v(".")]),e._v(" "),s("p",[e._v("An example using the Grid fixture.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("class GridAPI extends FixtureInstance {\n\n    // a method that the Grid fixture exposes as an API,\n    // that is allowed to be invoked by outside callers.\n    openGrid(id: string): void {\n       // do stuff\n    }\n}\n\nclass GridFixture extends GridAPI {\n    async added() {\n      // specific implementation for the Grid fixture\n    }\n}\n\n// the code to create the Grid fixture would be something like\nvar gridFixtureInstance = new GridFixture(instanceApi);\n")])])]),s("h2",{attrs:{id:"vue-and-vuex-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-and-vuex-classes"}},[e._v("#")]),e._v(" Vue and Vuex classes")]),e._v(" "),s("p",[e._v("Our component classes follow the naming convention: "),s("code",[e._v("ComponentnameV")]),e._v(" (which extend "),s("code",[e._v("Vue")]),e._v(" as normal). The "),s("code",[e._v("V")]),e._v(" allows us to distinguish Vue components from store classes, api classes, etc.")]),e._v(" "),s("p",[e._v("Our store folders export a function rather than a class/object. These are just named as "),s("code",[e._v("module")]),e._v(". This function does create and instance of "),s("code",[e._v("ModuleState")]),e._v(" which should be created in the "),s("code",[e._v("module-state.ts")]),e._v(" file. For more info look at the "),s("RouterLink",{attrs:{to:"/app/store.html"}},[e._v("store docs")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);