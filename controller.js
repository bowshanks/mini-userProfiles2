angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.pageNum = 1;

  $scope.getUsers = function() {
  	mainService.getUsers($scope.pageNum).then(function(response){
      $scope.totalPages = response.data.total_pages;
      $scope.users = response.data.data;
    })
  }

  $scope.getUsers();


  $scope.prev = function() {
    if($scope.pageNum > 1){
      $scope.getUsers(this.pageNum--);
    }
  }

  $scope.next = function() {
    if ($scope.pageNum < $scope.totalPages){
      $scope.getUsers(this.pageNum++);
    }

  }

});
