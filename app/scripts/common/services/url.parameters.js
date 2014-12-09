(function () {
  'use strict';

  angular
    .module('app.common')
    .provider('urlParameters', urlParameters);

  function urlParameters() {
    return {
      getParameters: function () {
        var params = {};
        var search;

        if (window.location.search.indexOf('&amp;') !== -1) {
          search = '&amp;';
        } else {
          search = '&';
        }
        angular.forEach(window.location.search.substr(1).split(search), function (item) {
          params[(item.split('=')[0])] = item.split('=')[1];
        });

        return params;
      },

      $get: function () {
        return {};
      }
    };
  }

})();
