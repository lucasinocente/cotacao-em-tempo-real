angular.module('newsletter.services', []).
  factory('newsletterService', function($http) {

  	var newsletterSubmit = {};

    // Serviço criado pra enviar os dados cadastrados pelo usuário na newsletter
    newsletterSubmit.postData = function(newsletterData) {
    	
      return $http({
        method  : 'POST',
				url     : 'https://demo3643409.mockable.io/newsletter', // API enviada no teste
				data    : newsletterData, // dados cadastrados no form
				headers : { 'Content-Type': 'authentication/desafiobeetech' }
      });
    
    };

  return newsletterSubmit;

});