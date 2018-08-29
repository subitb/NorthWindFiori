sap.ui.define([
	"sap/ui/test/Opa5",
	"com/mycompany/northwind/FioriNorthwind/test/integration/arrangements/Arrangement",
	"com/mycompany/northwind/FioriNorthwind/test/integration/NavigationJourneyPhone",
	"com/mycompany/northwind/FioriNorthwind/test/integration/NotFoundJourneyPhone",
	"com/mycompany/northwind/FioriNorthwind/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.mycompany.northwind.FioriNorthwind.view.",
		autoWait: true
	});
});
