/**
 * Created by chrishansen on 8/2/16.
 */
(function() {
    "use strict";

    var classList = require("../vendor/classList.js");

    classList.shim();

    exports.initialize = function initialize(elementList, className) {
        elementList.forEach(function(element) {
           element.classList.add(className);
        });
    };

}());