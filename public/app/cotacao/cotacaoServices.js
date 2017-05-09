angular.module('cotacao.services', []).
  factory('cotacaoService', function($http) {

    var cotacaoAPI = {};

    // Chamada simples para a URL da API das cotações
    cotacaoAPI.getMoedas = function() {
      return $http({
        url: 'https://demo3643409.mockable.io/quotations'
      });
    }

    return cotacaoAPI;
    
  });