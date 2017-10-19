/**
 * Created by Monkey on 2017/10/18.
 */
app.controller("shopCarController",["shopCarService","$scope", function (shopCarService,$scope) {
    $scope.obj = "";
    shopCarService.ajax("get","http://localhost:8090/index.html?shopCar")
        .then(function (result) {
            $scope.obj = result.data;
        })
}])