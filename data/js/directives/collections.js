'use strict';

angular.module('RestedApp')
.directive('collections', function(DEFAULT_REQUEST, Modal) {
  return {
    restrict: 'E',
    templateUrl: 'views/directives/collections.html',
    scope: {
      collections: '=',
      selectedRequest: '=',
      removeFromCollection: '&'
    },
    link: function(scope, element, attrs, controllers) {

      scope.selectRequest = function(request) {
        scope.selectedRequest = request;
      };

      scope.toggleCollectionsOptions = function(collection) {
        Modal.set({
          title: 'Update collection "' + collection.name + '"',
          includeURL: '',
          actions: [{
            text: 'Save',
            click: ''
          }]
        });
      };

      scope.collectionOptionsConfig = {
        title: 'Preferences',
        classes: ['fa', 'fa-pencil']
      };

      scope.removeRequestConfig = {
        title: 'Remove request',
        classes: ['fa', 'fa-times']
      };
    }
  };
});

