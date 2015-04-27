angular.module('MenuBoardApp', ['firebase'])
    .constant('FURL', 'https://menuboard.firebaseio.com/')
    .controller('MainController', ['$scope', '$firebase', 'FURL', function($scope, $firebase, FURL) {
        var ref = new Firebase(FURL);
        var appetizers = $firebase(ref.child('appetizers')).$asArray();
        $scope.appetizers = appetizers;
        var favorites = $firebase(ref.child('favorites')).$asArray();
        $scope.favorites = favorites;

        // Get today's date
        $scope.today = new Date();

        $scope.postAppetizer = function(appetizer) {
            appetizer.datetime = Firebase.ServerValue.TIMESTAMP;
            $scope.appetizers.$add(appetizer);
            $scope.appetizer = '';
        };

        $scope.updateAppetizer = function(appetizer) {
            $scope.selectedMessage.$save(appetizer);
        };
    }]);