var app = angular.module('PuppyClicker',[]);
app.controller('mainController',['$scope',function($scope){
  $scope.name='Ernesto';
  $scope.clicks=0;
  $scope.incrementar=function(){
    $scope.clicks++;
  }
}])
