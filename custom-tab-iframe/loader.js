/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./custom-tab-iframe-view.html', './custom-tab-iframe-viewModel', 'text!./component.json', 'css!./custom-tab-iframe-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('custom-tab-iframe', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);