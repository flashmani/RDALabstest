var app = angular.module('community', ['ui.bootstrap']);
app.controller('listdata', function($scope, $http){
    $scope.users = []; //declare an empty array
    $http.get("data/names.json").success(function(response){
        $scope.users = response;  //ajax request to fetch data into $scope.data


        //Filter by Alphabetical
        var str = "abcdefghijklmnopqrstuvwxyz";
        $scope.alphabet = str.toUpperCase().split("");
        $scope.activeLetter = '';
        $scope.activateLetter = function(letter) {
            $scope.activeLetter = letter
        }

        //Loadmore Pagination
        $scope.showSearch = false;
        $scope.loadIndex = 18;

        // function to increase visible items
        $scope.showMore = function() {
            // don't increment if at the end of the list
            if ($scope.loadIndex < $scope.users.length) {
                $scope.loadIndex += 9;
            }
        };



    });
});

