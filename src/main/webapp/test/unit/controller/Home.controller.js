/*global QUnit */
sap.ui.require([
	"nabi/seed/app/controller/Home.controller",
	//do not add to parameter list:
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function(HomeController) {
	"use strict";

	QUnit.module("nabi.seed.app.controller.Home");

	QUnit.test("Should always be successful - dummy QUnit test", function (assert) {
		assert.strictEqual(true, true);
	});

});
