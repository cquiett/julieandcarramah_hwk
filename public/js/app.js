const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http) {
     // this.foo = 'bar';
     const controller = this;
     this.indexOfEditFormToShow = null;


//THIS API KEEPS SHOWING ERROR IN CONSOLE. It states that my API key is unauthorized when I requested it via email more than once.
     // this.movie =[];
     // this.movieTitle = '';
     // this.baseURL = 'http://www.omdbapi.com/?';
     // this.apikey = 'apikey=' + '475fe44b';
     // this.query = 't=';
     // this.searchURL = this.baseURL + this.apikey + '&' + this.query;
     // console.log(this.searchURL);
     //

     // this.getMovies = () => {
     //   $http({
     //   method: 'GET',
     //   url: this.searchURL + this.movieTitle
     //     }).then((response) => {
     //       console.log(response);
     //       // this.movie = response.data;
     //     }, function(error){
     //         console.log(error);
     //      });
     //  }

     //CREATING A FUNCTION TO GET ALL MOVIES
     this.getMovies = function(){
      $http({
          method:'GET',
          url: '/movies',
      }).then(function(response){
        console.log(response);
        controller.movies = response.data;
      }, function(error){
          console.log(error);
      });
  };

//CREATING A NEW MOVIE FORM
      this.createMovie = function(){
          $http({
              method:'POST',
              url:'/movies',
              data:{
                title: this.title,
              // year: this.year,
              // description: this.description,
                url2: this.url2
              }
            }).then(function(response){
              console.log(response);
            }, function(){
              console.log('error');
              controller.getBookmarks();
        });
      };

//CREATING A DELETE BUTTON
      this.deleteMovie = function(movie){
          $http({
              method: 'DELETE',
              url: '/movies/' + movie._id
          }).then(() => {
              controller.getMovies();
          });
      };

//Create Editing Movies
      this.editMovie = function(movie){
        $http({
          method:"PUT",
          url: '/movies/' + movie._id,
          data:{
            title: this.updatedTitle,
            url2: this.updatedUrl2
          }
        }).then(function(){
          controller.getMovies();
          controller.indexOfEditFormToShow = null;
        })
      }

    this.getMovies();
}]);
