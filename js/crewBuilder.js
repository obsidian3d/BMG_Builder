var app = angular.module('bmgApp', []);
app.controller('bmgAppCtrl', function($scope, $http)
{
    $scope.selectedCrew;
    $scope.selectedCharacter;

    $http.get('appData/crews.json')
        .success(function (response) {$scope.crews = response.crews;});
    $http.get('appData/characters.json')
        .success(function (response) {$scope.characters = response.characters;});
/*
    $scope.setSelectedCrew = function(crew)
    {
        $scope.setSelectedCrew = crew;
        alert(selectedCrew.Name + " clicked");
    }

    $scope.setSelectedCharacter = function(character)
    {
        $scope.selectedCharacter = character;
        alert(character.Name + " clicked");
    }
    */
});

app.controller('charactersCtrl', function($scope, $http) {

    $scope.selectedCharacter = "";

    $http.get('appData/characters.json')
        .success(function (response) {$scope.characters = response.characters;});

    $scope.setSelectedCharacter = function(character)
    {
        $scope.selectedCharacter = character;
    }

});