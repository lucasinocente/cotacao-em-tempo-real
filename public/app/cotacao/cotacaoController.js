angular.module('cotacao.controllers', []).
  controller('cotacaoController', function($scope, cotacaoService, $interval) {

    $scope.moedas = [];

    // Função para chamar o service de ler as cotações
    this.loadCotacaoAPI = function() {
      cotacaoService.getMoedas().then(function (response) {

        $scope.moedas      = response.data.result;
        $scope.lastAPILoad = new Date();

      });
    }

    // Em cada 10 segundos chama o load das cotações
    var cotacaoLive = $interval(function(){
      this.loadCotacaoAPI();
    }.bind(this), 10000);

    // Chama a primeira vez o load das cotações
    this.loadCotacaoAPI();

  });
