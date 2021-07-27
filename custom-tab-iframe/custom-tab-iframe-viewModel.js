/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
  ['knockout', 'ojL10n!./resources/nls/custom-tab-iframe-strings', 'ojs/ojcontext',
    "ojs/ojarraydataprovider", 'jquery',
    'ojs/ojknockout',
  ],
  function (ko, componentStrings, Context, ArrayDataProvider, $) {

    function ExampleComponentModel(context) {
      var self = this;

      //At the start of your viewModel constructor
      var busyContext = Context.getContext(context.element).getBusyContext();
      var options = { "description": "Web Component Startup - Waiting for data" };
      self.busyResolve = busyContext.addBusyState(options);

      self.composite = context.element;



      // self.data = [
      //   { name: "erosnow", url: "https://erosnow.com/" },

      //   { name: "indianexpress", url: "https://indianexpress.com/" },

      // ];
      self.data = context.properties.data
      if (self.data.length > 0) {
        var record = self.data[0];
        self.selectedItem = ko.observable(record.url);
      } else {
        self.selectedItem = ko.observable();
      }

      self.dataProvider = new ArrayDataProvider(self.data, { keyAttributes: "url" });
      self.edge = ko.observable("top");
      self.display = ko.observable("all");
      //Example observable
      // self.messageText = ko.observable('Hello from custom-tab-iframe');
      self.properties = context.properties;
      self.res = componentStrings['custom-tab-iframe'];


      //Once all startup and async activities have finished, relocate if there are any async activities
      self.busyResolve();
    };

    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnected = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
  });
