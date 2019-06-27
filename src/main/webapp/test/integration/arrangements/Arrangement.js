sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";

	function getFrameUrl(sHash, sUrlParameters) {
		sHash = sHash || "";
		var sUrl = sap.ui.require.toUrl("nabi/seed/app/test/bootstrapping/openui5.html");

		if (sUrlParameters) {
			sUrlParameters = "?" + sUrlParameters;
		}

		return sUrl + sUrlParameters + "#" + sHash;
	}

	return Opa5.extend("nabi.seed.app.test.integration.arrangements.Arrangement", {

		constructor: function (oConfig) {
			Opa5.apply(this, arguments);
			this._oConfig = oConfig;
		},

		iStartMyApp: function (oOptions) {
			oOptions = oOptions ? oOptions : {};
			// start the app UI component
			this.iStartMyUIComponent({
				componentConfig: {
					name: "nabi.seed.app",
					async: true
				},
				hash: oOptions.hash || ""
			});
		},

		/* succeeds in testsuite */
		theAppIsStartedInAFrame: function (oOptions) {
			var sUrlParameters;
			oOptions = oOptions || { delay: 0 };

			sUrlParameters = "serverDelay=" + oOptions.delay;

			this.iStartMyAppInAFrame(getFrameUrl(oOptions.hash, sUrlParameters));
		}

	});
});
