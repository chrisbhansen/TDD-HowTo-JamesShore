/*** Created by chrishansen on 7/25/16.***/
/* globals jake:false, desc:false, task:false, complete:false, fail:false */

(function () {
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");

    //**** General-purpose tasks

    desc("Default build");
    task("default", [ "version", "lint" ], function() {
        console.log("\n\nBUILD OK");
    });

    desc("Run a localhost server");
    task("run", function() {
        jake.exec("node node_modules/.bin/http-server src", { interactive: true }, complete, fail);
    }, { async: true });

    //**** Supporting tasks

    desc("Check Node version");
    task("version", function(){
        console.log("Checking Node version: .");

        var packageJson = require("./package.json");
        var expectedVersion = packageJson.engines.node;

        var actualVersion = process.version;
        if (semver.neq(expectedVersion, actualVersion)) {
            fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
        }
    });

    desc("Lint JavaScript code");
    task("lint", function() {
        process.stdout.write("Linting JavaScript: ");

        jshint.checkFiles({
            files: "Jakefile.js",
            options: {
                bitwise: true,
                eqeqeq: true,
                forin: true,
                freeze: true,
                futurehostile: true,
                latedef: "nofunc",
                noarg: true,
                nocomma: true,
                nonbsp: true,
                nonew: true,
                strict: true,
                undef: true,

                node: true,
                browser: true
            },
            globals: {

            }
        }, complete, fail);
    }, { async: true });

}());

