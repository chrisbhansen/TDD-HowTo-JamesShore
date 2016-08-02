/**
 * Created by chrishansen on 8/2/16.
 */
(function() {
    "use strict";

    exports.initialize = function initialize(element, className) {
        var classes = element.getAttribute("class");

        if (classes === null) classes = className;
        else classes += " " + className;

        element.setAttribute("class", classes);
    };

}());