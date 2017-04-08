angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {
        $scope.title = "Home";
    })

    .controller('HowToController', function($scope, read_json_Service) {
        var promise = read_json_Service.getDish();
        promise.then(function (data) {
            $scope.cookingInstructions = data.data;
            console.log($scope.cookingInstructions);
        });
    });
