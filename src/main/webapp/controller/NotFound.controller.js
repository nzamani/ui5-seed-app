sap.ui.define([
	"nabi/seed/app/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("nabi.seed.app.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed : function () {
			this.getRouter().navTo("home");
		}

	});

});
