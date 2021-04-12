//Api Key: febf9a4fc7b46ba8b5e4681cf81209ce

var root = new Vue({
el: '#root',
 data: {
   movies: [],
   search: "",

    },
   mounted: function() {

   },

   methods: {
     searchFromApi: function() {
       axios.get('https://api.themoviedb.org/3/search/movie' , {
         params: {
           api_key: "febf9a4fc7b46ba8b5e4681cf81209ce",
           query: this.search,
           language: "it-IT"
         }
       })
       .then( (response) => {
         this.movies = response.data.results;
         this.search = "";
         for (var i = 0; i < this.movies.length; i++) {
            this.movies[i].vote_average = Math.ceil(this.movies[i].vote_average / 2)
         }
       });


     },

   }




});
