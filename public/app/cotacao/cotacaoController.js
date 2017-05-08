angular.module('cotacaoAgora', []).controller('cotacaoController', function($scope, $http) {

  $http.get('https://demo3643409.mockable.io/quotations').then(function(res){
    $scope.cotacao.moedas = res.data.result;
  });

  console.log('$scope.cotacao.moedas', $scope.cotacao.moedas);

});