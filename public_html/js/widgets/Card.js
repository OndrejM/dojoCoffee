define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "widgets/common/_ContentPropertyMixin",
    "dojo/text!./templates/Card.html"
], function(declare, _WidgetBase, _TemplatedMixin, _ContentPropertyMixin, template) {
 
    return declare([_WidgetBase, _TemplatedMixin, _ContentPropertyMixin], {
        templateString: template,
        baseClass: "card-widget"
    });
 
});