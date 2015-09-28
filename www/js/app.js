// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tab.cart', {
        url: '/cart',
        views: {
          'tab-cart': {
            templateUrl: 'templates/tab-cart.html',
            controller: 'CartCtrl'
          }
        }
      })
      .state('tab.items', {
        url: '/items',
        views: {
          'tab-items': {
            templateUrl: 'templates/tab-items.html',
            controller: 'ItemsCtrl'
          }
        }
      })
      .state('tab.cart-checkout', {
        url: '/cart/checkout',
        views: {
          'tab-cart': {
            templateUrl: 'templates/tab-checkout.html',
            controller: 'CheckoutCtrl'
          }
        }
      })
      .state('tab.items-detail', {
        url: '/items/:itemId',
        views: {
          'tab-items': {
            templateUrl: 'templates/tab-detail.html',
            controller: 'DetailCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/cart');

  });