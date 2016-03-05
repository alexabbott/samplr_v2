'use strict';

angular.module('meanAppApp')
  .controller('MainCtrl', function ($scope, $http, socket, $sce, $location, Auth) {
    $scope.awesomeThings = [];
    $scope.awesomeKits = [];

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $http.get('/api/kits').success(function(awesomeKits) {
      $scope.awesomeKits = awesomeKits;
      socket.syncUpdates('kit', $scope.awesomeKits);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $scope.newThingUrl = thisSound;
      $scope.newThingAuthor = thisAuthor;
      $http.post('/api/things', { name: $scope.newThing, info: $scope.newThingInfo, url: $scope.newThingUrl, author: $scope.newThingAuthor });
      $scope.newThing = '';
      $scope.newThingInfo = '';
      $scope.newThingUrl = '';
      $scope.newThingAuthor = '';
      $scope.getCurrentUser = Auth.getCurrentUser;
    };

    $scope.addKit = function() {
      if($scope.newKit === '') {
        return;
      }
      $http.post('/api/kits', { name: $scope.newKit, sample1name: $scope.newKitSample1Name, sample1info: $scope.newKitSample1Info, sample1url: $scope.newKitSample1Url, sample2name: $scope.newKitSample2Name, sample2info: $scope.newKitSample2Info, sample2url: $scope.newKitSample2Url, sample3name: $scope.newKitSample3Name, sample3info: $scope.newKitSample3Info, sample3url: $scope.newKitSample3Url, sample4name: $scope.newKitSample4Name, sample4info: $scope.newKitSample4Info, sample4url: $scope.newKitSample4Url, sample5name: $scope.newKitSample5Name, sample5info: $scope.newKitSample5Info, sample5url: $scope.newKitSample5Url, sample6name: $scope.newKitSample6Name, sample6info: $scope.newKitSample6Info, sample6url: $scope.newKitSample6Url, sample7name: $scope.newKitSample7Name, sample7info: $scope.newKitSample7Info, sample7url: $scope.newKitSample7Url, sample8name: $scope.newKitSample8Name, sample8info: $scope.newKitSample8Info, sample8url: $scope.newKitSample8Url, sample9name: $scope.newKitSample9Name, sample9info: $scope.newKitSample9Info, sample9url: $scope.newKitSample9Url, sample10name: $scope.newKitSample10Name, sample10info: $scope.newKitSample10Info, sample10url: $scope.newKitSample10Url, sample11name: $scope.newKitSample11Name, sample11info: $scope.newKitSample11Info, sample11url: $scope.newKitSample11Url, sample12name: $scope.newKitSample12Name, sample12info: $scope.newKitSample12Info, sample12url: $scope.newKitSample12Url, sample13name: $scope.newKitSample13Name, sample13info: $scope.newKitSample13Info, sample13url: $scope.newKitSample13Url, sample14name: $scope.newKitSample14Name, sample14info: $scope.newKitSample14Info, sample14url: $scope.newKitSample14Url, sample15name: $scope.newKitSample15Name, sample15info: $scope.newKitSample15Info, sample15url: $scope.newKitSample15Url, sample16name: $scope.newKitSample16Name, sample16info: $scope.newKitSample16Info, sample16url: $scope.newKitSample16Url });
      $scope.newKitSample1Name = '';
      $scope.newKitSample1Info = '';
      $scope.newKitSample1Url = '';
      $scope.newKitSample2Name = '';
      $scope.newKitSample2Info = '';
      $scope.newKitSample2Url = '';
      $scope.newKitSample3Name = '';
      $scope.newKitSample3Info = '';
      $scope.newKitSample3Url = '';
      $scope.newKitSample4Name = '';
      $scope.newKitSample4Info = '';
      $scope.newKitSample4Url = '';
      $scope.newKitSample5Name = '';
      $scope.newKitSample5Info = '';
      $scope.newKitSample5Url = '';
      $scope.newKitSample6Name = '';
      $scope.newKitSample6Info = '';
      $scope.newKitSample6Url = '';
      $scope.newKitSample7Name = '';
      $scope.newKitSample7Info = '';
      $scope.newKitSample7Url = '';
      $scope.newKitSample8Name = '';
      $scope.newKitSample8Info = '';
      $scope.newKitSample8Url = '';
      $scope.newKitSample9Name = '';
      $scope.newKitSample9Info = '';
      $scope.newKitSample9Url = '';
      $scope.newKitSample10Name = '';
      $scope.newKitSample10Info = '';
      $scope.newKitSample10Url = '';
      $scope.newKitSample11Name = '';
      $scope.newKitSample11Info = '';
      $scope.newKitSample11Url = '';
      $scope.newKitSample12Name = '';
      $scope.newKitSample12Info = '';
      $scope.newKitSample12Url = '';
      $scope.newKitSample13Name = '';
      $scope.newKitSample13Info = '';
      $scope.newKitSample13Url = '';
      $scope.newKitSample14Name = '';
      $scope.newKitSample14Info = '';
      $scope.newKitSample14Url = '';
      $scope.newKitSample15Name = '';
      $scope.newKitSample15Info = '';
      $scope.newKitSample15Url = '';
      $scope.newKitSample16Name = '';
      $scope.newKitSample16Info = '';
      $scope.newKitSample16Url = '';

    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.deleteKit = function(kit) {
      $http.delete('/api/kits/' + kit._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
      socket.unsyncUpdates('kit');
    });

  });
