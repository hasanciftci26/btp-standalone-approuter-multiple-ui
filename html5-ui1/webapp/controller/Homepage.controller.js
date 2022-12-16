sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ndbs.training.html5ui1.controller.Homepage", {
            onInit: function () {

            },
            onAfterRendering: function () {
                //Standard request
                //App id'yi SAPUI5 library'si otomatik olarak ekler.
                this.getView().getModel().read("/Customers", {
                    filters: null,
                    sorters: null,
                    async: true,
                    success: (oData) => {
                        let aResult = oData.results;
                    },
                    error: (error) => {
                        let sMessage = error.message;
                    }
                });

                //jQuery Ajax request
                /*
                    Eğer destination configurationı html5 modülünün xs-app.json dosyasında yapıldıysa,
                    request url'in başına app id'yi (manifestteki id ama noktasız hali) eklememiz gerekmektedir.

                    Eğer destination configuratıonı standalone approuter'daki xs-app.json dosyasında yapıldıysa,
                    request url'in başına app id'yi eklememize gerek yoktur.
                */
                $.ajax({
                    url: "/ndbstraininghtml5ui1/v2/Northwind/Northwind.svc/Employees?$format=json",
                    method: "GET",
                    async: true,
                    success: (oData) => {
                        let aResult = oData.d.results;
                    },
                    error: (error) => {
                        let sMessage = error.message;
                    }
                });
            }
        });
    });
