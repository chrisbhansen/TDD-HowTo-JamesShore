/**
 * Created by chrishansen on 7/25/16.
 */
(function () {
    "use strict";

    var EXPECTED_NODE_VERSION = "v6.2.2";

    desc("Default build");
    task("default", [ "version" ], function() {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function(){
        console.log("Checcking Node version: .");

        var actualVersion = process.version;
        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail("Incorrect Node version: expected " + EXPECTED_NODE_VERSION + ", but was " + actualVersion);
        }
    });

}());