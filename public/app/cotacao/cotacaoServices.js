angular.module('cotacaoAgora.services', []).
  factory('cotacaoAPIservice', function($http) {

    var cotacaoAPI = {};

    cotacaoAPI.getMoedas = function() {
      return $http({
        url: 'https://demo3643409.mockable.io/quotations'
      });
    }

    return cotacaoAPI;
    
  });