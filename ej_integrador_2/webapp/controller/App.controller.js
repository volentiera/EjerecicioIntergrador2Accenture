sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "ejintegrador2/util/Constants",
    "ejintegrador2/util/Commons",
  ],
  function (BaseController, Constants, Commons) {
    "use strict";

    return BaseController.extend("ejintegrador2.controller.App", {
      onInit() {
        Commons.getData.call(this, Constants.entity.orders);
        Commons.setI18n.call(this, Constants.model.I18n);
        Commons.setColumnLayout.call(this, Constants.layout.OneColumn)
      },
      success: function (oData) {
        Commons.success.call(this, oData, Constants.model.ordersModel)
      },
      error: function (error) {
        Commons.error.call(this, error)
      },
    });
  }
);
