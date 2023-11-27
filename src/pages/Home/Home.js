import React, { Component } from "react";
import {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "../../config";
import HeroImage from "../../components/HeroImage/HeroImage";
import SearchBar from "../../components/SearchBar/SearchBar";
import FourColGrid from "../../components/FourColGrid/FourColGrid";
import MovieThumb from "../../components/MovieThumb/MovieThumb";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../../components/Spinner/Spinner";
import "./Home.css";

class Home extends Component {
  state = {
    currentPage: 0,
    heroImage: null,
    loading: false,
    movies: [],
    searchTerm: "",
    totalPages: 0,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  searchItems = (searchTerm) => {
    let endpoint = "";
    this.setState({
      loading: true,
      movies: [],
      searchTerm,
    });

    searchTerm === ""
      ? (endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      : (endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`);
    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    const { searchTerm, currentPage } = this.state;

    let endpoint = "";
    this.setState({ loading: true });

    searchTerm === ""
      ? (endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
          currentPage + 1
        }`)
      : (endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          currentPage + 1
        }`);
    this.fetchItems(endpoint);
  };

  fetchItems = async (endpoint) => {
    const { movies, heroImage, searchTerm } = this.state;
    const result = await (await fetch(endpoint)).json();
    try {
      this.setState(
        {
          currentPage: result.page,
          heroImage: heroImage || result.results[0],
          loading: false,
          movies: [...movies, ...result.results],
          totalPages: result.total_pages,
        },
        () => {
          if (searchTerm === "") {
            sessionStorage.setItem("HomeState", JSON.stringify(this.state));
          }
        }
      );
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  render() {
    const { movies, heroImage, loading, currentPage, totalPages, searchTerm } =
      this.state;

    return (
      <div className="adri-home">
        {heroImage ? (
          <>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
              title={heroImage.original_title}
              text={heroImage.overview}
            />
            <SearchBar callback={this.searchItems} />
          </>
        ) : null}
        <div className="adri-home-grid">
          <FourColGrid
            header={searchTerm ? "Search Result" : "Popular Movies"}
            loading={loading}
          >
            {movies.map((movie, i) => (
              <MovieThumb
                key={i}
                clickable={true}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : `${process.env.PUBLIC_URL}/images/no_image.jpg`
                }
                movieId={movie.id}
                movieName={movie.original_title}
              />
            ))}
          </FourColGrid>
          {loading ? <Spinner /> : null}
          {currentPage <= totalPages && !loading ? (
            movies.length < 4 || totalPages === 1 ? null : (
              <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
            )
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
