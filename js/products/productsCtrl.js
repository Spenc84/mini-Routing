angular.module('miniRouting')
.controller('productsCtrl', ['$scope', 'productsService', '$stateParams', function($scope, productsService, $stateParams){
  switch($stateParams.id){
    case 'shoes':
      $scope.productData = productsService.shoeData;
      break;
    case 'socks':
      $scope.productData = productsService.sockData;
      break;
  }

}]);
