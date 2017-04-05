angular.module('RouteControllers', [])
    .controller('HomeController', function($scope)
    {
        $scope.title = "Home";
    })

    .controller('SearchController', function($scope, read_json_Service)
    {
        var promise = read_json_Service.getDish();
        promise.then(function (data)
        {
            $scope.cooking_instructions = data.data;
            console.log($scope.cooking_instructions);
        });
    });