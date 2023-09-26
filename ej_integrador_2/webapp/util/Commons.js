sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "ejintegrador2/util/Constants",
    "sap/ui/model/resource/ResourceModel",
],
    function (Controller, JSONModel, Constants, ResourceModel) {

        'use strict';
        const Commons = {
            getData: function (entity) {
                const url = sap.ui.require.toUrl(Constants.namespace.app) + Constants.paths.northwind
                this._model = new sap.ui.model.odata.v2.ODataModel(url, {
                    json: true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache"
                    },
                    useBatch: true
                })
                this._model.read(entity, {
                    async: true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                })
            },
            success: function (oData, model) {
                const oModel = new JSONModel(oData.results)
                this.getView().setModel(oModel, model)
            },
            error: function (error) {
                console.log(error)
            },
            setI18n: function (model) {
                var i18nModel = new ResourceModel({
                    bundleName: Constants.paths.I18n
                });
                this.getView().setModel(i18nModel, model);
            },
            setColumnLayout: function(layout){
                let oViewModel = new JSONModel({
                    layout: layout
                  });
                  this.getOwnerComponent().setModel(oViewModel, Constants.model.appView);
            }
        }
        return Commons
    }, true)