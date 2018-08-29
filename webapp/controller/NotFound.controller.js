sap.ui.define([
	"com/mycompany/northwind/FioriNorthwind/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.mycompany.northwind.FioriNorthwind.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
