import React from "react";
import './MovieSearch.css'

function MovieSearch() {
    return (
        <div className="movieApp">
            <div className="movieAppNavigationBar">
                <div className="borderOnMyTestAppWriteUp">
                    <h1 className="myTestAppWriteUpOnNavBar">MyTestApp</h1>
                </div>
            </div>
            <div className="movieBackgroundImage">
                <div className="backGroundImageWriteUp">
                    <h1>Watch something incredible.</h1>
                </div>
            </div>
            <div>
                <h1 className="searchYourMovies">
                    Search
                </h1>               
            </div>
            
            <h1 className="moviecategoryName">
                Movie category Name
            </h1>
            
            <div className="movieCategoryNameFlex">
                <div className="movieBoxOnMovieCategory">
                    <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
            </div>
            <div className="movieCategoryNameFlex2">
                <div className="movieBoxOnMovieCategory">
                    <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
                <div className="movieBoxOnMovieCategory">
                <p className="movieName">$Movie Name</p>
                </div>
            </div>
        </div>
    );
}

export default MovieSearch;
  