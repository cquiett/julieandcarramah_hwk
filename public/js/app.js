const app = angular.module('MyApp', []);

    app.controller('MyController', ['$http', function($http) {
 // this.foo = 'bar';
 this.movie =[];
 this.movieTitle = '';
 this.baseURL = 'http://www.omdbapi.com/?';
 this.apikey = 'apikey=' + '87f395d5';
 this.query = 't=';
 this.searchURL = this.baseURL + this.apikey + '&' + this.query;
 console.log(this.searchURL);
 this.getMovies = () => {
   $http({
   method: 'GET',
   url: this.searchURL + this.movieTitle
 }).then((response) => {
   this.movie = response.data;
});
}
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
