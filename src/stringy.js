(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Stringy = factory();
  }
}(this, function () {
    return {
        template: function(format){
            var args = Array.prototype.slice.call(arguments, 1);
            var sprintfRegex = /\{(\d+)\}/g;
 
            var sprintf = function (match, number) {
                return number in args ? args[number] : match;
            };
 
            return format.replace(sprintfRegex, sprintf);
        }
    };
}));