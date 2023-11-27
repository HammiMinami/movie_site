import React, { Component } from "react";
import { API_KEY, API_URL } from "../../config";
import Actor from "../../components/Actor/Actor";
import Details from "../../components/Details/Details";
import FourColGrid from "../../components/FourColGrid/FourColGrid.js";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieInfoBar from "../../components/MovieInfoBar/MovieInfoBar";
import Navigation from "../../components/Navigation/Navigation";
import Spinner from "../../components/Spinner/Spinner";
import "./Movie.css";
import { isArrayEmpty } from "../../helpers";

class Movie extends Component {
  state = {
    actors: null,
    directors: [],
    loading: false,
    movie: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({ loading: true });
    let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = async (endpoint) => {
    const { movieId } = this.props.match.params;

    try {
      const result = await (await fetch(endpoint)).json();
      if (result.status_code) {
        this.setState({ loading: false });
      } else {
        this.setState({ movie: result }, async () => {
          const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
          const creditsResult = await (await fetch(creditsEndpoint)).json();
          const directors = creditsResult.crew.filter(
            (member) => member.job === "Director"
          );

          this.setState({
            actors: creditsResult.cast,
            directors,
            loading: false,
          });
        });
      }
    } catch (error) {
      console.log("There is an error: ", error);
    }
  };

  render() {
    const { movieName } = this.props.location;
    const { actors, directors, loading, movie } = this.state;

    return (
      <div className="adri-movie">
        {movie ? (
          <>
            <Navigation movie={movieName || movie.original_title} />
            <MovieInfo movie={movie} directors={directors} />
            <MovieInfoBar
              time={movie.runtime}
              budget={movie.budget}
              revenue={movie.revenue}
            />
          </>
        ) : null}
        <>{movie && <Details movie={movie} />}</>
        {!isArrayEmpty(actors) ? (
          <div className="adri-movie-grid">
            <FourColGrid header={"Actors"}>
              {actors.map((actor, i) => (
                <Actor key={i} actor={actor} />
              ))}
            </FourColGrid>
          </div>
        ) : null}
        {!actors && !loading ? <h1>No Results Found</h1> : null}
        {loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default Movie;
