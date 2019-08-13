const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    this.indexOfEditFormToShow = null;
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
            url: this.url
            }
        }).then(() => {
            this.getMovies();
        });
    };
    this.deleteMovie = function(movie){
        $http({
            method: 'DELETE',
            url: '/movies/' + movie._id
        }).then(() => {
            this.getMovies();
        });
    };
this.getMovies();
}]);
