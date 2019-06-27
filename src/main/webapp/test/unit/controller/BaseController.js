/*global QUnit */
sap.ui.require([
	"nabi/seed/app/controller/BaseController",
	//do not add to parameter list:
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function(BaseController) {
	"use strict";

	QUnit.module("nabi.seed.app.controller.BaseController");

	QUnit.test("Should always be successful - dummy QUnit test", function (assert) {
		assert.strictEqual(true, true);
	});

});
