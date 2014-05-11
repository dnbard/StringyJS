/*! stringyjs - v0.0.0 - 2014-05-11
* Copyright (c) 2014 Alex Bardanov; Licensed MIT */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Stringy = factory();
  }
}(this, function () {
    function template(format){
        var args = {};
        if (typeof arguments[1] === 'object'){
            args = arguments[1];
        } else if (arguments[1]) {
            args = Array.prototype.slice.call(arguments, 1);
        }

        var sprintfRegex = /\{([^{]+?)\}/g; 
        var sprintf = function (match, value) {
            return value in args ? args[value] : match;
        };

        return format.replace(sprintfRegex, sprintf);
    }

    function capitalize(str, all){
        var last,
            regexp = all ? /[^]/g : /^\S/;
        return str.toLowerCase().replace(regexp, function(lower) {
            var upper = lower.toUpperCase(), result;
            result = last ? lower : upper;
            last = upper !== lower;
            return result;
        });
    }

    return {
        capitalize: capitalize,
        template: template
    };
}));