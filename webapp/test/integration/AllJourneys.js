// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/mycompany/northwind/FioriNorthwind/test/integration/arrangements/Arrangement","com/mycompany/northwind/FioriNorthwind/test/integration/MasterJourney",
	"com/mycompany/northwind/FioriNorthwind/test/integration/NavigationJourney",
	"com/mycompany/northwind/FioriNorthwind/test/integration/NotFoundJourney",
	"com/mycompany/northwind/FioriNorthwind/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.mycompany.northwind.FioriNorthwind.view.",
		autoWait: true
	});
});
