angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('deliveCROUS', {
    url: '/accueil',
    templateUrl: 'templates/deliveCROUS.html',
    controller: 'deliveCROUSCtrl'
  })

  .state('menuBurger', {
    url: '/burger',
    templateUrl: 'templates/menuBurger.html',
    controller: 'menuBurgerCtrl'
  })

  .state('menuPizza', {
    url: '/pizza',
    templateUrl: 'templates/menuPizza.html',
    controller: 'menuPizzaCtrl'
  })

  .state('menuSandwich', {
    url: '/sandwich',
    templateUrl: 'templates/menuSandwich.html',
    controller: 'menuSandwichCtrl'
  })

  .state('commande', {
    url: '/commande',
    templateUrl: 'templates/commande.html',
    controller: 'commandeCtrl'
  })

$urlRouterProvider.otherwise('/accueil')


});