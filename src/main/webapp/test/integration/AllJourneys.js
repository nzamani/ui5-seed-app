sap.ui.define([
	"sap/ui/test/Opa5",
	"nabi/seed/app/test/integration/arrangements/Arrangement",
	"nabi/seed/app/test/integration/HomeJourney"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "nabi.seed.app.view",	// every waitFor will append this namespace in front of your viewName
		autoWait: true
	});
});
