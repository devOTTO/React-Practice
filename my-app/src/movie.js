import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import './movie.css'

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
            <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    { genres ? genres.map((genre, index) => <MovieGenre genre={genre} key={index} />): 'Error'}
                </div>
                <p className="Movie_Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} title={alt} alt={alt}/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

export default Movie