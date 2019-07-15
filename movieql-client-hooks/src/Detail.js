import React from "react"
import { Query } from "react-apollo"
import {  MOVIE_DETAILS } from "./queries"
import { useQuery } from "react-apollo-hooks";

const Detail = ({
    match: {
        params:{movieId}
    }
}) => {
    const {loading, error, data} = useQuery(MOVIE_DETAILS, {variables: {movieId}})
        if(loading) return "loading"
        if(error) return "error"
        return (
            <React.Fragment>
                {data.movie.title}
                {data.movie.medium_cover_image}
                {data.movie.rating}
                {data.movie.description_intro}
            </React.Fragment>
        )
}

export default Detail