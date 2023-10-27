// RegistrationController.js
app.controller('RegistrationController', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};

    $scope.register = function(isValid) {
        if (isValid) {
            $http.post('/api/users/register', $scope.user)
                .then(function(response) {
                    // Manejar la respuesta exitosa
                })
                .catch(function(error) {
                    // Manejar errores
                });
        }
    };
}]);

// directives.js
app.directive('matchPassword', function() {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=matchPassword'
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.noMatch = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});