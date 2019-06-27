(function () {
	"use strict";

	window["sap-ushell-config"] = {
		defaultRenderer : "fiori2",
		renderers: {
			fiori2: {
				componentData: {
					config: {
						search: "hidden"
					}
				}
			}
		},
		applications: {
			"SeedApp-display": {
				additionalInformation: "SAPUI5.Component=nabi.seed.app",
				applicationType: "URL",
				url: "../../",
				description: "Seed Application",
				title: "UI5 Seed App"
			}
		}
	};

})();
