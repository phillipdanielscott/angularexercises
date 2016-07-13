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
