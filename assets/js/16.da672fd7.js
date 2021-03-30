(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{369:function(e,t,a){"use strict";a.r(t);var n=a(40),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"details-fixture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#details-fixture"}},[e._v("#")]),e._v(" Details Fixture")]),e._v(" "),a("p",[e._v("The details fixture adds a panel to RAMP that displays in-depth information about any specific data point on the map. It can be opened by performing an identify query either on the map or through the RAMP API.")]),e._v(" "),a("h2",{attrs:{id:"panels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#panels"}},[e._v("#")]),e._v(" Panels")]),e._v(" "),a("p",[e._v("The details fixture consists of three screens:")]),e._v(" "),a("ol",[a("li",[e._v("The "),a("strong",[e._v("Layer List")]),e._v(" is the first screen that opens when you issue an identify request. It contains a list of visible map layers and displays how many results were found for each layer. Clicking on one of these layers will bring you to the next screen, the "),a("strong",[e._v("feature list")]),e._v(".")]),e._v(" "),a("li",[e._v("The "),a("strong",[e._v("Feature List")]),e._v(" contains a list of all results found for the selected layer. Clicking on an item in this list will bring you to the "),a("strong",[e._v("feature info")]),e._v(" screen.")]),e._v(" "),a("li",[e._v("The "),a("strong",[e._v("Feature Info")]),e._v(" screen displays information about one single data point. This screen will look different depending on the format of the information returned by the identify query. This is also the screen that can be customized using custom templates (see below).")])]),e._v(" "),a("h2",{attrs:{id:"creating-a-custom-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-template"}},[e._v("#")]),e._v(" Creating a Custom Template")]),e._v(" "),a("p",[e._v("If you don't want to use the provided templates for your layer results, you can create your own. The process is simple. All you need to do is create a Vue component and then add the layer-to-template binding to the RAMP configuration file.")]),e._v(" "),a("p",[e._v("The example below explains how to create a basic template for the details panel.")]),e._v(" "),a("h3",{attrs:{id:"example-creating-a-custom-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-creating-a-custom-template"}},[e._v("#")]),e._v(" Example: Creating a Custom Template")]),e._v(" "),a("p",[a("strong",[e._v("1.")]),e._v(" The first thing you should do is create the Vue component that you want to use as the template. You can do this in various ways, but this example will make use of "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/render-function.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue render functions"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To keep this example simple, the template created here will just display the name of the point when it is clicked on.")]),e._v(" "),a("div",{staticClass:"language-javascript= extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("RAMP.component('My_Custom_Component', {\n    props: ['identifyData'],\n    render: function(h) {\n        return h('div', [\n            h('span', 'The feature name is: ' + this.identifyData.data['name'])\n        ])\n    }\n});\n")])])]),a("p",[a("strong",[e._v("Note:")]),e._v(" it is important that you include the "),a("code",[e._v("identifyData")]),e._v(" prop in the component since the details fixture will populate it with the results from the identify query. The "),a("code",[e._v("identifyData")]),e._v(" prop is necessary in order to access the results.")]),e._v(" "),a("p",[a("strong",[e._v("2.")]),e._v(" Once the custom component has been created, you will want to add your layer to RAMP and set the new component as a custom template in the details fixture. You can do both of these in the configuration file:")]),e._v(" "),a("div",{staticClass:"language-javascript= extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const myMap = new RAMP.Instance(document.getElementById(\"map\"), {\n    map: { ... },\n    layers: [\n        {\n            id: 'My_New_Layer',\n            layerType: 'esriFeature',\n            url: 'http://my-website.example/path/to/esri/layer'\n        }\n    ],\n    fixtures: {\n        details: {\n            items: [\n                {\n                    id: 'My_New_Layer',\n                    template: 'My_Custom_Template'\n                }\n            ]\n        }\n    }\n});\n")])])]),a("p",[e._v("As shown in the config snippet above, template bindings should be placed under "),a("code",[e._v("fixtures.details.items")]),e._v(". When the details panel first loads, it looks for any template bindings in here. The "),a("code",[e._v("id")]),e._v(" should match the layer "),a("code",[e._v("id")]),e._v(", and the "),a("code",[e._v("template")]),e._v(" should match the name of the custom component that you registered on the host page.")]),e._v(" "),a("p",[e._v("After completing these two steps, the custom component should now be displayed when requesting data from "),a("code",[e._v("My_New_Layer")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);