sap.ui.define([], function (){
    'use strict';
    return{

        model:{
            ordersModel: "ordersModel",
            selectedOrderModel : "selectedOrderModel",
            I18n: "i18n",
            appView: "appView"
        },
        routes:{
            RouteDetail: "RouteDetail",
            RouteList: "RouteList"
        },
        namespace:{
            app: "ejintegrador2"
        },
        paths:{
            northwind: "/northwind/northwind.svc/",
            I18n: "ejintegrador2.i18n.i18n",
            app: "App"
        },
        entity:{
            orders: "/Orders"
        },
        ids:{
            idOrdersTable: "idOrdersTable"
        },
        binding:{
            items: "items",
            application: "Application"
        },
        properties: {
            value: "/value"
        },
        layout:{
            OneColumn: "OneColumn",
            TwoColumnsMidExpanded: "TwoColumnsMidExpanded"
        },
        filters:{
            EmployeeID: "EmployeeID",
            ShipCity: "ShipCity"
        },
        parameters:{
            query: "query"
        }
        
    };
}, true)