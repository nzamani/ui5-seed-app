sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/AggregationLengthEquals",
	"sap/ui/test/matchers/I18NText",
	"sap/ui/test/matchers/BindingPath",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText"
], function (Opa5, AggregationLengthEquals, I18NText, BindingPath, Press, EnterText) {
	"use strict";

	var sViewName = "Home";

	Opa5.createPageObjects({
		onTheHomePage: {
			actions: {

				iPressOnTheButtonWithId: function (sId) {
					return this.waitFor({
						id: sId,
						//controlType: "sap.m.Button",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Button 'goToImageFileUploaderBtn' not found on Home page"
					});
				}
			},

			assertions: {

				iShouldSeeAMessageToast: function (sExpectedMessage) {
					return this.waitFor({
						check : function () {
							return !!Opa5.getJQuery()(".sapMMessageToast").length;
						},
						success: function (aResult) {
							var sDisplayedMessage = Opa5.getJQuery()(".sapMMessageToast").text();
							Opa5.assert.strictEqual(sDisplayedMessage, sExpectedMessage);
						},
						errorMessage: "MessageToast was not displayed"
					});
				}

			}

		}
	});

});
