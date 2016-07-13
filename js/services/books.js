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
