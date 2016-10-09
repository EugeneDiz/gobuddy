angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('customerAuth', {
    url: '/customer-auth',
    templateUrl: 'templates/customerAuth.html',
    controller: 'customerAuthCtrl'
  })

  .state('workerAuth', {
    url: '/worker-auth',
    templateUrl: 'templates/workerAuth.html',
    controller: 'workerAuthCtrl'
  })

  .state('customerCheck', {
    url: '/customer-check',
    templateUrl: 'templates/customerCheck.html',
    controller: 'customerCheckCtrl'
  })

  .state('workerCheck', {
    url: '/worker-check',
    templateUrl: 'templates/workerCheck.html',
    controller: 'workerCheckCtrl'
  })

  .state('customerProfile', {
    url: '/customer-profile',
    templateUrl: 'templates/customerProfile.html',
    controller: 'customerProfileCtrl'
  })

  .state('workerProfile', {
    url: '/worker-profile',
    templateUrl: 'templates/workerProfile.html',
    controller: 'workerProfileCtrl'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.html',
    controller: 'categoriesCtrl'
  })

  $urlRouterProvider.otherwise('/categories')



});
