/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define(["dojo/_base/declare"], function(declare) {
    var _mixin = declare("widgets.common._ContentPropertyMixin", null, {
        content: "",
        _getContentAttr: function() {
            return this.containerNode.innerHTML;
        },
        _setContentAttr: function(value) {
            this.containerNode.innerHTML = value;
            console.debug('set content')
        }
    });
    return _mixin;
});
