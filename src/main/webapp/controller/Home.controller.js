sap.ui.define([
	"nabi/seed/app/controller/BaseController",
	"nabi/seed/app/model/formatter",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/base/Log",
], function (BaseController, formatter, MessageToast, MessageBox, Log) {
	"use strict";

	var moment = window.moment;

	return BaseController.extend("nabi.seed.app.controller.Home", {

		formatter: formatter,

		onInit : function () {

		},

		onPress : function (){
			MessageToast.show(this.getResourceBundle().getText("helloWorldMessage"));
		},

		onPressMomentjs : function (){

			var fa = moment().locale("fa").format("LTS");
			var loc = moment().format("LTS");
			var sMsg = this.getResourceBundle().getText("momentjsMessage", [fa, loc]);
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.information(sMsg,
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},

		onComponentCreated : function(oEvent){
			var oComp = oEvent.getParameter("component");

			// use documented public Component APIs only
			oComp.setText("Select Customer");
			//...

			oComp.attachCustomerSelected(this.onCustomerSelected);
		},

		onCustomerSelected : function(oEvent){
			var oCustomer = oEvent.getParameter("customer");
			MessageToast.show("Selected Customer: CustomerID=" + oCustomer.CustomerID + ", CompanyName=" + oCustomer.CompanyName);
			Log.info(oCustomer);
		},

	});

});
