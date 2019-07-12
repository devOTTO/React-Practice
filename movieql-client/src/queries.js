import gql from "graphql-tag"

export const HOME_PAGE = gql`{
    movies(limit:50, rating: 7) {
        id
        title
        rating
        medium_cover_image
    }  
}`

//getMovieDetails() 이 형태는 오직 apollo를 쓰기 위한 형태!
export const MOVIE_DETAILS = gql`
query getMovieDetails($movieId: Int!) {
    movie(id: $movieId){
        medium_cover_image
        title
        rating
        description_intro
        language
        genres
    }
    suggestions(id: $movieId){
        medium_cover_image
        title
        rating
    }
}`
