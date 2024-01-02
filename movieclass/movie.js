class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  const movies = [
    new Movie("Aram", "AVM", "PG"),
    new Movie("Label", "PVR", "PG-13"),
    new Movie("Leo", "RKS", "R"),
    new Movie("Japan", "gvm") 
  ];
  const pgMovies = Movie.getPG(movies);
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(pgMovies);