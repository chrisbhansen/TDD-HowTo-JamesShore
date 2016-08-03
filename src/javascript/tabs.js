/**
 * Created by chrishansen on 8/2/16.
 */
(function() {
    "use strict";

    var classList = require("../vendor/classList.js");

    classList.shim();

    exports.initialize = function initialize(element, className) {
        element.classList.add(className);
    };

}());