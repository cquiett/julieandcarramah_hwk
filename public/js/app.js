// console.log("connected to app.js");

const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    //
    // this.indexOfEditFormToShow = null;
    this.getMovies = function(){
        $http({
            method:"GET",
            url:"/movies"
        }).then((res) => {
            this.movies = res.data;
        });
    };
    this.createMovie = function(){
        $http({
            method:'POST',
            url:'/movies',
            data:{
            title: this.title,
            year: this.year,
            rating: this.rating
            }
        }).then(() => {
            this.getMovies();
        });
    };
    this.editMovie = function(movie) {
        console.log(movie);
      $http({
        method: 'PUT',
        url: '/movies/' + movie._id,
        data: {
          title: this.updatedTitle,
          year: this.updatedYear,
          rating: this.updatedRating
        }
      }).then(function() {
        controller.getMovies();
        controller.indexOfEditFormToShow = null
      })
    }
    this.deleteMovie = function(movie){
        $http({
          method:"PUT",
          url: '/movies/' + movie._id,
          data:{
            title: this.updatedTitle,
            year: this.updatedYear,
            rating: this.updatedRating
          }
        }).then(function(){
          controller.getMovies();
          controller.indexOfEditFormToShow = null;
        })
      }

    this.getMovies();
}]);
