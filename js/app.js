/**
 * Created by csilbernagel on 9/23/2015.
 */
var app = angular.module('bmgApp', []);

app.controller('bmgAppCtrl', function($scope, $http)
{
    var searchInput;

    //Load data for app from JSON files
    $http.get('appData/crews.json')
        .success(function (response) {$scope.crews = response.crews;});
    $http.get('appData/characters.json')
        .success(function (response) {$scope.characters = response.characters;});

    $scope.selectedCrew = null;

});