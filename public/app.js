(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
module.exports=function(app){
  app.controller("BorrowedController",["$scope","BookService",function($scope,service){
    console.log("sdjfalsdjflakjsdfasdlfkja;lsdkfj")
    $scope.books = service.getBooks();

    }])
}

},{}],3:[function(require,module,exports){
let app = angular.module ("LibraryBooks", ["ngRoute"])
app.config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/available", {
    templateUrl: "templates/availableBooks.html",
    controller: "AvailableController"
  })
  $routeProvider.when("/borrowed", {
    templateUrl:"templates/borrowed.html",
    controller: "BorrowedController"
  })
  $routeProvider.when("/", {
    redirectTo: "/available"
  })
}])

require("./controllers/AvailableController")(app)
require("./services/books")(app)
require("./controllers/BorrowedController")(app)

},{"./controllers/AvailableController":1,"./controllers/BorrowedController":2,"./services/books":4}],4:[function(require,module,exports){
module.exports=function(app){
  app.factory("BookService", ["$http", function($http){
  let allBooks = [];
  let borrowed = [];

    return {
      // Get books from the server
      getBooks: function() {
        console.log("Getting books!!!")
        $http({
          method: "GET",
          url: "http://10.1.10.215:7000/library/books",
        }).then(function success(response){
          console.log(response.data.books);
          angular.copy(response.data.books,allBooks);
        });

        return allBooks;
      },
      // Let the server know they took it
      borrowBook: function (target) {
          console.log("borrowing diz")
          $http({
            method: "POST",
            url: "http://10.1.10.215:7000/library/borrow/" + target.id
          }).then(function(response){
            console.log(response)
            angular.copy(response.data.books,allBooks);

          })

          // return borrow(book);
      },
    }; // end return
  }])
}

},{}]},{},[3])