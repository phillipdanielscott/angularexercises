module.exports=function(app){
  app.controller("BorrowedController",["$scope","BookService",function($scope,service){
    console.log("sdjfalsdjflakjsdfasdlfkja;lsdkfj")
    $scope.books = service.getBooks();

    }])
}
