//Api Key: febf9a4fc7b46ba8b5e4681cf81209ce
//Url Base: https://api.themoviedb.org/3/

var root = new Vue({
el: '#root',
 data: {
   movies: [],
   series: [],
   showPreview: false,
   search: "",
   apiKey: 'febf9a4fc7b46ba8b5e4681cf81209ce',
   urlSearch: 'https://api.themoviedb.org/3/search/',

    },

   methods: {
     searchFromApi: function() {
       //Chiamata per i Film
       axios.get( this.urlSearch + 'movie' , {
         params: {
           api_key: this.apiKey,
           query: this.search,
           language: "it-IT"
         }
       })
       .then( (response) => {
         this.movies = response.data.results;
         this.search = "";
         for ( var i = 0; i < this.movies.length; i++ ) {
            this.movies[i].vote_average = Math.ceil(this.movies[i].vote_average / 2);
         }
       });
       //Chiamata per le SerieTV
       axios.get( this.urlSearch + 'tv' , {
         params: {
           api_key: this.apiKey,
           query: this.search,
           language: "it-IT"
         }
       })
       .then( (response) => {
         this.series = response.data.results;
         this.search = "";
         for ( var i = 0; i < this.series.length; i++ ) {
            this.series[i].vote_average = Math.ceil(this.series[i].vote_average / 2);
         }
       });

     },


   }




});
