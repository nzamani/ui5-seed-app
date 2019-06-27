/*global QUnit*/
sap.ui.define([
	"sap/ui/test/opaQunit",
	"nabi/seed/app/test/integration/pages/Home"
], function (opaTest) {
		"use strict";

		QUnit.module("Home Page");

		opaTest("Should see a MessageToast when pressing the button - Component", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Actions
			When.onTheHomePage.iPressOnTheButtonWithId("homeButton");

			// Assertions
			Then.onTheHomePage.iShouldSeeAMessageToast("Hello World!");

			// Cleanup
			Then.iTeardownMyApp();
		});

		/****************************************************************************************************
		 * OPA via IFrame can be really slow. When used with karma you may run into a timeout. In such cases
		 * you could increase the karma config option 'browserDisconnectTimeout' in your Gruntfile.
		 * A better approach may be switching to a Component if possible (see above). In case IFrame is the
		 * only option you have you could enable the code below - but make sure to run performance tests
		 * via 'grunt serve:tdd' to see how long the IFrame test needs, and consider changing
		 * 'browserDisconnectTimeout' if needed.
		 ****************************************************************************************************/
		/*
		 opaTest("Should see a MessageToast when pressing the button - IFrame", function (Given, When, Then) {
			// Arrangements
			Given.theAppIsStartedInAFrame();

			// Actions
			When.onTheHomePage.iPressOnTheButtonWithId("homeButton");

			// Assertions
			Then.onTheHomePage.iShouldSeeAMessageToast("Hello World!");

			// Cleanup
			Then.iTeardownMyAppFrame();
		});
		*/

	}
);
