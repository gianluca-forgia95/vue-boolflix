//Api Key: febf9a4fc7b46ba8b5e4681cf81209ce

var root = new Vue({
el: '#root',
 data: {
   movies: [],
   search: "",



    },
   mounted: function() {
     axios.get('https://api.themoviedb.org/3/search/movie' , {
       params: {
         api_key: "febf9a4fc7b46ba8b5e4681cf81209ce",
         query:"fight",
         language: "it-IT"
       }
     })
     .then( function (response) {
       this.movies = response.data.results;
       console.log(this.movies);
     });

   },

   methods: {
     searchFromApi: function() {
       axios.get('https://api.themoviedb.org/3/search/movie' , {
         params: {
           api_key: "febf9a4fc7b46ba8b5e4681cf81209ce",
           query:"fight",
           language: "it-IT"
         }
       })
       .then( (response) => {
         this.movies = response.data.results;
         console.log(this.movies);
       });
     }


   }

});
