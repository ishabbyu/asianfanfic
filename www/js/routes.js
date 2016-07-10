angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('page3', {
    url: '/page2',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page6', {
    url: '/page3',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page4',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page8', {
    url: '/page5',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});