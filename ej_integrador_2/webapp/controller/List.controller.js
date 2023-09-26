sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "ejintegrador2/util/Constants",
  "sap/ui/model/json/JSONModel",
  "ejintegrador2/util/Commons",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Constants, JSONModel, Commons, Filter, FilterOperator) {
      "use strict";

      return Controller.extend("ejintegrador2.controller.List", {
          onInit: function () {
          },
          onItemPress: function(oEvent){
            const oItem = oEvent.getSource().getBindingContext(Constants.model.ordersModel)
            const sPath = oItem.getPath()

            const selectedOrder = this.getView().getModel(Constants.model.ordersModel).getProperty(sPath);
            const selectedOrderModel = new JSONModel(selectedOrder);
            Commons.setColumnLayout.call(this, Constants.layout.TwoColumnsMidExpanded)
            this.getOwnerComponent().getRouter().navTo(Constants.routes.RouteDetail)
            this.getOwnerComponent().setModel(selectedOrderModel, Constants.model.selectedOrderModel)
            
        },
        onSearch: function(oEvent){
          let oTableSearchState = [],
          sQuery = oEvent.getParameter(Constants.parameters.query);
          console.log(sQuery)
  
        if (sQuery && sQuery.length > 0) {
          let employeeIDFiltered = new Filter(Constants.filters.EmployeeID, FilterOperator.EQ, sQuery);
          oTableSearchState.push(employeeIDFiltered);
        }
        let oComboBox = this.byId(Constants.ids.idOrdersTable);
        let oBinding = oComboBox.getBinding(Constants.binding.items);
        oBinding.filter(oTableSearchState, Constants.binding.application);
      },
      });
  });
