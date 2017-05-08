angular.module('cotacaoAgora.controllers', []).
  controller('cotacaoController', function($scope, cotacaoAPIservice, $interval) {

    $scope.moedas = [];

    this.loadCotacaoAPI = function() {
      cotacaoAPIservice.getMoedas().then(function (response) {

        $scope.moedas      = response.data.result;
        $scope.lastAPILoad = new Date();

      });
    }

});