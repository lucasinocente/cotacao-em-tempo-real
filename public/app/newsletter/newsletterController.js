angular.module('newsletter.controllers', []).
  controller('newsletterController', function($scope, newsletterService) {

	  $scope.newsletterData = {};

	  // Função que é iniciada no submit do form #newsletter
	  $scope.signUpNewsletter = function() {
	  	
	  	$scope.signUpNewsletterSending = true; // Serve para o aviso de enviando e para desativar o botão de enviar
	  	
	    var newsletterData = $scope.newsletterData // Coloca os dados do usuário numa variável pra deixar o código mais flexível

	    // Envia os dados cadastrados no form para o service de newsletter
	    newsletterService.postData(newsletterData).then(function (response) {
	      
	  		$scope.signUpNewsletterSending = false; // Avisa pro scope que já parou de enviar pra retornar ativo o botão de enviar
	      $scope.signUpNewsletterSuccess = true; // E retorna um success true pra mudar o aviso pro usuário

	    });

	  }

  });
