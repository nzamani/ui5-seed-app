sap.ui.define([
	"nabi/seed/app/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("nabi.seed.app.controller.App", {

		onInit : function () {
			var oModel = new JSONModel({
				busy : false,
				delay : 0
			});
			this.getView().setModel(oModel, "appView");

			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}

	});

});
