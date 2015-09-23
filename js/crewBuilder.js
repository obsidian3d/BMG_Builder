/**
 * Created by csilbernagel on 9/23/2015.
 */
app.controller('crewBuilderCtrl', function($scope, $http) {

    $scope.selectedCrew;
    $scope.selectedCharacter;

    $scope.setSelectedCrew = function(crew)
    {
        $scope.setSelectedCrew = crew;
        alert(selectedCrew.Name + " clicked");
    }

    $scope.setSelectedCharacter = function(character)
    {
        $scope.selectedCharacter = character;
        alert(selectedCharacter.Name + " clicked");
    }

});
