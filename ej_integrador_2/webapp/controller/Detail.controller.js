sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "ejintegrador2/util/Commons",
  "ejintegrador2/util/Constants",
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Commons, Constants) {
      "use strict";

      return Controller.extend("ejintegrador2.controller.Detail", {
          onInit: function () {
          },
          onPressClose: function(){
            Commons.setColumnLayout.call(this, Constants.layout.OneColumn)
          }
      });
  });
