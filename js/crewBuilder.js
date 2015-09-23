/**
 * Created by csilbernagel on 9/23/2015.
 */
app.controller('crewBuilderCtrl', function($scope, $http) {

    $scope.selectedCharacter;

    $scope.setSelectedCharacter = function(character)
    {
        $scope.selectedCharacter = character;
        alert(selectedCharacter.Name + " clicked");
    }

});
