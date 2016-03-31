'use strict';

angular.module('meanAppApp')
  .controller('SettingsCtrl', function ($scope, $http, User, Auth) {
    $scope.errors = {};

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('/api/kits').success(function(awesomeKits) {
      $scope.awesomeKits = awesomeKits;
    });

    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  });
