/*global QUnit */
sap.ui.require([
	"nabi/seed/app/model/formatter",
	//do not add to parameter list:
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function(formatter) {
	"use strict";

	QUnit.module("nabi.seed.app.model.formatter");

	QUnit.test("2.335 should be 2.33", function (assert) {
		assert.strictEqual(formatter.numberUnit("2.335"), "2.33");
	});

	QUnit.test("2.333 should be 2.33", function (assert) {
		assert.strictEqual(formatter.numberUnit("2.333"), "2.33");
	});

	QUnit.test("2.3 should be 2.30", function (assert) {
		assert.strictEqual(formatter.numberUnit("2.3"), "2.30");
	});
});
