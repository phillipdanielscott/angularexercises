module.exports=function(app){
  app.controller("AvailableController",["$scope","BookService",function($scope,service){
    console.log("sdjfalsdjflakjsdfasdlfkja;lsdkfj")
    $scope.books = service.getBooks();
   $scope.borrow = function(target){
     console.log(target)
     service.borrowBook(target)
   }
    }])
}
