/**
 * Created by csilbernagel on 9/23/2015.
 */
var app = angular.module('bmgApp', []);

app.controller('bmgAppCtrl', function($scope, $http)
{
    $scope.crews = null;
    $scope.characters = null;
    $scope.affiliations = null;
    $scope.charIds = [];

    //Load data for app from JSON files
    $http.get('appData/crews.json')
        .success(function (response) {$scope.crews = response.crews;});
    $http.get('appData/characters.json')
        .success(function (response) {$scope.characters = response.characters;});
    $http.get('appData/affiliations.json')
        .success(function (response) {$scope.affiliations = response.affiliations;});

    $scope.selectedCrew = null;
    $scope.charactersForCrew = null;
    $scope.selectedCharacter = null;
/*
    //watch selectedCrew for changes
    $scope.$watch(function(scope){ return scope.selectedCrew }, function()
        {

        }
    );
*/


/*
    function filterByProperty(array, prop, value){
        var filtered = [];
        for(var i = 0; i < array.length; i++){

            var obj = array[i];

            for(var key in obj){
                if(typeof(obj[key] == "object")){
                    var item = obj[key];
                    if(item[prop] == value){
                        filtered.push(item);
                    }
                }
            }

        }
        return filtered;
    }
*/
});